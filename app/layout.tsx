import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Willow Mill Campground — Family Camping in Rio, WI",
  description:
    "Willow Mill Campground — a family-owned, waterfront RV park and campground in Rio, WI (Columbia County) since 1968.",
  openGraph: {
    title: "Willow Mill Campground — Family Camping in Rio, WI",
    description:
      "Willow Mill Campground — a family-owned, waterfront RV park and campground in Rio, WI (Columbia County) since 1968.",
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Willow Mill Campground — Family Camping in Rio, WI",
    description:
      "Willow Mill Campground — a family-owned, waterfront RV park and campground in Rio, WI (Columbia County) since 1968.",
    images: ["/images/logo.png"],
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
