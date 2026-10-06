import Link from "next/link";
import { Facebook, Phone, MapPin, ExternalLink } from "lucide-react";

const logo = "/images/logo.png";
const FACEBOOK_URL = "https://www.facebook.com/WillowMillCampsite/";
const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/zfBiLvCQzLNhjaXXA";
const ADDRESS = "N5830 County Hwy SS, Rio, WI 53960";
const PHONE = "(920) 992-1212";

const footerLinks = [
  { label: "RV Sites", href: "/accommodations/rv-sites" },
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
          <img src={logo} alt="Willow Mill Campground" className="h-32 w-auto object-contain" />
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
            href="tel:9209921212"
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
          <span>© {new Date().getFullYear()} Willow Mill Campground. All rights reserved.</span>
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
