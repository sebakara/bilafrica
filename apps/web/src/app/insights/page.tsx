import { useSearchParams } from "react-router-dom";
import Link from "@/components/ui/AppLink";
import { ArticleCard } from "@/components/ui/InsightCard";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { useInsightList } from "@/components/insights/useInsights";
import { filterInsights, insightCategories } from "@/lib/insights";
import { cn } from "@/lib/utils";

export default function InsightsPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const active = insightCategories.includes(category as (typeof insightCategories)[number]) ? category : "All";
  const { items, error } = useInsightList();
  const visible = items ? filterInsights(active === "All" ? undefined : active, items) : [];

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Research, perspectives and notes."
        description="This archive will hold research reports, articles, perspectives, policy briefs, case studies and technology notes. Everything currently listed is sample content used to show the format."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
      />
      <Container className="py-12">
        <p className="max-w-3xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          Sample content. These pieces are not BIL publications, and they do not report company research findings.
        </p>
        <nav aria-label="Insight categories" className="mt-8 flex flex-wrap gap-2">
          {insightCategories.map((item) => {
            const href = item === "All" ? "/insights" : `/insights?category=${encodeURIComponent(item)}`;
            const selected = item === active;
            return (
              <Link
                key={item}
                href={href}
                aria-current={selected ? "page" : undefined}
                className={cn(
                  "border px-3 py-1.5 text-sm",
                  selected ? "border-brand bg-brand text-paper" : "border-line bg-paper text-muted hover:border-brand",
                )}
              >
                {item}
              </Link>
            );
          })}
        </nav>
        {error ? <p className="mt-8 text-muted">Insights could not be loaded from the database.</p> : null}
        {items === null && !error ? <p className="mt-8 text-muted">Loading insights.</p> : null}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {visible.map((insight) => (
            <ArticleCard key={insight.id} insight={insight} />
          ))}
        </div>
        {items && visible.length === 0 ? <p className="mt-8 text-muted">Nothing is listed in this category yet.</p> : null}
        <section className="mt-16 border-t border-line pt-10">
          <h2 className="text-2xl font-semibold">Case studies</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            Case studies are published only when an organisation has agreed to be named. None are listed yet. Example engagements are kept unpublished.
          </p>
        </section>
      </Container>
    </>
  );
}
