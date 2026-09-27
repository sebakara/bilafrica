import Link from "@/components/ui/AppLink";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { engagementModels } from "@/data/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "What We Do",
  description:
    "BIL builds technology, conducts applied research, advises institutions and designs innovation programmes as one company.",
  path: "/services",
});

const pillars = [
  {
    label: "Build",
    text: "Technology development and engineering, including AI, data, digital infrastructure and blockchain where it fits.",
    links: [
      { label: "Technology", href: "/services/technology" },
      { label: "AI & Data", href: "/services/ai-data" },
      { label: "Blockchain & Digital Assets", href: "/services/blockchain" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
    ],
  },
  {
    label: "Research",
    text: "Applied R&D in BIL Labs, and evidence for markets, technology and regulation.",
    links: [
      { label: "BIL Labs", href: "/labs" },
      { label: "Research & Policy", href: "/services/research-policy" },
    ],
  },
  {
    label: "Advise",
    text: "Strategy, architecture, transformation and due diligence grounded in delivery experience.",
    links: [{ label: "Advisory", href: "/services/advisory" }],
  },
  {
    label: "Innovate",
    text: "Programmes for developers, startups, universities and corporate partners. These are designed and operated for sponsors.",
    links: [{ label: "Ecosystem", href: "/ecosystem" }],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Engineering, research, advisory and innovation in one practice."
        description="Choose a capability to see how BIL works. Each practice is commercial. Together they let an institution move from a question to a system, a study or a programme."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What we do" },
        ]}
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {pillars.map((pillar, index) => (
            <article key={pillar.label} className="flex flex-col border border-line bg-canvas p-6 sm:p-8">
              <p className="eyebrow text-brand">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{pillar.label}</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{pillar.text}</p>
              <ul className="mt-8 grid gap-2">
                {pillar.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between gap-4 border border-line bg-paper px-4 py-3 text-sm font-semibold text-body transition-colors hover:border-brand hover:text-brand"
                    >
                      {link.label}
                      <ArrowRight className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <p className="eyebrow text-brand">Engagements</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Ways to work together</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Engagements are scoped to the problem. A single organisation may use more than one of these over time.
        </p>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <div key={model.title} className="border border-line bg-paper p-5">
              <dt className="font-sans text-base font-semibold text-ink">{model.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{model.description}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-2xl border border-line bg-paper px-5 py-4 text-sm leading-relaxed text-muted">
          BIL Ventures may be developed later as a separate initiative. It is not operational, and it is not offered as a service today.
        </p>
      </Section>
      <CTASection primaryLabel="Discuss a Project" secondaryHref="/labs" secondaryLabel="Explore BIL Labs" />
    </>
  );
}
