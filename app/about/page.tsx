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
          <div className="max-w-2xl">
            <Reveal>
              <div className="kicker">
                The person behind Auronox Creative
              </div>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl leading-tight">
                Zulqarnain Tahir
              </h1>
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
