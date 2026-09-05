"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale" | "fade";

const hiddenClasses: Record<Variant, string> = {
  up: "opacity-0 translate-y-6",
  left: "opacity-0 -translate-x-6",
  right: "opacity-0 translate-x-6",
  scale: "opacity-0 scale-95",
  fade: "opacity-0",
};

const visibleClasses: Record<Variant, string> = {
  up: "opacity-100 translate-y-0",
  left: "opacity-100 translate-x-0",
  right: "opacity-100 translate-x-0",
  scale: "opacity-100 scale-100",
  fade: "opacity-100",
};

export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  variant?: Variant;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? visibleClasses[variant] : hiddenClasses[variant]
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
