import Link from "next/link";
import { Star, MapPin, Phone, Car, CalendarDays, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getGoogleReviews } from "@/lib/google-reviews";
import { ReviewMarquee } from "@/components/home/ReviewMarquee";
import { ReviewsSlider } from "@/components/home/ReviewsSlider";
import { GalleryLightbox, type GalleryPhoto } from "@/components/home/GalleryLightbox";
import { GoogleIcon } from "@/components/home/GoogleIcon";

const hero = "/images/hero.webp";
const pool = "/images/pool.jpg";
const playground = "/images/playground.jpg";
const orchard = "/images/dog.jpg";
const parkHero = "/images/park-hero.jpg";
const longTermHero = "/images/rv-site-new.jpg";
const rvsite = "/images/rvsite.jpg";
const gameroom = "/images/gameroom.jpg";
const minigolf = "/images/minigolf.jpg";
const badminton = "/images/gallery/badminton_full.jpg";
const horseshoes = "/images/Rechall.jpg";
const sunset = "/images/gallery/office_sunset_full.jpg";
const campers = "/images/gallery/park_campers_full.jpg";
const swimmingPool = "/images/gallery/swimming_pool_full.jpg";
const playgroundFull = "/images/gallery/playground_full.jpg";
const walkingTrails = "/images/view.jpg";
const kayakRentals = "/images/pond.jpg";

const ADDRESS = "N5830 County Hwy SS, Rio, WI 53960";
const PHONE_DISPLAY = "(920) 992-1212";
const PHONE_TEL = "9209921212";
const BOOK_URL = "https://www.campspot.com/park/willow-mill-campground-rio-wi";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const DIRECTIONS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;

const galleryPhotos: GalleryPhoto[] = [
  { src: campers, alt: "Campers enjoying Willow Mill Campground" },
  { src: "/images/sign.jpg", alt: "Happy Campers Welcome sign at Willow Mill" },
  { src: swimmingPool, alt: "Swimming pool at Willow Mill" },
  { src: playgroundFull, alt: "Playground at Willow Mill" },
  { src: rvsite, alt: "RV site at Willow Mill" },
  { src: badminton, alt: "Badminton court at Willow Mill" },
  { src: horseshoes, alt: "Rec hall at Willow Mill" },
  { src: orchard, alt: "Dog-friendly camping at Willow Mill" },
];

