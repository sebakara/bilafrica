export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type InsightKind =
  | "research-report"
  | "article"
  | "perspective"
  | "policy-brief"
  | "case-study"
  | "technology-note";

export type InsightCategory =
  | "AI"
  | "Blockchain"
  | "Fintech"
  | "Digital Identity"
  | "Digital Public Infrastructure"
  | "Cybersecurity"
  | "Innovation"
  | "Policy"
  | "Africa";

/**
 * Editorial items for the insights archive.
 * Sample entries must stay marked `sample: true` until a real publication replaces them.
 * A future CMS or MDX source can satisfy this same shape.
 */
export type Insight = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  kind: InsightKind;
  category: InsightCategory;
  topics: string[];
  publicationDate: string;
  readingTime: string;
  featured: boolean;
  sample: boolean;
  authors: string[];
  coverImage?: string;
  content: ContentBlock[];
};

/**
 * Model for future research publications and PDF releases.
 * Do not mark illustrative samples as published research.
 */
export type ResearchPublication = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  authors: string[];
  publicationDate: string;
  category: string;
  topics: string[];
  coverImage?: string;
  pdfUrl?: string;
  featured: boolean;
  readingTime?: string;
  content: ContentBlock[];
};

export type CaseStudyMetric = {
  label: string;
  value: string;
};

/**
 * Model for future case studies.
 * Unpublished or illustrative records must not be presented as client work.
 */
export type CaseStudy = {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
  year: number;
  featuredImage?: string;
  testimonial?: {
    quote: string;
    attribution: string;
  };
  metrics?: CaseStudyMetric[];
  status: "example" | "published";
};

export type Offering = {
  id?: string;
  title: string;
  description: string;
};

export type OfferingGroup = {
  id?: string;
  title: string;
  introduction?: string;
  items: Offering[];
};
