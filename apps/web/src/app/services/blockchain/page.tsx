import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { DetailBand } from "@/components/services/DetailBand";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function BlockchainPage() {
  const { pages, capabilities } = useSite();
  const page = pages.blockchain;

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
        <div className="max-w-3xl">
          <p className="eyebrow text-brand">{page.startingEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{page.startingTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{page.starting}</p>
        </div>
        <div className="mt-14">
          <OfferingGroups groups={[...capabilities.blockchainGroups]} />
        </div>
      </Section>
      <DetailBand
        groups={[
          { title: page.evaluateTitle, items: capabilities.evaluationCriteria.map((title) => ({ title })) },
          { title: page.fitsTitle, items: capabilities.blockchainFits.map((title) => ({ title })) },
          { title: page.misfitsTitle, items: capabilities.blockchainMisfits.map((title) => ({ title })) },
        ]}
      />
    </CapabilityLayout>
  );
}
