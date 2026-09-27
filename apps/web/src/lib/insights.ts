import type { Insight } from "@bil/shared";

export {
  filterInsights,
  getFeaturedInsights,
  getInsight,
  getInsights,
  getPublishedCaseStudies,
  getPublishedResearch,
  getRelatedInsights,
  insightCategories,
} from "@bil/shared";

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
