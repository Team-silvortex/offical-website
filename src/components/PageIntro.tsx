interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <p className="section-eyebrow">{eyebrow}</p>
      <h1 className="page-intro-title">{title}</h1>
      <p className="page-intro-description">{description}</p>
    </section>
  );
}
