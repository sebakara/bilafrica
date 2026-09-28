import { siteDocument, siteDocumentError } from "@bil/shared";
import { describe, expect, it } from "vitest";

describe("site content validation", () => {
  it("accepts the public site document", () => {
    expect(siteDocumentError(siteDocument)).toBeNull();
  });

  it("rejects a document that drops a section", () => {
    const { pages, ...rest } = siteDocument;
    expect(pages).toBeTruthy();
    expect(siteDocumentError(rest)).toBe("Missing pages.");
  });
});
