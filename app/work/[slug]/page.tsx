import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
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
    <>
    <section className="pt-36 pb-16">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <Link
          href="/work"
          className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
        >
          ← Back to Work
        </Link>

        <Reveal>
          {project.projectType && (
            <div className="text-sm font-semibold text-aurora-violet mt-10">
              {project.projectType}
            </div>
          )}
          {project.industry && project.serviceType ? (
            <div className={`flex flex-wrap gap-3 ${project.projectType ? "mt-4" : "mt-10"}`}>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-line text-ink-muted">
                {project.industry}
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-line text-ink-muted">
                {project.serviceType}
              </span>
            </div>
          ) : (
            <div className={`kicker ${project.projectType ? "mt-4" : "mt-10"}`}>
              {project.category}
            </div>
          )}
          <h1 className="mt-5 font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
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
          {project.liveNote && (
            <p className="mt-3 text-sm text-ink-muted max-w-xl leading-relaxed">
              {project.liveNote}
            </p>
          )}
        </Reveal>

        {/* Hero visual: single legacy screenshot, only when there's no full gallery */}
        {!project.screenshots && (
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
        )}

        {project.overview && (
          <Reveal delay={140}>
            <div className="mt-16 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
              <div className="kicker">Project Overview</div>
              <p className="text-ink-muted max-w-xl leading-relaxed">
                {project.overview}
              </p>
            </div>
          </Reveal>
        )}

        {project.whatWeBuilt ? (
          <Reveal delay={170}>
            <div className="mt-12 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
              <div className="kicker">What We Built</div>
              <div className="space-y-5 max-w-xl">
                {project.whatWeBuilt.map((para, i) => (
                  <p key={i} className="text-ink-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        ) : (
          project.details && (
            <Reveal delay={170}>
              <div className="mt-12 grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16 border-t border-line pt-12">
                <div className="kicker">About the project</div>
                <p className="text-ink-muted max-w-xl leading-relaxed">
                  {project.details}
                </p>
              </div>
            </Reveal>
          )
        )}

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

        {project.featureCards ? (
          <Reveal delay={210}>
            <div className="mt-12 border-t border-line pt-12">
              <div className="kicker">Key Features</div>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.featureCards.map((feature) => (
                  <div
                    key={feature.number}
                    className="group rounded-2xl border border-line p-6 hover:border-ink-muted/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-sm font-semibold text-ink-muted">
                      {feature.number}
                    </div>
                    <h3 className="mt-3 font-display text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ) : (
          project.features &&
          project.features.length > 0 && (
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
          )
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <Reveal delay={230}>
            <div className="mt-12 border-t border-line pt-12">
              <div className="kicker">Screenshots</div>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {project.screenshots.map((shot) => (
                  <div
                    key={shot.src}
                    className="rounded-2xl border border-line overflow-hidden bg-void"
                  >
                    <div className="relative w-full h-64 bg-void flex items-center justify-center">
                      <Image
                        src={shot.src}
                        alt={shot.caption}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="px-5 py-4 text-sm text-ink-muted border-t border-line">
                      {shot.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>

    <FinalCTA />
    </>
  );
}
