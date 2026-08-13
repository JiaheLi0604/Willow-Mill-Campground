import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { Phone } from "lucide-react";

const heroImg = "/images/work-order-hero.png";
const campPhoto = "/images/park-hero.jpg";

export const metadata: Metadata = {
  title: "Work Order Form — Willow Mill Campground",
  description:
    "Submit a maintenance work order request for your site at Willow Mill Campground in Rio, WI.",
};

export default function WorkOrder() {
  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex h-[420px] items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="font-serif text-5xl md:text-7xl">Work Order Form</h1>
        </div>
      </section>

      {/* ── How Will the Work Order Work? (2-col) ────────────────────── */}
      <section className="bg-[var(--bg)] py-20">
        <div className="container-narrow">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Left */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--forest-deep)] font-semibold mb-4">
                Campground Work Order
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--forest-deep)] mb-6 leading-snug">
                How Will The Work Order Work?
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Once a work order has been filed and processed, one member of
                the Willow Mill maintenance team will stop by and inspect the work
                order area. Once that is done, we will begin the process of
                completing the work order. Once the work order sheet has been
                handed off to either the Head Maintenance or General Manager,
                one will stop by to inspect and make sure it has been done
                correctly. Once it has been signed off as completed, the
                individual that filled out the form will receive an email
                stating the work order has been completed.
              </p>
            </div>

            {/* Right — campground photo */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={campPhoto}
                alt="Willow Mill Campground"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── How Fast? (1-col) ────────────────────────────────────────── */}
      <section className="bg-[var(--bg)] pb-20">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--forest-deep)] mb-6">
            How Fast Will The Work Order Be Completed?
          </h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            Our Maintenance staff will ensure all work orders are done as soon
            as we are able to get to them. We understand some items may not be a
            top priority and will do our best to ensure that work orders that
            are more concerning will be done first over those that are not too
            alarming. We do wish for all campers to understand that we are
            working our hardest to ensure the campground is running smoothly for
            all seasonal as well as those joining us for the weekend.
          </p>
        </div>
      </section>

      {/* ── Work Order Form ──────────────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-[var(--border)]">
        <div className="container-narrow max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--forest-deep)] font-semibold mb-4">
            Submit a Request
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--forest-deep)] mb-10">
            Work Order Request Form
          </h2>

          <form
            action="mailto:norwin@example.com"
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[var(--forest-deep)]"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-md border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--forest-deep)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)]/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="site"
                  className="text-sm font-medium text-[var(--forest-deep)]"
                >
                  Site Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="site"
                  name="site"
                  type="text"
                  required
                  placeholder="e.g. 42"
                  className="rounded-md border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--forest-deep)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)]/40"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[var(--forest-deep)]"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-md border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--forest-deep)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)]/40"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="issue"
                className="text-sm font-medium text-[var(--forest-deep)]"
              >
                Issue Type <span className="text-red-500">*</span>
              </label>
              <select
                id="issue"
                name="issue"
                required
                className="rounded-md border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--forest-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)]/40"
              >
                <option value="">Select an issue type</option>
                <option value="electrical">Electrical</option>
                <option value="water-sewer">Water / Sewer</option>
                <option value="road-grounds">Road / Grounds</option>
                <option value="amenity">Amenity / Facility</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="description"
                className="text-sm font-medium text-[var(--forest-deep)]"
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                placeholder="Please describe the issue in as much detail as possible."
                className="rounded-md border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--forest-deep)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)]/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[var(--forest-deep)] text-white px-8 py-3 text-sm font-semibold hover:bg-[var(--forest)] transition-colors"
            >
              Submit Work Order
            </button>
          </form>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[var(--forest-deep)] py-20 text-center">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)] mb-5">
            Ready to Experience Willow Mill?
          </h2>
          <p
            className="text-[var(--cream)]/80 leading-relaxed mb-8 mx-auto"
            style={{ maxWidth: "530px" }}
          >
            Book your stay at Willow Mill Campground and enjoy a relaxing getaway in
            Rio, WI — we&rsquo;re here to make sure everything runs smoothly
            from the moment you arrive.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.campspot.com/book/willow-mill-campground"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--book-green)] text-white px-8 py-3 text-sm font-semibold hover:brightness-110 transition-all"
            >
              Book Now
            </a>
            <a
              href="tel:9209921212"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 text-white px-8 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (920) 992-1212
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
