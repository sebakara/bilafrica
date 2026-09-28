import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { useSite } from "@/components/site/SiteContent";

export default function ContactPage() {
  const page = useSite().pages.contact;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumbs={[...page.breadcrumbs]}
      />
      <Container className="grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-semibold tracking-tight">{page.includeTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            {page.include.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">{page.note}</p>
        </div>
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
