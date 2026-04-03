import { NextResponse } from "next/server";
import { githubOrg, projectGroups } from "../../../components/siteData";

const GITHUB_API_URL = `https://api.github.com/orgs/${githubOrg}/repos?per_page=100&type=public&sort=updated`;

interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: string | null;
  updated_at: string;
  archived: boolean;
  fork: boolean;
}

interface GitHubCommitResponse {
  html_url: string;
  commit: {
    message: string;
    author: {
      date: string;
    } | null;
  };
}

function getProjectStatus(updatedAt: string | null, archived: boolean) {
  if (archived) {
    return "archived";
  }

  if (!updatedAt) {
    return "unknown";
  }

  const days = Math.floor(
    (Date.now() - new Date(updatedAt).getTime()) / (1000 * 60 * 60 * 24),
  );

  if (days <= 30) {
    return "active";
  }

  if (days <= 120) {
    return "monitoring";
  }

  return "quiet";
}

function getProjectTrend(updatedAt: string | null) {
  if (!updatedAt) {
    return "no-signal";
  }

  const days = Math.floor(
    (Date.now() - new Date(updatedAt).getTime()) / (1000 * 60 * 60 * 24),
  );

  if (days <= 14) {
    return "rising";
  }

  if (days <= 60) {
    return "steady";
  }

  return "cooling";
}

async function fetchLatestCommit(
  repoName: string,
  headers: HeadersInit,
) {
  const response = await fetch(
    `https://api.github.com/repos/${githubOrg}/${repoName}/commits?per_page=1`,
    {
      headers,
      next: { revalidate: 1800 },
    },
  );

  if (!response.ok) {
    return null;
  }

  const commits = (await response.json()) as GitHubCommitResponse[];
  const latestCommit = commits[0];

  if (!latestCommit) {
    return null;
  }

  return {
    message: latestCommit.commit.message.split("\n")[0],
    url: latestCommit.html_url,
    date: latestCommit.commit.author?.date ?? null,
  };
}

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(GITHUB_API_URL, {
      headers,
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub progress" },
        { status: response.status },
      );
    }

    const repos = (await response.json()) as GitHubRepo[];
    const trackedRepoNames = new Set(
      projectGroups.flatMap((group) =>
        group.projects.map((project) => (project.githubRepo ?? project.name).toLowerCase()),
      ),
    );
    const trackedRepos = repos.filter((repo) =>
      trackedRepoNames.has(repo.name.toLowerCase()),
    );
    const latestCommits = await Promise.all(
      trackedRepos.map(async (repo) => [
        repo.name.toLowerCase(),
        await fetchLatestCommit(repo.name, headers),
      ] as const),
    );
    const latestCommitMap = Object.fromEntries(latestCommits);
    const repoMap = Object.fromEntries(
      trackedRepos.map((repo) => [
        repo.name.toLowerCase(),
        {
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          openIssues: repo.open_issues_count,
          updatedAt: repo.updated_at,
          pushedAt: repo.pushed_at,
          archived: repo.archived,
          fork: repo.fork,
          status: getProjectStatus(repo.pushed_at ?? repo.updated_at, repo.archived),
          trend: getProjectTrend(repo.pushed_at ?? repo.updated_at),
          latestCommit: latestCommitMap[repo.name.toLowerCase()] ?? null,
        },
      ]),
    );

    const groups = projectGroups.map((group) => ({
      name: group.name,
      projects: group.projects.map((project) => {
        const repoName = (project.githubRepo ?? project.name).toLowerCase();
        const repo = repoMap[repoName];

        return {
          name: project.name,
          shortName: project.shortName ?? null,
          description: project.description,
          githubRepo: project.githubRepo ?? project.name,
          repo: repo ?? null,
        };
      }),
    }));

    return NextResponse.json({
      org: githubOrg,
      fetchedAt: new Date().toISOString(),
      groups,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to load GitHub progress right now" },
      { status: 500 },
    );
  }
}
