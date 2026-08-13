import type { Metadata } from "next";
import { NearbyCityPage } from "@/components/NearbyCityPage";
import { Layout } from "@/components/Layout";
import { ComingSoon } from "@/components/ComingSoon";

const SHOW_COMING_SOON = true;

const hero = "/images/pond.jpg";
const heroImage = "/images/view4.jpg";
const rockFormations = "/images/view5.jpg";
const hikingTrails = "/images/park-hero.jpg";
const beach = "/images/lake.jpg";

const dir = (dest: string) => `https://maps.google.com/?q=${encodeURIComponent(dest)}`;

export const metadata: Metadata = {
  title: "Devil's Lake State Park, WI — Near Willow Mill Campground",
  description: "Visit Devil's Lake State Park near Baraboo, WI from Willow Mill Campground in Rio, WI.",
};

export default function DevilsLakePage() {
  if (SHOW_COMING_SOON) {
    return (
      <Layout>
        <ComingSoon title="Devil's Lake State Park" />
      </Layout>
    );
  }
  return (
    <NearbyCityPage
      hero={hero}
      heroImage={heroImage}
      cityName="Devil's Lake State Park"
      state="WI"
      introTitle="Wisconsin's most-visited state park"
      introBody="Devil's Lake State Park sits near Baraboo, about an hour from Willow Mill Campground. The 360-acre lake is ringed by 500-foot quartzite bluffs among the oldest exposed rock on Earth, carved into their current shape by a glacier some 12,000 years ago. With over 9,000 acres of hiking trails, swimming beaches, and dramatic rock formations, it's one of the most popular day trips in the state."
      attractions={[
        {
          img: rockFormations,
          name: "Devil's Doorway & Balanced Rock",
          body: "Two of the park's signature quartzite rock formations, reached via the East Bluff trail system. Devil's Doorway is a natural rock archway with sweeping lake views, while Balanced Rock is a dramatically perched boulder a short hike further along.",
          learnMore: dir("Devil's Doorway, Devil's Lake State Park, WI"),
        },
        {
          img: hikingTrails,
          name: "East Bluff & West Bluff Trails",
          body: "Miles of hiking trails climb the bluffs on both sides of the lake, ranging from steep rocky scrambles to gentler graded paths, with overlooks along the way looking down over the entire lake basin.",
          learnMore: dir("Devil's Lake State Park Trails, WI"),
        },
        {
          img: beach,
          name: "Devil's Lake Beach & Boat Launch",
          body: "Two swimming beaches (North and South Shore) and boat launches make the lake itself a destination — swimming, kayaking, and fishing are all popular on a warm afternoon.",
          learnMore: dir("Devil's Lake State Park Beach, Baraboo, WI"),
        },
      ]}
      directionsTitle="An easy trip to the bluffs"
      directionsBody="After a day of hiking and swimming at Devil's Lake, the drive back to camp is a relaxing one. Reserve your"
      mapsEmbedUrl="https://www.google.com/maps?saddr=Willow+Mill+Campground,+Rio,+WI&daddr=Devil%27s+Lake+State+Park,+Baraboo,+WI&output=embed"
    />
  );
}
