import Link from "@/components/ui/AppLink";
import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function TechnologyPage() {
  const { pages, capabilities, home } = useSite();
  const page = pages.technology;

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
      <Section tone="mist">
        <h2 className="text-3xl font-semibold tracking-tight">{page.areasTitle}</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {home.technologyAreas.map((area) => (
            <li key={area.title} className="border border-line bg-paper p-5">
              <h3 className="font-sans text-base font-semibold text-ink">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </CapabilityLayout>
  );
}
