import { PracticeBand } from "@/components/home/PracticeBand";
import { useSite } from "@/components/site/SiteContent";

export function InnovationBand() {
  const { capabilities, chrome } = useSite();
  const band = chrome.bands.innovation;

  return (
    <PracticeBand
      eyebrow={band.eyebrow}
      title={band.title}
      description={band.description}
      actionHref={band.actionHref}
      actionLabel={band.actionLabel}
      items={capabilities.ecosystemPrograms.map((program) => program.title)}
    />
  );
}
