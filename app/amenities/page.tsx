import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import {
  ShoppingBag,
  Bath,
  Zap,
  Lock,
  Flame,
  PawPrint,
  Star,
  Phone,
} from "lucide-react";

const heroImg       = "/images/pond.jpg";
const poolImg       = "/images/pool.jpg";
const playImg       = "/images/playground.jpg";
const orchardImg    = "/images/orchard.jpg";
const minigolfImg   = "/images/minigolf.jpg";
const gameImg       = "/images/gameroom.jpg";
const rvsiteImg     = "/images/rvsite.jpg";
const horseshoesImg = "/images/Rechall.jpg";
const badmintonImg  = "/images/gallery/badminton_full.jpg";
const promoImg      = "/images/front.jpg";

export const metadata: Metadata = {
  title: "Amenities — Nor Win Campground",
  description:
    "Full list of amenities at Nor Win Campground in Lyons, NY — pool, playground, volleyball, basketball, horseshoes, camp store, and more.",
};

const parkHeroImg   = "/images/park-hero.jpg";
const basketballImg = "/images/basketball.jpg";
const volleyballImg = "/images/volleyball.jpg";
const heroImgAlt    = "/images/hero.jpg";

const recreationCards = [
  { img: poolImg,       title: "Swimming Pool" },
  { img: playImg,       title: "Playground" },
  { img: horseshoesImg, title: "Rec Hall" },
];

const convenienceItems = [
  { Icon: ShoppingBag, label: "Camp Store" },
  { Icon: Bath,        label: "Bathrooms & Showers" },
  { Icon: Zap,         label: "30/50 AMP Hookups" },
  { Icon: Lock,        label: "Gated Entry" },
  { Icon: Flame,       label: "Propane Refills" },
  { Icon: PawPrint,    label: "Pet Friendly" },
];

const outdoorCards = [
  { img: rvsiteImg,     title: "Full Hookup RV Sites" },
  { img: volleyballImg, title: "Volleyball" },
  { img: "/images/pond.jpg", title: "Fishing" },
  { img: basketballImg, title: "Basketball" },
];

export default function Amenities() {
  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative flex h-[420px] items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(34,23,17,0.50)" }} />
        <div className="relative z-10 px-4">
          <h1 className="font-serif text-5xl md:text-7xl">Amenities</h1>
        </div>
      </section>

      {/* ── Recreation ────────────────────────────────────────────────── */}
      <section className="bg-[var(--cream)] pt-12 pb-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="text-[12px] font-bold uppercase tracking-[2px] text-[var(--forest-deep)] mb-3">
            Recreation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--forest-deep)] mb-10">
            Fun for the Whole Family
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {recreationCards.map((c) => (
              <div key={c.title}>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-[13px] font-semibold uppercase tracking-[1px] text-center text-[var(--forest-deep)]">
                  {c.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comfort & Convenience ─────────────────────────────────────── */}
      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="text-[12px] font-bold uppercase tracking-[2px] text-[var(--forest-deep)] mb-3">
            Comfort &amp; Convenience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--forest-deep)] mb-10">
            All the Comforts of Home
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {convenienceItems.map(({ Icon, label }) => (
              <div
                key={label}
                className="bg-white border border-[var(--border)] rounded-xl flex flex-col gap-3"
                style={{ padding: "25px 20px" }}
              >
                <Icon className="h-8 w-8 text-[var(--forest-deep)]" />
                <p className="text-sm font-semibold text-[var(--forest-deep)] leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outdoor Living ────────────────────────────────────────────── */}
      <section className="bg-[var(--cream)] py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="text-[12px] font-bold uppercase tracking-[2px] text-[var(--forest-deep)] mb-3">
            Outdoor Living
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--forest-deep)] mb-10">
            Embrace the Outdoors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {outdoorCards.map((c) => (
              <div key={c.title}>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-[13px] font-semibold uppercase tracking-[1px] text-center text-[var(--forest-deep)]">
                  {c.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark promo / Guest Favorite ───────────────────────────────── */}
      <section className="bg-[var(--forest-deep)] py-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Photo */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={promoImg}
                alt="Campers enjoying Nor Win Campground"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>

            {/* Copy */}
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[2px] text-[var(--cream)]/70 mb-4">
                Guest Favorite
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-snug">
                See Why We&rsquo;re the Area&rsquo;s Top-Rated Park
              </h3>
              <p className="text-white/75 leading-relaxed mb-6">
                Nestled along the Erie Canal in Lyons, NY, Nor Win Campground has
                been welcoming families for generations. With a full slate of
                on-site amenities and warm, attentive staff, guests keep coming
                back season after season.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-7">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </span>
                <span className="text-sm text-white font-medium">4.5 · Google Reviews</span>
              </div>
              <div>
                <a
                  href="https://www.campspot.com/book/nor-win-campground"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--forest)] text-white px-8 py-3 text-sm font-semibold hover:brightness-110 transition-all"
                >
                  Book Your Stay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        className="bg-[var(--cream)] border-t border-[var(--border)] text-center"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <h2 className="font-serif text-4xl md:text-5xl text-[#221711] mb-4">
            Ready to Experience Nor Win?
          </h2>
          <p
            className="text-[18px] text-[#6d6059] leading-relaxed mb-8 mx-auto"
            style={{ maxWidth: "530px" }}
          >
            Book your stay at Nor Win Campground and discover everything that
            makes us Wayne County&rsquo;s favorite family getaway.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.campspot.com/book/nor-win-campground"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--forest)] text-white px-8 py-3 text-sm font-semibold hover:brightness-110 transition-all"
            >
              Book Now
            </a>
            <a
              href="tel:3159464436"
              className="inline-flex items-center gap-2 rounded-lg border border-[#ddd7c9] text-[#221711] px-8 py-3 text-sm font-semibold hover:bg-[#ddd7c9]/40 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (315) 946-4436
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
