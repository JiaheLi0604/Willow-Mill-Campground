import type { Metadata } from "next";
import { NearbyCityPage } from "@/components/NearbyCityPage";

const hero = "/images/orchard.jpg";
const watkinsGlen = "/images/nearby/watkins-glen.jpg";
const senecaWine = "/images/nearby/seneca-wine.jpg";
const senecaLake = "/images/lake.jpg";
const corningGlass = "/images/nearby/corning-glass.jpg";

const dir = (dest: string) => `https://maps.google.com/?q=${encodeURIComponent(dest)}`;

export const metadata: Metadata = {
  title: "Finger Lakes, NY — Near Nor Win Campground",
  description: "Explore the Finger Lakes wine country, Watkins Glen, and Seneca Lake from Nor Win Campground in Lyons, NY.",
};

export default function FingerLakesPage() {
  return (
    <NearbyCityPage
      hero={hero}
      heroImage={senecaWine}
      cityName="Finger Lakes"
      state="NY"
      introTitle="Wine country, waterfalls, and lake towns"
      introBody="The Finger Lakes begin about 30 miles south of Nor Win Campground. The region carries more than 100 wineries across Seneca, Cayuga, and Keuka Lakes, plus some of the most dramatic state park gorges in the Northeast. A scenic 45-minute drive south puts you in the middle of one of the country's premier wine regions, with plenty to see whether you're tasting, hiking, or just driving the lake roads."
      attractions={[
        {
          img: watkinsGlen,
          name: "Watkins Glen State Park",
          body: "The gorge trail at Watkins Glen has run since the 1860s and is still one of the most-visited natural attractions in New York. A 1.5-mile path climbs past 19 waterfalls along the Glen Creek gorge, with stone bridges, tunnels, and overlooks the whole way. Best earlier in the day before the parking fills up.",
          learnMore: dir("Watkins Glen State Park, Watkins Glen, NY"),
        },
        {
          img: senecaLake,
          name: "Seneca Lake Wine Trail",
          body: "Seneca is the largest of the Finger Lakes and home to more than 30 wineries on a single loop trail. The east side is best known for Rieslings, the west side for reds. Most tasting rooms are walk-in friendly and many have lake views, so you can hit two or three in a relaxed afternoon without a tour bus.",
          learnMore: dir("Seneca Lake Wine Trail, Geneva, NY"),
        },
        {
          img: corningGlass,
          name: "Corning Museum of Glass",
          body: "An hour south in Corning, this is one of the largest glass museums in the world — 50,000+ glass objects, live glassblowing demonstrations every 30 minutes, and a make-your-own-glass studio where you walk out with your own piece. A great rainy-day option that easily fills a half day.",
          learnMore: dir("Corning Museum of Glass, Corning, NY"),
        },
      ]}
      directionsTitle="Wine country at your doorstep"
      directionsBody="After a day in the Finger Lakes, the drive back to camp winds through quiet farm country and small canal towns. Reserve your"
      mapsEmbedUrl="https://www.google.com/maps?saddr=NorWin+Campground,+Lyons,+NY&daddr=Watkins+Glen,+NY&output=embed"
    />
  );
}
