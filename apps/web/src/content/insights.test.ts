import { describe, expect, it } from "vitest";
import { insights } from "@/content/insights";
import { getPublishedCaseStudies, getPublishedResearch } from "@/lib/insights";

describe("editorial content", () => {
  it("marks every insight as sample content", () => {
    expect(insights.length).toBeGreaterThan(0);
    for (const insight of insights) {
      expect(insight.sample).toBe(true);
    }
  });

  it("does not publish case studies or research reports", () => {
    expect(getPublishedResearch()).toEqual([]);
    expect(getPublishedCaseStudies()).toEqual([]);
  });
});
