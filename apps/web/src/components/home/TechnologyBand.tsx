import { PracticeBand } from "@/components/home/PracticeBand";
import { useSite } from "@/components/site/SiteContent";

export function TechnologyBand() {
  const { home, chrome } = useSite();
  const band = chrome.bands.technology;

  return (
    <PracticeBand
      eyebrow={band.eyebrow}
      title={band.title}
      description={band.description}
      actionHref={band.actionHref}
      actionLabel={band.actionLabel}
      items={home.technologyAreas.map((area) => area.title)}
      footer={band.footer}
    />
  );
}
