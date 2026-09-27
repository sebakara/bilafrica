import { database } from "@/lib/db";

export async function GET() {
  await database();
  return Response.json({ ok: true });
}
