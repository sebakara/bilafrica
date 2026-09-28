import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useSite } from "@/components/site/SiteContent";

export function Principles() {
  const { home, chrome } = useSite();
  const band = chrome.bands.principles;

  return (
    <Section tone="white">
      <SectionHeader eyebrow={band.eyebrow} title={band.title} description={band.description} />
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {home.principles.map((principle, index) => (
          <li key={principle.title} className="flex flex-col border border-line bg-canvas p-6">
            <span className="text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">{principle.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{principle.statement}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">{band.closing}</p>
    </Section>
  );
}
