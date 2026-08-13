import { Star } from "lucide-react";
import type { GoogleReviewsPayload } from "@/lib/google-reviews";
import { GoogleIcon, hashColor } from "./GoogleIcon";

/**
 * Reviews section styled after Willow Mill's homepage: a Google-badged
 * label, an overall rating summary, and an auto-scrolling row of
 * review cards with avatar initials. Uses Nor Win's live Google review
 * data only — falls back to a simple "see reviews" link if no reviews
 * are available, rather than inventing testimonials.
 */
export function ReviewsSlider({ data }: { data: GoogleReviewsPayload }) {
  const cards = data.reviews.filter((r) => r.text && r.text.trim().length > 0);
  const track = cards.length > 0 ? [...cards, ...cards] : [];

  return (
    <section className="bg-[var(--cream)] py-24">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)] mb-3">
            <GoogleIcon className="h-4 w-4" /> Google Reviews
          </p>
          <h2 className="font-sans text-3xl md:text-4xl font-medium text-[var(--forest-deep)] mb-5">
            What Our Guests Are Saying
          </h2>
          {data.total > 0 && (
            <div className="flex items-center gap-3">
              <p className="text-4xl font-bold text-[var(--forest-deep)]">{data.rating.toFixed(1)}</p>
              <div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(data.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-[var(--muted-foreground)]">Based on {data.total} reviews</p>
              </div>
            </div>
          )}
        </div>

        {cards.length > 0 ? (
          <div className="overflow-hidden -mx-6">
            <div className="flex w-max gap-5 marquee-track-slow px-6">
              {track.map((r, i) => (
                <article
                  key={i}
                  className="relative bg-white p-6 rounded-xl shadow-sm w-[300px] shrink-0"
                >
                  <GoogleIcon className="h-5 w-5 absolute top-5 right-5" />
                  <div className="flex items-center gap-3 mb-3">
                    {r.photo ? (
                      <img
                        src={r.photo}
                        alt={r.author}
                        className="h-10 w-10 rounded-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div
                        className="h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                        style={{ backgroundColor: hashColor(r.author) }}
                      >
                        {r.author.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-[var(--forest-deep)] text-sm">{r.author}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{r.relativeTime}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`h-3.5 w-3.5 ${j < r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed line-clamp-5">
                    {r.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-[var(--muted-foreground)]">
            {data.error ? "Reviews are temporarily unavailable." : "No reviews to show yet."}
          </p>
        )}

        {data.mapsUri && (
          <div className="mt-10">
            <a
              href={data.mapsUri}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--forest-deep)] text-[var(--forest-deep)] rounded-lg px-6 py-3 text-sm font-medium hover:bg-[var(--forest-deep)] hover:text-white transition-colors"
            >
              See all reviews on Google
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
