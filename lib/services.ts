export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  bullets: string[];
  relatedWork: string[];
  icon: "code" | "brain" | "pen" | "gauge";
};

export const services: Service[] = [
  {
    slug: "web-design-development",
    number: "01",
    title: "Web Design & Development",
    summary:
      "Distinctive, responsive websites designed around your brand, audience and goals.",
    bullets: [
      "Custom design and build, not a template",
      "Responsive across mobile, tablet and desktop",
      "Built on modern, maintainable foundations",
      "Structured for SEO and performance from the start",
    ],
    relatedWork: ["annax-auto-traders", "ember-and-leaf"],
    icon: "code",
  },
  {
    slug: "ai-integration-automation",
    number: "02",
    title: "AI Integration & Automation",
    summary:
      "Practical AI-powered systems and automations that reduce repetitive work and create smarter workflows.",
    bullets: [
      "Automation for repetitive, manual tasks",
      "AI features integrated into existing workflows",
      "Search, content and chat tools where they genuinely help",
      "Built around your existing systems and data",
    ],
    relatedWork: [],
    icon: "brain",
  },
  {
    slug: "ui-ux-digital-experiences",
    number: "03",
    title: "UI/UX & Digital Experiences",
    summary:
      "Clear, thoughtful interfaces and digital experiences designed for usability, interaction and impact.",
    bullets: [
      "Interface design grounded in how people actually use it",
      "Clear information architecture and navigation",
      "Accessible, readable, well-considered layouts",
      "Prototyping and iteration before build",
    ],
    relatedWork: [],
    icon: "pen",
  },
  {
    slug: "optimization-support",
    number: "04",
    title: "Optimization & Support",
    summary:
      "Ongoing improvements, performance refinement and technical support to keep your digital presence working at its best.",
    bullets: [
      "Performance and page-speed improvements",
      "Ongoing fixes, updates and refinements",
      "Technical support after launch",
      "Monitoring for issues before they affect users",
    ],
    relatedWork: [],
    icon: "gauge",
  },
];
