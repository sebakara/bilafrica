import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  breadcrumbs?: { label: string; href?: string }[];
  actions?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "light",
  breadcrumbs,
  actions,
}: PageHeroProps) {
  const dark = tone === "dark";

  return (
    <section className={cn("relative overflow-hidden border-b", dark ? "border-white/10 bg-ink text-white" : "border-line bg-canvas text-body")}>
      {dark ? <div className="pointer-events-none absolute inset-0 bg-grid-dark" /> : <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-70" />}
      <Container className="reveal relative py-14 sm:py-16 lg:py-20">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} tone={tone} /> : null}
        <p className={cn("eyebrow", dark ? "text-aqua" : "text-brand", breadcrumbs && "mt-6")}>{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
        <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed", dark ? "text-foam" : "text-muted")}>{description}</p>
        {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
      </Container>
    </section>
  );
}
