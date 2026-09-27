import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cybersecurityOfferings } from "@/data/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cybersecurity",
  description:
    "Cybersecurity at BIL is a capability within engineering and advisory, covering architecture, assurance and technical risk.",
  path: "/services/cybersecurity",
});

export default function CybersecurityPage() {
  return (
    <CapabilityLayout
      eyebrow="Cybersecurity & technology assurance"
      title="Security as part of how systems are designed."
      description="This is a capability inside BIL, not a separate division. It supports builds, architecture reviews and technical due diligence."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "What we do", href: "/services" },
        { label: "Cybersecurity" },
      ]}
      actions={
        <Button href="/contact" size="lg">
          Request an assessment
        </Button>
      }
      ctaLabel="Discuss a security review"
    >
      <Section>
        <OfferingGroups groups={cybersecurityOfferings} />
      </Section>
    </CapabilityLayout>
  );
}
