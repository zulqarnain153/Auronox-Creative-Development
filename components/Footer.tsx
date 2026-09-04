import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="max-w-content mx-auto px-6 sm:px-8 py-16 grid gap-12 sm:grid-cols-3">
        <div>
          <div className="font-display text-lg font-semibold">{site.name}</div>
          <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-xs">
            {site.description}
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-ink-muted mb-4">
            Navigation
          </div>
          <ul className="space-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm hover:text-aurora-violet transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-ink-muted mb-4">
            Services
          </div>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm hover:text-aurora-violet transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 sm:px-8 py-6 border-t border-line text-xs text-ink-muted flex flex-col sm:flex-row justify-between gap-2">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  );
}