export default async function Home() {
  const reviews = await getGoogleReviews();

  const stat1 =
    reviews.total > 0
      ? { value: String(reviews.total), label: "5-Star Reviews" }
      : { value: "1968", label: "Established" };

  return (
    <Layout>
      {/* Hero — left-aligned, Google rating pill, headline, CTA, stat row */}
      <section className="relative h-[82vh] min-h-[600px] w-full overflow-hidden">
        <img src={hero} alt="Willow Mill Campground" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex h-full flex-col justify-center text-white px-6">
          <div className="container-narrow w-full">
            {reviews.total > 0 && (
              <a
                href={reviews.mapsUri || undefined}
                target={reviews.mapsUri ? "_blank" : undefined}
                rel={reviews.mapsUri ? "noreferrer" : undefined}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-white text-[var(--forest-deep)] px-4 py-2 text-sm font-medium shadow-md"
              >
                <GoogleIcon className="h-4 w-4" />
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(reviews.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{reviews.rating.toFixed(1)}</span>
                <span className="text-[var(--border)]">|</span>
                <span>{reviews.total} 5-Star Reviews</span>
              </a>
            )}

            <h1 className="font-sans text-5xl md:text-7xl max-w-3xl leading-[1.05] font-light">
              Willow Mill Campground
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg opacity-95 leading-relaxed">
              Welcome to Willow Mill Campsite - a family-oriented campground on the water in Rio, Wisconsin, and one of Columbia County&rsquo;s best-kept secrets since 1968.
            </p>

            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-[var(--book-green)] text-white rounded-lg px-7 py-3.5 text-sm font-semibold hover:bg-[var(--book-green-deep)] transition-colors"
            >
              Reserve Your Site
            </a>

            <div className="mt-16 flex items-center gap-12 md:gap-16">
              <div>
                <p className="text-4xl md:text-5xl font-bold">{stat1.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] opacity-85">{stat1.label}</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold">211</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] opacity-85">Sites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling review quote marquee */}
      <ReviewMarquee reviews={reviews.reviews} />

      {/* Intro / welcome copy */}
      <section className="bg-white py-20">
        <div className="container-narrow max-w-4xl">
          <h2 className="font-sans text-3xl md:text-4xl font-medium text-[var(--forest-deep)] mb-8">
            Willow Mill Campground in Rio, WI
          </h2>
          <div className="space-y-6 text-[var(--foreground)] leading-relaxed">
            <p>
              Welcome to Willow Mill Campsite, a family-oriented, waterfront campsite in Rio, Wisconsin, and a Columbia County favorite since 1968. Set along County Highway SS, our lakefront property features spacious, shaded campsites with picnic tables, and relaxing water views. Guests can enjoy a seasonal pool, kayak rentals, mini golf, a game room, pavilion, and a pet-friendly dog park. The camp store offers firewood, ice, RV supplies, propane refills, snacks, and frozen foods, while practical amenities include laundry facilities, private bathrooms, and free WiFi near the store. Open through October 15, Willow Mill is a great place to relax, unwind, and enjoy the outdoors.
            </p>
            <p>
              Located near some of Wisconsin&rsquo;s top destinations, Willow Mill makes an excellent home base for exploring the area. Madison, about 30 miles southwest, offers attractions such as Henry Vilas Zoo, Capitol Square, State Street, and Lake Mendota. Wisconsin Dells, roughly 35 miles north, is famous for its waterparks, river tours, and family attractions. Closer to camp, Chandler Park provides additional outdoor recreation opportunities. Whether you&rsquo;re planning a quiet camping retreat or a fun-filled family getaway, Willow Mill Campsite offers the perfect balance of comfort, recreation, and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Stay */}
      <section className="bg-[var(--cream)] py-24">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)] mb-3">Ways to Stay</p>
          <h2 className="font-sans text-3xl md:text-4xl font-medium text-[var(--forest-deep)] mb-12">Find Your Perfect Stay</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                img: rvsite,
                icon: Car,
                title: "RV Sites",
                text: "Our RV sites come with water and electric connections — select sites also include sewer. Plenty of large, shaded spots to choose from, and our oversized sites handle big rigs without a problem.",
                to: "/accommodations/rv-sites" as const,
              },
              {
                img: longTermHero,
                icon: CalendarDays,
                title: "Long Term RV Sites",
                text: "Willow Mill has been a seasonal home for families since 1968, and our long term sites reflect that. Claim your spot for the season and spend your summers at Willow Mill in Columbia County.",
                to: "/about/long-term-rv" as const,
              },
            ].map((c) => (
              <article key={c.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  <div className="absolute -bottom-5 left-5 h-11 w-11 rounded-full bg-white shadow-md flex items-center justify-center">
                    <c.icon className="h-5 w-5 text-[var(--forest-deep)]" />
                  </div>
                </div>
                <div className="p-6 pt-8">
                  <h3 className="font-sans text-xl font-medium text-[var(--forest-deep)] mb-3">{c.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">{c.text}</p>
                  <Link href={c.to} className="inline-flex items-center gap-1 text-sm font-medium text-[var(--forest-deep)] hover:text-[var(--forest)]">
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-white py-24">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)] mb-3">Amenities</p>
          <h2 className="font-sans text-3xl md:text-4xl font-medium text-[var(--forest-deep)] mb-12">
            Everything You Need, Nothing You Don&rsquo;t
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { img: walkingTrails, label: "Walking Trails" },
              { img: playground, label: "Playground" },
              { img: orchard, label: "Dog Park" },
              { img: minigolf, label: "Mini Golf" },
              { img: pool, label: "Swimming Pool" },
              { img: kayakRentals, label: "Kayak Rentals" },
              { img: gameroom, label: "Game Room" },
            ].map((a) => (
              <div key={a.label} className="rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.img} alt={a.label} className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
                </div>
                <p className="bg-white py-3 text-center text-sm font-medium text-[var(--forest-deep)]">{a.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--forest-deep)] rounded-lg px-6 py-3 text-sm font-medium hover:bg-[var(--cream)] transition-colors"
            >
              View All Amenities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner with phone number */}
      <section className="bg-[var(--forest-deep)] py-10">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <p className="text-lg text-white">Not sure which site is right for you? Give us a call.</p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 bg-[var(--book-green)] text-white rounded-lg px-6 py-3 text-sm font-semibold hover:bg-[var(--book-green-deep)] transition-colors whitespace-nowrap"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Google Reviews — auto-scrolling slider */}
      <ReviewsSlider data={reviews} />

      {/* Photo gallery with lightbox */}
      <section className="bg-white py-24">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)] mb-3">Photo Gallery</p>
          <h2 className="font-sans text-3xl md:text-4xl font-medium text-[var(--forest-deep)] mb-12">See What Awaits You</h2>
          <GalleryLightbox photos={galleryPhotos} />
          <div className="mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--forest-deep)] rounded-lg px-6 py-3 text-sm font-medium hover:bg-[var(--cream)] transition-colors"
            >
              See More Photos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Map + contact info bar */}
      <section className="bg-[var(--cream)] py-24">
        <div className="container-narrow">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl shadow-md">
            <iframe
              src={MAP_EMBED}
              title="Willow Mill Campground location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8 mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-sans text-2xl font-medium text-[var(--forest-deep)] mb-4">Come See Us In Person</h3>
              <div className="space-y-2 text-sm text-[var(--foreground)]">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[var(--forest-deep)]" /> {ADDRESS}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[var(--forest-deep)]" /> {PHONE_DISPLAY}
                </p>
              </div>
            </div>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--forest-deep)] text-white rounded-lg px-6 py-3 text-sm font-semibold hover:bg-[var(--forest)] transition-colors whitespace-nowrap"
            >
              Get Directions <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="bg-[var(--forest-deep)] py-20">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white mb-4 whitespace-nowrap">
            Ready to experience the top RV park in Rio, WI?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Whether you are booking a weekend getaway or settling in for longer, we would love to have you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[var(--book-green)] text-white rounded-lg px-8 py-3.5 text-sm font-semibold hover:bg-[var(--book-green-deep)] transition-colors"
            >
              Book Now
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border border-[var(--book-green)] text-white rounded-lg px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
