"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Search, ArrowRight, MapPin, Minus, Plus, ChevronDown } from "lucide-react";

const logo = "/images/logo.png";
const rvsite = "/images/rvsite.jpg";
const orchard = "/images/orchard.jpg";
const playground = "/images/playground.jpg";
const pool = "/images/pool.jpg";

type Category = "All Sites" | "Lodging" | "RV Sites" | "Tent Sites";

type Listing = {
  id: string;
  name: string;
  category: Exclude<Category, "All Sites">;
  petFriendly: boolean;
  pricePerNight: number;
  amenities: string[];
  image: string;
  available: number;
};

const LISTINGS: Listing[] = [
  { id: "cabin-1", name: "Cabin 1", category: "Lodging", petFriendly: true, pricePerNight: 137.33, image: orchard, available: 1, amenities: ["Air Conditioning", "Charcoal Grill", "Electricity", "Fire Pit", "Microwave", "Mini Fridge", "Pet-Friendly", "Picnic Table", "Water Hook-Up"] },
  { id: "cabin-2", name: "Cabin 2", category: "Lodging", petFriendly: true, pricePerNight: 137.33, image: orchard, available: 1, amenities: ["Charcoal Grill", "Electricity", "Fire Pit", "Microwave", "Mini Fridge", "Pet-Friendly", "Picnic Table", "Water Hook-Up"] },
  { id: "rv-premium", name: "Premium RV Site (Full Hookup)", category: "RV Sites", petFriendly: true, pricePerNight: 65.0, image: rvsite, available: 8, amenities: ["50-Amp", "Water Hook-Up", "Sewer", "Fire Ring", "Picnic Table", "Pet-Friendly"] },
  { id: "rv-standard", name: "Standard RV Site", category: "RV Sites", petFriendly: true, pricePerNight: 52.0, image: rvsite, available: 11, amenities: ["30-Amp", "Water Hook-Up", "Fire Ring", "Picnic Table", "Pet-Friendly"] },
  { id: "rv-pullthrough", name: "Pull-Through RV Site", category: "RV Sites", petFriendly: true, pricePerNight: 58.0, image: playground, available: 4, amenities: ["50-Amp", "Water Hook-Up", "Sewer", "Fire Ring", "Picnic Table"] },
  { id: "tent-open", name: "Open Tent Site", category: "Tent Sites", petFriendly: true, pricePerNight: 32.0, image: pool, available: 7, amenities: ["Fire Ring", "Picnic Table", "Pet-Friendly", "Near Restrooms"] },
  { id: "tent-shaded", name: "Shaded Tent Site", category: "Tent Sites", petFriendly: true, pricePerNight: 38.0, image: orchard, available: 4, amenities: ["Fire Ring", "Picnic Table", "Pet-Friendly", "Shaded"] },
];

function nights(checkIn?: string, checkOut?: string) {
  if (!checkIn || !checkOut) return 1;
  const ms = new Date(checkOut).getTime() - new Date(checkIn).getTime();
  return Math.max(1, Math.round(ms / 86400000));
}

export default function ResultsPage() {
  return (
    <Suspense fallback={null}>
      <Results />
    </Suspense>
  );
}

