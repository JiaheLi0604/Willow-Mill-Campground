"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { Phone, X, ChevronLeft, ChevronRight } from "lucide-react";

const heroImg = "/images/view5.jpg";
const BOOK_URL = "https://www.campspot.com/book/willow-mill-campground";

const IMAGES = [
  { src: "/images/gallery/park_campers_full.jpg", alt: "Campers at Willow Mill Campground" },
  { src: "/images/rv4.jpg", alt: "RV site at Willow Mill" },
  { src: "/images/rv3.jpg", alt: "RV site at Willow Mill" },
  { src: "/images/gallery/park_office_full.jpg", alt: "Park office" },
  { src: "/images/dog.jpg", alt: "Pet friendly at Willow Mill" },
  { src: "/images/spot.jpg", alt: "RV spot at Willow Mill" },
  { src: "/images/gallery/horseshoes_full.jpg", alt: "Horseshoes" },
  { src: "/images/rv.jpg", alt: "RV site at Willow Mill" },
  { src: "/images/site.jpg", alt: "RV site at Willow Mill" },
  { src: "/images/view.jpg", alt: "Pond view at Willow Mill" },
  { src: "/images/front.jpg", alt: "Willow Mill entrance sign" },
  { src: "/images/rvsite.jpg", alt: "RV site" },
  { src: "/images/view3.jpg", alt: "Park view at Willow Mill" },
  { src: "/images/rv-site-new.jpg", alt: "RV site at Willow Mill" },
  { src: "/images/bathroom.jpg", alt: "Bathrooms & Showers at Willow Mill" },
  { src: "/images/park-hero.jpg", alt: "Park view" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const figureRefs = useRef<(HTMLElement | null)[]>([]);

  const resizeItem = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    const img = el.querySelector("img");
    if (!img) return;
    const h = img.getBoundingClientRect().height;
    if (!h) return;
    el.style.gridRowEnd = `span ${Math.ceil((h + 8) / 9)}`;
  }, []);

  const resizeAll = useCallback(() => {
    figureRefs.current.forEach(resizeItem);
  }, [resizeItem]);

  useEffect(() => {
    window.addEventListener("resize", resizeAll);
    return () => window.removeEventListener("resize", resizeAll);
  }, [resizeAll]);

  // Handle already-cached images that won't fire onLoad
  useEffect(() => {
    const run = () => {
      figureRefs.current.forEach((el) => {
        if (!el) return;
        const img = el.querySelector("img") as HTMLImageElement | null;
        if (img?.complete) resizeItem(el);
      });
    };
    run();
    const t = setTimeout(run, 300);
    return () => clearTimeout(t);
  }, [resizeItem]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i != null ? (i - 1 + IMAGES.length) % IMAGES.length : null));
      else if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i != null ? (i + 1) % IMAGES.length : null));
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})`, paddingTop: "10rem", paddingBottom: "10rem" }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(34,23,17,0.25)" }} />
        <div className="relative z-10 px-4">
          <h1
            className="font-serif text-white font-light"
            style={{ fontSize: "clamp(1.875rem, 5vw, 3rem)" }}
          >
            Photo Gallery
          </h1>
        </div>
      </section>

      {/* ── Masonry Gallery ───────────────────────────────────────────────── */}
      <section className="bg-[var(--cream)]" style={{ padding: "5rem 15px" }}>
        <div
          className="mx-auto masonry-grid"
          style={{
            maxWidth: "1280px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "1px",
            gap: "8px",
          }}
        >
          {IMAGES.map((img, i) => (
            <figure
              key={img.src}
              ref={(el) => {
                figureRefs.current[i] = el as HTMLElement;
              }}
              className="cgl-gi"
              onClick={() => setLightboxIndex(i)}
              style={{
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "8px",
                alignSelf: "start",
                margin: 0,
                position: "relative",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onLoad={(e) =>
                  resizeItem(
                    (e.currentTarget as HTMLElement).closest("figure") as HTMLElement
                  )
                }
                className="gallery-img"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.3s ease",
                  borderRadius: "8px",
                }}
              />
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.22)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  borderRadius: "8px",
                  pointerEvents: "none",
                }}
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="bg-[var(--forest-deep)] border-b border-[#ddd7c9] text-center"
        style={{ padding: "50px 24px" }}
      >
        <h2
          className="font-serif font-light text-[#faf8f5] mb-4"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Like What You See?
        </h2>
        <p
          className="text-[18px] leading-relaxed mb-8 mx-auto"
          style={{ maxWidth: "530px", color: "#faf8f5" }}
        >
          Whether you are booking a weekend getaway or settling in for the season, we would love to
          have you. Reserve your site online or give us a call to get started.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--book-green)] text-white font-semibold hover:brightness-110 transition-all"
            style={{ padding: "11px 35px" }}
          >
            Book Now
          </a>
          <a
            href="tel:9209921212"
            className="inline-flex items-center gap-2 text-[#faf8f5] font-semibold hover:bg-white/10 transition-colors"
            style={{ padding: "10px 23px", border: "1px solid #ddd7c9", borderRadius: "8px" }}
          >
            <Phone className="h-4 w-4" />
            (920) 992-1212
          </a>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.93)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) =>
                i != null ? (i - 1 + IMAGES.length) % IMAGES.length : null
              );
            }}
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <img
            src={IMAGES[lightboxIndex].src}
            alt={IMAGES[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "4px",
            }}
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i != null ? (i + 1) % IMAGES.length : null));
            }}
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Hover + responsive styles */}
      <style>{`
        .cgl-gi:hover .gallery-img { transform: scale(1.05); }
        .cgl-gi:hover .gallery-overlay { opacity: 1 !important; }
        @media (max-width: 600px) {
          .masonry-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </Layout>
  );
}
