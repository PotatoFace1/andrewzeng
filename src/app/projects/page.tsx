"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECT_PAGES, PROJECT_SLUG_ORDER } from "@/content/project-pages";

const projects = PROJECT_SLUG_ORDER.map((slug) => {
  const p = PROJECT_PAGES[slug];
  return {
    slug: p.slug,
    title: p.title,
    oneLiner: p.oneLiner,
    image: p.thumbnailSrc ?? "/temp.png",
    tags: p.tags.slice(0, 5),
  };
});

export default function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);

  const activeProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) ?? projects[0],
    [activeSlug]
  );

  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-project-card]")
    );
    if (!cards.length) return;

    let raf = 0;
    const updateActive = () => {
      const vh = window.innerHeight;
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - vh;
      const y = window.scrollY;
      const edgePx = 8;

      if (y <= edgePx && cards[0]) {
        const slug = cards[0].getAttribute("data-project-card");
        if (slug) setActiveSlug(slug);
        return;
      }
      if (maxScroll > 0 && y >= maxScroll - edgePx && cards[cards.length - 1]) {
        const slug = cards[cards.length - 1].getAttribute("data-project-card");
        if (slug) setActiveSlug(slug);
        return;
      }

      const centerY = vh / 2;
      let bestSlug: string | null = null;
      let bestDist = Infinity;

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= vh) continue;
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          const slug = card.getAttribute("data-project-card");
          if (slug) bestSlug = slug;
        }
      }

      if (bestSlug) setActiveSlug(bestSlug);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActive);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    updateActive();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <main className="projects-home">
      <header className="signal-header">
        <Link href="/" className="signal-wordmark">Andrew Zeng<span className="signal-dot" /></Link>
        <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/projects" aria-current="page">Projects</Link><a href="/Zeng%20Resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a><Link href="/contact">Contact</Link></nav>
      </header>
      <section className="projects-heading"><p>01 — Selected work</p><h1>Projects & experiments.</h1><span>Embedded systems, radar, and hardware in motion.</span></section>
      <div className="projects-layout">
        <aside className="projects-preview" aria-label="Project preview">
          <div className="projects-preview-image"><Image key={activeProject.slug} src={activeProject.image} alt={activeProject.title} fill sizes="45vw" className="object-cover" priority /></div>
          <div className="projects-preview-caption"><span>In focus</span><span>{String(projects.findIndex(p=>p.slug===activeSlug)+1).padStart(2,'0')} / 05</span></div>
          <h2>{activeProject.title}</h2>
          <p>{activeProject.oneLiner}</p>
          <Link className="projects-open" href={`/projects/${activeProject.slug}`}>Explore project ↗</Link>
          <svg viewBox="0 0 400 60" aria-hidden="true" className="projects-signal"><path d="M0 30 Q25 0 50 30 T100 30 T150 30 T200 30 T250 30 T300 30 T350 30 T400 30" fill="none" stroke="currentColor" /></svg>
        </aside>
        <div className="projects-index">
          {projects.map((project,index)=><Link key={project.slug} href={`/projects/${project.slug}`} data-project-card={project.slug} className={`projects-entry ${activeSlug===project.slug?'is-active':''}`} onMouseEnter={()=>setActiveSlug(project.slug)} onFocus={()=>setActiveSlug(project.slug)}>
            <span className="projects-number">{String(index+1).padStart(2,'0')}</span>
            <div className="projects-entry-content"><div className="projects-mobile-image"><Image src={project.image} alt="" fill sizes="90vw" className="object-cover" /></div><h2>{project.title}</h2><p>{project.oneLiner}</p><div className="projects-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><span className="projects-arrow">↗</span>
          </Link>)}
        </div>
      </div>
      <footer className="projects-closing"><Link href="/">← Back to the signal</Link><Link href="/contact">Get in touch ↗</Link></footer>
    </main>
  );
}
