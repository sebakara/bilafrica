import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function EcosystemPage() {
  const { pages, capabilities } = useSite();
  const page = pages.ecosystem;

  return (
    <>
      <PageHero
        tone="dark"
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumbs={[...page.breadcrumbs]}
        actions={
          <Button href="/contact" variant="dark" size="lg">
            {page.action}
          </Button>
        }
      />
      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{page.intro}</p>
        <div className="mt-14">
          <OfferingGroups
            groups={[
              {
                title: page.programmesTitle,
                items: capabilities.ecosystemPrograms.map((program) => ({
                  title: program.title,
                  description: program.description,
                })),
              },
            ]}
          />
        </div>
      </Section>
      <CTASection title={page.cta.title} description={page.cta.description} primaryLabel={page.cta.primaryLabel} />
    </>
  );
}
