import { PageIntro } from "../../components/PageIntro";
import { Section } from "../../components/Section";
import { brandName } from "../../components/siteData";

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="An independent collection of system-oriented experimental projects."
        description={`${brandName} focuses on building observable, controllable, and programmable systems. The work spans network observability, distributed orchestration, programmable computation, and simulation systems.`}
      />

      <Section
        eyebrow="Position"
        title="The emphasis is on system behavior, not on presenting a productized framework."
        description="Projects are developed independently and may differ significantly in scope, maturity, and direction. That variance is part of the point."
      >
        <div className="page-grid">
          <article className="page-card">
            <p className="card-label">Structure</p>
            <h2 className="card-title">No enforced unification</h2>
            <p>
              This is not a product suite. Cross-project integration may happen in the
              future, but it is not a current requirement.
            </p>
          </article>
          <article className="page-card">
            <p className="card-label">Priority</p>
            <h2 className="card-title">Practical correctness over presentation</h2>
            <p>
              Some projects are already functional prototypes, some are early
              implementations, and some are still forming. The focus is on making the
              systems work.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
