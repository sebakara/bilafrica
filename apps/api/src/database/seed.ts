import { insights as seedInsights, siteDocument } from "@bil/shared";
import type { Knex } from "knex";
import { hashPassword } from "@/services/password.service";

export const seededAdmin = {
  email: "admin@bil.local",
  password: "bil-admin",
};

export async function seedInsightsIfEmpty(database: Knex) {
  const row = await database("insights").count<{ total: number }>({ total: "*" }).first();
  if (Number(row?.total ?? 0) > 0) return;

  await database("insights").insert(
    seedInsights.map((insight) => ({
      id: insight.id,
      slug: insight.slug,
      title: insight.title,
      subtitle: insight.subtitle ?? null,
      summary: insight.summary,
      kind: insight.kind,
      category: insight.category,
      topics: JSON.stringify(insight.topics),
      publication_date: insight.publicationDate,
      reading_time: insight.readingTime,
      featured: insight.featured ? 1 : 0,
      sample: insight.sample ? 1 : 0,
      authors: JSON.stringify(insight.authors),
      content: JSON.stringify(insight.content),
    })),
  );
}

export async function seedSiteContent(database: Knex) {
  const existing = await database("site_documents").where({ key: "public" }).first();
  if (existing) return;

  await database("site_documents").insert({ key: "public", body: JSON.stringify(siteDocument) });
}

export async function seedAdminIfEmpty(database: Knex) {
  const row = await database("admins").count<{ total: number }>({ total: "*" }).first();
  if (Number(row?.total ?? 0) > 0) return;

  await database("admins").insert({
    email: seededAdmin.email,
    password_hash: hashPassword(seededAdmin.password),
  });
}
