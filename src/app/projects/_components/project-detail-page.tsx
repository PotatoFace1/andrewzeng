import Link from "next/link";

type ProjectDetailPageProps = {
  title: string;
  overview: string;
  highlights: string[];
  tools: string[];
};

export default function ProjectDetailPage({
  title,
  overview,
  highlights,
  tools,
}: ProjectDetailPageProps) {
  return (
    <main className="site-shell text-slate-100">
      <div className="max-w-5xl mx-auto">
        <section className="surface-card px-7 py-10 md:px-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-4">
            Project Detail
          </p>
          <h1 className="font-[var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
            {overview}
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-semibold text-white">Technical Highlights</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-300">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-semibold text-white">Tools Used</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="chip">
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-10">
            <Link
              href="/projects"
              className="btn-ghost inline-block px-6 py-3 rounded-xl font-semibold transition"
            >
              ← Back to Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
