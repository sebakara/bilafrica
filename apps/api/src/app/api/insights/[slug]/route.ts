import { database, mapInsight } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pool = await database();
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM insights WHERE slug = ? LIMIT 1", [slug]);
  const row = rows[0];

  if (!row) {
    return Response.json({ message: "Insight not found." }, { status: 404 });
  }

  return Response.json(mapInsight(row as Parameters<typeof mapInsight>[0]));
}
