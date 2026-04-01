interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="page-intro-panel">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 className="page-intro-title">{title}</h1>
        <p className="page-intro-description">{description}</p>
        <div className="page-intro-meta">
          <span>INTERFACE: SYSTEM OVERVIEW</span>
          <span>SURFACE: PUBLIC</span>
        </div>
      </div>
    </section>
  );
}
