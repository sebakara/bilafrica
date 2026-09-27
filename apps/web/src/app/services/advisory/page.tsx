import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { advisoryGroups } from "@/data/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Advisory",
  description:
    "BIL advisory combines technology strategy with engineering and research, so recommendations can be built and operated.",
  path: "/services/advisory",
});

export default function AdvisoryPage() {
  return (
    <CapabilityLayout
      tone="dark"
      eyebrow="BIL Advisory"
      title="Technology strategy grounded in engineering."
      description="Advisory helps organisations decide what to build, buy, stop or study. The difference from a general consulting practice is that BIL can also design, build and research the systems under discussion."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "What we do", href: "/services" },
        { label: "Advisory" },
      ]}
      actions={
        <Button href="/contact" variant="dark" size="lg">
          Discuss an advisory engagement
        </Button>
      }
      ctaLabel="Talk to BIL"
    >
      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          A strategy that cannot be engineered is unfinished. BIL uses delivery experience and, where needed, BIL Labs and Research & Policy, so advice stays tied to evidence and to what an institution can run.
        </p>
        <div className="mt-14">
          <OfferingGroups groups={advisoryGroups} />
        </div>
      </Section>
    </CapabilityLayout>
  );
}
