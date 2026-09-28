import { CapabilityLayout } from "@/components/services/CapabilityLayout";
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
        <Button href="/contact" size="lg">
          {page.action}
        </Button>
      }
      ctaLabel={page.ctaLabel}
    >
      <Section>
        <div className="max-w-3xl border border-line bg-canvas px-6 py-6 sm:px-8">
          <p className="eyebrow text-brand">{page.startingEyebrow}</p>
          <p className="mt-3 text-xl font-semibold tracking-tight">{page.startingTitle}</p>
          <p className="mt-3 leading-relaxed text-muted">{page.starting}</p>
        </div>
        <h2 className="mt-14 text-3xl font-semibold tracking-tight">{page.evaluateTitle}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.evaluationCriteria.map((item) => (
            <li key={item} className="border border-line bg-canvas px-4 py-4 text-sm font-semibold text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">{page.fitsTitle}</h2>
            <ul className="mt-6 grid gap-3">
              {capabilities.blockchainFits.map((item) => (
                <li key={item} className="border border-line bg-paper px-4 py-4 text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">{page.misfitsTitle}</h2>
            <ul className="mt-6 grid gap-3">
              {capabilities.blockchainMisfits.map((item) => (
                <li key={item} className="border border-line bg-paper px-4 py-4 text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <OfferingGroups groups={[...capabilities.blockchainGroups]} />
      </Section>
    </CapabilityLayout>
  );
}
