import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ecosystemPrograms } from "@/data/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ecosystem",
  description:
    "BIL designs and operates developer, startup and innovation programmes for organisations and partners.",
  path: "/ecosystem",
});

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="BIL Ecosystem"
        title="Innovation grows through ecosystems."
        description="BIL designs and operates programmes for organisations and partners. They are sponsored, commissioned or institutionally funded. They are not charitable activities of the company."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ecosystem" },
        ]}
        actions={
          <Button href="/contact" variant="dark" size="lg">
            Commission a programme
          </Button>
        }
      />
      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          A programme has a host, a purpose, a cohort and a result that can be evaluated. That may be a developer community, a challenge, a training series, support for startups, or a forum where policy and implementation meet.
        </p>
        <div className="mt-14">
          <OfferingGroups
            groups={[
              {
                title: "Programmes",
                items: ecosystemPrograms.map((program) => ({
                  id: "id" in program ? program.id : undefined,
                  title: program.title,
                  description: program.description,
                })),
              },
            ]}
          />
        </div>
      </Section>
      <CTASection
        title="Design a programme with BIL"
        description="Tell us who the programme is for, who is funding it, and what should be true when it ends."
        primaryLabel="Work With BIL"
      />
    </>
  );
}
