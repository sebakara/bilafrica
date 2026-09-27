import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { aiGroups, responsibleAi } from "@/data/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI & Data",
  description:
    "BIL designs artificial intelligence and data systems around real operations, with evaluation, governance and a person accountable for the outcome.",
  path: "/services/ai-data",
});

export default function AiDataPage() {
  return (
    <CapabilityLayout
      eyebrow="AI & Data"
      title="AI designed around real operations."
      description="Models, agents and data platforms are useful when they sit inside a workflow someone owns. BIL scopes the task, the data and the point at which a person must decide."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "What we do", href: "/services" },
        { label: "AI & Data" },
      ]}
      actions={
        <Button href="/contact" size="lg">
          Explore AI Solutions
        </Button>
      }
      ctaLabel="Discuss an AI system"
    >
      <Section>
        <OfferingGroups groups={aiGroups} />
      </Section>
      <Section tone="mist">
        <p className="eyebrow text-brand">Delivery</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Responsible AI</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          These are working principles for delivery. They are not a certification, and they do not replace the rules that apply to a particular sector.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {responsibleAi.map((item) => (
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
