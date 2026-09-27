import { database, mapInsight } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

export async function GET(request: Request) {
  const category = new URL(request.url).searchParams.get("category");
  const pool = await database();
  const [rows] = await pool.query<RowDataPacket[]>(
    category && category !== "All"
      ? "SELECT * FROM insights WHERE category = ? ORDER BY publication_date DESC"
      : "SELECT * FROM insights ORDER BY publication_date DESC",
    category && category !== "All" ? [category] : [],
  );

  return Response.json(rows.map((row) => mapInsight(row as Parameters<typeof mapInsight>[0])));
}
