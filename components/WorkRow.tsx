import Link from "next/link";
import { workGradientClasses, type WorkItem } from "@/lib/work";

export default function WorkRow({ item }: { item: WorkItem }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group flex flex-col sm:flex-row gap-5 sm:gap-10 py-8 border-b border-line relative items-start sm:items-center"
    >
      <span className="absolute -left-6 sm:-left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-aurora-violet to-aurora-teal scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
      <div
        className={`w-full sm:w-28 h-28 shrink-0 rounded-xl ${workGradientClasses[item.gradient]}`}
      />
      <div className="flex-1">
        <div className="text-xs font-semibold text-ink-muted">
          {item.category}
        </div>
        <div className="mt-1 font-display text-xl inline-block group-hover:translate-x-1.5 transition-transform duration-300">
          {item.title}
        </div>
        <p className="mt-2 text-ink-muted leading-relaxed max-w-lg">
          {item.summary}
        </p>
      </div>
    </Link>
  );
}
