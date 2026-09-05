import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a web or AI development project with Auronox Creative — tell us what you're building and we'll take it from there.",
};

export default function ContactPage() {
  return <ContactForm />;
}
