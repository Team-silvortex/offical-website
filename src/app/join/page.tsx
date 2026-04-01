import { PageIntro } from "../../components/PageIntro";
import { Section } from "../../components/Section";
import {
  collaborationNotes,
  collaborationTracks,
  collaborationTraits,
} from "../../components/siteData";

export default function JoinPage() {
  return (
    <>
      <PageIntro
        eyebrow="Join"
        title="Best fit for people who want to work on hard systems problems directly."
        description="This is a better match for engineers and researchers who like observability, runtime behavior, orchestration, verification, and implementation-heavy experimentation."
      />

      <Section
        eyebrow="Who fits"
        title="The strongest collaborations usually start from technical depth."
        description="Silvortex is more likely to fit people who enjoy difficult system constraints, incomplete surfaces, and the discipline of making behavior understandable."
      >
        <div className="page-grid">
          <article className="page-card">
            <p className="card-label">Collaboration tracks</p>
            <ul className="list-clean">
              {collaborationTracks.map((track) => (
                <li key={track}>{track}</li>
              ))}
            </ul>
          </article>
          <article className="page-card">
            <p className="card-label">Working style</p>
            <ul className="list-clean">
              {collaborationNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="What helps"
        title="Good signals are usually concrete."
        description="The most useful collaborators tend to bring sharp technical instincts, clear curiosity, and a willingness to engage with systems as they actually behave."
      >
        <div className="card-grid">
          {collaborationTraits.map((trait) => (
            <article key={trait.label} className="info-card">
              <p className="card-label">Signal</p>
              <h2 className="card-title">{trait.label}</h2>
              <p className="card-copy">{trait.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
