import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { values } from "@/data/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "BIL combines engineering, applied research, advisory and innovation programmes for institutions that need technology they can operate.",
  path: "/about",
});

const approach = [
  "Understand the institution, the users and the constraint that actually matters.",
  "Examine the evidence, the existing systems and the options that are operable.",
  "Recommend an architecture, a study or a programme only when it fits the problem.",
  "Build, advise or research according to what the work requires.",
  "Leave behind a system, a decision or a capability that someone else can carry.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BIL"
        title="An emerging-technology company with four practices."
        description="Blockchain & Innovation Landscape builds digital systems, studies emerging technology, advises institutions and designs innovation programmes. The practices are meant to strengthen one another."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        actions={
          <Button href="/contact" size="lg">
            Work With BIL
          </Button>
        }
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-3xl font-semibold tracking-tight lg:col-span-4">Who we are</h2>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted lg:col-span-8">
            <p>
              BIL is a commercial technology company. Engineering is the centre of the work. Research, policy and ecosystem programmes exist so that what gets built is better informed, and so that institutions can use the same team for more than one kind of problem.
            </p>
            <p>
              The company is not an exchange, a blockchain association or an NGO. Blockchain is one capability inside a wider innovation landscape. The same is true of artificial intelligence, digital identity and public digital infrastructure.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-3xl font-semibold tracking-tight lg:col-span-4">Why BIL exists</h2>
          <div className="max-w-3xl space-y-4 leading-relaxed text-muted lg:col-span-8">
            <p>
              Strategy firms often stop at the recommendation. Engineering firms can ship a system without studying the institution that has to live with it. Research groups can describe a technology without putting it into operation.
            </p>
            <p>
              BIL exists to hold those practices in one company. A feasibility study can become a prototype. A prototype can become a platform. An advisory engagement can be checked against people who have built the kind of system being discussed.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">Build. Research. Advise. Innovate.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <article>
            <h3 className="text-xl font-semibold">Build</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Engineering digital products, platforms and infrastructure designed around real problems.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-semibold">Research</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Exploring technologies, markets and emerging systems through applied research and experimentation.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-semibold">Advise</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Helping institutions make informed technology, transformation and policy decisions.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-semibold">Innovate</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Turning ideas, partnerships and emerging technologies into practical opportunities.
            </p>
          </article>
        </div>
      </Section>
      <Section tone="canvas">
        <h2 className="text-3xl font-semibold tracking-tight">Our approach</h2>
        <ol className="mt-8 max-w-3xl space-y-4">
          {approach.map((step, index) => (
            <li key={step} className="grid grid-cols-[auto_1fr] gap-4 border-t border-line pt-4">
              <span className="text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
              <p className="leading-relaxed text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">Our principles</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <li key={value.title} className="border-t border-line pt-4">
              <h3 className="font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">Africa and global innovation</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            <p>
              BIL begins from an African context, including Rwanda and the wider region. The work is aimed at institutions whose partners, standards and markets are also international.
            </p>
            <p>
              That means taking local operating conditions seriously: payments infrastructure, public digital systems, talent and regulation. It also means refusing a lower technical standard because a project is delivered in an African market.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">Leadership</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Leadership profiles will be published here once they are confirmed. This space is reserved for named people and roles. No biographies are shown until they can be verified.
        </p>
        <p className="mt-6 max-w-2xl border border-dashed border-line bg-canvas p-6 text-sm text-muted">
          Placeholder for future leadership entries: name, role, focus and a short biography.
        </p>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          BIL Ventures is a future initiative and is not operational. It is not an investment activity of the company today.
        </p>
      </Section>
      <CTASection
        title="Work with BIL"
        description="Tell us about the system, the study or the programme you need. We will respond with a clear view of whether we are the right team."
        primaryLabel="Start a Conversation"
      />
    </>
  );
}
