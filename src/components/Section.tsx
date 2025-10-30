interface SectionProps {
  title: string;
  content: string;
}

export const Section = ({ title, content }: SectionProps) => (
  <section className="max-w-3xl mx-auto px-6 py-12">
    <h2 className="text-2xl font-semibold mb-4 text-violet-400">{title}</h2>
    <p className="text-gray-300 leading-relaxed whitespace-pre-line">{content}</p>
  </section>
);