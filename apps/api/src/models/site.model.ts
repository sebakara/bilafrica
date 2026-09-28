import type { SiteDocument } from "@bil/shared";
import { db } from "@/database/knex";

const key = "public";

type SiteRow = {
  key: string;
  body: string | SiteDocument;
};

export class SiteModel {
  static async publicDocument() {
    const database = await db();
    const row = await database<SiteRow>("site_documents").where({ key }).first();
    if (!row) return null;
    return typeof row.body === "string" ? (JSON.parse(row.body) as SiteDocument) : row.body;
  }

  static async replace(document: SiteDocument) {
    const database = await db();
    const body = JSON.stringify(document);
    const updated = await database("site_documents").where({ key }).update({ body, updated_at: database.fn.now() });

    if (updated === 0) {
      await database("site_documents").insert({ key, body });
    }
  }
}
