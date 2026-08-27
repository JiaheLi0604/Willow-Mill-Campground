"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const logo = "/images/logo.png";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "Ways to Stay", to: "/accommodations" as const, noLink: true, children: [
    { label: "Full Hookup RV Sites", to: "/accommodations/rv-sites" },
    { label: "Long Term RV Sites", to: "/about/long-term-rv" },
  ]},
  { label: "About", to: "/about" as const, children: [
    { label: "About Us", to: "/about" },
    { label: "Nearby", to: "/about/nearby" },
    { label: "Work Order Form", to: "/about/work-order" },
  ]},
  { label: "Amenities", to: "/amenities" as const },
  { label: "Events", to: "/events" as const },
  { label: "Rates", to: "/rates" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact", to: "/contact" as const },
];

type NavEntry = (typeof nav)[number];

function NavItem({ item, active }: { item: NavEntry; active: boolean }) {
  const hasChildren = "children" in item && item.children;
  const noLink = "noLink" in item && (item as any).noLink;
  return (
    <div className="group relative">
      {noLink ? (
        <button
          className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors select-none ${
            active ? "bg-[var(--cream)] text-[var(--forest-deep)]" : "text-gray-700 hover:text-[var(--forest-deep)]"
          }`}
        >
          {item.label}
          {hasChildren && <ChevronDown className="h-3.5 w-3.5" />}
        </button>
      ) : (
        <Link
          href={item.to}
          className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
            active ? "bg-[var(--cream)] text-[var(--forest-deep)]" : "text-gray-700 hover:text-[var(--forest-deep)]"
          }`}
        >
          {item.label}
          {hasChildren && <ChevronDown className="h-3.5 w-3.5" />}
        </Link>
      )}
      {"children" in item && item.children && (
        <div className="invisible absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
          <div className="min-w-48 rounded-lg bg-white py-2 shadow-xl border border-[var(--border)]">
            {item.children.map((c) => (
              <Link
                key={c.to}
                href={c.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--cream)] hover:text-[var(--forest-deep)] whitespace-nowrap"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div className="bg-[var(--forest-deep)] text-white text-xs">
        <div className="container-narrow flex items-center justify-end gap-6 py-2">
          <a
            href="https://maps.google.com/?q=N5830+County+Hwy+SS+Rio+WI+53960"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[var(--sage)]"
          >
            <MapPin className="h-3 w-3" /> Get Directions
          </a>
          <a href="tel:9209921212" className="flex items-center gap-1.5 hover:text-[var(--sage)]">
            <Phone className="h-3 w-3" /> (920) 992-1212
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-sm">
        <div className="container-narrow flex items-center justify-between py-3">
          <Link href="/" className="flex items-center">
            <img src={logo} alt="Willow Mill Campground logo" className="h-24 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <NavItem key={item.label} item={item} active={pathname === item.to} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="https://www.campspot.com/book/willow-mill-campground"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--book-green)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--book-green-deep)] transition-colors"
            >
              Book Now
            </a>
          </div>

          <button className="lg:hidden text-[var(--forest-deep)]" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-[var(--border)] px-6 py-4 space-y-3 bg-white">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.to}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-gray-700"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.campspot.com/book/willow-mill-campground"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--book-green)] px-6 py-2.5 text-sm font-semibold text-white"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
