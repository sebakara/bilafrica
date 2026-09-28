import Link from "@/components/ui/AppLink";
import { PracticeBand } from "@/components/home/PracticeBand";
import { useSite } from "@/components/site/SiteContent";

export function ResearchBand() {
  const { home, chrome } = useSite();
  const band = chrome.bands.research;

  return (
    <PracticeBand
      eyebrow={band.eyebrow}
      title={band.title}
      description={band.description}
      actionHref={band.actionHref}
      actionLabel={band.actionLabel}
      items={home.researchFormats}
      footer={
        <>
          {band.footerLead}{" "}
          <Link href="/insights" className="font-semibold text-brand">
            {band.footerLink}
          </Link>
          .
        </>
      }
    />
  );
}
