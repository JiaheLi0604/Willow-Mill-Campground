import { Star } from "lucide-react";
import { GoogleIcon, hashColor } from "./GoogleIcon";

export interface StaticReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

/**
 * WM-style horizontally scrolling review cards strip.
 * Pure CSS animation — no client JS needed.
 */
export function ReviewsCardMarquee({ reviews }: { reviews: StaticReview[] }) {
  // Duplicate so the loop is seamless
  const track = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden">
      <div className="flex w-max marquee-track gap-5 px-5">
        {track.map((r, i) => {
          const bg = hashColor(r.author);
          const initial = r.author.charAt(0).toUpperCase();
          return (
            <div
              key={i}
              className="w-72 shrink-0 rounded-xl border border-[var(--border)] bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-sm font-semibold"
                    style={{ background: bg }}
                  >
                    {initial}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--forest-deep)] leading-tight">
                      {r.author}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">{r.date}</p>
                  </div>
                </div>
                <GoogleIcon className="h-5 w-5 shrink-0" />
              </div>
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-4 w-4 ${j < r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200 fill-gray-200"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-3">
                &ldquo;{r.text}&rdquo;
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
