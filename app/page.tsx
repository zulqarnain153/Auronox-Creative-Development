import Link from "next/link";
import AuroraGlow from "@/components/AuroraGlow";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";
import { work } from "@/lib/work";

const workGradient: Record<string, string> = {
  annax: "bg-gradient-to-br from-[#0B1428] via-[#16233F] to-[#FF4612]",
  emberleaf: "bg-gradient-to-br from-[#241A14] via-[#4A2E1E] to-[#E2A15D]",
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        <AuroraGlow className="w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] min-w-[420px] min-h-[420px] -top-1/4 -right-1/5" />
        <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-[4.6rem] leading-[1.05] tracking-tight">
                Web and AI development for businesses that don&apos;t want to
                look like everyone else.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 text-lg text-ink-muted leading-relaxed max-w-md">
                Auronox Creative is a design and technology studio building
                considered digital experiences at the intersection of design
                and artificial intelligence.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex items-center gap-7 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-block bg-ink text-void px-7 py-3.5 rounded-full font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(140,124,255,0.25)] transition-all"
                >
                  Start a project
                </Link>
                <Link
                  href="/work"
                  className="text-sm font-semibold text-ink-muted border-b border-line pb-1 hover:text-ink hover:border-ink-muted transition-colors"
                >
                  See the work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-16">
            <div className="sm:w-48 shrink-0 text-sm font-semibold text-ink-muted pt-1">
              What we build
            </div>
            <h2 className="font-display text-3xl sm:text-4xl max-w-lg">
              Four ways we make a digital presence actually worth having.
            </h2>
          </div>
          <div className="border-t border-line">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col sm:flex-row gap-3 sm:gap-16 py-8 border-b border-line relative"
                >
                  <span className="absolute -left-6 sm:-left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-aurora-violet to-aurora-teal scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                  <div className="sm:w-64 shrink-0 font-display text-xl group-hover:translate-x-1.5 transition-transform duration-300">
                    {s.title}
                  </div>
                  <p className="text-ink-muted max-w-lg leading-relaxed">
                    {s.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 border-t border-line">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-16">
            <div className="sm:w-48 shrink-0 text-sm font-semibold text-ink-muted pt-1">
              Selected work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl max-w-lg">
              A few recent builds.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-7">
            {work.map((w, i) => (
              <Reveal key={w.slug} delay={i * 100}>
                <Link
                  href={`/work/${w.slug}`}
                  className="group block border border-line rounded-2xl overflow-hidden hover:border-ink-muted/40 transition-colors"
                >
                  <div className={`h-48 ${workGradient[w.gradient]}`} />
                  <div className="p-6">
                    <div className="text-xs font-semibold text-ink-muted">
                      {w.category}
                    </div>
                    <h3 className="mt-2 font-display text-lg">{w.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                      {w.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 border-t border-line">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-[2.6rem] max-w-xl leading-tight">
              Let&apos;s build something worth showing off.
            </h2>
            <Link
              href="/contact"
              className="mt-10 inline-block bg-ink text-void px-7 py-3.5 rounded-full font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(140,124,255,0.25)] transition-all"
            >
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
