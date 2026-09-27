import { insights as seedInsights } from "./insights-data";
import type { Insight, InsightCategory, ResearchPublication } from "./types";

export const insights = seedInsights;

export const insightCategories: Array<InsightCategory | "All"> = [
  "All",
  "AI",
  "Blockchain",
  "Fintech",
  "Digital Identity",
  "Digital Public Infrastructure",
  "Cybersecurity",
  "Innovation",
  "Policy",
  "Africa",
];

export function sortInsights(items: Insight[]) {
  return [...items].sort((a, b) => (a.publicationDate < b.publicationDate ? 1 : -1));
}

export function getInsights(items: Insight[] = insights) {
  return sortInsights(items);
}

export function getInsight(slug: string, items: Insight[] = insights) {
  return items.find((item) => item.slug === slug);
}

export function getFeaturedInsights(limit = 3, items: Insight[] = insights) {
  const sorted = getInsights(items);
  const featured = sorted.filter((item) => item.featured);
  return (featured.length > 0 ? featured : sorted).slice(0, limit);
}

export function filterInsights(category?: string, items: Insight[] = insights) {
  if (!category || category === "All") {
    return getInsights(items);
  }

  return getInsights(items).filter((item) => item.category === category);
}

export function getRelatedInsights(insight: Insight, limit = 2, items: Insight[] = insights) {
  return getInsights(items)
    .filter((item) => item.slug !== insight.slug && item.category === insight.category)
    .slice(0, limit);
}

/** Real publications only. The array stays empty until BIL releases them. */
export function getPublishedResearch(): ResearchPublication[] {
  return [];
}

/** Published case studies only. Nothing is listed until a client agrees to be named. */
export function getPublishedCaseStudies() {
  return [] as const;
}
