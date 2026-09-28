import { db } from "@/database/knex";

type AdminRow = {
  id: number;
  email: string;
  password_hash: string;
  created_at: Date | string;
};

export class AdminModel {
  static async findByEmail(email: string) {
    const database = await db();
    const row = await database<AdminRow>("admins").where({ email }).first();
    if (!row) return null;

    return {
      id: Number(row.id),
      email: row.email,
      passwordHash: row.password_hash,
    };
  }
}
