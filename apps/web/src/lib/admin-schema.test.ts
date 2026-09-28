import { describe, expect, it } from "vitest";
import { insightWriteSchema } from "@bil/shared";

const valid = {
  slug: "record-before-ledger",
  title: "Choosing a record",
  summary: "An illustrative note long enough to summarise the piece.",
  kind: "perspective",
  category: "Blockchain",
  topics: ["Architecture"],
  publicationDate: "2026-03-12",
  readingTime: "6 min",
  featured: false,
  sample: true,
  authors: ["BIL sample desk"],
  content: [{ type: "paragraph", text: "This is illustrative sample writing." }],
};

describe("insight admin validation", () => {
  it("accepts a complete insight", () => {
    expect(insightWriteSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a slug with spaces and an empty body", () => {
    const parsed = insightWriteSchema.safeParse({
      ...valid,
      slug: "Not a slug",
      content: [],
    });
    expect(parsed.success).toBe(false);
  });
});