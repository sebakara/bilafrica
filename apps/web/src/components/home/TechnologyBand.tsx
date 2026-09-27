import { PracticeBand } from "@/components/home/PracticeBand";
import { technologyAreas } from "@/data/home";

export function TechnologyBand() {
  return (
    <PracticeBand
      eyebrow="Technology"
      title="We build beyond the buzzwords."
      description="BIL selects technology according to the problem, the institutions involved and the constraints of operating the result. A model, a ledger or a cloud platform is a means. It is not a starting point."
      actionHref="/services/technology"
      actionLabel="Explore Technology"
      items={technologyAreas.map((area) => area.title)}
      footer="We start with the problem, not the technology."
    />
  );
}
