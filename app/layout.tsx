import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nor Win Campground — Family Camping in Lyons, NY",
  description:
    "Nor Win Campgrounds & Fruit Farm — a family-run RV park and seasonal campground in Lyons, NY since 1966.",
  openGraph: {
    title: "Nor Win Campground — Family Camping in Lyons, NY",
    description:
      "Nor Win Campgrounds & Fruit Farm — a family-run RV park and seasonal campground in Lyons, NY since 1966.",
    type: "website",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6fa96368-3378-4024-9dd7-9e32a434754d/id-preview-e252fa82--06750eac-b6e1-4115-8223-a8f45b35e4dd.lovable.app-1779296948261.png",
    ],
  },
  twitter: {
    card: "summary",
    title: "Nor Win Campground — Family Camping in Lyons, NY",
    description:
      "Nor Win Campgrounds & Fruit Farm — a family-run RV park and seasonal campground in Lyons, NY since 1966.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6fa96368-3378-4024-9dd7-9e32a434754d/id-preview-e252fa82--06750eac-b6e1-4115-8223-a8f45b35e4dd.lovable.app-1779296948261.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
