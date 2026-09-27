import { InsightCard } from "@/components/ui/InsightCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useFeaturedInsights } from "@/components/insights/useInsights";

export function InsightsBand() {
  const { items, error } = useFeaturedInsights(3);

  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="Insights"
        title="Notes on technology, policy and practice."
        description="Research, articles, perspectives and reports will be published here. Until then, the archive shows clearly marked samples of the format."
        action={
          <Button href="/insights" variant="outline">
            View Insights
          </Button>
        }
      />
      {error ? <p className="mt-8 text-sm text-muted">Insights could not be loaded from the database.</p> : null}
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {items?.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </Section>
  );
}
