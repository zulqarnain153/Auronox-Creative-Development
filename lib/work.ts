export type WorkItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  details: string;
  gradient: "annax" | "emberleaf";
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
      "A dealership website built around clear vehicle browsing, straightforward information and an easy path to get in touch.",
    details:
      "A full multi-page site for a used car dealership, covering stock browsing, vehicle details, a finance calculator, part exchange and selling a car — designed in the dealership's own navy, ignition orange and plate yellow, and built for speed and trust.",
    gradient: "annax",
  },
  {
    slug: "ember-and-leaf",
    title: "Ember & Leaf",
    category: "Independent coffee house, concept build",
    summary:
      "A concept website for an independent coffee house, exploring warm, editorial branding for a modern hospitality business.",
    details:
      "A demo build exploring a warmer, more editorial layout style for hospitality brands — from menu presentation to overall visual tone.",
    gradient: "emberleaf",
  },
];
