import { useParams } from "react-router-dom";
import Link from "@/components/ui/AppLink";
import { ArticleHeader } from "@/components/sections/ArticleHeader";
import { InsightCard } from "@/components/ui/InsightCard";
import { Container } from "@/components/ui/Container";
import { useInsight } from "@/components/insights/useInsights";
import { useSite } from "@/components/site/SiteContent";
import type { ContentBlock } from "@/types/content";
import NotFound from "@/app/not-found";

function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-body">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={`${block.text}-${index}`} className="pt-4 text-2xl font-semibold tracking-tight">
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={`list-${index}`} className="list-disc space-y-2 pl-5 text-muted">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${block.text.slice(0, 24)}-${index}`} className="text-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function InsightPage() {
  const { slug = "" } = useParams();
  const { insight, related } = useInsight(slug);
  const copy = useSite().chrome.insights;

  if (insight === undefined) {
    return (
      <Container className="py-24">
        <p className="text-muted">{copy.loading}</p>
      </Container>
    );
  }

  if (!insight) {
    return <NotFound />;
  }

  return (
    <Container className="py-14 sm:py-16">
      <p className="text-sm text-muted">
        <Link href="/insights" className="font-medium text-brand">
          {copy.eyebrow}
        </Link>
      </p>
      <div className="mt-6">
        <ArticleHeader insight={insight} />
      </div>
      {insight.sample ? (
        <p className="mt-8 max-w-3xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          {copy.sampleNotice}
        </p>
      ) : null}
      <Blocks blocks={insight.content} />
      <p className="mt-10 text-sm text-muted">{copy.attachmentNote}</p>
      {related.length > 0 ? (
        <section className="mt-16 border-t border-line pt-10">
          <h2 className="text-2xl font-semibold">{copy.related}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <InsightCard key={item.id} insight={item} />
            ))}
          </div>
        </section>
      ) : null}
    </Container>
  );
}
