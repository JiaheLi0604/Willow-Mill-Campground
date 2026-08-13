import type { Metadata } from "next";
import { NearbyCityPage } from "@/components/NearbyCityPage";

const hero = "/images/view3.jpg";
const heroImage = "/images/view4.jpg";
const mounds = "/images/park-hero.jpg";
const stockade = "/images/view5.jpg";
const river = "/images/pond.jpg";

const dir = (dest: string) => `https://maps.google.com/?q=${encodeURIComponent(dest)}`;

export const metadata: Metadata = {
  title: "Aztalan State Park, WI — Near Willow Mill Campground",
  description: "Visit Aztalan State Park near Lake Mills, WI from Willow Mill Campground in Rio, WI.",
};

export default function AztalanPage() {
  return (
    <NearbyCityPage
      hero={hero}
      heroImage={heroImage}
      cityName="Aztalan State Park"
      state="WI"
      introTitle="A National Historic Landmark on the Crawfish River"
      introBody="About 45 minutes from Willow Mill Campground, near Lake Mills, Aztalan State Park preserves the site of a fortified village built by people of the Mississippian culture around 1050 A.D., who lived alongside local Woodland communities until the site was abandoned around 1200 A.D. It's considered Wisconsin's premier archaeological site and a National Historic Landmark, with interpretive trails that make it an easy, educational stop."
      attractions={[
        {
          img: mounds,
          name: "The Ancient Mounds",
          body: "Three large, flat-topped earthen mounds anchor the site, originally built to support religious structures and residences for the village's leaders. The largest features a distinctive three-tiered design.",
          learnMore: dir("Aztalan State Park Mounds, Lake Mills, WI"),
        },
        {
          img: stockade,
          name: "Reconstructed Stockade Wall",
          body: "Sections of the village's timber stockade wall have been reconstructed to show how the fortified settlement would have looked nearly a thousand years ago, giving visitors a sense of scale for the original town.",
          learnMore: dir("Aztalan State Park, Lake Mills, WI"),
        },
        {
          img: river,
          name: "The Crawfish River",
          body: "The slow-moving Crawfish River borders the eastern edge of the site and remains popular for fishing, canoeing, and kayaking — much as it was central to the original village's daily life.",
          learnMore: dir("Crawfish River, Lake Mills, WI"),
        },
      ]}
      directionsTitle="History just down the road"
      directionsBody="After a morning exploring Aztalan, the drive back to camp winds through quiet Columbia County farmland. Reserve your"
      mapsEmbedUrl="https://www.google.com/maps?saddr=Willow+Mill+Campground,+Rio,+WI&daddr=Aztalan+State+Park,+Lake+Mills,+WI&output=embed"
    />
  );
}
