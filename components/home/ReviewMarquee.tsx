import { Star } from "lucide-react";
import type { GoogleReview } from "@/lib/google-reviews";

/**
 * Dark scrolling strip of short review quotes, styled after Willow
 * Mill's homepage review marquee. Renders only when there are live
 * Google reviews to show — no placeholder/fabricated quotes.
 */
export function ReviewMarquee({ reviews }: { reviews: GoogleReview[] }) {
  const quotes = reviews.filter((r) => r.text && r.text.trim().length > 0);
  if (quotes.length === 0) return null;

  // Duplicate the list so the CSS animation can loop seamlessly.
  const track = [...quotes, ...quotes];

  return (
    <section className="bg-[var(--forest-deep)] py-4 overflow-hidden">
      <div className="flex w-max marquee-track">
        {track.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-10 whitespace-nowrap text-white"
          >
            <div className="flex shrink-0">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className={`h-4 w-4 ${j < r.rating ? "fill-yellow-400 text-yellow-400" : "text-white/30"}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium max-w-md truncate opacity-95">
              &ldquo;{r.text}&rdquo;
            </span>
            <span className="px-6 text-[var(--sage)]">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
