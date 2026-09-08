"use client";

import { Layout } from "@/components/Layout";
import { Phone, MapPin, Clock } from "lucide-react";

const heroImg = "/images/park-hero.jpg";
const PHONE = "(920) 992-1212";
const PHONE_HREF = "tel:9209921212";
const ADDRESS_LINE1 = "N5830 County Hwy SS";
const ADDRESS_LINE2 = "Rio, WI 53960";
const DIRECTIONS_URL =
  "https://maps.google.com/?q=N5830+County+Hwy+SS,+Rio,+WI+53960";
const MAP_EMBED =
  "https://maps.google.com/maps?q=Willow+Mill+Campground+Rio+WI+53960&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function Contact() {
  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          paddingTop: "10rem",
          paddingBottom: "10rem",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(34,23,17,0.50)" }} />
        <div className="relative z-10 px-4">
          <h1
            className="font-serif text-white font-light"
            style={{ fontSize: "clamp(1.875rem, 5vw, 3rem)" }}
          >
            Get in Touch
          </h1>
        </div>
      </section>

      {/* ── Give Us a Call (dark forest) ──────────────────────────────────── */}
      <section className="bg-[var(--forest-deep)]" style={{ padding: "3rem 24px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "1280px" }}>
          <h2
            className="font-serif font-light text-[#faf8f5] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Give Us a Call
          </h2>
          <p
            className="text-[#faf8f5] mb-8 mx-auto"
            style={{ maxWidth: "560px", fontSize: "16px", opacity: 0.9 }}
          >
            Speak directly with our friendly team. No bots, no wait — just real, helpful answers to
            plan your perfect stay at Willow Mill Campground.
          </p>
          <div className="inline-flex items-center gap-5">
            <span
              className="inline-flex items-center justify-center rounded-full text-white flex-shrink-0"
              style={{ width: "52px", height: "52px", background: "rgba(255,255,255,0.18)" }}
            >
              <Phone size={24} />
            </span>
            <a
              href={PHONE_HREF}
              className="text-[#faf8f5] font-light hover:underline"
              style={{ fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)", letterSpacing: "-0.01em" }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── Address + Hours cards (cream) ─────────────────────────────────── */}
      <section style={{ background: "#f8f7f3", paddingTop: "4rem", paddingBottom: "2rem" }}>
        <div
          className="mx-auto grid gap-6"
          style={{
            maxWidth: "1280px",
            padding: "0 24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {/* Address card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              border: "1px solid #e5e1d8",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center rounded-full bg-[var(--forest)] text-white flex-shrink-0"
                style={{ width: "44px", height: "44px" }}
              >
                <MapPin size={20} />
              </span>
              <span
                className="font-semibold text-[var(--forest-deep)] uppercase tracking-widest"
                style={{ fontSize: "12px" }}
              >
                Address
              </span>
            </div>
            <div>
              <p className="font-semibold text-[var(--forest-deep)]">{ADDRESS_LINE1}</p>
              <p style={{ color: "var(--muted-foreground)" }}>{ADDRESS_LINE2}</p>
            </div>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--forest)] font-semibold hover:underline"
              style={{ fontSize: "14px" }}
            >
              Click for directions →
            </a>
          </div>

          {/* Office Hours card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              border: "1px solid #e5e1d8",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center rounded-full bg-[var(--forest)] text-white flex-shrink-0"
                style={{ width: "44px", height: "44px" }}
              >
                <Clock size={20} />
              </span>
              <span
                className="font-semibold text-[var(--forest-deep)] uppercase tracking-widest"
                style={{ fontSize: "12px" }}
              >
                Office Hours
              </span>
            </div>
            <div className="text-[var(--forest-deep)]" style={{ fontSize: "16px" }}>
              <p className="font-semibold">Mon–Tue: Closed</p>
              <p className="font-semibold">Wed–Thu: 10am–7pm</p>
              <p className="font-semibold">Fri–Sun: 8am–8pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map + Come See Us ─────────────────────────────────────────────── */}
      <section style={{ background: "#f8f7f3", paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 24px" }}>
          {/* Map */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #e5e1d8",
              marginBottom: "2.5rem",
            }}
          >
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Willow Mill Campground location"
            />
          </div>

          {/* Come See Us — 2-col */}
          <div
            className="grid gap-8 items-start"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            {/* Left: heading + address box + phone box */}
            <div>
              <h2
                className="font-serif font-light text-[var(--forest-deep)] mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                Come See Us In Person
              </h2>
              <div
                className="flex items-start gap-3 mb-4"
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "1.25rem",
                  border: "1px solid #e5e1d8",
                }}
              >
                <span
                  className="inline-flex items-center justify-center rounded-full bg-[var(--forest)] text-white flex-shrink-0"
                  style={{ width: "38px", height: "38px", marginTop: "2px" }}
                >
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="font-semibold text-[var(--forest-deep)]">{ADDRESS_LINE1}</p>
                  <p style={{ color: "var(--muted-foreground)" }}>{ADDRESS_LINE2}</p>
                </div>
              </div>
              <div
                className="flex items-center gap-3"
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "1.25rem",
                  border: "1px solid #e5e1d8",
                }}
              >
                <span
                  className="inline-flex items-center justify-center rounded-full bg-[var(--forest)] text-white flex-shrink-0"
                  style={{ width: "38px", height: "38px" }}
                >
                  <Phone size={18} />
                </span>
                <a
                  href={PHONE_HREF}
                  className="font-semibold text-[var(--forest-deep)] hover:underline"
                >
                  {PHONE}
                </a>
              </div>
            </div>

            {/* Right: Get Directions button */}
            <div className="flex items-center">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold rounded-lg hover:brightness-110 transition-all"
                style={{
                  background: "var(--forest-deep)",
                  color: "#faf8f5",
                  padding: "13px 32px",
                  fontSize: "15px",
                }}
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
