import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function AdvisoryPage() {
  const { pages, capabilities } = useSite();
  const page = pages.advisory;

  return (
    <CapabilityLayout
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
      ctaLabel={page.ctaLabel}
    >
      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{page.intro}</p>
        <div className="mt-14">
          <OfferingGroups groups={[...capabilities.advisoryGroups]} />
        </div>
      </Section>
    </CapabilityLayout>
  );
}
