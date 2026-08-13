import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

const BOOK_URL = "https://www.campspot.com/park/willow-mill-campground-rio-wi";
const PHONE_DISPLAY = "(920) 992-1212";
const PHONE_TEL = "9209921212";

export function ComingSoon({ title }: { title: string }) {
  return (
    <section className="bg-[var(--cream)] py-28 md:py-36 text-center">
      <div className="container-narrow max-w-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)] mb-4">
          {title}
        </p>
        <h1 className="font-sans text-3xl md:text-5xl font-medium text-[var(--forest-deep)] mb-5">
          This Page Is Coming Soon
        </h1>
        <p className="text-[var(--foreground)] leading-relaxed mb-10">
          We&rsquo;re still updating this section of the site. In the meantime,
          give us a call or head straight to booking — we&rsquo;d love to have you
          at Willow Mill.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            className="inline-flex items-center justify-center gap-2 border border-[var(--forest-deep)] text-[var(--forest-deep)] rounded-lg px-8 py-3.5 text-sm font-semibold hover:bg-white transition-colors"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-[var(--forest-deep)] hover:text-[var(--forest)]"
        >
          Back to Home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
