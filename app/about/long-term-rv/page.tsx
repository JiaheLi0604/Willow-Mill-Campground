import type { Metadata } from "next";
import Link from "next/link";
import { Layout, PageHero } from "@/components/Layout";
import { Zap, Droplets, Trees, FlameKindling, PawPrint, CarFront } from "lucide-react";
import { FeatureIconsGrid } from "@/components/accommodations/FeatureIconsGrid";
import { CallBanner } from "@/components/accommodations/CallBanner";
import { WaysToStayGrid } from "@/components/accommodations/WaysToStayGrid";
import { GalleryLightbox } from "@/components/home/GalleryLightbox";

const heroImg = "/images/park-hero.jpg";
const orchard = "/images/rv-site-new.jpg";
const office = "/images/gallery/park_office_full.jpg";
const campers = "/images/gallery/park_campers_full.jpg";
const sunset = "/images/rv.jpg";
const pool = "/images/rv4.jpg";
const playground = "/images/rv3.jpg";
const badminton = "/images/spot.jpg";
const horseshoes = "/images/gallery/horseshoes_full.jpg";

export const metadata: Metadata = {
  title: "Long Term RV Sites — Willow Mill Campground",
  description: "Seasonal long term RV sites at Willow Mill Campground in Rio, WI — fully hooked up, shaded, and family-run since 1968.",
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
  { src: orchard, alt: "Long term site at Willow Mill Campground" },
  { src: campers, alt: "Long term campers at Willow Mill" },
  { src: office, alt: "Park office" },
  { src: sunset, alt: "Sunset over Willow Mill Campground" },
  { src: pool, alt: "Swimming pool at Willow Mill" },
  { src: playground, alt: "Playground at Willow Mill" },
  { src: badminton, alt: "Badminton court at Willow Mill" },
  { src: horseshoes, alt: "Horseshoe pit at Willow Mill" },
];

export default function LongTerm() {
  return (
    <Layout>
      <PageHero title="Long Term RV Sites" subtitle="Ways to Stay" image={heroImg} />

      <FeatureIconsGrid features={features} />

      <section className="py-20">
        <div className="container-narrow grid gap-12 md:grid-cols-2 items-center">
          <img
            src={orchard}
            alt="Long term site at Willow Mill Campground"
            className="rounded-lg w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div>
            <h2 className="text-4xl mb-6">A Seasonal Home Since 1968</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              Willow Mill Campground has been a seasonal home for campers in Rio, Wisconsin since 1968. Our long term sites are large, shaded, and fully hooked up with water and electric (sewer on select sites), set between Madison and Wisconsin Dells. If you&rsquo;re looking for a seasonal spot that feels like a community, this is it.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
              Public bathrooms with private showers, a dump station, and propane refills keep the day-to-day running smoothly, and the camp store carries RV supplies, firewood, ice, ice cream, drinks, and candy. View our full list of{" "}
              <Link href="/amenities" className="text-[var(--forest-deep)] underline">amenities</Link>{" "}
              — and yes, leashed dogs are always welcome.
            </p>
            <a
              href="https://www.campspot.com/book/willow-mill-campground"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block px-10 py-4 text-base tracking-wider"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-narrow">
          <h2 className="text-4xl mb-10 text-center">Photo Gallery</h2>
          <GalleryLightbox photos={gallery} />
        </div>
      </section>

      <CallBanner />

      <WaysToStayGrid exclude="/about/long-term-rv" />
    </Layout>
  );
}
