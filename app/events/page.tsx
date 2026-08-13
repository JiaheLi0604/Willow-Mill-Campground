import type { Metadata } from "next";
import { Layout, PageHero } from "@/components/Layout";
import { ComingSoon } from "@/components/ComingSoon";

const SHOW_COMING_SOON = true;

const playground = "/images/playground.jpg";

export const metadata: Metadata = {
  title: "Events — Willow Mill Campground",
  description: "Weekend schedule and 2025 special events at Willow Mill Campground in Rio, WI.",
  openGraph: {
    title: "Events — Willow Mill Campground",
    description: "Weekend schedule and 2025 special events at Willow Mill Campground.",
  },
};

const weekendSchedule: { day: string; items: string[] }[] = [
  { day: "Friday", items: ["5:00–8:00 PM | Campfire Cafe"] },
  {
    day: "Saturday",
    items: [
      "10:30-ish AM | Hayride",
      "12:00–1:00 PM | Campfire Cafe",
      "5:00–7:00 PM | Campfire Cafe",
      "7:00–8:00 PM | Fried Dough",
    ],
  },
  {
    day: "Sunday",
    items: [
      "10:30-ish AM | Hayride",
      "12:00–1:00 PM | Campfire Cafe — Pizzas and deep-fried only",
    ],
  },
];

const specialEvents: { date: string; title: string; details: string[] }[] = [
  {
    date: "MAY 24 — SUN",
    title: "Memorial Day Hot Dog Pot Luck",
    details: [
      "We'll fire up the grill and provide the hot dogs! Campers, bring your favorite side dish, salad, dessert, or drink to share. Let's gather, eat, and celebrate our freedom together!",
    ],
  },
  {
    date: "JUNE 6 — SAT",
    title: "Cards Game Night",
    details: [
      "Shuffle up and deal! Join your neighbors for a relaxing evening of cards, laughs, and friendly competition. All are welcome—bring your favorite game!",
    ],
  },
  {
    date: "JUNE 12 — FRI",
    title: "Movie Night",
    details: [
      "Grab your chairs, blankets, and snacks! Enjoy a fun movie under the stars.",
    ],
  },
  {
    date: "JUNE 19 — FRI",
    title: "Movie Night",
    details: [
      "Grab your chairs, blankets, and snacks! Enjoy a fun movie under the stars.",
    ],
  },
  {
    date: "JUNE 21 — SUN (Father's Day)",
    title: "Father's Day Breakfast & Kids Crafting",
    details: [
      "Start the day with a hearty breakfast to celebrate Dad! Then get creative with fun kids crafting activities. Fun for all ages!",
    ],
  },
  {
    date: "JUNE 26 — FRI",
    title: "Movie Night",
    details: [
      "Another chance to relax, unwind, and enjoy a great movie with friends and family.",
    ],
  },
  {
    date: "JULY 4 — SAT",
    title: "Band / DJ",
    details: [
      "Let's celebrate Independence Day in style! Live music or DJ to get us dancing.",
    ],
  },
  {
    date: "JULY 18 — SAT",
    title: "Hayride",
    details: ["Saturday morning at 10:00 AM (weather permitting)."],
  },
  {
    date: "JULY 18 — SAT",
    title: "Kids Crafting",
    details: ["Saturday at 1:00 PM — a fun crafting session for the kids."],
  },
];

export default function Events() {
  if (SHOW_COMING_SOON) {
    return (
      <Layout>
        <ComingSoon title="Events" />
      </Layout>
    );
  }
  const groupedEvents = specialEvents.reduce(
    (acc, event) => {
      const existing = acc.find((g) => g.date === event.date);
      if (existing) {
        existing.events.push({ title: event.title, details: event.details });
      } else {
        acc.push({
          date: event.date,
          events: [{ title: event.title, details: event.details }],
        });
      }
      return acc;
    },
    [] as { date: string; events: { title: string; details: string[] }[] }[]
  );

  return (
    <Layout>
      <PageHero title="Events" subtitle="2026 Season" image={playground} />

      <section className="pt-20 pb-16">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[var(--forest-deep)]/20 rounded-md p-6 bg-[var(--cream)]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--forest)] mb-3">Swimming Pool</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed">
                Our swimming pool is open for the season from Memorial Day weekend through Labor Day! Our pool is open daily, weather permitting. Pool hours are subject to change. Please observe our pool rules, posted on the pool entrance gate. Our pool is not lifeguarded. Two or more adults, 18 years of age or older, must be present at the pool when in use, with at least one adult on the pool deck. Children less than 16 years of age must at all times be accompanied by an adult responsible for their safety and behavior. All guests inside the pool fence must have a signed waiver at the office.
              </p>
            </div>
            <div className="border border-[var(--forest-deep)]/20 rounded-md p-6 bg-[var(--cream)]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--forest)] mb-3">Activities</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed">
                We offer catch-and-release fishing and frog catching in our 5 acre pond. We also have horseshoe pits, 3 playground areas, a basketball court, volleyball net, gaga ball pits, and paddle boat rentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--sage)]/10">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--forest)]">2026 Season</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif text-[var(--forest-deep)]">Special Activities</h2>
          </div>

          <div className="space-y-8">
            {groupedEvents.map((g) => (
              <article key={g.date} className="grid md:grid-cols-[220px_1fr] gap-6 border-b border-[var(--forest-deep)]/15 pb-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--forest)]">{g.date}</p>
                </div>
                <div className="space-y-6">
                  {g.events.map((e, idx) => (
                    <div key={idx}>
                      <h3 className="text-2xl font-serif text-[var(--forest-deep)] mb-3">
                        {e.title.split('&').map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && <span className="font-sans">&amp;</span>}
                          </span>
                        ))}
                      </h3>
                      {e.details.length > 0 && (
                        <ul className="list-disc pl-5 space-y-2 text-[var(--ink-soft)]">
                          {e.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm italic text-[var(--ink-soft)]">
            *All events are subject to change.*
          </p>
        </div>
      </section>
    </Layout>
  );
}
