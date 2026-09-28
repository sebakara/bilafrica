import Link from "@/components/ui/AppLink";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function ServicesPage() {
  const { pages, home } = useSite();
  const page = pages.services;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumbs={[...page.breadcrumbs]}
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {page.pillars.map((pillar, index) => (
            <article key={pillar.label} className="flex flex-col border border-line bg-canvas p-6 sm:p-8">
              <p className="eyebrow text-brand">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{pillar.label}</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{pillar.text}</p>
              <ul className="mt-8 grid gap-2">
                {pillar.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between gap-4 border border-line bg-paper px-4 py-3 text-sm font-semibold text-body transition-colors hover:border-brand hover:text-brand"
                    >
                      {link.label}
                      <ArrowRight className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <p className="eyebrow text-brand">{page.engagementsEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">{page.engagementsTitle}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{page.engagements}</p>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {home.engagementModels.map((model) => (
            <div key={model.title} className="border border-line bg-paper p-5">
              <dt className="font-sans text-base font-semibold text-ink">{model.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{model.description}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-2xl border border-line bg-paper px-5 py-4 text-sm leading-relaxed text-muted">{page.ventures}</p>
      </Section>
      <CTASection
        primaryLabel={page.cta.primaryLabel}
        secondaryHref={page.cta.secondaryHref}
        secondaryLabel={page.cta.secondaryLabel}
      />
    </>
  );
}
