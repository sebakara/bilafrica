import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function CareersPage() {
  const page = useSite().pages.careers;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumbs={[...page.breadcrumbs]}
      />
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">{page.whyTitle}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{page.why}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {page.areas.map((area) => (
            <article key={area.title} className="border-t border-line pt-5">
              <h3 className="text-xl font-semibold">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{area.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <h2 className="text-3xl font-semibold tracking-tight">{page.openingsTitle}</h2>
        <p className="mt-4 text-lg text-body">{page.openings}</p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{page.openingsNote}</p>
      </Section>
      <CTASection title={page.cta.title} description={page.cta.description} primaryLabel={page.cta.primaryLabel} />
    </>
  );
}
