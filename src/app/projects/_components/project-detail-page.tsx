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
    <main className="site-shell text-zinc-200">
      <div className="mx-auto max-w-3xl">
        <section className="surface-card px-6 py-10 md:px-9 md:py-12">
          <p className="label mb-3">Project</p>
          <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            {overview}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <section className="rounded-md border border-zinc-800/90 bg-zinc-950/30 p-5">
              <h2 className="text-sm font-medium text-zinc-100">
                Technical highlights
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-zinc-400">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-md border border-zinc-800/90 bg-zinc-950/30 p-5">
              <h2 className="text-sm font-medium text-zinc-100">Tools</h2>
              <div className="mt-3 flex flex-wrap gap-2">
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
              className="btn-ghost inline-block px-5 py-2.5 text-sm"
            >
              ← Back to projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
