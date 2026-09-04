import Link from "next/link";
import Reveal from "@/components/Reveal";
import { work } from "@/lib/work";

const workGradient: Record<string, string> = {
  annax: "bg-gradient-to-br from-[#0B1428] via-[#16233F] to-[#FF4612]",
  emberleaf: "bg-gradient-to-br from-[#241A14] via-[#4A2E1E] to-[#E2A15D]",
};

export default function WorkPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="text-sm font-semibold text-ink-muted mb-4">
            Work
          </div>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
            A few things we&apos;ve built.
          </h1>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 gap-8">
          {work.map((w, i) => (
            <Reveal key={w.slug} delay={i * 100}>
              <Link
                href={`/work/${w.slug}`}
                className="group block border border-line rounded-2xl overflow-hidden hover:border-ink-muted/40 transition-colors"
              >
                <div className={`h-56 ${workGradient[w.gradient]}`} />
                <div className="p-7">
                  <div className="text-xs font-semibold text-ink-muted">
                    {w.category}
                  </div>
                  <h2 className="mt-2 font-display text-xl">{w.title}</h2>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                    {w.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
