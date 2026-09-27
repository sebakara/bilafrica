import type { Industry } from "@/data/industries";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <a href={`/industries#${industry.slug}`} className="block border-t border-line py-5 hover:border-navy">
      <h3 className="text-lg font-semibold">{industry.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{industry.summary}</p>
    </a>
  );
}
