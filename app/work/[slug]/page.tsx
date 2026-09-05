import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import BrowserFrame from "@/components/BrowserFrame";
import Reveal from "@/components/Reveal";
import { work, workGradientClasses } from "@/lib/work";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = work.find((w) => w.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = work.find((w) => w.slug === slug);
  if (!project) return notFound();

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
          <div className="mt-10 kicker">
            {project.category}
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
            {project.title}
          </h1>
          <p className="mt-6 text-lg text-ink-muted max-w-xl leading-relaxed">
            {project.summary}
          </p>
          {project.liveUrl && (
            <a
              href={`https://${project.liveUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aurora-teal hover:text-ink transition-colors"
            >
              Visit live site ↗
            </a>
          )}
        </Reveal>

        <Reveal delay={100}>
          {project.screenshot ? (
            <BrowserFrame
              src={project.screenshot}
              alt={project.title}
              url={project.liveUrl}
              href={project.liveUrl ? `https://${project.liveUrl}` : undefined}
              className="mt-16 max-w-2xl"
            />
          ) : (
            <div
              className={`mt-16 max-w-2xl h-56 sm:h-72 rounded-2xl ${workGradientClasses[project.gradient]}`}
            />
          )}
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-16 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
            <div className="kicker">
              About the project
            </div>
            <p className="text-ink-muted max-w-xl leading-relaxed">
              {project.details}
            </p>
          </div>
        </Reveal>

        {project.techStack && project.techStack.length > 0 && (
          <Reveal delay={190}>
            <div className="mt-12 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
              <div className="kicker">Built with</div>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-semibold px-4 py-2 rounded-full border border-line"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {project.features && project.features.length > 0 && (
          <Reveal delay={210}>
            <div className="mt-12 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
              <div className="kicker">Key features</div>
              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-ink-muted leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-2 before:rounded-full before:bg-aurora-violet/70"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        <div className="mt-20 border-t border-line pt-12">
          <Button href="/contact">Start a project</Button>
        </div>
      </div>
    </section>
  );
}
