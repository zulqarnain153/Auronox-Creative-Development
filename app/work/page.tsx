import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkRow from "@/components/WorkRow";
import { work } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A selection of websites built by Auronox Creative, including Annax Auto Traders and Ember & Leaf.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-40 pb-32">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
              A few things we&apos;ve built.
            </h1>
          </Reveal>

          <div className="mt-20 border-t border-line">
            {work.map((w, i) => (
              <Reveal key={w.slug} delay={i * 100}>
                <WorkRow item={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs pageKey="work" />
    </>
  );
}
