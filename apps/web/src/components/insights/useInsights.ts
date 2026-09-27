import { useEffect, useState } from "react";
import { fetchInsight, fetchInsights, getFeaturedInsights, getRelatedInsights } from "@/lib/insights";
import type { Insight } from "@/types/content";

export function useInsightList() {
  const [items, setItems] = useState<Insight[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchInsights()
      .then(setItems)
      .catch(() => setError(true));
  }, []);

  return { items, error };
}

export function useInsight(slug: string) {
  const [insight, setInsight] = useState<Insight | null | undefined>(undefined);
  const [related, setRelated] = useState<Insight[]>([]);

  useEffect(() => {
    let active = true;

    Promise.all([fetchInsight(slug), fetchInsights()])
      .then(([item, items]) => {
        if (!active) return;
        setInsight(item);
        setRelated(item ? getRelatedInsights(item, 2, items) : []);
      })
      .catch(() => {
        if (active) setInsight(null);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  return { insight, related };
}

export function useFeaturedInsights(limit = 3) {
  const { items, error } = useInsightList();
  return { items: items ? getFeaturedInsights(limit, items) : null, error };
}
