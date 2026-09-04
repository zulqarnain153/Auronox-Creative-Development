import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { work } from "@/lib/work";
import { services } from "@/lib/services";

const workGradient: Record<string, string> = {
  annax: "bg-gradient-to-br from-[#0B1428] via-[#16233F] to-[#FF4612]",
  emberleaf: "bg-gradient-to-br from-[#241A14] via-[#4A2E1E] to-[#E2A15D]",
};

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = work.find((w) => w.slug === slug);
  if (!project) return notFound();

  const relatedServices = services.filter((s) =>
    s.relatedWork.includes(project.slug)
  );

  return (
    <section className="pt-40 pb-32">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <Link
          href="/work"
          className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
        >
          ← Back to Work
        </Link>

        <Reveal>
          <div className="mt-10 text-sm font-semibold text-ink-muted">
            {project.category}
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
            {project.title}
          </h1>
          <p className="mt-6 text-lg text-ink-muted max-w-xl leading-relaxed">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div
            className={`mt-16 h-64 sm:h-80 rounded-2xl ${workGradient[project.gradient]}`}
          />
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-16 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
            <div className="text-sm font-semibold text-ink-muted">
              About the project
            </div>
            <p className="text-ink-muted max-w-xl leading-relaxed">
              {project.details}
            </p>
          </div>
        </Reveal>

        {relatedServices.length > 0 && (
          <Reveal delay={220}>
            <div className="mt-12 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
              <div className="text-sm font-semibold text-ink-muted">
                Related services
              </div>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="text-sm font-semibold px-4 py-2 rounded-full border border-line hover:border-ink-muted/50 transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-20 border-t border-line pt-12">
          <Link
            href="/contact"
            className="inline-block bg-ink text-void px-7 py-3.5 rounded-full font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(140,124,255,0.25)] transition-all"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
