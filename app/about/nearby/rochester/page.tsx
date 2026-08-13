import type { Metadata } from "next";
import { NearbyCityPage } from "@/components/NearbyCityPage";

const hero = "/images/orchard.jpg";
const cityImg = "/images/nearby/rochester-city.jpg";
const strongMuseum = "/images/nearby/strong-museum.jpg";
const publicMarket = "/images/nearby/public-market.jpg";
const eastmanMuseum = "/images/museum.jpg";

const dir = (dest: string) => `https://maps.google.com/?q=${encodeURIComponent(dest)}`;

export const metadata: Metadata = {
  title: "Rochester, NY — Near Nor Win Campground",
  description: "Plan your visit to Rochester, NY from Nor Win Campground in Lyons. About 35 minutes west along the Erie Canal.",
};

export default function RochesterPage() {
  return (
    <NearbyCityPage
      hero={hero}
      heroImage={cityImg}
      cityName="Rochester"
      state="NY"
      introTitle="A short drive west on the Erie Canal"
      introBody="Located just 35 minutes west of Nor Win Campground, Rochester is the third-largest city in New York and an easy day trip. The drive follows the Erie Canal corridor through small canal towns, rolling farmland, and apple orchards before opening into the city along the Genesee River. A great mix of museums, markets, and lakefront stops, all reachable in well under an hour."
      attractions={[
        {
          img: strongMuseum,
          name: "Strong National Museum of Play",
          body: "The Strong is one of the largest play and history museums in the country, with hands-on exhibits for every age — a giant indoor butterfly garden, a working 1950s diner, the National Toy Hall of Fame, and the World Video Game Hall of Fame. Easily a half-day stop with kids, and a surprisingly fun one without them.",
          learnMore: dir("Strong National Museum of Play, Rochester, NY"),
        },
        {
          img: publicMarket,
          name: "Rochester Public Market",
          body: "One of the country's longest-running farmers' markets, operating since 1827. Saturday mornings draw the biggest crowds — more than 300 local vendors selling produce, baked goods, cheeses, flowers, and street food from around the world. A good first stop on any Rochester day trip.",
          learnMore: dir("Rochester Public Market, Rochester, NY"),
        },
        {
          img: eastmanMuseum,
          name: "George Eastman Museum",
          body: "The mansion and gardens of Kodak founder George Eastman, now the world's oldest photography museum. Permanent collections span the entire history of photography and motion pictures, plus rotating exhibits, a restored conservatory, and beautifully kept formal gardens out back.",
          learnMore: dir("George Eastman Museum, Rochester, NY"),
        },
      ]}
      directionsTitle="Easy drive, easy return"
      directionsBody="After a day in Rochester, the drive back along the Erie Canal makes for a relaxing end to the trip. Reserve your"
      mapsEmbedUrl="https://www.google.com/maps?saddr=NorWin+Campground,+Lyons,+NY&daddr=Rochester,+NY&output=embed"
    />
  );
}
