"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-[#00A8F5] to-[#8B2FF0] flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(139,47,240,0.45)] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={22} className="text-white" strokeWidth={2.25} />
    </button>
  );
}
