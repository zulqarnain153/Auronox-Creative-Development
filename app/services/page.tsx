import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <Reveal>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
            Four ways we help a business show up properly online.
          </h1>
        </Reveal>

        <div className="mt-20 border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex flex-col sm:flex-row gap-4 sm:gap-16 py-10 border-b border-line relative"
              >
                <span className="absolute -left-6 sm:-left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-aurora-violet to-aurora-teal scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <div className="sm:w-16 shrink-0 text-ink-muted font-display text-lg">
                  {s.number}
                </div>
                <div className="sm:w-64 shrink-0 font-display text-2xl group-hover:translate-x-1.5 transition-transform duration-300">
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
  );
}
