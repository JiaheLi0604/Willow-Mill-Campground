import type { Metadata } from "next";
import { Layout, PageHero } from "@/components/Layout";

const playground = "/images/playground.jpg";

export const metadata: Metadata = {
  title: "Tent Sites — Nor Win Campground",
  description: "Quiet, grassy tent sites at Nor Win Campground in Lyons, NY.",
};

export default function TentSites() {
  return (
    <Layout>
      <PageHero title="Tent Sites" subtitle="Accommodations" />
      <section className="py-20">
        <div className="container-narrow grid gap-12 md:grid-cols-2 items-center">
          <img src={playground} alt="Tent site at Nor Win Campground" className="rounded-lg w-full object-cover aspect-[4/3]" loading="lazy" />
          <div>
            <h2 className="text-4xl mb-6">Quiet, Grassy Tent Sites</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              Our tent sites keep things simple — grassy, shaded ground, a picnic table, and a fire ring, set apart from the RV loops for a quieter stay. Shared bathrooms, showers, and the camp store are all just a short walk away.
            </p>
            <a href="https://www.campspot.com/book/nor-win-campground" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3 inline-block">Check Availability</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
