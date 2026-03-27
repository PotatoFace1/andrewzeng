import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell text-slate-100">
      <div className="max-w-6xl mx-auto">
        <header className="surface-card px-6 py-5 md:px-8 md:py-6">
          <nav className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-sm font-semibold uppercase tracking-[0.16em]">
            <span className="text-slate-300/90 font-[var(--font-space-grotesk)]">
              Andrew Zeng
            </span>
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
              <Link
                href="/projects"
                className="nav-link text-slate-300 hover:text-white transition"
              >
                Projects
              </Link>
              <a
                href="/Zeng%20Co-op%20Resume%20(5).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-slate-300 hover:text-white transition"
              >
                Resume
              </a>
              <Link
                href="/contact"
                className="nav-link text-slate-300 hover:text-white transition"
              >
                Contact
              </Link>
              <a
                href="https://github.com/PotatoFace1"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-slate-300 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </nav>
        </header>

        <section className="mt-10 md:mt-14 surface-card px-8 py-14 md:px-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-5">
            Electrical Engineering x CS @Northeastern University
          </p>
          <h1 className="font-[var(--font-space-grotesk)] text-4xl md:text-6xl font-semibold leading-tight text-white">
            Hi, I'm Andrew.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
          Building real-world systems in embedded, radar, and signal processing.
          Focused on hardware-software integration and real-time systems. 
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="btn-primary px-7 py-3 rounded-xl font-semibold transition"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="btn-ghost px-7 py-3 rounded-xl font-semibold transition"
            >
              Let&apos;s Connect
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="chip">Embedded Systems</span>
            <span className="chip">Signal Processing</span>
            <span className="chip">PCB + Controls</span>
            <span className="chip">Full-Stack Prototyping</span>
          </div>
        </section>

        <section className="mt-8 grid md:grid-cols-3 gap-4 text-slate-300">
          <article className="surface-card p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Education
            </p>
            <p className="mt-3 font-medium">Northeastern University</p>
            <p className="mt-1 text-slate-400 text-sm">
              BS Electrical Engineering, CS Minor
            </p>
          </article>
          <article className="surface-card p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Focus
            </p>
            <p className="mt-3 font-medium">Hardware + software integration</p>
            <p className="mt-1 text-slate-400 text-sm">
              End-to-end engineering from concept to validation
            </p>
          </article>
          <article className="surface-card p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Location
            </p>
            <p className="mt-3 font-medium">Boston, MA / Pittsburgh, PA</p>
            <p className="mt-1 text-slate-400 text-sm">
              Open to project and co-op opportunities
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
