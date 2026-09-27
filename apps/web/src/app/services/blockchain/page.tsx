import { CapabilityLayout } from "@/components/services/CapabilityLayout";
import { OfferingGroups } from "@/components/services/OfferingGroups";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { blockchainFits, blockchainGroups, blockchainMisfits, evaluationCriteria } from "@/data/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blockchain & Digital Assets",
  description:
    "BIL evaluates whether a blockchain creates real value before recommending one, then designs, builds and reviews the systems that justify it.",
  path: "/services/blockchain",
});

export default function BlockchainPage() {
  return (
    <CapabilityLayout
      eyebrow="Blockchain & Digital Assets"
      title="Blockchain where it creates real value."
      description="BIL does not recommend a ledger because it is fashionable. We start with the problem, then test whether shared state, auditability or settlement actually require one."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "What we do", href: "/services" },
        { label: "Blockchain" },
      ]}
      actions={
        <Button href="/contact" size="lg">
          Explore Blockchain Solutions
        </Button>
      }
      ctaLabel="Discuss a blockchain question"
    >
      <Section>
        <div className="max-w-3xl border border-line bg-canvas px-6 py-6 sm:px-8">
          <p className="eyebrow text-brand">Starting point</p>
          <p className="mt-3 text-xl font-semibold tracking-tight">We start with the problem, not the technology.</p>
          <p className="mt-3 leading-relaxed text-muted">
            Before a network is proposed, BIL looks at trust boundaries, the number of organisations involved, auditability, ownership, transparency, programmability, settlement and any real requirement for decentralisation. The recommendation may be a blockchain. It may be a database, an integration or a decision not to proceed.
          </p>
        </div>
        <h2 className="mt-14 text-3xl font-semibold tracking-tight">What we evaluate</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {evaluationCriteria.map((item) => (
            <li key={item} className="border border-line bg-canvas px-4 py-4 text-sm font-semibold text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">When blockchain can make sense</h2>
            <ul className="mt-6 grid gap-3">
              {blockchainFits.map((item) => (
                <li key={item} className="border border-line bg-paper px-4 py-4 text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">When blockchain may not be necessary</h2>
            <ul className="mt-6 grid gap-3">
              {blockchainMisfits.map((item) => (
                <li key={item} className="border border-line bg-paper px-4 py-4 text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <OfferingGroups groups={blockchainGroups} />
      </Section>
    </CapabilityLayout>
  );
}
