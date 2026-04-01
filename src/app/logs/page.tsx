import { PageIntro } from "../../components/PageIntro";
import { Section } from "../../components/Section";
import { logEntries, logThemes } from "../../components/siteData";

export default function LogsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Dev Logs"
        title="Build logs for systems work, not content marketing."
        description="The log stream exists to capture implementation movement, behavior under experimentation, and the decisions that show up while building difficult systems."
      />

      <Section
        eyebrow="Topics"
        title="What belongs in the logs."
        description="The goal is to leave behind records that are useful to future implementation work, debugging, and design correction."
      >
        <div className="timeline-grid">
          {logThemes.map((theme) => (
            <article key={theme.label} className="timeline-card">
              <h2 className="card-title">{theme.label}</h2>
              <p className="timeline-copy">{theme.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Current notes"
        title="The project set is still early, uneven, and intentionally independent."
        description="These are the operating assumptions behind the current work and the kind of details that should keep showing up in future entries."
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
