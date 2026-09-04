import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";
import { work } from "@/lib/work";

const workGradient: Record<string, string> = {
  annax: "bg-gradient-to-br from-[#0B1428] via-[#16233F] to-[#FF4612]",
  emberleaf: "bg-gradient-to-br from-[#241A14] via-[#4A2E1E] to-[#E2A15D]",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
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
  const relatedWork = work.filter((w) => service.relatedWork.includes(w.slug));

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
          <div className="mt-10 text-sm font-semibold text-ink-muted">
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
          <div className="mt-20 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
            <div className="text-sm font-semibold text-ink-muted">Process</div>
            <p className="text-ink-muted max-w-xl leading-relaxed">
              A project starts with a conversation about what you&apos;re
              trying to achieve, who it&apos;s for, and what you already have
              in place. From there we scope the work and outline what&apos;s
              involved before anything is built.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
            <div className="text-sm font-semibold text-ink-muted">
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

        <Reveal delay={220}>
          <div className="mt-12 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
            <div className="text-sm font-semibold text-ink-muted">
              Relevant work
            </div>
            {relatedWork.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedWork.map((w) => (
                  <Link key={w.slug} href={`/work/${w.slug}`} className="group">
                    <div
                      className={`h-32 rounded-xl ${workGradient[w.gradient]}`}
                    />
                    <div className="mt-3 font-display text-base group-hover:text-aurora-violet transition-colors">
                      {w.title}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-ink-muted">
                We don&apos;t have a published case study for this service
                yet.{" "}
                <Link
                  href="/work"
                  className="text-ink hover:text-aurora-violet transition-colors"
                >
                  See selected work
                </Link>
                .
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-line pt-12">
          <Link
            href="/contact"
            className="inline-block bg-ink text-void px-7 py-3.5 rounded-full font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(140,124,255,0.25)] transition-all"
          >
            Start a project
          </Link>
          <Link
            href={`/services/${next.slug}`}
            className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            Next service: {next.title} →
          </Link>
        </div>
      </div>
    </section>
  );
}
