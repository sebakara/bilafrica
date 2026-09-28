import type { Insight, ResearchPublication } from "@bil/shared";

export function sortInsights(items: Insight[]) {
  return [...items].sort((a, b) => (a.publicationDate < b.publicationDate ? 1 : -1));
}

export function getFeaturedInsights(limit: number, items: Insight[]) {
  const sorted = sortInsights(items);
  const featured = sorted.filter((item) => item.featured);
  return (featured.length > 0 ? featured : sorted).slice(0, limit);
}

export function filterInsights(category: string | undefined, items: Insight[]) {
  const sorted = sortInsights(items);
  if (!category || category === "All") return sorted;
  return sorted.filter((item) => item.category === category);
}

export function getRelatedInsights(insight: Insight, limit: number, items: Insight[]) {
  return sortInsights(items)
    .filter((item) => item.slug !== insight.slug && item.category === insight.category)
    .slice(0, limit);
}

export function getPublishedResearch(): ResearchPublication[] {
  return [];
}

export function getPublishedCaseStudies() {
  return [] as const;
}

export async function fetchInsights(): Promise<Insight[]> {
  const response = await fetch("/api/insights");

  if (!response.ok) {
    throw new Error("Insights are unavailable.");
  }

  return response.json() as Promise<Insight[]>;
}

export async function fetchInsight(slug: string): Promise<Insight | null> {
  const response = await fetch(`/api/insights/${encodeURIComponent(slug)}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("This insight is unavailable.");
  }

  return response.json() as Promise<Insight>;
}
