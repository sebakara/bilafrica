import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { labDomains, labLifecycle, labServices } from "@/data/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "BIL Labs",
  description:
    "BIL Labs is the applied research practice of Blockchain & Innovation Landscape: experiments, prototypes and technology assessments.",
  path: "/labs",
});

export default function LabsPage() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="BIL Labs"
        title="Experiment today. Build what comes next."
        description="Labs is where BIL studies emerging technology closely enough to prototype it, reject it or turn it into a system. The work is applied, commissioned or pursued as a partnership."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "BIL Labs" },
        ]}
        actions={
          <Button href="/contact" variant="dark" size="lg">
            Discuss an R&D partnership
          </Button>
        }
      />
      <Section>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          <p>
            A lab result is useful when it changes a decision or becomes something that can be operated. BIL Labs works with the engineering, advisory and policy practices so an experiment does not stay isolated from the company that would have to deliver it.
          </p>
          <p>
            Digital currency infrastructure is a research domain, not a product BIL issues. The same restraint applies to every other area on this page.
          </p>
        </div>
      </Section>
      <Section tone="mist" id="domains">
        <h2 className="text-3xl font-semibold tracking-tight">Research domains</h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labDomains.map((domain) => (
            <li key={domain.title} className="border-t border-line pt-4">
              <h3 className="font-semibold">{domain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{domain.description}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">How a study moves</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-5">
          {labLifecycle.map((step, index) => (
            <li key={step.title}>
              <span className="text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="canvas">
        <h2 className="text-3xl font-semibold tracking-tight">What can be commissioned</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {labServices.map((service) => (
            <li key={service} className="border border-line bg-paper px-4 py-3 text-sm font-medium">
              {service}
            </li>
          ))}
        </ul>
      </Section>
      <CTASection
        title="Bring a question to BIL Labs"
        description="A useful brief names the decision the research should inform, the constraints, and whether a prototype is required."
        primaryLabel="Discuss an R&D partnership"
      />
    </>
  );
}
