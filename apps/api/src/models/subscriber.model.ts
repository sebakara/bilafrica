import type { NewsletterSubscriber } from "@bil/shared";
import { db } from "@/database/knex";

type SubscriberRow = {
  id: number;
  email: string;
  created_at: Date | string;
};

function timestamp(value: Date | string) {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function mapSubscriber(row: SubscriberRow): NewsletterSubscriber {
  return {
    id: Number(row.id),
    email: row.email,
    createdAt: timestamp(row.created_at),
  };
}

export class SubscriberModel {
  static async subscribe(email: string) {
    const database = await db();
    await database("newsletter_subscribers").insert({ email }).onConflict("email").ignore();
  }

  static async list() {
    const database = await db();
    const rows = await database<SubscriberRow>("newsletter_subscribers").orderBy("created_at", "desc");
    return rows.map(mapSubscriber);
  }

  static async delete(id: number) {
    const database = await db();
    const removed = await database("newsletter_subscribers").where({ id }).delete();
    return removed > 0;
  }

  static async count() {
    const database = await db();
    const row = await database("newsletter_subscribers").count<{ total: number }>({ total: "*" }).first();
    return Number(row?.total ?? 0);
  }
}
