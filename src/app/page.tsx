import Image from "next/image";
import Link from "next/link";
import { HOME_FEATURED_SLUGS, PROJECT_PAGES } from "@/content/project-pages";
import HeroWaveform from "./hero-waveform";

export default function Home() {
  return (
    <main className="site-shell text-neutral-200">
      <div className="mx-auto max-w-5xl">
        <header className="surface-card px-5 py-4 md:px-6 md:py-5">
          <nav className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <span className="font-[var(--font-space-grotesk)] text-sm font-medium tracking-tight text-neutral-100">
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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="min-w-0">
              <p className="label mb-4">
                Electrical Engineering × CS · Northeastern University
              </p>
              <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold leading-[1.15] tracking-tight text-neutral-50 md:text-5xl">
                Hi, I&apos;m Andrew.
              </h1>
              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-neutral-400">
                <p>
                  Building real-world systems in embedded, radar, and signal
                  processing. Focused on hardware–software integration and
                  real-time systems.
                </p>
                <p className="text-neutral-400">
                  intern @{" "}
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
                <Link href="/projects" className="btn-primary px-5 py-2.5">
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
            </div>

            <div className="min-w-0 lg:pl-2">
              <HeroWaveform />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <p className="label mb-6">Featured projects</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {HOME_FEATURED_SLUGS.map((slug) => {
              const p = PROJECT_PAGES[slug];
              const thumb = p.thumbnailSrc;
              const cardTags = p.tags.slice(0, 5);
              return (
                <Link
                  key={slug}
                  href={`/projects/${slug}`}
                  className="surface-card group flex flex-col overflow-hidden transition-colors hover:border-neutral-600/60"
                >
                  <div className="relative aspect-[4/3] w-full border-b border-neutral-800/80 bg-neutral-950">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt={p.title}
                        fill
                        className="object-cover opacity-95 transition group-hover:opacity-100"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-neutral-600">
                        Thumbnail
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-[var(--font-space-grotesk)] text-base font-semibold leading-snug tracking-tight text-neutral-100 group-hover:text-white">
                      {p.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-neutral-500">
                      {p.oneLiner}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cardTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-neutral-800/90 bg-neutral-950/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-neutral-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 text-xs font-medium text-neutral-400 group-hover:text-neutral-200">
                      View project →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="mt-6 text-center md:text-left">
            <Link href="/projects" className="nav-link text-sm text-neutral-500">
              All projects
            </Link>
          </p>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="surface-card p-6">
            <p className="label mb-3">Education</p>
            <p className="text-sm font-medium text-neutral-100">
              Northeastern University
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              BS Electrical Engineering, CS minor
            </p>
          </article>
          <article className="surface-card p-6">
            <p className="label mb-3">Focus</p>
            <p className="text-sm font-medium text-neutral-100">
              Hardware + software integration
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Concept through validation
            </p>
          </article>
          <article className="surface-card p-6">
            <p className="label mb-3">Location</p>
            <p className="text-sm font-medium text-neutral-100">
              Boston, MA / Pittsburgh, PA
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Open to roles &amp; collaborations
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
