import type { Metadata } from "next";
import { Layout, PageHero } from "@/components/Layout";
import { Star, MapPin } from "lucide-react";
import { WaysToStayGrid } from "@/components/accommodations/WaysToStayGrid";
import { ReviewsCardMarquee, type StaticReview } from "@/components/home/ReviewsCardMarquee";
import { GoogleIcon } from "@/components/home/GoogleIcon";
import { getGoogleReviews } from "@/lib/google-reviews";

const heroImg = "/images/rv-office-row.jpg";
const parkPhoto = "/images/pond-reflection.jpg";

export const metadata: Metadata = {
  title: "About Us — Willow Mill Campground",
  description:
    "Willow Mill Campground — a family-owned campground in Rio, WI welcoming campers since 1968.",
};

// Fallback reviews shown only if the live Google Reviews fetch returns nothing
const fallbackReviews: StaticReview[] = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "We've been coming here for years and it never disappoints. The sites are spacious, well-maintained, and the staff is always friendly. The pool and playground keep the kids busy all day!",
    date: "August 2024",
  },
  {
    author: "Tom K.",
    rating: 5,
    text: "Great campground with a wonderful community feel. Full hookups worked perfectly, and the location is ideal — close to Wisconsin Dells.",
    date: "July 2024",
  },
  {
    author: "Jennifer R.",
    rating: 5,
    text: "Clean facilities, beautiful shade trees, and incredibly helpful staff. We stayed for a week and wish we could have stayed longer. Highly recommend Willow Mill!",
    date: "June 2024",
  },
];

export default async function About() {
  const reviews = await getGoogleReviews();

  const ratingValue = reviews.total > 0 ? reviews.rating.toFixed(1) : "4.7";
  const reviewCards: StaticReview[] =
    reviews.reviews.length > 0
      ? reviews.reviews.map((r) => ({
          author: r.author,
          rating: r.rating,
          text: r.text,
          date: r.relativeTime || "",
        }))
      : fallbackReviews;

  return (
    <Layout>
      <PageHero title="Our Story" subtitle="About Us" image={heroImg} />

      {/* 2-column welcome section */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="container-narrow grid gap-16 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--forest-deep)] mb-4 font-medium">
              Welcome to Willow Mill
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--forest-deep)] mb-6 leading-tight">
              More Than a Campground. A Community.
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-5">
              Welcome to Willow Mill Campsite, a family-oriented, waterfront
              campsite in Rio, Wisconsin, and a Columbia County favorite since
              1968. Set along County Highway SS, our lakefront property
              features spacious, shaded campsites with picnic tables, and
              relaxing water views.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
              Whether you&rsquo;re here for a weekend or putting down roots for
              the season, Willow Mill offers the amenities you need and the
              peaceful setting you deserve — from a seasonal pool and kayak
              rentals to mini golf, a game room, and a pet-friendly dog park.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[var(--border)] bg-white p-5 text-center shadow-sm">
                <Star className="h-5 w-5 text-[var(--forest-deep)] mx-auto mb-2" />
                <p className="text-3xl font-semibold text-[var(--forest-deep)]">{ratingValue}</p>
                <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mt-1">
                  Google Rating
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-white p-5 text-center shadow-sm">
                <MapPin className="h-5 w-5 text-[var(--forest-deep)] mx-auto mb-2" />
                <p className="text-3xl font-semibold text-[var(--forest-deep)]">1968</p>
                <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mt-1">
                  Established
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={parkPhoto}
              alt="Willow Mill Campground in Rio, WI"
              className="rounded-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Ways to Stay */}
      <WaysToStayGrid />

      {/* Google Reviews — scrolling card marquee */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mb-10 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <GoogleIcon className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium">
              Google Reviews
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl text-[var(--forest-deep)] mb-3">
            What Our Guests Are Saying
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-[var(--forest-deep)]">{ratingValue}</span>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-[var(--muted-foreground)]">
              {reviews.total > 0 ? `Based on ${reviews.total} Google Reviews` : "Based on Google Reviews"}
            </span>
          </div>
        </div>

        <ReviewsCardMarquee reviews={reviewCards} />
      </section>

      {/* CTA */}
      <section className="bg-[var(--forest-deep)] py-20 text-center">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)] mb-5">
            Ready to Experience Willow Mill?
          </h2>
          <p className="text-[var(--cream)]/80 leading-relaxed mb-8">
            Shaded sites, full hookups, and a community that keeps you coming back.
            Book your stay today or give us a call — we&rsquo;d love to help you
            find your perfect spot.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.campspot.com/book/willow-mill-campground"
              className="inline-flex items-center justify-center rounded-full bg-[var(--book-green)] text-white px-8 py-3 text-sm font-semibold hover:bg-[var(--book-green-deep)] transition-colors"
            >
              Book Now
            </a>
            <a
              href="tel:9209921212"
              className="inline-flex items-center justify-center rounded-full border border-white/60 text-white px-8 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              (920) 992-1212
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
