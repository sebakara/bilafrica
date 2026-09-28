import { ResearchCard } from "@/components/ui/InsightCard";
import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useFeaturedInsights } from "@/components/insights/useInsights";
import { useSite } from "@/components/site/SiteContent";

export default function ResearchPolicyPage() {
  const { items: samples } = useFeaturedInsights(3);
  const { pages, capabilities } = useSite();
  const page = pages.research;
  const onlySamples = !samples || samples.every((item) => item.sample);

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
          <OfferingGroups groups={[...capabilities.researchGroups]} />
        </div>
      </Section>
      <Section tone="mist">
        <h2 className="text-3xl font-semibold tracking-tight">{page.featuredTitle}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {onlySamples ? page.featuredSample : page.featuredPublished}
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {samples?.map((insight) => (
            <ResearchCard key={insight.id} insight={insight} />
          ))}
        </div>
      </Section>
    </CapabilityLayout>
  );
}
