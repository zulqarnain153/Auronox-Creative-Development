export type WorkItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  details: string;
  gradient: "annax" | "emberleaf";
};

export const work: WorkItem[] = [
  {
    slug: "annax-auto-traders",
    title: "Annax Auto Traders",
    category: "Automotive · Staines-upon-Thames",
    summary:
      "A dealership website built around clear vehicle browsing, straightforward information and an easy path to get in touch.",
    details:
      "A full multi-page site for a used car dealership, covering stock browsing, vehicle details, a finance calculator, part exchange and selling a car — designed in the dealership's own navy, ignition orange and plate yellow, and built for speed and trust.",
    gradient: "annax",
  },
  {
    slug: "ember-and-leaf",
    title: "Ember & Leaf",
    category: "Hospitality · Concept",
    summary:
      "A concept website for an independent coffee house, exploring warm, editorial branding for a modern hospitality business.",
    details:
      "A demo build exploring a warmer, more editorial layout style for hospitality brands — from menu presentation to overall visual tone.",
    gradient: "emberleaf",
  },
];
