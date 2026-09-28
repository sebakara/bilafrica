import type { ContactInput, ContactMessage } from "@bil/shared";
import { db } from "@/database/knex";

type ContactRow = {
  id: number;
  full_name: string;
  organisation: string;
  email: string;
  phone: string | null;
  country: string | null;
  interest: string;
  message: string;
  created_at: Date | string;
};

function timestamp(value: Date | string) {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function mapContact(row: ContactRow): ContactMessage {
  return {
    id: Number(row.id),
    fullName: row.full_name,
    organisation: row.organisation,
    email: row.email,
    phone: row.phone,
    country: row.country,
    interest: row.interest,
    message: row.message,
    createdAt: timestamp(row.created_at),
  };
}

export class ContactModel {
  static async create(input: ContactInput) {
    const database = await db();
    await database("contact_messages").insert({
      full_name: input.fullName,
      organisation: input.organisation,
      email: input.email,
      phone: input.phone ?? null,
      country: input.country ?? null,
      interest: input.interest,
      message: input.message,
    });
  }

  static async list() {
    const database = await db();
    const rows = await database<ContactRow>("contact_messages").orderBy("created_at", "desc");
    return rows.map(mapContact);
  }

  static async latest(limit: number) {
    const database = await db();
    const rows = await database<ContactRow>("contact_messages").orderBy("created_at", "desc").limit(limit);
    return rows.map(mapContact);
  }

  static async findById(id: number) {
    const database = await db();
    const row = await database<ContactRow>("contact_messages").where({ id }).first();
    return row ? mapContact(row) : null;
  }

  static async delete(id: number) {
    const database = await db();
    const removed = await database("contact_messages").where({ id }).delete();
    return removed > 0;
  }

  static async count() {
    const database = await db();
    const row = await database("contact_messages").count<{ total: number }>({ total: "*" }).first();
    return Number(row?.total ?? 0);
  }
}