function Results() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCheckIn = searchParams.get("checkIn") ?? "";
  const initialCheckOut = searchParams.get("checkOut") ?? "";
  const initialAdults = Number(searchParams.get("adults")) || 0;
  const initialChildren = Number(searchParams.get("children")) || 0;
  const initialPets = Number(searchParams.get("pets")) || 0;

  const n = nights(initialCheckIn, initialCheckOut);

  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [open, setOpen] = useState(false);
  const [guests, setGuests] = useState({
    children: initialChildren,
    adults: initialAdults,
    pets: initialPets,
  });
  const total = guests.children + guests.adults + guests.pets;
  const update = (k: keyof typeof guests, d: number) =>
    setGuests((g) => ({ ...g, [k]: Math.max(0, g[k] + d) }));

  const guestSummary =
    [
      guests.adults ? `${guests.adults} Adult${guests.adults > 1 ? "s" : ""}` : "",
      guests.children ? `${guests.children} Child${guests.children > 1 ? "ren" : ""}` : "",
      guests.pets ? `${guests.pets} Pet${guests.pets > 1 ? "s" : ""}` : "",
    ]
      .filter(Boolean)
      .join(", ") || "Add Guests";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      alert("Please choose your check-in and check-out dates.");
      return;
    }
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: String(guests.adults),
      children: String(guests.children),
      pets: String(guests.pets),
    });
    router.push(`/book/results?${params.toString()}`);
  };

  const [category, setCategory] = useState<Category>("All Sites");
  const counts = {
    "All Sites": LISTINGS.length,
    "Lodging": LISTINGS.filter((l) => l.category === "Lodging").length,
    "RV Sites": LISTINGS.filter((l) => l.category === "RV Sites").length,
    "Tent Sites": LISTINGS.filter((l) => l.category === "Tent Sites").length,
  };

  const visible = category === "All Sites" ? LISTINGS : LISTINGS.filter((l) => l.category === category);

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      {/* Top bar */}
      <header className="bg-white border-b">
        <div className="container-narrow flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src={logo} alt="Willow Mill Campground" className="h-12 w-12" />
            <div className="bg-[var(--forest)] text-[var(--cream)] text-xs font-semibold px-3 py-2 rounded">
              WILLOW MILL CAMPGROUND<br />RIO, WI
            </div>
          </Link>
          <Link href="/book" className="text-sm text-[var(--forest)] hover:underline">← New Search</Link>
        </div>
      </header>

      {/* Search summary */}
      <section className="bg-white border-b">
        <div className="container-narrow py-6">
          <form onSubmit={submit} className="grid gap-6 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <div>
              <label className="block text-sm font-bold mb-2">Dates</label>
              <div className="flex items-center gap-2 border border-[var(--border)] rounded px-3 py-2 bg-white">
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="flex-1 bg-transparent outline-none text-sm" />
                <ArrowRight className="h-4 w-4 text-[var(--muted-foreground)]" />
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="flex-1 bg-transparent outline-none text-sm" />
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-bold mb-2">Guests</label>
              <button type="button" onClick={() => setOpen(!open)} className="w-full flex items-center justify-between border border-[var(--border)] rounded px-3 py-2 text-sm bg-white">
                <span className={total === 0 ? "text-[var(--muted-foreground)]" : ""}>{guestSummary}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {open && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-[var(--border)] rounded shadow-lg p-5 z-20">
                  <p className="font-bold mb-4">Number of Guests</p>
                  {(["Children", "Adults", "Pets"] as const).map((label) => {
                    const k = label.toLowerCase() as keyof typeof guests;
                    return (
                      <div key={label} className="flex items-center justify-between py-2">
                        <span>{label}</span>
                        <div className="flex items-center gap-2">
                          <button type="button" onClick={() => update(k, -1)} className="h-8 w-8 border rounded flex items-center justify-center hover:bg-gray-50"><Minus className="h-4 w-4" /></button>
                          <span className="w-10 text-center">{guests[k]}</span>
                          <button type="button" onClick={() => update(k, 1)} className="h-8 w-8 border rounded flex items-center justify-center hover:bg-gray-50"><Plus className="h-4 w-4" /></button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <button type="submit" className="h-[42px] px-8 bg-[var(--forest)] hover:bg-[var(--forest-deep)] text-[var(--cream)] rounded flex items-center justify-center transition-colors" aria-label="Search availability">
              <Search className="h-5 w-5" />
            </button>
          </form>
          <p className="text-xs text-[var(--muted-foreground)] mt-3">{n} night{n > 1 ? "s" : ""}</p>
        </div>
      </section>


      {/* Results */}
      <section className="container-narrow py-10">
        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <div className="aspect-[4/3] rounded bg-[#e6f2e6] flex items-center justify-center text-[var(--forest)] text-sm font-medium mb-3">
                <MapPin className="h-4 w-4 mr-2" /> View on Map
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">Map view coming soon.</p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h3 className="text-sm font-bold mb-4">Filter by</h3>
              <ul>
                {(Object.keys(counts) as Category[]).map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setCategory(c)}
                      className={`w-full flex items-center justify-between py-2 px-3 rounded text-sm transition-colors ${
                        category === c ? "bg-[var(--forest)] text-[var(--cream)]" : "hover:bg-gray-50"
                      }`}
                    >
                      <span>{c}</span>
                      <span className="opacity-75">{counts[c]}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h3 className="text-sm font-bold mb-4">Need help?</h3>
              <p className="text-xs text-[var(--muted-foreground)] mb-3">Call the office to confirm seasonal availability or special requests.</p>
              <a href="tel:9209921212" className="text-sm text-[var(--forest)] font-semibold">(920) 992-1212</a>
            </div>
          </aside>

          {/* List */}
          <div>
            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              <CategoryCard title="Lodging" count={counts.Lodging} active={category === "Lodging"} onClick={() => setCategory("Lodging")} />
              <CategoryCard title="RV Sites" count={counts["RV Sites"]} active={category === "RV Sites"} onClick={() => setCategory("RV Sites")} />
              <CategoryCard title="Tent Sites" count={counts["Tent Sites"]} active={category === "Tent Sites"} onClick={() => setCategory("Tent Sites")} />
            </div>

            <h2 className="text-xl font-bold mb-4">{visible.length} available site{visible.length !== 1 ? "s" : ""}</h2>

            <div className="space-y-4">
              {visible.map((l) => (
                <ListingCard key={l.id} listing={l} nights={n} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--forest-deep)] text-[var(--cream)] py-8 mt-12">
        <div className="container-narrow text-center text-sm opacity-80">
          © {new Date().getFullYear()} Willow Mill Campground · N5830 County Hwy SS, Rio, WI 53960
        </div>
      </footer>
    </div>
  );
}

function CategoryCard({ title, count, active, onClick }: { title: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-5 rounded-lg shadow-sm transition-colors ${active ? "bg-[var(--forest)] text-[var(--cream)]" : "bg-white hover:bg-gray-50"}`}
    >
      <p className="font-bold">{title}</p>
      <p className={`text-sm mt-1 ${active ? "text-[var(--cream)]/80" : "text-[var(--forest)]"}`}>{count} Available Location{count !== 1 ? "s" : ""}</p>
    </button>
  );
}

function ListingCard({ listing, nights }: { listing: Listing; nights: number }) {
  const total = (listing.pricePerNight * nights).toFixed(2);
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden grid sm:grid-cols-[200px_1fr_auto]">
      <img src={listing.image} alt={listing.name} className="h-full w-full object-cover sm:h-auto aspect-[4/3] sm:aspect-auto" loading="lazy" />
      <div className="p-5">
        <h3 className="text-lg font-bold flex items-center gap-2">
          {listing.name}
          {listing.petFriendly && <span title="Pet friendly" aria-label="Pet friendly">🐾</span>}
        </h3>
        <p className="text-sm mt-2">
          <span className="font-semibold">Site amenities:</span>{" "}
          <span className="text-[var(--muted-foreground)]">{listing.amenities.join(" | ")}</span>
        </p>
        <button className="mt-4 text-sm border border-[var(--border)] rounded-full px-4 py-1.5 hover:bg-gray-50">
          📅 View Availability
        </button>
      </div>
      <div className="p-5 border-t sm:border-t-0 sm:border-l text-right flex flex-col justify-between min-w-[180px]">
        <div>
          <p className="text-2xl font-bold">${listing.pricePerNight.toFixed(2)}</p>
          <p className="text-xs text-[var(--muted-foreground)]">Avg per night</p>
          <p className="mt-3 font-semibold">${total} Total</p>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] mt-3">{listing.available} Available Location{listing.available !== 1 ? "s" : ""}</p>
      </div>
    </article>
  );
}
