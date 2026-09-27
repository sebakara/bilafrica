import { z } from "zod";

export const interestAreas = [
  "Technology Development",
  "Artificial Intelligence",
  "Blockchain",
  "Research",
  "Advisory",
  "Policy",
  "Innovation Program",
  "Partnership",
  "Training",
  "Other",
] as const;

export type InterestArea = (typeof interestAreas)[number];

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(120, "Name is too long."),
  organisation: z
    .string()
    .trim()
    .min(2, "Enter your organisation.")
    .max(160, "Organisation name is too long."),
  email: z.email("Enter a valid email address."),
  phone: z.string().trim().max(40, "Phone number is too long.").optional(),
  country: z.string().trim().max(80, "Country is too long.").optional(),
  interest: z.enum(interestAreas, "Select an area of interest."),
  message: z
    .string()
    .trim()
    .min(20, "Share a little more detail, at least 20 characters.")
    .max(4000, "Message is too long."),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.email("Enter a valid email address."),
  website: z.string().optional(),
});

export type ContactField = keyof ContactInput;

export function fieldErrorsFromZod(error: z.ZodError) {
  const flattened = error.flatten().fieldErrors;
  const fieldErrors: Partial<Record<ContactField, string>> = {};

  for (const [key, messages] of Object.entries(flattened)) {
    const message = Array.isArray(messages) ? messages[0] : undefined;
    if (typeof message === "string") {
      fieldErrors[key as ContactField] = message;
    }
  }

  return fieldErrors;
}

export function readFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}
