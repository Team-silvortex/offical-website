"use client";

import { useEffect, useState } from "react";
import { githubOrg, projectGroups } from "./siteData";

interface RepoProgress {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  updatedAt: string;
  pushedAt: string | null;
  archived: boolean;
  fork: boolean;
  status: "active" | "monitoring" | "quiet" | "archived" | "unknown";
  trend: "rising" | "steady" | "cooling" | "no-signal";
  latestCommit: {
    message: string;
    url: string;
    date: string | null;
  } | null;
}

interface ProjectProgress {
  name: string;
  shortName: string | null;
  description: string;
  githubRepo: string;
  repo: RepoProgress | null;
}

interface ProgressGroup {
  name: string;
  projects: ProjectProgress[];
}

interface ProgressPayload {
  org: string;
  fetchedAt: string;
  groups: ProgressGroup[];
}

function formatDate(value: string | null) {
  if (!value) {
    return "No public activity yet";
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function getStatusLabel(status: RepoProgress["status"], hasRepo: boolean) {
  if (!hasRepo) {
    return "Not public yet";
  }

  switch (status) {
    case "active":
      return "Active";
    case "monitoring":
      return "Monitoring";
    case "quiet":
      return "Quiet";
    case "archived":
      return "Archived";
    default:
      return "Unknown";
  }
}

function getTrendLabel(trend: RepoProgress["trend"], hasRepo: boolean) {
  if (!hasRepo) {
    return "No public signal";
  }

  switch (trend) {
    case "rising":
      return "Momentum rising";
    case "steady":
      return "Steady activity";
    case "cooling":
      return "Cooling down";
    default:
      return "No signal";
  }
}

export function GitHubProgressBoard() {
  const [progress, setProgress] = useState<ProgressPayload | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadProgress() {
      try {
        const response = await fetch("/api/github-progress", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("failed");
        }

        const data = (await response.json()) as ProgressPayload;

        if (!cancelled) {
          setProgress(data);
        }
      } catch {
        if (!cancelled) {
          setError(true);
        }
      }
    }

    loadProgress();

    return () => {
      cancelled = true;
    };
  }, []);

  const groups = progress?.groups ?? projectGroups.map((group) => ({
    name: group.name,
    projects: group.projects.map((project) => ({
      name: project.name,
      shortName: project.shortName ?? null,
      description: project.description,
      githubRepo: project.githubRepo ?? project.name,
      repo: null,
    })),
  }));

  return (
    <div className="stack-md">
      <div className="progress-board-meta">
        <p>
          Live progress is pulled from{" "}
          <a
            href={`https://github.com/${githubOrg}`}
            target="_blank"
            rel="noreferrer"
          >
            github.com/{githubOrg}
          </a>
          .
        </p>
        <p>
          {progress
            ? `Last sync: ${formatDate(progress.fetchedAt)}`
            : error
              ? "Live sync unavailable right now. Showing project registry."
              : "Syncing latest public repository activity..."}
        </p>
      </div>

      {groups.map((group) => (
        <div key={group.name} className="stack-md">
          <div className="progress-group-header">
            <p className="card-label">Live GitHub Group</p>
            <h3 className="card-title">{group.name}</h3>
          </div>

          <div className="progress-grid">
            {group.projects.map((project) => {
              const status = getStatusLabel(project.repo?.status ?? "unknown", Boolean(project.repo));
              const trend = getTrendLabel(project.repo?.trend ?? "no-signal", Boolean(project.repo));

              return (
                <article key={project.name} className="progress-card">
                  <div className="progress-card-top">
                    <div>
                      <p className="card-label">
                        {project.shortName
                          ? `${project.shortName} · ${status}`
                          : status}
                      </p>
                      <h4 className="progress-card-title">{project.name}</h4>
                    </div>
                    <span
                      className={`progress-badge ${
                        project.repo ? `progress-${project.repo.status}` : "progress-missing"
                      }`}
                    >
                      {status}
                    </span>
                  </div>

                  <p className="card-copy">{project.description}</p>

                  <div className="progress-trend-row">
                    <div className="progress-trend-track" aria-hidden="true">
                      <span
                        className={`progress-trend-fill ${
                          project.repo ? `trend-${project.repo.trend}` : "trend-no-signal"
                        }`}
                      />
                    </div>
                    <span className="progress-trend-label">{trend}</span>
                  </div>

                  <div className="progress-stats">
                    <div className="progress-stat">
                      <span>Repo</span>
                      <strong>{project.repo ? project.repo.name : "Unpublished"}</strong>
                    </div>
                    <div className="progress-stat">
                      <span>Last push</span>
                      <strong>{formatDate(project.repo?.pushedAt ?? null)}</strong>
                    </div>
                    <div className="progress-stat">
                      <span>Language</span>
                      <strong>{project.repo?.language ?? "N/A"}</strong>
                    </div>
                    <div className="progress-stat">
                      <span>Open issues</span>
                      <strong>{project.repo?.openIssues ?? 0}</strong>
                    </div>
                  </div>

                  {project.repo?.latestCommit ? (
                    <div className="progress-commit">
                      <span>Latest commit</span>
                      <a
                        href={project.repo.latestCommit.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.repo.latestCommit.message}
                      </a>
                      <strong>{formatDate(project.repo.latestCommit.date)}</strong>
                    </div>
                  ) : null}

                  {project.repo ? (
                    <a
                      href={project.repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="progress-link"
                    >
                      View repository
                    </a>
                  ) : (
                    <p className="progress-placeholder">
                      No public repository was found for this project in the org yet.
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
