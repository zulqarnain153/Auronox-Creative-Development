"use client";

import { useEffect, useRef } from "react";

export default function AuroraGlow({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canHover = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !canHover) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      if (ref.current) {
        ref.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[70px] opacity-50 transition-transform duration-700 ease-out ${className}`}
      style={{
        background:
          "radial-gradient(circle at 30% 30%, #8C7CFF 0%, transparent 55%), radial-gradient(circle at 65% 45%, #45D6C0 0%, transparent 55%), radial-gradient(circle at 45% 70%, #FF7FAE 0%, transparent 55%)",
      }}
    />
  );
}
