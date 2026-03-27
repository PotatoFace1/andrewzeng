"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const BASE_SLIDES = [
  { src: "/contactphoto.jpeg", alt: "Andrew — contact" },
  { src: "/andrewbanana.png", alt: "Andrew — banana" },
  { src: "/andrewgolf.png", alt: "Andrew — golf" },
  { src: "/andrewski.png", alt: "Andrew — ski" },
] as const;

/** [last, ...base, first] for infinite horizontal scroll */
const LOOP_SLIDES = [BASE_SLIDES[3], ...BASE_SLIDES, BASE_SLIDES[0]];

function logicalIndexFromScrollIndex(scrollIndex: number): number {
  if (scrollIndex <= 0 || scrollIndex === 4) return 3;
  if (scrollIndex >= 5) return 0;
  return scrollIndex - 1;
}

export default function ContactPhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [logicalIndex, setLogicalIndex] = useState(0);
  const logicalIndexRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    logicalIndexRef.current = logicalIndex;
  }, [logicalIndex]);

  const syncLoop = useCallback(() => {
    const el = trackRef.current;
    if (!el || tickingRef.current) return;

    const w = el.clientWidth;
    if (w === 0) return;

    const idx = Math.round(el.scrollLeft / w);

    if (idx === 0) {
      tickingRef.current = true;
      el.scrollTo({ left: 4 * w, behavior: "auto" });
      requestAnimationFrame(() => {
        tickingRef.current = false;
      });
      setLogicalIndex(3);
      return;
    }

    if (idx === 5) {
      tickingRef.current = true;
      el.scrollTo({ left: 1 * w, behavior: "auto" });
      requestAnimationFrame(() => {
        tickingRef.current = false;
      });
      setLogicalIndex(0);
      return;
    }

    setLogicalIndex(logicalIndexFromScrollIndex(idx));
  }, []);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const scrollToCurrentLogical = () => {
      const w = el.clientWidth;
      if (w <= 0) return;
      el.scrollTo({
        left: (logicalIndexRef.current + 1) * w,
        behavior: "auto",
      });
    };

    scrollToCurrentLogical();

    const ro = new ResizeObserver(() => {
      scrollToCurrentLogical();
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScrollEnd = () => syncLoop();
    el.addEventListener("scrollend", onScrollEnd);

    let t: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(() => syncLoop(), 80);
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("scrollend", onScrollEnd);
      el.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, [syncLoop]);

  const scrollToLogical = (i: number) => {
    logicalIndexRef.current = i;
    setLogicalIndex(i);
    const el = trackRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollTo({ left: (i + 1) * w, behavior: "smooth" });
  };

  return (
    <div className="space-y-4">
      <div className="relative w-full overflow-hidden rounded-xl border border-white/10">
        <div
          ref={trackRef}
          className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ touchAction: "pan-x" }}
        >
          {LOOP_SLIDES.map((slide, i) => (
            <div
              key={`${slide.src}-${i}`}
              className="relative aspect-square w-full min-w-full shrink-0 snap-center"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 1}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500 sm:text-left">
          Swipe or scroll sideways to browse
        </p>
        <div className="flex items-center gap-2">
          {BASE_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToLogical(i)}
              className={`h-2.5 rounded-full transition-all ${
                logicalIndex === i
                  ? "w-8 bg-blue-400"
                  : "w-2.5 bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Show photo ${i + 1}`}
              aria-current={logicalIndex === i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
