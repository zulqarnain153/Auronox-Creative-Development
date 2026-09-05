export type FeatureCard = {
  number: string;
  title: string;
  description: string;
};

export type Screenshot = {
  src: string;
  caption: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  // Legacy fields — still used by projects that haven't been given the
  // full case-study treatment yet.
  category: string;
  details?: string;
  features?: string[];
  screenshot?: string;
  // Rich case-study fields. When present, the page renders these instead
  // of the legacy equivalents above.
  projectType?: string;
  industry?: string;
  serviceType?: string;
  overview?: string;
  whatWeBuilt?: string[];
  featureCards?: FeatureCard[];
  screenshots?: Screenshot[];
  liveNote?: string;
  summary: string;
  gradient: "annax" | "emberleaf";
  liveUrl?: string;
  techStack?: string[];
};

export const workGradientClasses: Record<string, string> = {
  annax: "bg-gradient-to-br from-[#0B1428] via-[#16233F] to-[#FF4612]",
  emberleaf: "bg-gradient-to-br from-[#241A14] via-[#4A2E1E] to-[#E2A15D]",
};

export const work: WorkItem[] = [
  {
    slug: "annax-auto-traders",
    title: "Annax Auto Traders",
    category: "Used car dealership in Staines-upon-Thames",
    summary:
      "A dealership website for Annax Auto Traders, built around clear vehicle browsing, straightforward information and an easy path to get in touch.",
    projectType: "Client Project",
    industry: "Automotive / Vehicle Dealership",
    serviceType: "Web Design & Development",
    overview:
      "Annax Auto Traders is an independent used car dealership based in Staines-upon-Thames. The website functions as their online showroom: live vehicle stock, individual car listings, and the surrounding tools a buyer or seller needs — enquiry, finance estimates, part exchange and valuation — brought together into one site rather than left as a set of separate landing pages.",
    whatWeBuilt: [
      "Annax Auto Traders needed a full dealership website that could carry their live stock, not just a brochure of the business. We built a multi-page site — home, stock, vehicle details, part exchange, selling, reviews and contact — structured around how someone actually shops for a used car.",
      "The stock experience is the core of the site: a filterable inventory (make, body type, fuel type, transmission, colour, price and mileage) with sorting, paired with individual vehicle pages carrying full specifications, vehicle history, MOT status and a live finance calculator.",
      "Alongside browsing, we built the supporting flows a dealership actually needs day to day — a guided sell-your-car valuation flow, a part-exchange page, save-to-wishlist and compare tools, and direct enquiry paths (call, WhatsApp, contact form) from every vehicle page.",
    ],
    featureCards: [
      {
        number: "01",
        title: "Filterable vehicle inventory",
        description:
          "Make, body type, fuel type, transmission, colour, price and mileage filters, with multiple sort options.",
      },
      {
        number: "02",
        title: "Individual vehicle pages",
        description:
          "Full specification, feature list, vehicle history and MOT status for every car in stock.",
      },
      {
        number: "03",
        title: "Live finance calculator",
        description:
          "Adjustable deposit, term and APR with an instant estimated monthly payment.",
      },
      {
        number: "04",
        title: "Save & compare",
        description:
          "Wishlist saving and side-by-side vehicle comparison across the stock list.",
      },
      {
        number: "05",
        title: "Sell-your-car flow",
        description:
          "A guided, three-step valuation journey for part exchange or sale.",
      },
      {
        number: "06",
        title: "Direct enquiry paths",
        description:
          "Click-to-call, WhatsApp, test-drive booking and a contact form on every vehicle page.",
      },
    ],
    screenshots: [
      {
        src: "/annax-shot-home.jpg",
        caption: "Annax Auto Traders homepage with stock search and featured vehicles",
      },
      {
        src: "/annax-shot-stock.jpg",
        caption: "Vehicle stock listing with filters and sorting",
      },
      {
        src: "/annax-shot-vehicle.jpg",
        caption: "Individual vehicle page with specification and finance calculator",
      },
      {
        src: "/annax-shot-sell.jpg",
        caption: "Sell-your-car valuation flow",
      },
    ],
    gradient: "annax",
    liveUrl: "annax-auto-traders.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Web3Forms"],
  },
  {
    slug: "ember-and-leaf",
    title: "Ember & Leaf",
    category: "Independent coffee house, concept build",
    summary:
      "A concept website for an independent coffee house, exploring warm, editorial branding for a modern hospitality business.",
    projectType: "Concept Project",
    industry: "Hospitality / Coffee House",
    serviceType: "Web Design & Development",
    overview:
      "Ember & Leaf is a concept coffee house built to explore what a considered, independent hospitality website looks like — real page structure, real content patterns such as a menu, story, hours and contact, and a warm, editorial visual identity, without an actual business behind it. It exists to demonstrate the kind of website Auronox Creative would build for a genuine café or small hospitality brand.",
    whatWeBuilt: [
      "Ember & Leaf is a concept project — a coffee house that doesn't exist, used to design and build a genuine independent hospitality website end to end, rather than a single mockup screen.",
      "We built a small, focused multi-page site: a home page introducing the space, a full menu organized by category, an about page telling the story behind the room, and a contact page with opening hours, location and an enquiry form.",
      "The menu itself is structured as real, editable content — categorized dishes and drinks with pricing — built so the structure could carry an actual café's real menu and prices directly, without rebuilding the page.",
    ],
    featureCards: [
      {
        number: "01",
        title: "Editorial homepage",
        description:
          "A warm, image-led introduction to the space and what it serves.",
      },
      {
        number: "02",
        title: "Categorized menu page",
        description:
          "Coffee, brunch and pastry items with pricing, structured as editable content.",
      },
      {
        number: "03",
        title: "About page",
        description:
          "The story and philosophy behind the concept, written as real page content.",
      },
      {
        number: "04",
        title: "Contact & hours",
        description:
          "Location, phone, email and day-by-day opening hours with an enquiry form.",
      },
      {
        number: "05",
        title: "Consistent multi-page structure",
        description:
          "Shared navigation and layout across every page, not a single scrolling mockup.",
      },
    ],
    screenshots: [
      {
        src: "/ember-shot-home.jpg",
        caption: "Ember & Leaf homepage",
      },
      {
        src: "/ember-shot-menu.jpg",
        caption: "Ember & Leaf menu page",
      },
      {
        src: "/ember-shot-about.jpg",
        caption: "Ember & Leaf about page",
      },
      {
        src: "/ember-shot-contact.jpg",
        caption: "Ember & Leaf contact page",
      },
    ],
    liveNote:
      "Ember & Leaf is a concept project — this link leads to a demonstration site, not a live business.",
    gradient: "emberleaf",
    liveUrl: "ember-and-leaf.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
