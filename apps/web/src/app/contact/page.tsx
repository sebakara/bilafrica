import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a conversation with Blockchain & Innovation Landscape about a system, a study, an advisory engagement or a programme.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        description="Tell us about the institution, the problem and the kind of help you need. A precise note is more useful than a long one."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Container className="grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-semibold tracking-tight">What to include</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <li>The organisation and the country you work from.</li>
            <li>Whether you need a build, research, advice or a programme.</li>
            <li>Any deadline or constraint that changes the shape of the work.</li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            BIL does not publish an office address or phone number on this site yet. The form is the contact path.
          </p>
        </div>
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
