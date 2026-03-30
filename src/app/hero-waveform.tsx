"use client";

import { useEffect, useRef } from "react";

/** Subtle scope-style trace: two close tones + slow phase drift (IF / beat feel). */
export default function HeroWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    const draw = (now: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w < 2 || h < 2) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const mid = h * 0.5;
      const amp = h * 0.14;
      const t = reduceMotion ? 0 : now * 0.00012;
      const drift = reduceMotion ? 0 : now * 0.00008;

      ctx.clearRect(0, 0, w, h);

      // Center reference (scope graticule)
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, mid);
      ctx.lineTo(w, mid);
      ctx.stroke();

      // Beat: sum of two nearby spatial frequencies + slow phase
      const k1 = (2 * Math.PI * 2.4) / w;
      const k2 = (2 * Math.PI * 2.65) / w;
      const path = new Path2D();
      for (let x = 0; x <= w; x += 1.5) {
        const y =
          mid +
          amp *
            (0.55 * Math.sin(k1 * x + t + drift) +
              0.45 * Math.sin(k2 * x - t * 0.85 + drift * 1.1));
        if (x === 0) path.moveTo(x, y);
        else path.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(228, 228, 231, 0.36)";
      ctx.lineWidth = 1.2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke(path);

      if (!reduceMotion) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    ro.observe(canvas);
    resize();

    if (reduceMotion) {
      draw(0);
    } else {
      rafRef.current = requestAnimationFrame(draw);
    }

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="relative h-[200px] w-full rounded-md border border-zinc-800/60 bg-zinc-950/40 md:h-[260px] lg:h-[280px]"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        role="presentation"
      />
      <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] tracking-wide text-zinc-600/90">
        scope
      </span>
    </div>
  );
}
