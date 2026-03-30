"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "FMCW Radar",
    slug: "fmcw-radar",
    image: "/radar2.png",
  },
  {
    title: "Custom BUS PCB",
    slug: "custom-bus-pcb",
    image: "/pcb.png",
  },
  {
    title: "RC Car Platform",
    slug: "rc-car",
    image: "/temp.png",
  },
  {
    title: "Go-Kart",
    slug: "go-kart",
    image: "/go-kart.png",
  },
  {
    title: "Fuel Cell",
    slug: "fuel-cell",
    image: "/fuelcell.png",
  },
];

export default function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);

  const activeProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) ?? projects[0],
    [activeSlug]
  );

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-project-card]");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          const slug = visibleEntries[0].target.getAttribute("data-project-card");
          if (slug) setActiveSlug(slug);
        }
      },
      {
        threshold: [0.35, 0.6, 0.85],
        rootMargin: "-15% 0px -20% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell text-zinc-200">
      <div className="sticky top-4 z-30 mb-8 md:mb-10">
        <div className="surface-bar mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-5">
        <Link
          href="/"
          className="btn-ghost inline-block px-4 py-2 text-sm"
        >
          ← Home
        </Link>
        <h1 className="font-[var(--font-space-grotesk)] text-center text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
          Projects
        </h1>
        <div className="w-[72px] hidden md:block" aria-hidden="true" />
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-zinc-800/90">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover transition-transform duration-700"
                priority
              />
            </div>
            <p className="label mt-3">Preview</p>
            <h2 className="mt-1 font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-zinc-50">
              {activeProject.title}
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => {
            const isActive = activeSlug === project.slug;
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                data-project-card={project.slug}
                className={`group block rounded-md border px-5 py-5 transition-colors md:px-6 md:py-6 ${
                  isActive
                    ? "border-zinc-500/80 bg-zinc-900/50"
                    : "border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-600/80 hover:bg-zinc-900/35"
                }`}
              >
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-sm border border-zinc-800/80 lg:hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-300 group-hover:opacity-95"
                  />
                </div>

                <p className="label mb-2">
                  {String(index + 1).padStart(2, "0")} — Project
                </p>
                <h3
                  className={`font-[var(--font-space-grotesk)] text-xl font-semibold tracking-tight transition-colors md:text-2xl ${
                    isActive ? "text-zinc-50" : "text-zinc-200 group-hover:text-zinc-50"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Overview and technical notes
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
