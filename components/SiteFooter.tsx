import Link from "next/link";
import { Facebook, Phone, MapPin, ExternalLink } from "lucide-react";

const logo = "/images/logo.png";
const FACEBOOK_URL = "https://www.facebook.com/norwincampgrounds";
const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/place/NorWin+Campgrounds/@43.0661,-76.9834,15z/data=!4m6!3m5!1s0x89d73225598000ad:0x29bb9a7277118b57!8m2!3d43.0661!4d-76.9834!16s%2Fg%2F1ydxx7t6r";
const ADDRESS = "2921 Pilgrimport Road, Lyons, NY 14489";
const PHONE = "(315) 946-4436";

const footerLinks = [
  { label: "RV Sites", href: "/accommodations/rv-sites" },
  { label: "Long Term RV Sites", href: "/about/long-term-rv" },
  { label: "About Us", href: "/about" },
  { label: "Amenities", href: "/amenities" },
  { label: "Rates", href: "/rates" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--forest-deep)] text-[var(--cream)]">
      {/* Main row: logo | nav links | facebook */}
      <div className="container-narrow flex flex-wrap items-center justify-between gap-6 py-10">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src={logo} alt="Nor Win Campgrounds" className="h-24 w-auto object-contain" />
        </Link>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Facebook */}
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          <Facebook className="h-5 w-5" />
        </a>
      </div>

      {/* Info bar: phone | address | Google Business */}
      <div className="border-t border-white/10">
        <div className="container-narrow flex flex-wrap items-center justify-between gap-4 py-4 text-sm opacity-80">
          <a
            href="tel:3159464436"
            className="flex items-center gap-2 hover:opacity-100 transition-opacity"
          >
            <Phone className="h-4 w-4 flex-shrink-0" />
            {PHONE}
          </a>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-100 transition-opacity"
          >
            <MapPin className="h-4 w-4 flex-shrink-0" />
            {ADDRESS}
          </a>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="h-4 w-4 flex-shrink-0" />
            Google Business Profile
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow flex flex-wrap items-center justify-between gap-3 py-4 text-xs opacity-60">
          <span>© {new Date().getFullYear()} Nor Win Campground. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
            <Link href="/accessibility" className="hover:opacity-100 transition-opacity">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
