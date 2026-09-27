import { PracticeBand } from "@/components/home/PracticeBand";
import { advisoryHighlights } from "@/data/home";

export function AdvisoryBand() {
  return (
    <PracticeBand
      eyebrow="Advisory"
      title="Technology decisions backed by engineering and evidence."
      description="Advisory at BIL is informed by people who also design, build and research systems. A recommendation is checked against what can actually be engineered and operated."
      actionHref="/services/advisory"
      actionLabel="Explore Advisory"
      items={advisoryHighlights.map((item) => item.title)}
    />
  );
}
