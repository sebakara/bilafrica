import Link from "@/components/ui/AppLink";
import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { DetailBand } from "@/components/services/DetailBand";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function TechnologyPage() {
  const { pages, capabilities, home } = useSite();
  const page = pages.technology;

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
    >
      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          {page.intro}{" "}
          <Link href="/services/cybersecurity" className="font-medium text-brand">
            {page.cyberLink}
          </Link>
          .
        </p>
        <div className="mt-14">
          <OfferingGroups groups={[...capabilities.technologyGroups]} />
        </div>
      </Section>
      <DetailBand groups={[{ title: page.areasTitle, items: [...home.technologyAreas] }]} />
    </CapabilityLayout>
  );
}
