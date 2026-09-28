import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function AboutPage() {
  const { pages, home } = useSite();
  const page = pages.about;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumbs={[...page.breadcrumbs]}
        actions={
          <Button href={page.action.href} size="lg">
            {page.action.label}
          </Button>
        }
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-3xl font-semibold tracking-tight lg:col-span-4">{page.who.title}</h2>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted lg:col-span-8">
            {page.who.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-3xl font-semibold tracking-tight lg:col-span-4">{page.why.title}</h2>
          <div className="max-w-3xl space-y-4 leading-relaxed text-muted lg:col-span-8">
            {page.why.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">{page.practicesTitle}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {home.principles.map((principle) => (
            <article key={principle.title}>
              <h3 className="text-xl font-semibold">{principle.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{principle.statement}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="canvas">
        <h2 className="text-3xl font-semibold tracking-tight">{page.approach.title}</h2>
        <ol className="mt-8 max-w-3xl space-y-4">
          {page.approach.steps.map((step, index) => (
            <li key={step} className="grid grid-cols-[auto_1fr] gap-4 border-t border-line pt-4">
              <span className="text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
              <p className="leading-relaxed text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">{page.principlesTitle}</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2">
          {home.values.map((value) => (
            <li key={value.title} className="border-t border-line pt-4">
              <h3 className="font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">{page.africa.title}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            {page.africa.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">{page.leadership.title}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{page.leadership.text}</p>
        <p className="mt-6 max-w-2xl border border-dashed border-line bg-canvas p-6 text-sm text-muted">{page.leadership.placeholder}</p>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">{page.leadership.ventures}</p>
      </Section>
      <CTASection title={page.cta.title} description={page.cta.description} primaryLabel={page.cta.primaryLabel} />
    </>
  );
}
