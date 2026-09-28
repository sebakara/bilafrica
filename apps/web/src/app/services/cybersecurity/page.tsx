import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function CybersecurityPage() {
  const { pages, capabilities } = useSite();
  const page = pages.cybersecurity;

  return (
    <CapabilityLayout
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      breadcrumbs={[...page.breadcrumbs]}
      actions={
        <Button href="/contact" size="lg">
          {page.action}
        </Button>
      }
      ctaLabel={page.ctaLabel}
    >
      <Section>
        <OfferingGroups groups={[...capabilities.cybersecurityOfferings]} />
      </Section>
    </CapabilityLayout>
  );
}
