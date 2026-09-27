import Link from "@/components/ui/AppLink";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { Insight } from "@/types/content";

const kindLabels: Record<Insight["kind"], string> = {
  "research-report": "Research report",
  article: "Article",
  perspective: "Perspective",
  "policy-brief": "Policy brief",
  "case-study": "Case study",
  "technology-note": "Technology note",
};

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="flex h-full flex-col border border-line bg-paper">
      <MediaFrame src={insight.coverImage} alt="" className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          <Badge>{insight.category}</Badge>
          <Badge>{kindLabels[insight.kind]}</Badge>
          {insight.sample ? <Badge tone="warning">Sample</Badge> : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          <Link href={`/insights/${insight.slug}`} className="hover:text-brand">
            {insight.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{insight.summary}</p>
        <Link href={`/insights/${insight.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
          Read sample
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
