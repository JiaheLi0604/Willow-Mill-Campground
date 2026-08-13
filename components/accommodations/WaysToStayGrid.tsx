import Link from "next/link";
import { ChevronRight, Caravan } from "lucide-react";

const rvsite = "/images/rvsite.jpg";
const longTerm = "/images/rv-site-new.jpg";

const cards = [
  {
    title: "RV Sites",
    href: "/accommodations/rv-sites",
    image: rvsite,
    description:
      "Our spacious, shaded sites offer full hookups with water, electric, and sewer. Pull-through and back-in sites available, with picnic tables and fire rings included.",
  },
  {
    title: "Long Term RV Sites",
    href: "/about/long-term-rv",
    image: longTerm,
    description:
      "Willow Mill has been a seasonal home for families since 1968. Claim your spot for the season and spend your summers in the heart of Wisconsin's lake country.",
  },
];

/**
 * "Ways to Stay" cross-link section — two-card grid matching Willow
 * Mill's layout: image on top, title + description + Details link below.
 * Always shows both cards (no exclusion).
 */
export function WaysToStayGrid({ exclude }: { exclude?: string }) {
  void exclude; // kept for API compatibility but no longer used

  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)] mb-3 text-center">
          Ways to Stay
        </p>
        <h2 className="text-4xl mb-10 text-center">Find Your Perfect Stay</h2>
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {cards.map((c) => (
            <div key={c.href} className="rounded-xl overflow-hidden border border-[var(--border)] bg-white shadow-sm">
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-[var(--forest-deep)]">
                  <Caravan className="h-5 w-5" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-sans text-xl font-semibold text-[var(--forest-deep)] mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
                  {c.description}
                </p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--forest-deep)] hover:underline"
                >
                  Details <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
