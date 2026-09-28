import { InsightCard } from "@/components/ui/InsightCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useFeaturedInsights } from "@/components/insights/useInsights";
import { useSite } from "@/components/site/SiteContent";

export function InsightsBand() {
  const { items, error } = useFeaturedInsights(3);
  const { chrome } = useSite();
  const band = chrome.bands.insights;
  const onlySamples = !items || items.every((item) => item.sample);

  return (
    <Section tone="white">
      <SectionHeader
        eyebrow={band.eyebrow}
        title={band.title}
        description={onlySamples ? band.sampleDescription : band.publishedDescription}
        action={
          <Button href="/insights" variant="outline">
            {band.action}
          </Button>
        }
      />
      {error ? <p className="mt-8 text-sm text-muted">{band.error}</p> : null}
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {items?.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </Section>
  );
}
