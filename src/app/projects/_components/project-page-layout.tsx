import Link from "next/link";
import type { ProjectPageContent } from "@/content/project-pages";
import MediaPlaceholder from "./media-placeholder";

export default function ProjectPageLayout({ project }: { project: ProjectPageContent }) {
  return (
    <main className="site-shell text-neutral-200">
      <div className="mx-auto max-w-3xl">
        <article className="surface-card overflow-hidden">
          <div className="border-b border-neutral-800/80 p-5 md:p-6">
            <MediaPlaceholder
              src={project.thumbnailSrc}
              alt={`${project.title} media`}
              variant="hero"
            />
          </div>

          <div className="px-6 py-9 md:px-9 md:py-11">
            <p className="label mb-3">Project</p>
            <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-neutral-50 md:text-4xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300">
              {project.oneLiner}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              <span className="text-neutral-600">Timeline · </span>
              {project.date}
            </p>

            {project.github ? (
              <p className="mt-2 text-sm">
                <a
                  href={project.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-prose text-[15px]"
                >
                  {project.github.label}
                </a>
              </p>
            ) : (
              <p className="mt-2 text-sm text-neutral-600">GitHub: N/A</p>
            )}

            <div className="mt-12 space-y-12">
              {project.sections.map((section) => {
                const paragraphs = section.body
                  .split(/\n\n+/)
                  .map((p) => p.trim())
                  .filter(Boolean);
                return (
                  <section key={section.heading}>
                    <h2 className="font-[var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-neutral-100 md:text-xl">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {paragraphs.map((p, i) => (
                        <p
                          key={`${section.heading}-${i}`}
                          className="text-[15px] leading-relaxed text-neutral-400"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>

            <div className="mt-12 border-t border-neutral-800/80 pt-8">
              <Link href="/projects" className="btn-ghost inline-block px-5 py-2.5 text-sm">
                ← Back to projects
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
