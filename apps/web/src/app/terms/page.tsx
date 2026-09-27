import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description: "Terms for using the Blockchain & Innovation Landscape website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="These terms cover use of this website. They are a working draft and will be updated with the company legal entity before they are treated as final."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <Container className="max-w-3xl space-y-8 py-14 leading-relaxed text-muted">
        <section>
          <h2 className="text-2xl font-semibold text-body">Using the site</h2>
          <p className="mt-3">
            You may use this website to learn about Blockchain & Innovation Landscape and to send an enquiry. You may not misuse the forms, attempt to disrupt the site, or scrape it in a way that degrades the service.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">No offer of services by itself</h2>
          <p className="mt-3">
            Descriptions of capabilities are not a proposal, a quote or an agreement to perform work. Work begins only when both sides agree scope and terms in writing. Sample insights are not publications and must not be cited as BIL research.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">Intellectual property</h2>
          <p className="mt-3">
            Site text, design and code are owned by BIL or used with permission. You may not copy substantial parts for a competing site. Sharing a link is welcome.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">Accuracy</h2>
          <p className="mt-3">
            We aim to keep the site accurate. It may be incomplete while the company publishes real leadership, research and contact details. Do not rely on sample content for a regulatory, investment or technical decision.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">Liability</h2>
          <p className="mt-3">
            The website is provided as a source of information. To the extent the law allows, BIL is not liable for loss arising only from use of the public website. This does not exclude liability that cannot legally be excluded. Project contracts will set their own terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">Contact</h2>
          <p className="mt-3">Questions about these terms can be sent through the contact form.</p>
        </section>
      </Container>
    </>
  );
}
