import type { Metadata } from "next";
import { NearbyCityPage } from "@/components/NearbyCityPage";

const hero = "/images/lake.jpg";
const heroImage = "/images/view.jpg";
const boatTours = "/images/view2.jpg";
const waterpark = "/images/pool.jpg";
const lostCanyon = "/images/view3.jpg";

const dir = (dest: string) => `https://maps.google.com/?q=${encodeURIComponent(dest)}`;

export const metadata: Metadata = {
  title: "Wisconsin Dells, WI — Near Willow Mill Campground",
  description: "Plan your visit to Wisconsin Dells from Willow Mill Campground in Rio, WI. About 30 minutes north.",
};

export default function WisconsinDellsPage() {
  return (
    <NearbyCityPage
      hero={hero}
      heroImage={heroImage}
      cityName="Wisconsin Dells"
      state="WI"
      introTitle="The Waterpark Capital of the World"
      introBody="Located about 30 minutes north of Willow Mill Campground, Wisconsin Dells is one of the state's biggest draws — famous for its towering sandstone gorges along the Wisconsin River and one of the largest concentrations of indoor and outdoor waterparks anywhere in the country. Whether you're after a scenic river cruise or an all-day waterpark visit, it's an easy day trip from camp."
      attractions={[
        {
          img: boatTours,
          name: "Dells Boat Tours",
          body: "Scenic boat tours run along both the Upper and Lower Dells, cruising past towering sandstone formations like Black Hawk Gorge and Last Look Point. Tours run from about an hour to two hours, with sunset cruises also available in season.",
          learnMore: dir("Dells Boat Tours, Wisconsin Dells, WI"),
        },
        {
          img: waterpark,
          name: "Kalahari Resort Waterparks",
          body: "Home to one of Wisconsin's largest indoor waterparks plus a seasonal outdoor waterpark, Kalahari is a go-to stop for families looking to cool off, rain or shine.",
          learnMore: dir("Kalahari Resort, Wisconsin Dells, WI"),
        },
        {
          img: lostCanyon,
          name: "Lost Canyon Tours",
          body: "A horse-drawn carriage ride through narrow rock canyons and passageways carved into the sandstone — a quieter, more scenic way to see the terrain that makes the Dells famous.",
          learnMore: dir("Lost Canyon Tours, Wisconsin Dells, WI"),
        },
      ]}
      directionsTitle="A short drive to the Dells"
      directionsBody="After a day exploring Wisconsin Dells, the drive back to camp is quick and easy. Reserve your"
      mapsEmbedUrl="https://www.google.com/maps?saddr=Willow+Mill+Campground,+Rio,+WI&daddr=Wisconsin+Dells,+WI&output=embed"
    />
  );
}
