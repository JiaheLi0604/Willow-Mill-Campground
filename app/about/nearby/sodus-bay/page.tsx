import type { Metadata } from "next";
import { NearbyCityPage } from "@/components/NearbyCityPage";

const hero = "/images/orchard.jpg";
const sodusHarbor = "/images/nearby/sodus-harbor.jpg";
const sodusLighthouse = "/images/nearby/sodus-lighthouse.jpg";
const chimneyBluffs = "/images/nearby/chimney-bluffs.jpg";
const lakeFishing = "/images/nearby/lake-fishing.jpg";

const dir = (dest: string) => `https://maps.google.com/?q=${encodeURIComponent(dest)}`;

export const metadata: Metadata = {
  title: "Sodus Bay, NY — Near Nor Win Campground",
  description: "Visit Sodus Bay and Lake Ontario from Nor Win Campground in Lyons, NY — about 25 minutes north.",
};

export default function SodusBayPage() {
  return (
    <NearbyCityPage
      hero={hero}
      heroImage={sodusHarbor}
      cityName="Sodus Bay"
      state="NY"
      introTitle="Harbor town on Lake Ontario"
      introBody="Sodus Bay sits about 25 minutes north of Nor Win Campground, where Wayne County meets the south shore of Lake Ontario. It's a working harbor town with a small downtown, a historic lighthouse, and a deep protected bay that draws boaters, anglers, and weekend cruisers. An easy half-day trip from camp, and a great place to catch the sunset over the lake."
      attractions={[
        {
          img: sodusLighthouse,
          name: "Sodus Bay Lighthouse Museum",
          body: "The 1871 lighthouse sits at the entrance to the bay and now houses a small maritime museum covering the area's shipping, fishing, and Great Lakes navigation history. Climb the tower for a 360-degree view of the bay, the harbor, and Lake Ontario beyond.",
          learnMore: dir("Sodus Bay Lighthouse Museum, Sodus Point, NY"),
        },
        {
          img: chimneyBluffs,
          name: "Chimney Bluffs State Park",
          body: "A short drive east of Sodus Bay, Chimney Bluffs is a dramatic stretch of clay spires rising 150 feet straight out of Lake Ontario, carved by wind and water. A 1.5-mile bluff-top trail follows the formations with steady lake views — best in the late afternoon when the light hits the spires.",
          learnMore: dir("Chimney Bluffs State Park, Wolcott, NY"),
        },
        {
          img: lakeFishing,
          name: "Lake Ontario Fishing & Charters",
          body: "Sodus Bay is one of the most popular launch points on the south shore of Lake Ontario for salmon, lake trout, and brown trout. Charters run from spring through fall, and the annual fishing tournaments held each summer pull competitors from across the state. The bay itself is also a great spot for bass and panfish.",
          learnMore: dir("Sodus Point, NY"),
        },
      ]}
      directionsTitle="A quick trip to the lake"
      directionsBody="After a day at the bay, the drive back to camp takes you through fruit orchards and small Wayne County towns. Reserve your"
      mapsEmbedUrl="https://www.google.com/maps?saddr=NorWin+Campground,+Lyons,+NY&daddr=Sodus+Point,+NY&output=embed"
    />
  );
}
