"use client";

import Link from "next/link";
import { Layout, PageHero } from "./Layout";

export type Attraction = {
  img: string;
  name: string;
  body: string;
  learnMore?: string;
};

export type NearbyCityPageProps = {
  hero: string;
  cityName: string;
  state: string;
  heroImage: string;
  introTitle: string;
  introBody: string;
  attractions: Attraction[];
  directionsTitle: string;
  directionsBody: string;
  mapsEmbedUrl: string;
};

export function NearbyCityPage(props: NearbyCityPageProps) {
  return (
    <Layout>
      <PageHero title={`${props.cityName}, ${props.state}`} subtitle="Nearby" image={props.hero} />

      {/* Intro: image + title + body */}
      <section className="bg-white py-20">
        <div className="container-narrow grid gap-12 md:grid-cols-2 items-center">
          <img
            src={props.heroImage}
            alt={props.cityName}
            className="w-full aspect-[4/3] object-cover rounded-sm"
            loading="lazy"
          />
          <div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-[var(--forest-deep)] leading-tight mb-6">
              {props.introTitle}
            </h2>
            <p className="text-[var(--foreground)] leading-relaxed mb-8">{props.introBody}</p>
            <a
              href={props.mapsEmbedUrl.replace("&output=embed", "")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--forest-deep)] text-white px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-[var(--forest)] transition-colors"
            >
              DIRECTIONS TO {props.cityName.toUpperCase()}
            </a>
          </div>
        </div>
      </section>

      {/* Things to do */}
      <section className="bg-white pb-16">
        <div className="container-narrow">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[var(--forest-deep)] mb-16">
            Things to do while in {props.cityName}
          </h2>
          <div className="space-y-20">
            {props.attractions.map((a) => (
              <div key={a.name} className="grid gap-12 md:grid-cols-2 items-start">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full aspect-[4/3] object-cover rounded-sm"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-serif font-bold text-3xl md:text-4xl text-[var(--forest-deep)] mb-6">
                    {a.name.split("&").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="font-sans font-normal">&amp;</span>}
                      </span>
                    ))}
                  </h3>
                  <p className="text-[var(--foreground)] leading-relaxed mb-8">{a.body}</p>
                  {a.learnMore && (
                    <a
                      href={a.learnMore}
                      target="_blank"
                      rel="noopener noreferrer"
                      referrerPolicy="no-referrer"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open(a.learnMore, "_blank", "noopener,noreferrer");
                      }}
                      className="inline-block bg-[var(--forest-deep)] text-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[var(--forest)] transition-colors"
                    >
                      LEARN MORE
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + closing copy */}
      <section className="bg-white py-20">
        <div className="container-narrow grid gap-12 md:grid-cols-2 items-center">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-[var(--border)]">
            <iframe
              title={`Directions from Nor Win Campground to ${props.cityName}`}
              src={props.mapsEmbedUrl}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h3 className="font-serif font-bold text-3xl md:text-4xl text-[var(--forest-deep)] mb-6">
              {props.directionsTitle}
            </h3>
            <p className="text-[var(--foreground)] leading-relaxed mb-8">
              {props.directionsBody}{" "}
              <Link href="/accommodations/rv-sites" className="underline text-[var(--forest-deep)]">
                full hookup RV spot
              </Link>{" "}
              today and experience the best of the Finger Lakes region.
            </p>
            <Link
              href="/about/nearby"
              className="inline-block border border-[var(--forest-deep)] text-[var(--forest-deep)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[var(--forest-deep)] hover:text-white transition-colors"
            >
              ← Back to Nearby
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
