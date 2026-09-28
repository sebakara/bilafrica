import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OrbitalField } from "@/components/graphics/OrbitalField";
import { useSite } from "@/components/site/SiteContent";

export function Hero() {
  const { site, home, chrome } = useSite();
  const hero = chrome.hero;

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-8">
          <div className="reveal">
            <h1 className="max-w-4xl text-[2rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-2xl font-display text-xl tracking-tight text-balance text-white/90 sm:text-2xl lg:text-3xl">
              {hero.line}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foam">{site.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primaryHref} size="lg">
                {hero.primaryLabel}
              </Button>
              <Button href={hero.secondaryHref} variant="dark" size="lg">
                {hero.secondaryLabel}
              </Button>
            </div>
          </div>
          <OrbitalField className="reveal reveal-late" />
        </div>
        <ol className="reveal mt-14 grid grid-cols-2 border border-white/10 lg:grid-cols-4">
          {home.principles.map((principle, index) => (
            <li key={principle.title} className="border-white/10 px-5 py-4 odd:border-r lg:border-r lg:last:border-r-0">
              <p className="text-sm font-semibold text-aqua">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-display text-2xl">{principle.title}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
