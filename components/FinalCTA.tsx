import Button from "./Button";
import ContactIllustration from "./ContactIllustration";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[3/2] rounded-2xl border border-line overflow-hidden bg-surface">
              <ContactIllustration />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed max-w-md">
              Tell us what you&apos;re building and what you&apos;re hoping
              to achieve — we&apos;ll take it from there.
            </p>
            <Button href="/contact" className="mt-7">
              Start a Project
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
