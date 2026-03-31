import { PageIntro } from "../../components/PageIntro";
import { Section } from "../../components/Section";
import { collaborationTracks } from "../../components/siteData";

export default function JoinPage() {
  return (
    <>
      <PageIntro
        eyebrow="Join"
        title="We are looking for thoughtful collaborators, not just extra hands."
        description="If you enjoy foundational systems work and want to help shape the semantic era of programming, this is the kind of project where your perspective matters."
      />

      <Section
        eyebrow="Who fits"
        title="We collaborate best with people who like unfinished questions."
        description="The work benefits from taste, rigor, curiosity, and the patience to build toward long-term ideas."
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
            <p>
              We value systems thinking, careful experimentation, and people who can
              hold both vision and implementation detail in the same conversation.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
