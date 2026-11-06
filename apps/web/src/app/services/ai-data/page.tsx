import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { DetailBand } from "@/components/services/DetailBand";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function AiDataPage() {
  const { pages, capabilities } = useSite();
  const page = pages.ai;

  return (
    <CapabilityLayout
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
        <OfferingGroups groups={[...capabilities.aiGroups]} />
      </Section>
      <DetailBand
        groups={[
          {
            eyebrow: page.deliveryEyebrow,
            title: page.responsibleTitle,
            description: page.responsible,
            items: [...capabilities.responsibleAi],
          },
        ]}
      />
    </CapabilityLayout>
  );
}
