import { IndustryCard } from "@/components/ui/IndustryCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useSite } from "@/components/site/SiteContent";

export function IndustriesBand() {
  const { home, industries, chrome } = useSite();
  const band = chrome.bands.industries;

  return (
    <Section tone="white">
      <SectionHeader eyebrow={band.eyebrow} title={band.title} description={band.description} />
      <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
        {home.audiences.map((audience) => (
          <li key={audience} className="border-t border-line pt-3 text-sm text-body">
            {audience}
          </li>
        ))}
      </ul>
      <div className="mt-14 grid gap-x-10 md:grid-cols-2">
        {industries.map((industry) => (
          <IndustryCard key={industry.slug} industry={industry} />
        ))}
      </div>
    </Section>
  );
}
