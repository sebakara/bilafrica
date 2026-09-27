import Link from "@/components/ui/AppLink";
import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { technologyGroups } from "@/data/capabilities";
import { technologyAreas } from "@/data/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology",
  description:
    "BIL designs and builds digital systems, platforms and infrastructure around operational problems rather than technology trends.",
  path: "/services/technology",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "What we do", href: "/services" },
  { label: "Technology" },
];

export default function TechnologyPage() {
  return (
    <CapabilityLayout
      tone="dark"
      eyebrow="BIL Technologies"
      title="Digital systems built around the problem."
      description="BIL Technologies designs and builds software, platforms and infrastructure. Artificial intelligence, data and blockchain sit inside that practice. They are chosen when they solve something a simpler system cannot."
      breadcrumbs={crumbs}
      actions={
        <Button href="/contact" variant="dark" size="lg">
          Discuss a Project
        </Button>
      }
    >
      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          Work covers custom software, enterprise platforms, financial and public digital systems, and the cloud and delivery practices that keep them running. Cybersecurity is part of the same engineering conversation.{" "}
          <Link href="/services/cybersecurity" className="font-medium text-brand">
            See the cybersecurity capability
          </Link>
          .
        </p>
        <div className="mt-14">
          <OfferingGroups groups={technologyGroups} />
        </div>
      </Section>
      <Section tone="mist">
        <h2 className="text-3xl font-semibold tracking-tight">Technology areas</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyAreas.map((area) => (
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
