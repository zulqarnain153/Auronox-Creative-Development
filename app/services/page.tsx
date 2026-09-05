import type { Metadata } from "next";
import FinalCTA from "@/components/FinalCTA";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, AI integration, UI/UX and ongoing support — four ways Auronox Creative helps businesses show up properly online.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-16">
        <div className="max-w-content mx-auto px-6 sm:px-8">
          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
              Four ways we help a business show up properly online.
            </h1>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
