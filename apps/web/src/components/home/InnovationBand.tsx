import { PracticeBand } from "@/components/home/PracticeBand";
import { ecosystemPrograms } from "@/data/capabilities";

export function InnovationBand() {
  return (
    <PracticeBand
      eyebrow="Innovation"
      title="Innovation grows through ecosystems."
      description="BIL designs and operates programmes for organisations and partners. They are sponsored, commissioned or institutionally funded. They are not charitable activities of the company."
      actionHref="/ecosystem"
      actionLabel="Explore Innovation"
      items={ecosystemPrograms.map((program) => program.title)}
    />
  );
}
