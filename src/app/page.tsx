import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell text-zinc-200">
      <div className="mx-auto max-w-5xl">
        <header className="surface-card px-5 py-4 md:px-6 md:py-5">
          <nav className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <span className="font-[var(--font-space-grotesk)] text-sm font-medium tracking-tight text-zinc-100">
              Andrew Zeng
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
              <a
                href="/Zeng%20Co-op%20Resume%20(5).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Resume
              </a>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
              <a
                href="https://github.com/PotatoFace1"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                GitHub
              </a>
            </div>
          </nav>
        </header>

        <section className="surface-card mt-8 px-6 py-12 md:mt-10 md:px-10 md:py-16">
          <p className="label mb-4">
            Electrical Engineering × CS · Northeastern University
          </p>
          <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold leading-[1.15] tracking-tight text-zinc-50 md:text-5xl">
            Hi, I&apos;m Andrew.
          </h1>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-zinc-400">
            <p>
              Building real-world systems in embedded, radar, and signal
              processing. Focused on hardware–software integration and real-time
              systems.
            </p>
            <p className="text-zinc-400">
              Incoming intern @{" "}
              <a
                href="https://westinghousenuclear.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-prose"
              >
                Westinghouse Nuclear Co.
              </a>
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="btn-primary px-5 py-2.5"
            >
              View work
            </Link>
            <Link href="/contact" className="btn-ghost px-5 py-2.5">
              Contact
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <span className="chip">Embedded</span>
            <span className="chip">Signal processing</span>
            <span className="chip">PCB &amp; controls</span>
            <span className="chip">Prototyping</span>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="surface-card p-6">
            <p className="label mb-3">Education</p>
            <p className="text-sm font-medium text-zinc-100">
              Northeastern University
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              BS Electrical Engineering, CS minor
            </p>
          </article>
          <article className="surface-card p-6">
            <p className="label mb-3">Focus</p>
            <p className="text-sm font-medium text-zinc-100">
              Hardware + software integration
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Concept through validation
            </p>
          </article>
          <article className="surface-card p-6">
            <p className="label mb-3">Location</p>
            <p className="text-sm font-medium text-zinc-100">
              Boston, MA / Pittsburgh, PA
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Open to roles &amp; collaborations
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
