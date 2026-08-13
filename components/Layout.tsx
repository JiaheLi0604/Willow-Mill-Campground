import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  if (image) {
    return (
      <section className="relative h-[420px] md:h-[520px] flex items-center justify-center text-center text-[var(--cream)] overflow-hidden">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container-narrow relative">
          {subtitle && (
            <p className="text-sm uppercase tracking-[0.3em] opacity-90">{subtitle}</p>
          )}
          <h1 className="mt-3 text-5xl md:text-7xl font-serif">{title}</h1>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-[var(--forest)] py-20 text-center text-[var(--cream)]">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.3em] opacity-70">{subtitle ?? "Willow Mill Campground"}</p>
        <h1 className="mt-3 text-5xl md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
