import type { Insight, InsightWrite } from "@bil/shared";
import { db } from "@/database/knex";

type InsightRow = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  summary: string;
  kind: Insight["kind"];
  category: Insight["category"];
  topics: string | Insight["topics"];
  publication_date: Date | string;
  reading_time: string;
  featured: number | boolean;
  sample: number | boolean;
  authors: string | string[];
  content: string | Insight["content"];
};

function parseJson<T>(value: string | T): T {
  return typeof value === "string" ? (JSON.parse(value) as T) : value;
}

function mapInsight(row: InsightRow): Insight {
  const publicationDate =
    row.publication_date instanceof Date
      ? row.publication_date.toISOString().slice(0, 10)
      : String(row.publication_date).slice(0, 10);

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle ?? undefined,
    summary: row.summary,
    kind: row.kind,
    category: row.category,
    topics: parseJson<string[]>(row.topics),
    publicationDate,
    readingTime: row.reading_time,
    featured: Boolean(row.featured),
    sample: Boolean(row.sample),
    authors: parseJson<string[]>(row.authors),
    content: parseJson<Insight["content"]>(row.content),
  };
}

function toColumns(input: InsightWrite) {
  return {
    slug: input.slug,
    title: input.title,
    subtitle: input.subtitle ?? null,
    summary: input.summary,
    kind: input.kind,
    category: input.category,
    topics: JSON.stringify(input.topics),
    publication_date: input.publicationDate,
    reading_time: input.readingTime,
    featured: input.featured ? 1 : 0,
    sample: input.sample ? 1 : 0,
    authors: JSON.stringify(input.authors),
    content: JSON.stringify(input.content),
  };
}

export class InsightModel {
  static async list(category?: string | null) {
    const database = await db();
    const query = database<InsightRow>("insights").orderBy("publication_date", "desc");
    if (category && category !== "All") query.where("category", category);
    const rows = await query;
    return rows.map(mapInsight);
  }

  static async findBySlug(slug: string) {
    const database = await db();
    const row = await database<InsightRow>("insights").where({ slug }).first();
    return row ? mapInsight(row) : null;
  }

  static async findById(id: string) {
    const database = await db();
    const row = await database<InsightRow>("insights").where({ id }).first();
    return row ? mapInsight(row) : null;
  }

  static async slugTaken(slug: string, exceptId?: string) {
    const database = await db();
    const query = database("insights").where({ slug });
    if (exceptId) query.whereNot({ id: exceptId });
    const row = await query.first();
    return Boolean(row);
  }

  static async create(id: string, input: InsightWrite) {
    const database = await db();
    await database("insights").insert({ id, ...toColumns(input) });
  }

  static async update(id: string, input: InsightWrite) {
    const database = await db();
    const updated = await database("insights").where({ id }).update(toColumns(input));
    return updated > 0;
  }

  static async delete(id: string) {
    const database = await db();
    const removed = await database("insights").where({ id }).delete();
    return removed > 0;
  }

  static async count() {
    const database = await db();
    const row = await database("insights").count<{ total: number }>({ total: "*" }).first();
    return Number(row?.total ?? 0);
  }
}
