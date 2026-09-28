import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export default function IndustriesPage() {
  const { pages, industries, home } = useSite();
  const page = pages.industries;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumbs={[...page.breadcrumbs]}
      />
      <Section>
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <nav aria-label={page.navLabel} className="mb-10 lg:col-span-3 lg:mb-0">
            <ul className="space-y-2 lg:sticky lg:top-28">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <a href={`#${industry.slug}`} className="text-sm font-medium text-muted hover:text-brand">
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-9">
            {industries.map((industry) => (
              <article key={industry.slug} id={industry.slug} className="border-t border-line py-10">
                <h2 className="text-2xl font-semibold tracking-tight">{industry.name}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{industry.summary}</p>
                <div className="mt-8 grid gap-8 sm:grid-cols-3">
                  <div>
                    <h3 className="font-sans text-sm font-semibold">{page.challenges}</h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                      {industry.challenges.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold">{page.help}</h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                      {industry.help.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold">{page.capabilities}</h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                      {industry.capabilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <h2 className="text-2xl font-semibold">{page.audiencesTitle}</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {home.audiences.map((audience) => (
            <li key={audience} className="border border-line bg-paper px-3 py-1.5 text-sm">
              {audience}
            </li>
          ))}
        </ul>
      </Section>
      <CTASection primaryLabel={page.ctaLabel} />
    </>
  );
}
