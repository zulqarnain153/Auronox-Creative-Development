import Button from "./Button";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl max-w-xl leading-tight">
            Have a project in mind?
          </h2>
          <p className="mt-5 text-ink-muted max-w-xl leading-relaxed">
            Tell us what you&apos;re building, who it&apos;s for, and what
            you&apos;re hoping to achieve — we&apos;ll take it from there.
          </p>
          <Button href="/contact" className="mt-8">
            Start a Project
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
