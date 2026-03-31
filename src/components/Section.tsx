import { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`section-shell ${className}`.trim()}>
      <div className="section-heading">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
