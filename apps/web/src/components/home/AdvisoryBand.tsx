import { PracticeBand } from "@/components/home/PracticeBand";
import { useSite } from "@/components/site/SiteContent";

export function AdvisoryBand() {
  const { home, chrome } = useSite();
  const band = chrome.bands.advisory;

  return (
    <PracticeBand
      eyebrow={band.eyebrow}
      title={band.title}
      description={band.description}
      actionHref={band.actionHref}
      actionLabel={band.actionLabel}
      items={home.advisoryHighlights.map((item) => item.title)}
    />
  );
}
