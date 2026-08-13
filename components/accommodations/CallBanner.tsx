import { Phone } from "lucide-react";

/**
 * Phone CTA banner styled after Willow Mill's "Not sure which site is
 * right for you? Give us a call." section on the RV Sites page.
 */
export function CallBanner() {
  return (
    <section className="bg-[var(--forest-deep)] py-12 text-center text-[var(--cream)]">
      <div className="container-narrow flex flex-col items-center gap-4">
        <p className="text-2xl md:text-3xl font-medium">
          Not sure which site is right for you? Give us a call.
        </p>
        <a
          href="tel:3159464436"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--cream)] px-8 py-3 text-base font-semibold text-[var(--forest-deep)] hover:bg-white transition-colors"
        >
          <Phone className="h-4 w-4" /> (315) 946-4436
        </a>
      </div>
    </section>
  );
}
