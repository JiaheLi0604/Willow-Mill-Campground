import type { Metadata } from "next";
import { NearbyCityPage } from "@/components/NearbyCityPage";

const hero = "/images/wisconsin-dells-hero.jpg";
const heroImage = "/images/wisconsin-dells-intro.jpg";
const boatTours = "/images/wisconsin-dells-boat-tour.jpg";
const waterpark = "/images/wisconsin-dells-waterpark.jpg";
const witchesGulch = "/images/wisconsin-dells-canyon.jpg";

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
          img: witchesGulch,
          name: "Witches Gulch",
          body: "A narrow, moss-covered sandstone canyon reached by a short boat ride followed by a wooden boardwalk trail. It's one of the most scenic and photographed spots in the Dells — cool, shaded, and a great stop for anyone who wants to see the gorge scenery up close on foot.",
          learnMore: dir("Witches Gulch, Wisconsin Dells, WI"),
        },
      ]}
      directionsTitle="A short drive to the Dells"
      directionsBody="After a day exploring Wisconsin Dells, the drive back to camp is quick and easy. Reserve your"
      mapsEmbedUrl="https://www.google.com/maps?saddr=Willow+Mill+Campground,+Rio,+WI&daddr=Wisconsin+Dells,+WI&output=embed"
    />
  );
}
