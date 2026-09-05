import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) return notFound();

  const service = services[index];
  const next = services[(index + 1) % services.length];

  return (
    <section className="pt-40 pb-32">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <Link
          href="/services"
          className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
        >
          ← Back to Services
        </Link>

        <Reveal>
          <div className="mt-10 kicker">
            Service {service.number}
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-ink-muted max-w-xl leading-relaxed">
            {service.summary}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-16 max-w-3xl">
            <div
              className="absolute -inset-6 sm:-inset-10 bg-gradient-to-br from-aurora-violet/25 via-aurora-teal/10 to-aurora-rose/25 blur-3xl rounded-[3rem]"
              aria-hidden
            />
            <div className="relative rounded-2xl overflow-hidden border border-line shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={1400}
                height={1400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-20 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
            <div className="kicker">Process</div>
            <p className="text-ink-muted max-w-xl leading-relaxed">
              A project starts with a conversation about what you&apos;re
              trying to achieve, who it&apos;s for, and what you already have
              in place. From there we scope the work and outline what&apos;s
              involved before anything is built.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
            <div className="kicker">
              What we provide
            </div>
            <ul className="space-y-4">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="text-ink-muted leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-2 before:rounded-full before:bg-aurora-violet/70"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-line pt-12">
          <Button href="/contact">Start a project</Button>
          <Link
            href={`/services/${next.slug}`}
            className="group text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            Next service:{" "}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
              {next.title}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
