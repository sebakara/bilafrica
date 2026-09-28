import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { SiteDocument } from "@bil/shared";

const SiteContext = createContext<SiteDocument | null>(null);

export function SiteContentProvider({ children, initial }: { children: ReactNode; initial?: SiteDocument }) {
  const [content, setContent] = useState<SiteDocument | null>(initial ?? null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (initial) return;
    let active = true;

    fetch("/api/site")
      .then((response) => {
        if (!response.ok) throw new Error("Site content is unavailable.");
        return response.json() as Promise<SiteDocument>;
      })
      .then((document) => {
        if (active) setContent(document);
      })
      .catch(() => {
        if (active) setError(true);
      });

    return () => {
      active = false;
    };
  }, [initial]);

  if (!content && !error) {
    return (
      <p className="px-6 py-16 text-sm text-muted" role="status">
        Loading.
      </p>
    );
  }

  if (!content) {
    return <p className="px-6 py-16 text-sm text-muted">The site content could not be loaded.</p>;
  }

  return <SiteContext.Provider value={content}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const content = useContext(SiteContext);
  if (!content) throw new Error("Site content is not loaded.");
  return content;
}
