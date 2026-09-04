export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a conversation about what you're building, who it's for, and what you already have in place.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "From there we scope the work, map out the pages or features you need, and agree what a finished project looks like.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "We build it — designed, coded and tested properly, with progress you can actually see along the way.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Once it's live, we're on hand for updates, improvements and support as your business grows.",
  },
];
