import Link from "next/link";
import { Code2, BrainCircuit, PenTool, Gauge, type LucideIcon } from "lucide-react";
import type { Service } from "@/lib/services";

const icons: Record<Service["icon"], LucideIcon> = {
  code: Code2,
  brain: BrainCircuit,
  pen: PenTool,
  gauge: Gauge,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block border border-line rounded-2xl p-7 h-full hover:border-ink-muted/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-aurora-violet/10 flex items-center justify-center text-aurora-violet group-hover:bg-aurora-violet/15 transition-colors">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 font-display text-xl">{service.title}</h3>
      <p className="mt-2 text-ink-muted leading-relaxed">{service.summary}</p>
    </Link>
  );
}
