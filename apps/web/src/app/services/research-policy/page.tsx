import { ResearchCard } from "@/components/ui/InsightCard";
import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useFeaturedInsights } from "@/components/insights/useInsights";
import { researchGroups } from "@/data/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Research & Policy",
  description:
    "Evidence-based technology and policy advisory across AI, digital assets, fintech, identity and digital infrastructure.",
  path: "/services/research-policy",
});

export default function ResearchPolicyPage() {
  const { items: samples } = useFeaturedInsights(3);

  return (
    <CapabilityLayout
      tone="dark"
      eyebrow="BIL Research & Policy"
      title="Evidence for emerging technology decisions."
      description="Research at BIL connects technology, markets, institutions and regulation. It is commissioned work and applied inquiry, written so a decision-maker can use it."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "What we do", href: "/services" },
        { label: "Research & Policy" },
      ]}
      actions={
        <Button href="/contact" variant="dark" size="lg">
          Commission research
        </Button>
      }
      ctaLabel="Discuss a research brief"
    >
      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          Evidence-based technology and policy advisory.
        </p>
        <div className="mt-14">
          <OfferingGroups groups={researchGroups} />
        </div>
      </Section>
      <Section tone="mist">
        <h2 className="text-3xl font-semibold tracking-tight">Featured research</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          BIL has not released institutional reports on this site yet. The cards show the format future publications will use. They are samples, not BIL publications, and they do not cite fabricated findings.
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
