import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function LabsPage() {
  const { pages, capabilities } = useSite();
  const page = pages.labs;

  return (
    <>
      <PageHero
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
      />
      <Section>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
      <Section tone="mist" id="domains">
        <h2 className="text-3xl font-semibold tracking-tight">{page.domainsTitle}</h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.labDomains.map((domain) => (
            <li key={domain.title} className="border-t border-line pt-4">
              <h3 className="font-semibold">{domain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{domain.description}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">{page.lifecycleTitle}</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-5">
          {capabilities.labLifecycle.map((step, index) => (
            <li key={step.title}>
              <span className="text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="canvas">
        <h2 className="text-3xl font-semibold tracking-tight">{page.servicesTitle}</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {capabilities.labServices.map((service) => (
            <li key={service} className="border border-line bg-paper px-4 py-3 text-sm font-medium">
              {service}
            </li>
          ))}
        </ul>
      </Section>
      <CTASection title={page.cta.title} description={page.cta.description} primaryLabel={page.cta.primaryLabel} />
    </>
  );
}
