import Link from "@/components/ui/AppLink";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { useSite } from "@/components/site/SiteContent";
import type { Insight } from "@/types/content";

export function InsightCard({ insight }: { insight: Insight }) {
  const { chrome } = useSite();
  const labels = chrome.insights;

  return (
    <article className="flex h-full flex-col border border-line bg-paper">
      <MediaFrame src={insight.coverImage} alt="" className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          <Badge>{insight.category}</Badge>
          <Badge>{labels.kindLabels[insight.kind]}</Badge>
          {insight.sample ? <Badge tone="warning">{labels.sampleBadge}</Badge> : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          <Link href={`/insights/${insight.slug}`} className="hover:text-brand">
            {insight.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{insight.summary}</p>
        <Link href={`/insights/${insight.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
          {insight.sample ? labels.readSample : labels.read}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function ArticleCard({ insight }: { insight: Insight }) {
  return <InsightCard insight={insight} />;
}

export function ResearchCard({ insight }: { insight: Insight }) {
  return <InsightCard insight={insight} />;
}
