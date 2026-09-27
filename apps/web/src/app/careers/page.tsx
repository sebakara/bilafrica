import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Careers at Blockchain & Innovation Landscape across engineering, research and innovation programmes.",
  path: "/careers",
});

const areas = [
  {
    title: "Engineering",
    text: "People who design and build platforms, integrations and the operational detail around them.",
  },
  {
    title: "Research",
    text: "People who can frame a technology question, test it and write so an institution can use the result.",
  },
  {
    title: "Innovation",
    text: "People who can design a programme, a community or a learning experience for a paying partner.",
  },
  {
    title: "Graduate opportunities",
    text: "Early-career roles will be listed here when they are open. None are published at the moment.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Careers at BIL"
        description="The company needs people who can build, study and explain technology without inflating it. Roles will be posted when they are real."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">Why BIL</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          Work moves between delivery, research and institutional problems. That suits people who want commercial technology practice with room for evidence and long-term systems, rather than a single service line.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {areas.map((area) => (
            <article key={area.title} className="border-t border-line pt-5">
              <h3 className="text-xl font-semibold">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{area.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <h2 className="text-3xl font-semibold tracking-tight">Open positions</h2>
        <p className="mt-4 text-lg text-body">There are currently no published openings.</p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          If you want to be considered when a role opens, use the contact form, choose Other, and describe the kind of work you do.
        </p>
      </Section>
      <CTASection
        title="Share your profile"
        description="A short note on what you build or research is enough. Please do not send confidential material from a current employer."
        primaryLabel="Contact BIL"
      />
    </>
  );
}
