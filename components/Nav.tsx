"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { site } from "@/lib/site";

type Indicator = { left: number; width: number };

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState<Indicator | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const measure = (href: string) => {
    const el = linkRefs.current[href];
    const container = navRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setIndicator({ left: elRect.left - containerRect.left, width: elRect.width });
  };

  const resetToActive = () => {
    const active = site.nav.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    );
    if (active) {
      measure(active.href);
    } else {
      setIndicator(null);
    }
  };

  // Re-measure the active link whenever the route changes, and once on mount.
  useEffect(() => {
    resetToActive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/80 backdrop-blur-md border-b border-line py-3"
          : "py-5"
      }`}
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={140}
            height={98}
            priority
            className="h-12 w-auto object-contain"
          />
          <Image
            src="/logo-wordmark-light.png"
            alt="Auronox Creative"
            width={470}
            height={307}
            priority
            className="hidden sm:block h-14 w-auto object-contain"
          />
        </Link>

        <div
          ref={navRef}
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-9"
          onMouseLeave={resetToActive}
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => {
                linkRefs.current[item.href] = el;
              }}
              onMouseEnter={() => measure(item.href)}
              onFocus={() => measure(item.href)}
              className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors pb-1"
            >
              {item.label}
            </Link>
          ))}
          {indicator && (
            <span
              className="absolute bottom-0 h-[2px] rounded-full bg-gradient-to-r from-[#00A8F5] to-[#8B2FF0] transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          )}
        </div>

        <div className="hidden md:block shrink-0">
          <Button href="/contact">Start a project</Button>
        </div>

        <button
          className="md:hidden text-sm font-semibold"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden px-6 pt-6 pb-6 flex flex-col gap-4 bg-void/95 backdrop-blur-md border-b border-line">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-ink-muted hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-2 w-fit">
            Start a project
          </Button>
        </nav>
      )}
    </header>
  );
}
