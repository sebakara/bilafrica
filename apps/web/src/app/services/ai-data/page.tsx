import { CapabilityLayout } from "@/components/services/CapabilityLayout";
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
        <Button href="/contact" size="lg">
          {page.action}
        </Button>
      }
      ctaLabel={page.ctaLabel}
    >
      <Section>
        <OfferingGroups groups={[...capabilities.aiGroups]} />
      </Section>
      <Section tone="mist">
        <p className="eyebrow text-brand">{page.deliveryEyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">{page.responsibleTitle}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{page.responsible}</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {capabilities.responsibleAi.map((item) => (
            <li key={item.title} className="border border-line bg-paper p-5">
              <h3 className="font-sans text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </CapabilityLayout>
  );
}
