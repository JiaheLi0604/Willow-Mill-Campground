"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Minus, Plus, ArrowRight, ChevronDown, ShoppingCart } from "lucide-react";

const hero = "/images/hero.jpg";
const logo = "/images/logo.png";

export default function Book() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [open, setOpen] = useState(false);
  const [guests, setGuests] = useState({ children: 0, adults: 0, pets: 0 });
  const total = guests.children + guests.adults + guests.pets;

  const update = (k: keyof typeof guests, d: number) =>
    setGuests((g) => ({ ...g, [k]: Math.max(0, g[k] + d) }));

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

  return (
    <div className="relative min-h-screen w-full">
      <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top bar: logo left, account links right */}
        <div className="w-full px-8 pt-6 flex items-start justify-between">
          <Link href="/" className="block w-[120px]">
            <div className="bg-white p-2 rounded-sm shadow-md">
              <img src={logo} alt="Nor Win Campground" className="h-20 w-20 mx-auto" />
            </div>
            <div className="mt-1 bg-[#2f7a3a] text-white text-[10px] font-bold tracking-wide py-2 px-2 text-center leading-tight">
              NORWIN CAMPGROUND<br />LYONS, NY
            </div>
          </Link>

          <div className="flex items-center gap-6 text-white text-sm pt-2">
            <Link href="/" className="hover:underline">Sign In</Link>
            <Link href="/" className="hover:underline">Create Account</Link>
            <button aria-label="Cart" className="hover:opacity-80">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Search, discover, book.</h1>
          <p className="mt-3 text-lg md:text-xl">Create camping memories that last a lifetime.</p>

          <form onSubmit={submit} className="mt-12 w-full max-w-5xl bg-white shadow-2xl p-6 md:p-8 text-left text-[var(--foreground)]">
            <div className="grid gap-6 md:grid-cols-[1fr_1fr_auto] md:items-end">
              <div>
                <label className="block text-sm font-bold mb-2">Dates</label>
                <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
                  <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} placeholder="Check In" className="flex-1 bg-transparent outline-none text-sm" />
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} placeholder="Check Out" className="flex-1 bg-transparent outline-none text-sm" />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-bold mb-2">Guests</label>
                <button type="button" onClick={() => setOpen(!open)} className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 text-sm">
                  <span className={total === 0 ? "text-gray-400" : ""}>
                    {total === 0 ? "Add Guests" : `${total} guest${total > 1 ? "s" : ""}`}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {open && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded shadow-lg p-5 z-20">
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

              <button type="submit" className="h-[42px] w-[60px] bg-[#3aaa3a] hover:bg-[#2f9a2f] text-white rounded flex items-center justify-center transition-colors" aria-label="Search availability">
                <Search className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </div>
          </form>
        </div>

        <div className="w-full py-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Nor Win Campground · Lyons, NY · (315) 946-4436
        </div>
      </div>
    </div>
  );
}
