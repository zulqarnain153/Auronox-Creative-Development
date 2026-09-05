import type { Metadata } from "next";
import FinalCTA from "@/components/FinalCTA";
import Reveal from "@/components/Reveal";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Zulqarnain Tahir, founder of Auronox Creative — a studio built on turning ideas into real, working digital products.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-12">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <Reveal>
            <div className="kicker">About Auronox Creative</div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl leading-tight max-w-2xl">
              A studio built on implementation, not theory.
            </h1>
          </Reveal>

          <div className="mt-16 max-w-3xl border-t border-line">
            <Reveal variant="left">
              <div className="py-10 border-b border-line">
                <h2 className="font-display text-2xl">What we do</h2>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  We design and build custom websites and digital products,
                  and integrate practical AI and automation into how
                  businesses already work. That covers everything from a
                  full marketing site to more complex, functionality-driven
                  platforms — built around what a business actually needs,
                  not a fixed package.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80} variant="right">
              <div className="py-10 border-b border-line">
                <h2 className="font-display text-2xl">How we work</h2>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  Every project starts with the business behind it — its
                  audience, its goals, and how people will actually use
                  what we build. Design and development happen together
                  rather than in separate stages, so decisions about how
                  something looks and how it works are made with both in
                  mind from the start.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160} variant="left">
              <div className="py-10">
                <h2 className="font-display text-2xl">
                  Creative and technical, together
                </h2>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  Auronox Creative sits between a design studio and a
                  development team, rather than being purely one or the
                  other. The same team shaping how a project looks is also
                  responsible for how well it&apos;s built, so nothing gets
                  lost in translation between design and code.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-12 border-t border-line pt-12">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-10">
            <Reveal variant="left">
              <h2 className="font-display text-xl">Our Vision</h2>
              <p className="mt-3 text-ink-muted leading-relaxed">
                For independent businesses everywhere to have a digital
                presence as considered as the work they actually do.
              </p>
            </Reveal>
            <Reveal delay={80} variant="right">
              <h2 className="font-display text-xl">Our Mission</h2>
              <p className="mt-3 text-ink-muted leading-relaxed">
                To design and build websites and AI-powered tools around
                what a business actually needs, not a fixed package.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-12 border-t border-line pt-12">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <div className="kicker">
                The person behind Auronox Creative
              </div>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-tight">
                Zulqarnain Tahir
              </h2>
              <p className="mt-3 text-ink-muted font-semibold">
                Founder of Auronox Creative &amp; Creative Developer
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12 space-y-6 text-lg text-ink-muted leading-relaxed">
                <p>
                  I started Auronox Creative with a simple belief: businesses
                  shouldn&apos;t have to settle for being ordinary in a
                  digital world.
                </p>
                <p>
                  Auronox Creative exists to help businesses turn their
                  potential into real market value — whether they&apos;re
                  building their online presence, evolving an existing
                  business, or looking for better ways to grow in a
                  digital-first world.
                </p>
                <p>
                  My journey has always been driven by implementation rather
                  than learning for the sake of learning. I believe in
                  taking an idea, building it, testing it, and turning it
                  into something real.
                </p>
                <p>
                  The long-term vision for Auronox Creative is to work with
                  businesses internationally, helping them think digitally,
                  build with confidence, and turn ideas into meaningful
                  opportunities for growth.
                </p>
                <p className="text-ink">
                  An idea is only the beginning. What matters is what you
                  build from it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyChooseUs pageKey="about" />

      <FinalCTA />
    </>
  );
}
