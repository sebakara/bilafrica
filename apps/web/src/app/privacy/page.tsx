import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "How Blockchain & Innovation Landscape handles information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy notice"
        description="This notice explains how the website handles information you send through its forms. It will be updated with registered-entity details before it is treated as a final legal policy."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />
      <Container className="max-w-3xl space-y-8 py-14 text-base leading-relaxed text-muted">
        <section>
          <h2 className="text-2xl font-semibold text-body">Who this notice is from</h2>
          <p className="mt-3">
            This website is operated for Blockchain & Innovation Landscape (BIL). A postal address, registration number and dedicated privacy contact will be added when those details are confirmed. Until then, privacy questions can be sent through the contact form.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">What we collect</h2>
          <p className="mt-3">
            If you use the contact form, we collect the details you submit: name, organisation, email, optional phone and country, area of interest and message. The research-updates form collects an email address. A hidden field is used to reduce automated spam. We do not ask for payment details or account passwords.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">Why we use it</h2>
          <p className="mt-3">
            Contact details are used to reply to your enquiry and, if you asked, to note interest in future research updates. We do not sell personal information. We do not use enquiry content to train public models.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">How it is delivered</h2>
          <p className="mt-3">
            When email delivery is configured, messages are sent to a BIL inbox through an email provider. Access is limited to people who need it to respond. Server logs may include technical data such as IP address for security and abuse prevention.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">How long it is kept</h2>
          <p className="mt-3">
            Enquiry records are kept for as long as needed to respond and to keep a reasonable record of the conversation, then deleted or reduced. A formal retention schedule will be published with the final policy.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-body">Your requests</h2>
          <p className="mt-3">
            You may ask what we hold from your enquiry, ask for a correction, or ask us to delete it where we are not required to keep it. Use the contact form and put Privacy in the message. Applicable law may give you additional rights. This draft does not limit those rights.
          </p>
        </section>
      </Container>
    </>
  );
}
