export type WhyChooseUsItem = {
  icon: string;
  title: string;
  description: string;
};

export type WhyChooseUsSection = {
  heading: string;
  intro: string;
  items: WhyChooseUsItem[];
};

export const whyChooseUs: Record<string, WhyChooseUsSection> = {
  home: {
    heading: "Built with care, not just capacity.",
    intro:
      "Auronox Creative is a one-person studio, which means every project gets real attention — from the first conversation through to launch and beyond, not squeezed between a dozen others at once.",
    items: [
      {
        icon: "users",
        title: "Direct, not layered",
        description:
          "You work directly with the person building your site — no account managers, no relay of information through a chain of people.",
      },
      {
        icon: "check",
        title: "Built to actually work",
        description:
          "Coded properly rather than assembled from a template, and structured for speed and search from the very first line.",
      },
      {
        icon: "support",
        title: "Still here after launch",
        description:
          "Ongoing support and improvements once the site is live, not a one-time handoff and goodbye.",
      },
    ],
  },
  "web-design-development": {
    heading: "Every site earns its place.",
    intro:
      "We design and build each website around what your business actually needs — not a recycled theme dressed up to look custom.",
    items: [
      {
        icon: "pen",
        title: "Custom-built, not templated",
        description:
          "Every site starts as a blank canvas designed around your brand and audience, not a theme with your logo swapped in.",
      },
      {
        icon: "phone",
        title: "Responsive and fast by default",
        description:
          "Built to work properly on phones, tablets and desktops from day one, optimized for speed rather than bloated with extras.",
      },
      {
        icon: "search",
        title: "SEO-minded from the first line of code",
        description:
          "Structured for search visibility from the start, not bolted on once the site's already finished.",
      },
    ],
  },
  "ai-integration-automation": {
    heading: "Automation that respects your time.",
    intro:
      "We look for the places AI can genuinely reduce manual work or sharpen a workflow, and build only what earns its place in your day-to-day.",
    items: [
      {
        icon: "brain",
        title: "AI where it earns its place",
        description:
          "Only added where it genuinely improves the experience or saves real time, never included just to say it's there.",
      },
      {
        icon: "puzzle",
        title: "Built around what you already use",
        description:
          "Integrated with your existing systems and data instead of asking you to replace everything you rely on.",
      },
      {
        icon: "zap",
        title: "Practical automation, not gimmicks",
        description:
          "Focused on removing repetitive, manual work rather than flashy features nobody actually uses.",
      },
    ],
  },
  "ui-ux-digital-experiences": {
    heading: "Interfaces built around real people.",
    intro:
      "Good design isn't about how a screen looks in isolation — it's about how someone actually moves through it, so that's where we start.",
    items: [
      {
        icon: "eye",
        title: "Designed around real behavior, not just mockups",
        description:
          "Interfaces grounded in how people actually navigate a site, not just how a screen looks in isolation.",
      },
      {
        icon: "pen",
        title: "Prototyped before it's built",
        description:
          "Ideas are tested and refined before a single line of production code gets written.",
      },
      {
        icon: "minimal",
        title: "Clarity over decoration",
        description:
          "Every design choice serves usability first; nothing's added purely to look busy or clever.",
      },
    ],
  },
  "optimization-support": {
    heading: "A site that keeps working, not just launches.",
    intro:
      "Launch day isn't the finish line. We stay close to a project afterward, catching issues early and keeping performance sharp over time.",
    items: [
      {
        icon: "refresh",
        title: "Ongoing, not one-off",
        description:
          "Continuous performance and improvement work, not a single audit that's forgotten a month later.",
      },
      {
        icon: "shield",
        title: "Issues caught before they're problems",
        description:
          "Regular monitoring and maintenance that catches things early, before they affect visitors.",
      },
      {
        icon: "support",
        title: "A relationship, not a handoff",
        description:
          "Real support after launch — we don't disappear the moment the site goes live.",
      },
    ],
  },
  work: {
    heading: "Every project shown here is real.",
    intro:
      "Nothing in this portfolio is a mockup or a placeholder — each one is a genuine, working site built the same way yours would be.",
    items: [
      {
        icon: "check",
        title: "Real, working projects",
        description:
          "Every project shown is a genuine, functioning site, not a static image or a design-only mockup.",
      },
      {
        icon: "userCheck",
        title: "Handled end-to-end, by one person",
        description:
          "Design and development done by the same person throughout, not split across a rotating team.",
      },
      {
        icon: "clock",
        title: "Full attention, not a queue",
        description:
          "Each project gets proper focus rather than being squeezed between dozens of others at once.",
      },
    ],
  },
  about: {
    heading: "Why work with me directly.",
    intro:
      "There's no team standing between you and the work — just one person who plans, builds and stays involved from start to finish.",
    items: [
      {
        icon: "hammer",
        title: "Implementation over theory",
        description:
          "A belief in taking an idea, building it, testing it, and turning it into something real, rather than learning for its own sake.",
      },
      {
        icon: "message",
        title: "Direct communication",
        description:
          "You talk directly with the founder throughout the project, not a rotating cast of account managers.",
      },
      {
        icon: "handshake",
        title: "Built for the long term",
        description:
          "Working toward relationships that last beyond a single project, not one-off jobs.",
      },
    ],
  },
};
