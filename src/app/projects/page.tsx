"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "FMCW Radar",
    slug: "fmcw-radar",
    image: "/temp.png",
  },
  {
    title: "Custom BUS PCB",
    slug: "custom-bus-pcb",
    image: "/temp.png",
  },
  {
    title: "RC Car Platform",
    slug: "rc-car",
    image: "/temp.png",
  },
  {
    title: "Go-Kart",
    slug: "go-kart",
    image: "/temp.png",
  },
  {
    title: "Fuel Cell",
    slug: "fuel-cell",
    image: "/temp.png",
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
    <main className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black text-gray-300 px-6 py-24 md:py-32">
      <div className="sticky top-4 z-30 mb-10 md:mb-14">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0b1220]/80 backdrop-blur-md px-4 py-3 md:px-5">
        <Link
          href="/"
          className="btn-ghost inline-block px-5 py-2.5 rounded-xl font-semibold transition"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
          Projects.
        </h1>
        <div className="w-[126px] hidden md:block" aria-hidden="true" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover transition-transform duration-700"
                priority
              />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-gray-500">
              Scroll to explore
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{activeProject.title}</h2>
          </div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const isActive = activeSlug === project.slug;
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                data-project-card={project.slug}
                className={`group block rounded-2xl border px-6 py-8 md:px-8 md:py-10 transition-all duration-500 ${
                  isActive
                    ? "border-blue-400/70 bg-white/[0.06] shadow-lg shadow-blue-900/20"
                    : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]"
                }`}
              >
                <div className="lg:hidden relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition duration-500"
                  />
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                  Project {index + 1}
                </p>
                <h3
                  className={`text-2xl md:text-3xl font-semibold transition ${
                    isActive ? "text-white" : "text-gray-200 group-hover:text-white"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mt-4 text-gray-400">
                  Open project details and technical highlights.
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
