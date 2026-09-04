"use client";

import { useEffect, useRef } from "react";

export default function AuroraBand({ className = "" }: { className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canHover = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !canHover) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className={`pointer-events-none absolute overflow-visible transition-transform duration-700 ease-out ${className}`}
    >
      <svg
        viewBox="0 0 1600 500"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="auroraA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8C7CFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8C7CFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="auroraB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#45D6C0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#45D6C0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="auroraC" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF7FAE" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#FF7FAE" stopOpacity="0" />
          </linearGradient>
          <filter id="auroraBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="42" />
          </filter>
        </defs>
        <g filter="url(#auroraBlur)">
          <path
            className="aurora-ribbon-a"
            d="M -100 180 C 200 60, 500 260, 800 140 S 1400 40, 1700 160 L 1700 0 L -100 0 Z"
            fill="url(#auroraA)"
          />
          <path
            className="aurora-ribbon-b"
            d="M -100 260 C 250 380, 550 120, 850 260 S 1450 340, 1700 220 L 1700 0 L -100 0 Z"
            fill="url(#auroraB)"
          />
          <path
            className="aurora-ribbon-c"
            d="M -100 220 C 300 140, 600 320, 900 200 S 1500 100, 1700 240 L 1700 0 L -100 0 Z"
            fill="url(#auroraC)"
          />
        </g>
      </svg>
    </div>
  );
}
