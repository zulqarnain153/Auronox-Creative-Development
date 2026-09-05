export type StoryBeat = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  story: StoryBeat[];
  icon: "code" | "brain" | "pen" | "gauge";
  image: string;
};

export const services: Service[] = [
  {
    slug: "web-design-development",
    number: "01",
    title: "Web Design & Development",
    summary:
      "Distinctive, responsive websites designed around your brand, audience and goals.",
    story: [
      {
        title: "Built from scratch",
        description:
          "Every site starts as a blank canvas designed around your brand and audience — not a template with your logo dropped in.",
      },
      {
        title: "Responsive by default",
        description:
          "Built to work properly on phones, tablets and desktops from day one, not retrofitted afterward.",
      },
      {
        title: "Built to be found",
        description:
          "Structured for SEO and fast load times from the first line of code, not bolted on at the end.",
      },
    ],
    icon: "code",
    image: "/service-web-design.jpg",
  },
  {
    slug: "ai-integration-automation",
    number: "02",
    title: "AI Integration & Automation",
    summary:
      "Practical AI-powered systems and automations that reduce repetitive work and create smarter workflows.",
    story: [
      {
        title: "Automate the repetitive stuff",
        description:
          "The manual tasks and workflows that eat up your time, handled automatically instead.",
      },
      {
        title: "AI where it actually helps",
        description:
          "Smart features like chat, search or content tools — added only where they genuinely improve the experience, not for its own sake.",
      },
      {
        title: "Built around what you already use",
        description:
          "Integrated with your existing systems and data, rather than asking you to replace them.",
      },
    ],
    icon: "brain",
    image: "/service-ai-automation.jpg",
  },
  {
    slug: "ui-ux-digital-experiences",
    number: "03",
    title: "UI/UX & Digital Experiences",
    summary:
      "Clear, thoughtful interfaces and digital experiences designed for usability, interaction and impact.",
    story: [
      {
        title: "Grounded in real use",
        description:
          "Interfaces designed around how people actually behave, not just how something looks in a mockup.",
      },
      {
        title: "Clear over clever",
        description:
          "Straightforward navigation and information architecture that doesn't make anyone think twice.",
      },
      {
        title: "Tested before it's built",
        description:
          "Prototyped and iterated on before a single line of production code gets written.",
      },
    ],
    icon: "pen",
    image: "/service-ui-ux.jpg",
  },
  {
    slug: "optimization-support",
    number: "04",
    title: "Optimization & Support",
    summary:
      "Ongoing improvements, performance refinement and technical support to keep your digital presence working at its best.",
    story: [
      {
        title: "Faster, measurably",
        description:
          "Ongoing performance and page-speed improvements, not a one-off audit that's forgotten afterward.",
      },
      {
        title: "Fixed before it's a problem",
        description:
          "Regular monitoring and maintenance that catches issues early, before they affect visitors.",
      },
      {
        title: "A relationship, not a handoff",
        description:
          "Ongoing technical support after launch — we don't disappear the moment the site goes live.",
      },
    ],
    icon: "gauge",
    image: "/service-optimization.jpg",
  },
];
