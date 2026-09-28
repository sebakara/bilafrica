import { describe, expect, it } from "vitest";
import { interestAreas, isListedInterest } from "@bil/shared";
import { contactSchema } from "@/lib/contact-schema";

const valid = {
  fullName: "Amina Kane",
  organisation: "Northwind Registry",
  email: "amina@example.com",
  phone: "",
  country: "Rwanda",
  interest: "Technology Development",
  message: "We need an architecture review before replacing a registry platform.",
};

describe("contact validation", () => {
  it("accepts a complete enquiry", () => {
    const parsed = contactSchema.safeParse({ ...valid, phone: undefined });
    expect(parsed.success).toBe(true);
  });

  it("rejects an invalid email and a short message", () => {
    const parsed = contactSchema.safeParse({
      ...valid,
      email: "not-an-email",
      message: "Too short",
    });

    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      const fields = parsed.error.flatten().fieldErrors;
      expect(fields.email?.[0]).toBeTruthy();
      expect(fields.message?.[0]).toBeTruthy();
    }
  });

  it("rejects an unknown area of interest", () => {
    expect(isListedInterest("Cryptocurrency trading", interestAreas)).toBe(false);
    expect(isListedInterest("Technology Development", interestAreas)).toBe(true);
    expect(contactSchema.safeParse({ ...valid, interest: "" }).success).toBe(false);
  });
});
