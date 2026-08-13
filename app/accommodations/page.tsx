import type { Metadata } from "next";
import Link from "next/link";
import { Layout, PageHero } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Accommodations — Nor Win Campground",
  description: "RV sites, seasonal sites, and tent sites at Nor Win Campground in Lyons, NY.",
};

export default function AccommodationsIndex() {
  return (
    <Layout>
      <PageHero title="Accommodations" subtitle="Where you'll stay" />
      <section className="py-20">
        <div className="container-narrow grid gap-8 md:grid-cols-3">
          {[
            { to: "/accommodations/rv-sites" as const, t: "RV Sites", d: "Spacious, shaded sites with water and electric." },
            { to: "/accommodations/seasonal" as const, t: "Seasonal Sites", d: "A summer home in Wayne County, with neighbors who feel like family." },
            { to: "/accommodations/tent-sites" as const, t: "Tent Sites", d: "Quiet grassy sites for tent campers who want the basics done right." },
          ].map((c) => (
            <Link key={c.to} href={c.to} className="block bg-[var(--cream)] p-8 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-2xl mb-3 italic">{c.t}</h3>
              <p className="text-[var(--muted-foreground)]">{c.d}</p>
              <p className="mt-4 text-[var(--forest)] underline">Read more →</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
