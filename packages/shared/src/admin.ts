import { z } from "zod";

export const insightKinds = [
  "research-report",
  "article",
  "perspective",
  "policy-brief",
  "case-study",
  "technology-note",
] as const;

export const insightCategoryOptions = [
  "AI",
  "Blockchain",
  "Fintech",
  "Digital Identity",
  "Digital Public Infrastructure",
  "Cybersecurity",
  "Innovation",
  "Policy",
  "Africa",
] as const;

const contentBlockSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("heading"),
    text: z.string().trim().min(1, "Enter the heading.").max(200),
  }),
  z.object({
    type: z.literal("paragraph"),
    text: z.string().trim().min(1, "Enter the paragraph.").max(8000),
  }),
  z.object({
    type: z.literal("list"),
    items: z.array(z.string().trim().min(1).max(500)).min(1, "Add at least one list item.").max(30),
  }),
]);

export const insightWriteSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(2, "Enter a slug.")
    .max(160)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens."),
  title: z.string().trim().min(2, "Enter a title.").max(255),
  subtitle: z.string().trim().max(255).optional(),
  summary: z.string().trim().min(10, "Enter a short summary.").max(2000),
  kind: z.enum(insightKinds),
  category: z.string().trim().min(1, "Enter a category.").max(80, "Category is too long."),
  topics: z.array(z.string().trim().min(1).max(80)).max(12),
  publicationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use a YYYY-MM-DD date."),
  readingTime: z.string().trim().min(1, "Enter a reading time.").max(40),
  featured: z.boolean(),
  sample: z.boolean(),
  authors: z.array(z.string().trim().min(1).max(120)).min(1, "Enter at least one author.").max(8),
  content: z.array(contentBlockSchema).min(1, "Add at least one content block.").max(40),
});

export type InsightWrite = z.infer<typeof insightWriteSchema>;

export type ContactMessage = {
  id: number;
  fullName: string;
  organisation: string;
  email: string;
  phone: string | null;
  country: string | null;
  interest: string;
  message: string;
  createdAt: string;
};

export type NewsletterSubscriber = {
  id: number;
  email: string;
  createdAt: string;
};

export type AdminOverview = {
  insights: number;
  contacts: number;
  subscribers: number;
  recentContacts: ContactMessage[];
};
