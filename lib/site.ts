import { services } from "./services";

export type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

export const site = {
  name: "Auronox Creative",
  tagline: "Web & AI Development",
  description:
    "Auronox Creative is a design and technology studio building considered digital experiences at the intersection of design and artificial intelligence.",
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      dropdown: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
    },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
};
