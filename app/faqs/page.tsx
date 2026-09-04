import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "What types of websites do you build?",
    a: "We design and build custom websites end to end — from marketing and brochure sites to more complex, multi-page platforms with real functionality, like inventory browsing, booking flows or dashboards. Every project starts from your business and audience rather than a fixed template.",
  },
  {
    q: "Can you integrate AI into an existing business?",
    a: "Yes. AI integration doesn't have to mean rebuilding everything — we look at where AI can genuinely reduce repetitive work or improve an existing workflow, and build focused, practical tools around that rather than adding AI for its own sake.",
  },
  {
    q: "Do you work with businesses internationally?",
    a: "Yes, we work remotely with businesses in different locations and time zones. Communication happens over email and video calls, and we structure projects to work well asynchronously.",
  },
  {
    q: "How does a project start?",
    a: "A project starts with a conversation about what you're trying to achieve, who it's for, and what you already have in place. From there we scope the work and outline what's involved before anything is built.",
  },
  {
    q: "Can you work with an existing website, or redesign or rebuild one?",
    a: "In many cases, yes. Depending on how the existing site is built, we can work within it, redesign it, or rebuild it from scratch — we'll be upfront about which approach makes the most sense once we've seen what's currently in place. Whether you're after a full redesign or just specific improvements, we'll scope the work based on your goals and what's already there.",
  },
  {
    q: "What information is needed to start a project?",
    a: "It helps to know what you're trying to achieve, who your website is for, any existing branding or content you already have, and examples of sites or experiences you like. You don't need to have everything figured out before reaching out.",
  },
];

export default function FaqsPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <Reveal>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
            Frequently asked questions.
          </h1>
          <p className="mt-6 text-ink-muted max-w-xl leading-relaxed">
            A few things people usually ask before starting a project with
            Auronox Creative.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-line max-w-3xl">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group border-b border-line py-6">
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none font-display text-lg sm:text-xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 text-ink-muted text-2xl leading-none transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ink-muted leading-relaxed max-w-xl">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
