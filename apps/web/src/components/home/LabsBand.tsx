import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { labSteps } from "@/data/home";

export function LabsBand() {
  return (
    <Section tone="dark">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-aqua">BIL Labs</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Where emerging technologies become practical systems.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foam">
            Labs is the applied research arm of the company. It studies a question, builds a prototype and decides what should become a product, a recommendation or a stopped experiment.
          </p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <Button href="/labs" variant="dark">
            Explore BIL Labs
          </Button>
        </div>
      </div>
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {labSteps.map((step, index) => (
          <li key={step.title} className="border-t border-white/15 pt-5">
            <span className="text-sm font-semibold text-aqua">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foam">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
