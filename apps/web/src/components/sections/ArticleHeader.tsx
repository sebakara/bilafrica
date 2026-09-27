import type { Insight } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

const kindLabels: Record<Insight["kind"], string> = {
  "research-report": "Research report",
  article: "Article",
  perspective: "Perspective",
  "policy-brief": "Policy brief",
  "case-study": "Case study",
  "technology-note": "Technology note",
};

export function ArticleHeader({ insight }: { insight: Insight }) {
  return (
    <header className="max-w-3xl">
      <div className="flex flex-wrap gap-2">
        <Badge>{kindLabels[insight.kind]}</Badge>
        <Badge>{insight.category}</Badge>
        {insight.sample ? <Badge tone="warning">Illustrative sample</Badge> : null}
      </div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{insight.title}</h1>
      {insight.subtitle ? <p className="mt-4 text-lg leading-relaxed text-muted">{insight.subtitle}</p> : null}
      <p className="mt-6 text-sm text-muted">
        {insight.authors.join(", ")} · {insight.readingTime}
        {insight.sample ? " · Not a BIL publication" : null}
      </p>
    </header>
  );
}
