import { db } from "@/database/knex";

export class HealthController {
  static async show() {
    const database = await db();
    await database.raw("select 1");
    return Response.json({ ok: true });
  }
}
