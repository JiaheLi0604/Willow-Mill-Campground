import type { Metadata } from "next";
import { Layout, PageHero } from "@/components/Layout";

const hero = "/images/hero.jpg";

export const metadata: Metadata = {
  title: "Seasonal Sites — Willow Mill Campground",
  description: "Seasonal camping contracts at Willow Mill Campground in Rio, WI — a summer home in Columbia County.",
};

export default function Seasonal() {
  return (
    <Layout>
      <PageHero title="Seasonal Sites" subtitle="Accommodations" />
      <section className="py-20">
        <div className="container-narrow grid gap-12 md:grid-cols-2 items-center">
          <img src={hero} alt="Seasonal site at Willow Mill Campground" className="rounded-lg w-full object-cover aspect-[4/3]" loading="lazy" />
          <div>
            <h2 className="text-4xl mb-6">A Summer Home in Columbia County</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              Seasonal camping at Willow Mill means setting up once and enjoying the whole summer — your site, your neighbors, your home base for the season. Returning seasonal guests sign next year's contract by September 9, with a non-refundable $200 deposit due toward the following season at the time of signing.
            </p>
            <a href="mailto:info@norwincampground.com?subject=Seasonal%20Spot%20Inquiry" className="btn-primary px-8 py-3 inline-block">Inquire About a Seasonal Spot</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
