import type { LucideIcon } from "lucide-react";

export type Feature = { Icon: LucideIcon; label: string };

/**
 * Full-width icon-card feature row, styled after Willow Mill's RV Sites
 * page (7 feature cards: electric, water, picnic table, wifi, fire ring,
 * pet friendly, parking).
 */
export function FeatureIconsGrid({ features }: { features: Feature[] }) {
  return (
    <section className="py-16 bg-[var(--cream)]">
      <div className="container-narrow">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {features.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--forest-deep)] shadow-sm">
                <Icon className="h-7 w-7" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-[var(--forest-deep)] uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
