import { useSearchParams } from "react-router-dom";
import Link from "@/components/ui/AppLink";
import { ArticleCard } from "@/components/ui/InsightCard";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { useInsightList } from "@/components/insights/useInsights";
import { filterInsights } from "@/lib/insights";
import { useSite } from "@/components/site/SiteContent";
import { cn } from "@/lib/utils";

export default function InsightsPage() {
  const { catalog, chrome } = useSite();
  const copy = chrome.insights;
  const insightCategories = catalog.insightCategories;
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const active = insightCategories.includes(category as (typeof insightCategories)[number]) ? category : "All";
  const { items, error } = useInsightList();
  const visible = items ? filterInsights(active === "All" ? undefined : active, items) : [];
  const onlySamples = items === null || (items.length > 0 && items.every((item) => item.sample));

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={onlySamples ? copy.archiveSample : copy.archivePublished}
        breadcrumbs={[
          { label: chrome.header.home, href: "/" },
          { label: copy.eyebrow },
        ]}
      />
      <Container className="py-12">
        {onlySamples && items && items.length > 0 ? (
          <p className="max-w-3xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            {copy.sampleBanner}
          </p>
        ) : null}
        <nav aria-label={copy.categoriesLabel} className="mt-8 flex flex-wrap gap-2">
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
        {error ? <p className="mt-8 text-muted">{copy.loadError}</p> : null}
        {items === null && !error ? <p className="mt-8 text-muted">{copy.loadingList}</p> : null}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {visible.map((insight) => (
            <ArticleCard key={insight.id} insight={insight} />
          ))}
        </div>
        {items && visible.length === 0 ? <p className="mt-8 text-muted">{copy.emptyCategory}</p> : null}
        <section className="mt-16 border-t border-line pt-10">
          <h2 className="text-2xl font-semibold">{copy.caseStudiesTitle}</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{copy.caseStudiesText}</p>
        </section>
      </Container>
    </>
  );
}
