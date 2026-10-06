import type { Metadata } from "next";
import Link from "next/link";
import { Layout, PageHero } from "@/components/Layout";
import { Zap, Droplets, Trees, FlameKindling, PawPrint, CarFront } from "lucide-react";
import { FeatureIconsGrid } from "@/components/accommodations/FeatureIconsGrid";
import { CallBanner } from "@/components/accommodations/CallBanner";
import { GalleryLightbox } from "@/components/home/GalleryLightbox";
import { ComingSoon } from "@/components/ComingSoon";

const SHOW_COMING_SOON = false;

const heroImg = "/images/view4.jpg";
const rvsite = "/images/rvsite.jpg";
const longTermPhoto = "/images/rv-site-new.jpg";
const office = "/images/gallery/park_office_full.jpg";
const campers = "/images/gallery/park_campers_full.jpg";
const sunset = "/images/rv3.jpg";
const pool = "/images/spot2.jpg";
const playground = "/images/spot3.jpg";
const badminton = "/images/gallery/badminton_full.jpg";

const BOOK_URL = "https://www.campspot.com/book/willow-mill-campground";

export const metadata: Metadata = {
  title: "RV Sites — Willow Mill Campground",
  description:
    "RV sites at Willow Mill Campground in Rio, WI — from a quick weekend visit to a full seasonal stay, with water, electric, and sewer options.",
};

const features = [
  { Icon: Zap, label: "30 & 50 Amp Electric" },
  { Icon: Droplets, label: "Water Supply" },
  { Icon: Trees, label: "Picnic Table" },
  { Icon: FlameKindling, label: "Fire Ring" },
  { Icon: PawPrint, label: "Pet Friendly" },
  { Icon: CarFront, label: "Parking" },
];

const gallery = [
  { src: rvsite, alt: "RV site at Willow Mill Campground" },
  { src: longTermPhoto, alt: "Long term RV site at Willow Mill" },
  { src: campers, alt: "RV campers at Willow Mill" },
  { src: office, alt: "Park office" },
  { src: sunset, alt: "Sunset over Willow Mill Campground" },
  { src: pool, alt: "Swimming pool at Willow Mill" },
  { src: playground, alt: "Playground at Willow Mill" },
  { src: badminton, alt: "Badminton court at Willow Mill" },
];

// TODO: replace placeholder pricing with real tier pricing once confirmed.
const pricingTiers = [
  {
    title: "Water & Electric",
    period: "Daily / Weekly",
    price: "TBD",
    note: "30/50 amp electric + water hookup",
    image: "/images/rv-lane.jpg",
  },
  {
    title: "Full Hookup (w/ Sewer)",
    period: "Daily / Weekly",
    price: "TBD",
    note: "30/50 amp electric + water + sewer hookup",
    image: "/images/rv3.jpg",
  },
  {
    title: "Long Term / Seasonal",
    period: "Monthly / Seasonal",
    price: "TBD",
    note: "Claim your spot for the month or the whole season",
    image: "/images/rv4.jpg",
  },
];

export default function RvSites() {
  if (SHOW_COMING_SOON) {
    return (
      <Layout>
        <ComingSoon title="RV Sites" />
      </Layout>
    );
  }
  return (
    <Layout>
      <PageHero title="RV Sites" subtitle="Ways to Stay" image={heroImg} />

      <FeatureIconsGrid features={features} />

      <section className="py-20">
        <div className="container-narrow grid gap-12 md:grid-cols-2 items-center">
          <img
            src={rvsite}
            alt="RV site at Willow Mill Campground"
            className="rounded-lg w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div>
            <h2 className="text-4xl mb-6">Spacious, Shaded RV Sites</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              Our RV sites are spacious and shaded, with water and electric hookups at every site — select sites also include sewer — so you can settle in without worrying about the basics. Pull-through and back-in sites are both available, with fire rings at every site and picnic tables available upon request. Mature shade trees keep things cool in the summer, and our gravel pads stay solid even after a heavy rain.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              Whether you&rsquo;re stopping by for a weekend or settling in for the season, we have a site for you. Willow Mill has been a seasonal home for families since 1968 — claim your spot for the month or the whole summer and spend it in Columbia County with neighbors who feel like family.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
              When you need more than what&rsquo;s at your site, our camp store and shared facilities pick up the slack — public bathrooms with private showers, a dump station, and propane refills are all on the property. Check out our full list of{" "}
              <Link href="/amenities" className="text-[var(--forest-deep)] underline">amenities</Link>{" "}
              to see everything included with your stay. We&rsquo;re also a pet-friendly park, so leashed dogs are always welcome.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block px-10 py-4 text-base tracking-wider"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* ── Pricing Tiers ──────────────────────────────────────────────── */}
      <section className="pb-20 bg-[var(--cream)] pt-16">
        <div className="container-narrow">
          <h2 className="text-4xl mb-10 text-center">Site <span className="font-sans">&</span> Pricing Options</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                className="bg-white border border-[var(--border)] rounded-xl flex flex-col overflow-hidden"
              >
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div className="flex flex-col gap-3" style={{ padding: "32px" }}>
                  <p className="text-xl font-light text-[var(--forest-deep)]">{tier.title}</p>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                    {tier.period}
                  </p>
                  <p className="font-bold text-[var(--forest-deep)] leading-none" style={{ fontSize: "1.875rem" }}>
                    {tier.price}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">{tier.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[var(--muted-foreground)] text-center mt-8">
            See the full{" "}
            <Link href="/rates" className="text-[var(--forest-deep)] underline">rates page</Link>{" "}
            for complete pricing details.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-narrow">
          <h2 className="text-4xl mb-10 text-center">Photo Gallery</h2>
          <GalleryLightbox photos={gallery} />
        </div>
      </section>

      <CallBanner />
    </Layout>
  );
}
