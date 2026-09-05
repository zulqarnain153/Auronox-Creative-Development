import {
  Users,
  CheckCircle2,
  LifeBuoy,
  PenTool,
  Smartphone,
  Search,
  BrainCircuit,
  Puzzle,
  Zap,
  Eye,
  Minus,
  RefreshCw,
  ShieldCheck,
  MessageCircle,
  UserCheck,
  Clock,
  Hammer,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { whyChooseUs } from "@/lib/whyChooseUs";

const icons: Record<string, LucideIcon> = {
  users: Users,
  check: CheckCircle2,
  support: LifeBuoy,
  pen: PenTool,
  phone: Smartphone,
  search: Search,
  brain: BrainCircuit,
  puzzle: Puzzle,
  zap: Zap,
  eye: Eye,
  minimal: Minus,
  refresh: RefreshCw,
  shield: ShieldCheck,
  message: MessageCircle,
  userCheck: UserCheck,
  clock: Clock,
  hammer: Hammer,
  handshake: Handshake,
};

export default function WhyChooseUs({
  pageKey,
}: {
  pageKey: keyof typeof whyChooseUs;
}) {
  const section = whyChooseUs[pageKey];
  if (!section) return null;

  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="kicker-lg mb-5">Why Choose Us</div>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            {section.heading}
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed">
            {section.intro}
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-3 gap-10">
          {section.items.map((item, i) => {
            const Icon = icons[item.icon] ?? CheckCircle2;
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="w-11 h-11 rounded-full bg-aurora-violet/15 flex items-center justify-center text-aurora-violet">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
