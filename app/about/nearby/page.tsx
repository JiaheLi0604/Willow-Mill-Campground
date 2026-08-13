import type { Metadata } from "next";
import Link from "next/link";
import { Layout, PageHero } from "@/components/Layout";
import {
  ArrowRight,
  Clock,
  MapPin,
  Waves,
  Bird,
  Mountain,
  Anchor,
  Flower2,
  Wine,
  TreePine,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const heroImg = "/images/hero.jpg";

export const metadata: Metadata = {
  title: "What's Nearby — Nor Win Campground",
  description:
    "Explore Rochester, the Finger Lakes, Sodus Bay, and dozens of local attractions from Nor Win Campground in Lyons, NY.",
};

const cities = [
  {
    name: "Rochester, NY",
    time: "35 min",
    distance: "35 mi",
    slug: "/about/nearby/rochester",
    directions:
      "https://www.google.com/maps/dir/Lyons,+NY+14489/Rochester,+NY",
  },
  {
    name: "Finger Lakes, NY",
    time: "30 min",
    distance: "25 mi",
    slug: "/about/nearby/finger-lakes",
    directions:
      "https://www.google.com/maps/dir/Lyons,+NY+14489/Seneca+Lake,+NY",
  },
  {
    name: "Sodus Bay, NY",
    time: "20 min",
    distance: "15 mi",
    slug: "/about/nearby/sodus-bay",
    directions:
      "https://www.google.com/maps/dir/Lyons,+NY+14489/Sodus+Bay,+NY",
  },
];

const exploreMore = [
  {
    name: "Long Term RV Sites, Lyons, NY",
    slug: "/about/long-term-rv",
  },
];

interface Attraction {
  Icon: ComponentType<LucideProps>;
  name: string;
  time: string;
  mapsUrl: string;
}

const BASE = "2921+Pilgrimport+Road+Lyons+NY+14489";

const attractions: Attraction[] = [
  { Icon: Waves,   name: "Erie Canal Discovery Center", time: "5 min drive",  mapsUrl: `https://www.google.com/maps/dir/${BASE}/Erie+Canal+Discovery+Center+Lyons+NY` },
  { Icon: Bird,    name: "Montezuma Wildlife Refuge",   time: "20 min drive", mapsUrl: `https://www.google.com/maps/dir/${BASE}/Montezuma+National+Wildlife+Refuge+Seneca+Falls+NY` },
  { Icon: Mountain,name: "Chimney Bluffs State Park",  time: "30 min drive", mapsUrl: `https://www.google.com/maps/dir/${BASE}/Chimney+Bluffs+State+Park+Wolcott+NY` },
  { Icon: Anchor,  name: "Sodus Point Lighthouse",     time: "25 min drive", mapsUrl: `https://www.google.com/maps/dir/${BASE}/Sodus+Point+Lighthouse+Sodus+Point+NY` },
  { Icon: Flower2, name: "Sonnenberg Gardens",         time: "45 min drive", mapsUrl: `https://www.google.com/maps/dir/${BASE}/Sonnenberg+Gardens+Canandaigua+NY` },
  { Icon: Wine,    name: "Finger Lakes Wine Country",  time: "35 min drive", mapsUrl: `https://www.google.com/maps/dir/${BASE}/Finger+Lakes+Wine+Country+NY` },
];

export default function Nearby() {
  return (
    <Layout>
      <PageHero title="What's Nearby" image={heroImg} />

      {/* ── Cities section ─────────────────────────────────────────── */}
      <section className="bg-[var(--bg)] py-20">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest-deep)] mb-3 font-medium">
            Explore the Area
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--forest-deep)] mb-10">
            Towns and Cities Near Nor Win
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {cities.map((city) => (
              <div
                key={city.name}
                className="relative border border-[var(--border)] bg-white p-6 hover:shadow-md transition-shadow"
              >
                {/* clickable overlay to sub-page */}
                <Link href={city.slug} className="absolute inset-0" aria-label={city.name} />

                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[var(--forest-deep)] leading-tight">
                    {city.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--forest)]" />
                </div>

                <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-1">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>{city.time}</span>
                </div>

                <p className="text-sm text-[var(--muted-foreground)] mb-5">
                  {city.distance}
                </p>

                <a
                  href={city.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 text-sm font-medium text-[var(--forest)] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore More ────────────────────────────────────────────── */}
      <section className="bg-[var(--bg)] pb-20">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--forest-deep)] mb-10">
            Explore More
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {exploreMore.map((item) => (
              <div
                key={item.name}
                className="relative border border-[var(--border)] bg-white p-6 hover:shadow-md transition-shadow"
              >
                <Link href={item.slug} className="absolute inset-0" aria-label={item.name} />

                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[var(--forest-deep)] leading-tight pr-4">
                    {item.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--forest)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Attractions ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#eeebe4" }}>
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest-deep)] mb-3 font-medium">
            Nearby Adventures
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--forest-deep)] mb-10">
            Attractions Near the Park
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {attractions.map((a) => (
              <a
                key={a.name}
                href={a.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm hover:shadow-md transition-shadow block"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 text-[var(--forest-deep)]">
                  <a.Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <p className="font-semibold text-[var(--forest-deep)] leading-snug mb-2">
                  {a.name}
                </p>
                <div className="flex items-center gap-1 text-sm text-[var(--muted-foreground)]">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>{a.time}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[var(--forest-deep)] py-20 text-center">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)] mb-5">
            Your Basecamp for Adventure
          </h2>
          <p className="text-[var(--cream)]/80 leading-relaxed mb-8">
            Book your stay and explore everything the surrounding area has to
            offer — from the Erie Canal and Finger Lakes wine trails to Lake
            Ontario&rsquo;s shoreline parks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.campspot.com/book/nor-win-campground"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-[var(--forest-deep)] px-8 py-3 text-sm font-semibold hover:bg-[var(--cream)] transition-colors"
            >
              Book Now
            </a>
            <a
              href="tel:3159464436"
              className="inline-flex items-center justify-center rounded-full border border-white/60 text-white px-8 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              (315) 946-4436
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
