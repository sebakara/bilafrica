import type { Insight } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { useSite } from "@/components/site/SiteContent";

export function ArticleHeader({ insight }: { insight: Insight }) {
  const { chrome } = useSite();
  const labels = chrome.insights;

  return (
    <header className="max-w-3xl">
      <div className="flex flex-wrap gap-2">
        <Badge>{labels.kindLabels[insight.kind]}</Badge>
        <Badge>{insight.category}</Badge>
        {insight.sample ? <Badge tone="warning">{labels.illustrativeBadge}</Badge> : null}
      </div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{insight.title}</h1>
      {insight.subtitle ? <p className="mt-4 text-lg leading-relaxed text-muted">{insight.subtitle}</p> : null}
      <p className="mt-6 text-sm text-muted">
        {insight.authors.join(", ")} · {insight.readingTime}
        {insight.sample ? ` · ${labels.notPublication}` : null}
      </p>
    </header>
  );
}
