import { Hero } from "../components/Hero";
import { GitHubProgressBoard } from "../components/GitHubProgressBoard";
import { Section } from "../components/Section";
import { logEntries, projectGroups } from "../components/siteData";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        eyebrow="What this is"
        title="A project collection, not a unified product suite."
        description="Silvortex is a set of system-oriented experiments built around practical observability, orchestration, computation, and simulation problems. The projects share adjacent interests, but they are developed independently."
      >
        <div className="metric-grid">
          <article className="metric-card">
            <p className="metric-label">Focus</p>
            <h3 className="metric-value">Working systems</h3>
            <p className="metric-copy">
              Practical correctness and system behavior are prioritized over presentation.
            </p>
          </article>
          <article className="metric-card">
            <p className="metric-label">Maturity</p>
            <h3 className="metric-value">Mixed stages</h3>
            <p className="metric-copy">
              Some projects are functional prototypes, while others are still forming.
            </p>
          </article>
          <article className="metric-card">
            <p className="metric-label">Structure</p>
            <h3 className="metric-value">No forced unification</h3>
            <p className="metric-copy">
              Cross-project integration may happen later, but it is not the current goal.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Project areas"
        title="The current work spans three system directions."
        description="Each group explores a different part of the broader systems space, from network behavior to programmable runtimes and simulation infrastructure."
      >
        <div className="card-grid">
          {projectGroups.map((group) => (
            <article key={group.name} className="info-card">
              <p className="card-label">Group</p>
              <h3 className="card-title">{group.name}</h3>
              <p className="card-copy">
                {group.description} Currently includes {group.projects.length} project
                {group.projects.length > 1 ? "s" : ""}.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Notes"
        title="The projects move at their own speed and under their own constraints."
        description="That independence is intentional. The goal right now is to make useful systems work, not to manufacture a single framework story around them."
      >
        <div className="timeline-grid">
          {logEntries.map((entry) => (
            <article key={entry.title} className="timeline-card">
              <h3 className="card-title">{entry.title}</h3>
              <p className="timeline-copy">{entry.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Live progress"
        title="Public repository activity can be read directly from GitHub."
        description="This board maps your project registry against the Team-silvortex organization so the site can reflect what is public, recently updated, or still not visible yet."
      >
        <GitHubProgressBoard />
      </Section>

      <Section
        eyebrow="Invitation"
        title="If you care about deep systems work, we should talk."
        description="Silvortex is most aligned with people who like infrastructure, behavior, debugging, runtime control, and hard-to-fake technical substance."
      >
        <div className="page-card">
          <p>
            We are open to collaboration across network systems, orchestration,
            simulation, languages, runtimes, and verification. The emphasis is on
            building real systems that expose meaningful behavior, not on forcing a
            shared product narrative too early.
          </p>
        </div>
      </Section>
    </>
  );
}
