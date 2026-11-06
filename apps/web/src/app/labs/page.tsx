import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { DetailBand } from "@/components/services/DetailBand";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function LabsPage() {
  const { pages, capabilities } = useSite();
  const page = pages.labs;

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
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
      <DetailBand
        id="domains"
        groups={[
          { title: page.domainsTitle, items: [...capabilities.labDomains] },
          {
            title: page.lifecycleTitle,
            items: capabilities.labLifecycle.map((step, index) => ({
              title: `${String(index + 1).padStart(2, "0")} ${step.title}`,
              description: step.description,
            })),
          },
          { title: page.servicesTitle, items: capabilities.labServices.map((title) => ({ title })) },
        ]}
      />
      <CTASection title={page.cta.title} description={page.cta.description} primaryLabel={page.cta.primaryLabel} />
    </>
  );
}
