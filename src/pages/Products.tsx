"use client";

export default function Products() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold mb-4 text-violet-400">⚙️ Products</h1>
      <p className="text-gray-300 max-w-xl leading-relaxed">
        Explore the Nuis ecosystem components:
      </p>

      <ul className="mt-6 space-y-3 text-gray-200 text-lg">
        <li>🪶 <strong>NuisLang</strong> — The semantics-centric language.</li>
        <li>🧠 <strong>Vulpoya</strong> — Smart Language Server.</li>
        <li>🕊️ <strong>Yalivia</strong> — Semantic Runtime & System Library.</li>
      </ul>

      <p className="mt-8 text-violet-300 italic">
        “Everything is computation, but not everything is syntax.”
      </p>
    </section>
  );
}