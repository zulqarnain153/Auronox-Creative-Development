import AuroraGlow from "@/components/AuroraGlow";
import BuildIllustration from "@/components/BuildIllustration";
import Button from "@/components/Button";
import HeroIllustration from "@/components/HeroIllustration";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkRow from "@/components/WorkRow";
import { services } from "@/lib/services";
import { work } from "@/lib/work";
import { processSteps } from "@/lib/process";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        <AuroraGlow className="w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] min-w-[420px] min-h-[420px] -top-1/4 -right-1/5" />
        <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 w-full">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-lg">
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
                  <Button href="/contact">Start a project</Button>
                  <Button href="/work" variant="secondary">
                    See the work
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160} variant="scale">
              <div className="relative aspect-[3/2] rounded-2xl border border-line overflow-hidden bg-surface">
                <HeroIllustration />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-16">
            <div className="sm:w-48 shrink-0 kicker-lg pt-1">
              What we build
            </div>
            <h2 className="font-display text-3xl sm:text-4xl max-w-lg">
              Four ways we make a digital presence actually worth having.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80} variant={i % 2 === 0 ? "left" : "right"}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-line">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-16">
            <div className="sm:w-48 shrink-0 kicker-lg pt-1">How we work</div>
            <h2 className="font-display text-3xl sm:text-4xl max-w-lg">
              From first conversation to a site that&apos;s live.
            </h2>
          </div>
          <div className="relative grid sm:grid-cols-4 gap-10 sm:gap-6">
            <div className="hidden sm:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-aurora-violet via-aurora-teal to-aurora-rose opacity-25" />
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <div className="relative">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-void border-2 border-aurora-violet flex items-center justify-center font-display text-sm mb-5">
                    {step.number}
                  </div>
                  <h3 className="font-display text-lg">{step.title}</h3>
                  <p className="mt-2 text-ink-muted leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-line">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-16">
            <div className="sm:w-48 shrink-0 kicker-lg pt-1">
              Selected work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl max-w-lg">
              A few recent builds.
            </h2>
          </div>
          <div className="border-t border-line">
            {work.map((w, i) => (
              <Reveal key={w.slug} delay={i * 100}>
                <WorkRow item={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs pageKey="home" />

      <section className="py-16 sm:py-20 border-t border-line">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal variant="scale">
              <div className="relative aspect-[3/2] rounded-2xl border border-line overflow-hidden bg-surface">
                <BuildIllustration />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-3xl sm:text-[2.6rem] leading-tight">
                Let&apos;s build something worth showing off.
              </h2>
              <p className="mt-5 text-ink-muted leading-relaxed max-w-md">
                Whatever stage you&apos;re at — a rough idea or a fully
                scoped brief — we&apos;ll figure out the right starting
                point together and take it from there.
              </p>
              <Button href="/contact" className="mt-8">
                Start a project
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
