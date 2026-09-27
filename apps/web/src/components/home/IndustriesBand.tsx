import { IndustryCard } from "@/components/ui/IndustryCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { audiences } from "@/data/home";
import { industries } from "@/data/industries";

export function IndustriesBand() {
  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="Industries"
        title="Work shaped by the problem in front of the institution."
        description="We work with organisations across government, finance, industry, research and the wider innovation community. The list below is a field of practice, not a client roster."
      />
      <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
        {audiences.map((audience) => (
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
