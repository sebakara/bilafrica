import { ResearchCard } from "@/components/ui/InsightCard";
import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { DetailBand } from "@/components/services/DetailBand";
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
      <DetailBand
        groups={[
          {
            title: page.featuredTitle,
            description: onlySamples ? page.featuredSample : page.featuredPublished,
            children: (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {samples?.map((insight) => (
                  <ResearchCard key={insight.id} insight={insight} />
                ))}
              </div>
            ),
          },
        ]}
      />
    </CapabilityLayout>
  );
}
