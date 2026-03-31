import { PageIntro } from "../../components/PageIntro";
import { Section } from "../../components/Section";
import { logEntries } from "../../components/siteData";

export default function LogsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Dev Logs"
        title="Research notes, build journals, and conceptual checkpoints."
        description="We use dev logs to document how the ecosystem is evolving: not just what changed, but what we learned and what remains unresolved."
      />

      <Section
        eyebrow="Topics"
        title="What shows up in the log stream."
        description="The logs are meant to make the work inspectable from the inside."
      >
        <div className="timeline-grid">
          {logEntries.map((entry) => (
            <article key={entry.title} className="timeline-card">
              <h2 className="card-title">{entry.title}</h2>
              <p className="timeline-copy">{entry.summary}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
