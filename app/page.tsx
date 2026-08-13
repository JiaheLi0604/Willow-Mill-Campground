import Link from "next/link";
import { Star, MapPin, Phone, Car, CalendarDays, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getGoogleReviews } from "@/lib/google-reviews";
import { ReviewMarquee } from "@/components/home/ReviewMarquee";
import { ReviewsSlider } from "@/components/home/ReviewsSlider";
import { GalleryLightbox, type GalleryPhoto } from "@/components/home/GalleryLightbox";
import { GoogleIcon } from "@/components/home/GoogleIcon";

const hero = "/images/hero.jpg";
const pool = "/images/pool.jpg";
const playground = "/images/playground.jpg";
const orchard = "/images/dog.jpg";
const parkHero = "/images/park-hero.jpg";
const basketballImg = "/images/basketball.jpg";
const volleyballImg = "/images/volleyball.jpg";
const longTermHero = "/images/rv-site-new.jpg";
const store = "/images/gallery/park_office_full.jpg";
const rvsite = "/images/rvsite.jpg";
const gameroom = "/images/gameroom.jpg";
const minigolf = "/images/minigolf.jpg";
const badminton = "/images/gallery/badminton_full.jpg";
const horseshoes = "/images/Rechall.jpg";
const sunset = "/images/gallery/office_sunset_full.jpg";
const campers = "/images/gallery/park_campers_full.jpg";
const swimmingPool = "/images/gallery/swimming_pool_full.jpg";
const playgroundFull = "/images/gallery/playground_full.jpg";

const ADDRESS = "2921 Pilgrimport Road, Lyons, NY 14489";
const PHONE_DISPLAY = "(315) 946-4436";
const PHONE_TEL = "3159464436";
const BOOK_URL = "https://www.campspot.com/book/nor-win-campground";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const DIRECTIONS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;

const galleryPhotos: GalleryPhoto[] = [
  { src: campers, alt: "Campers enjoying Nor Win Campground" },
  { src: "/images/sign.jpg", alt: "Happy Campers Welcome sign at Nor Win" },
  { src: swimmingPool, alt: "Swimming pool at Nor Win" },
  { src: playgroundFull, alt: "Playground at Nor Win" },
  { src: rvsite, alt: "RV site at Nor Win" },
  { src: badminton, alt: "Badminton court at Nor Win" },
  { src: horseshoes, alt: "Horseshoe pits at Nor Win" },
  { src: orchard, alt: "Orchard at Nor Win Fruit Farm" },
];

export default async function Home() {
  const reviews = await getGoogleReviews();

  const stat2 =
    reviews.total > 0
      ? { value: String(reviews.total), label: "Google Reviews" }
      : { value: "1966", label: "Established" };

  return (
    <Layout>
      {/* Hero — left-aligned, Google rating pill, headline, CTA, stat row */}
      <section className="relative h-[82vh] min-h-[600px] w-full overflow-hidden">
        <img src={hero} alt="Nor Win Campground" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
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
                <span>{reviews.total} Reviews</span>
              </a>
            )}

            <h1 className="font-sans text-5xl md:text-7xl max-w-3xl leading-[1.05] font-light">
              Nor Win Campground
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg opacity-95 leading-relaxed">
              Welcome to Nor Win Campground — a campground in Lyons, New York, and one of Wayne County&rsquo;s best-kept secrets since 1966.
            </p>

            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-[var(--forest)] text-white rounded-lg px-7 py-3.5 text-sm font-semibold hover:bg-[var(--forest-deep)] transition-colors"
            >
              Reserve Your Site
            </a>

            <div className="mt-16 flex items-center gap-12 md:gap-16">
              <div>
                <p className="text-4xl md:text-5xl font-bold">200+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] opacity-85">RV Sites</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold">{stat2.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] opacity-85">{stat2.label}</p>
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
            Nor Win Campground in Lyons, NY
          </h2>
          <div className="space-y-6 text-[var(--foreground)] leading-relaxed">
            <p>
              Welcome to Nor Win Campground — now under new ownership — a campground in Lyons, New York, and one of Wayne County&rsquo;s best-kept secrets since 1966. Tucked along Pilgrimport Road, our property features spacious, shaded sites with fire rings and picnic tables available upon request, plus a seasonal pool, playground, pavilion, and a peaceful on-site pond. The camp store carries ice cream, drinks, candy, firewood, ice, RV supplies, and propane refills, while practical amenities include public bathrooms with private showers and a dump station. We&rsquo;re open May 1 through October 1, so there&rsquo;s plenty of season to enjoy. Head to our{" "}
              <Link href="/amenities" className="underline text-[var(--forest-deep)] font-medium">amenities</Link> page for the full picture of what you can expect during your stay.
            </p>
            <p>
              Located near some of New York&rsquo;s top destinations, Nor Win makes an excellent home base for exploring the area. Rochester, about 35 miles west, is home to the{" "}
              <Link href="/about/nearby" className="underline text-[var(--forest-deep)] font-medium">Strong National Museum of Play</Link>, the{" "}
              <Link href="/about/nearby" className="underline text-[var(--forest-deep)] font-medium">Public Market</Link>, and the{" "}
              <Link href="/about/nearby" className="underline text-[var(--forest-deep)] font-medium">George Eastman Museum</Link>. The{" "}
              <Link href="/about/nearby" className="underline text-[var(--forest-deep)] font-medium">Finger Lakes wine trails</Link> along Seneca, Cayuga, and Keuka Lakes are about 30 miles south, with more than 100 wineries and{" "}
              <Link href="/about/nearby" className="underline text-[var(--forest-deep)] font-medium">Watkins Glen State Park</Link>.{" "}
              <Link href="/about/nearby" className="underline text-[var(--forest-deep)] font-medium">Sodus Bay</Link> on Lake Ontario is a quick trip north for the historic lighthouse and fishing charters. Whether you&rsquo;re planning a quiet camping retreat or a fun-filled family getaway, Nor Win offers the perfect balance of comfort, recreation, and convenience.
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
                text: "Nor Win has been a seasonal home for families since 1966, and our long term sites reflect that. Claim your spot for the season and spend your summers at Nor Win in Wayne County.",
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
              { img: pool, label: "Swimming Pool" },
              { img: playground, label: "Playground" },
              { img: store, label: "Camp Store" },
              { img: horseshoes, label: "Rec Hall" },
              { img: volleyballImg, label: "Volleyball" },
              { img: basketballImg, label: "Basketball" },
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
            className="inline-flex items-center gap-2 bg-[var(--forest)] text-white rounded-lg px-6 py-3 text-sm font-semibold hover:bg-[var(--sage)] hover:text-[var(--forest-deep)] transition-colors whitespace-nowrap"
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
              title="Nor Win Campground location"
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
            Ready to experience the top campground in Lyons, NY?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Whether you are booking a weekend getaway or settling in for longer, we would love to have you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[var(--forest)] text-white rounded-lg px-8 py-3.5 text-sm font-semibold hover:bg-[var(--sage)] hover:text-[var(--forest-deep)] transition-colors"
            >
              Book Now
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white rounded-lg px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
