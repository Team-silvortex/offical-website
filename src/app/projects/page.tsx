import { PageIntro } from "../../components/PageIntro";
import { Section } from "../../components/Section";
import { projectGroups } from "../../components/siteData";

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Independent projects with different scopes, constraints, and maturity."
        description="Silvortex is not a unified product suite. These projects explore adjacent areas of systems work and evolve independently."
      />

      {projectGroups.map((group) => (
        <Section
          key={group.name}
          eyebrow="Project group"
          title={group.name}
          description={group.description}
        >
          <div className="card-grid">
            {group.projects.map((project) => (
              <article key={project.name} className="info-card">
                <p className="card-label">
                  {project.shortName
                    ? `${project.shortName} · independent project`
                    : "Independent project"}
                </p>
                <h2 className="card-title">{project.name}</h2>
                <p className="card-copy">{project.description}</p>
              </article>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
