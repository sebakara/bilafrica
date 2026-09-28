import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { useSite } from "@/components/site/SiteContent";

export default function TermsPage() {
  const page = useSite().pages.terms;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumbs={[...page.breadcrumbs]}
      />
      <Container className="max-w-3xl space-y-8 py-14 leading-relaxed text-muted">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold text-body">{section.title}</h2>
            <p className="mt-3">{section.text}</p>
          </section>
        ))}
      </Container>
    </>
  );
}
