"use client";

import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Calendar, Phone } from "lucide-react";

const heroImg = "/images/rvsite.jpg";
const BOOK_URL = "https://www.campspot.com/book/nor-win-campground";

export default function Rates() {
  const [activeSection, setActiveSection] = useState("daily-weekly-rates");

  useEffect(() => {
    const sectionIds = ["daily-weekly-rates", "monthly-seasonal-rates"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative flex h-[420px] items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(34,23,17,0.50)" }} />
        <div className="relative z-10 px-4">
          <h1 className="font-serif text-5xl md:text-7xl">Rates <span className="font-sans">&</span> Pricing</h1>
        </div>
      </section>

      {/* ── Sticky Pricing Nav ────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-[9] bg-[var(--cream)] border-b border-[var(--border)]"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 flex gap-8 justify-center">
          <a
            href="#daily-weekly-rates"
            className="py-4 text-sm font-semibold text-[var(--forest-deep)] border-b-2 transition-colors"
            style={{
              borderBottomColor:
                activeSection === "daily-weekly-rates" ? "#0a4627" : "transparent",
            }}
          >
            Daily & Weekly Rates
          </a>
          <a
            href="#monthly-seasonal-rates"
            className="py-4 text-sm font-semibold text-[var(--forest-deep)] border-b-2 transition-colors"
            style={{
              borderBottomColor:
                activeSection === "monthly-seasonal-rates" ? "#0a4627" : "transparent",
            }}
          >
            Monthly & Seasonal Rates
          </a>
        </div>
      </nav>

      {/* ── Season Banner ─────────────────────────────────────────────── */}
      <section className="bg-[var(--cream)] pt-12 pb-4">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 flex justify-center">
          <div
            className="bg-white border border-[var(--border)] rounded-xl flex flex-col items-center gap-2 text-center"
            style={{ maxWidth: "480px", width: "100%", padding: "24px 32px" }}
          >
            <Calendar className="h-6 w-6 text-[var(--forest-deep)]" />
            <p className="text-base font-bold text-[var(--forest-deep)]">
              Open May 1 – October 1
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Join us for another great camping season.
            </p>
          </div>
        </div>
      </section>

      {/* ── Daily & Weekly Rates ──────────────────────────────────────── */}
      <section
        id="daily-weekly-rates"
        className="bg-[var(--cream)]"
        style={{ paddingTop: "3rem", paddingBottom: "4rem", scrollMarginTop: "56px" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="text-[0.875rem] font-semibold uppercase tracking-[0.125em] text-[var(--forest-deep)] mb-3">
            RV Sites
          </p>
          <h2
            className="font-serif font-light text-[var(--forest-deep)] mb-10"
            style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)" }}
          >
            Daily <span className="font-sans">&</span> Weekly Rates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="bg-white border border-[#ddd7c9] rounded-xl flex flex-col gap-4"
              style={{ padding: "35px" }}
            >
              <p className="text-xl font-light text-[var(--forest-deep)]">RV Sites</p>
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                  Starting at
                </p>
                <p
                  className="font-bold text-[var(--forest-deep)] leading-none"
                  style={{ fontSize: "1.875rem" }}
                >
                  $58
                  <span className="text-sm font-normal">/night</span>
                </p>
                <p
                  className="text-[var(--muted-foreground)] mt-1"
                  style={{ fontSize: "0.9375rem" }}
                >
                  $338/week
                </p>
              </div>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--forest)] text-white text-sm font-semibold hover:brightness-110 transition-all mt-auto"
                style={{ padding: "8px 25px" }}
              >
                Book Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Monthly & Seasonal Rates ──────────────────────────────────── */}
      <section
        id="monthly-seasonal-rates"
        className="bg-[var(--cream)]"
        style={{ paddingTop: "3rem", paddingBottom: "4rem", scrollMarginTop: "56px" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="text-[0.875rem] font-semibold uppercase tracking-[0.125em] text-[var(--forest-deep)] mb-3">
            RV Sites
          </p>
          <h2
            className="font-serif font-light text-[var(--forest-deep)] mb-10"
            style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)" }}
          >
            Monthly <span className="font-sans">&</span> Seasonal Rates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="bg-white border border-[#ddd7c9] rounded-xl flex flex-col gap-4"
              style={{ padding: "35px" }}
            >
              <p className="text-xl font-light text-[var(--forest-deep)]">
                Long Term RV Sites
              </p>
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                  Starting at
                </p>
                <p
                  className="font-bold text-[var(--forest-deep)] leading-none"
                  style={{ fontSize: "1.875rem" }}
                >
                  $999
                  <span className="text-sm font-normal">/month</span>
                </p>
                <p
                  className="text-[var(--muted-foreground)] mt-1"
                  style={{ fontSize: "0.9375rem" }}
                >
                  $2,652/season
                </p>
              </div>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--forest)] text-white text-sm font-semibold hover:brightness-110 transition-all mt-auto"
                style={{ padding: "8px 25px" }}
              >
                Book Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        className="bg-[var(--forest-deep)] border-b border-[#ddd7c9] text-center"
        style={{ padding: "50px 24px" }}
      >
        <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)] mb-4">
          Ready to Book Your Stay?
        </h2>
        <p
          className="text-[18px] text-[var(--cream)]/80 leading-relaxed mb-8 mx-auto"
          style={{ maxWidth: "530px" }}
        >
          Reserve your spot today and experience everything Nor Win Campground
          has to offer along the Erie Canal in Wayne County, NY.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--forest)] text-white font-semibold hover:brightness-110 transition-all"
            style={{ padding: "11px 35px" }}
          >
            Book Now
          </a>
          <a
            href="tel:3159464436"
            className="inline-flex items-center gap-2 rounded-lg border border-[#ddd7c9] text-[var(--cream)] font-semibold hover:bg-white/10 transition-colors"
            style={{ padding: "10px 23px" }}
          >
            <Phone className="h-4 w-4" />
            (315) 946-4436
          </a>
        </div>
      </section>
    </Layout>
  );
}
