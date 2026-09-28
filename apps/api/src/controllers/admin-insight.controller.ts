import { randomUUID } from "node:crypto";
import { insightWriteSchema } from "@bil/shared";
import { requireAdmin } from "@/middleware/require-admin";
import { InsightModel } from "@/models/insight.model";

type Context = { params: Promise<{ id: string }> };

function parseInsightWrite(body: unknown) {
  const record = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const subtitle = typeof record.subtitle === "string" ? record.subtitle.trim() : "";

  return insightWriteSchema.safeParse({
    ...record,
    subtitle: subtitle || undefined,
  });
}

function insightError(error: { flatten: () => { fieldErrors: unknown } }) {
  return Response.json(
    { message: "Check the insight fields.", fieldErrors: error.flatten().fieldErrors },
    { status: 400 },
  );
}

export class AdminInsightController {
  static async index(request: Request) {
    const denied = requireAdmin(request);
    if (denied) return denied;
    return Response.json(await InsightModel.list());
  }

  static async create(request: Request) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const parsed = parseInsightWrite(await request.json().catch(() => null));
    if (!parsed.success) return insightError(parsed.error);
    if (await InsightModel.slugTaken(parsed.data.slug)) {
      return Response.json({ message: "An insight already uses that slug." }, { status: 409 });
    }

    const id = randomUUID();
    await InsightModel.create(id, parsed.data);
    return Response.json({ id }, { status: 201 });
  }

  static async show(request: Request, context: Context) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const { id } = await context.params;
    const insight = await InsightModel.findById(id);
    if (!insight) return Response.json({ message: "Insight not found." }, { status: 404 });
    return Response.json(insight);
  }

  static async update(request: Request, context: Context) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const { id } = await context.params;
    const existing = await InsightModel.findById(id);
    if (!existing) return Response.json({ message: "Insight not found." }, { status: 404 });

    const parsed = parseInsightWrite(await request.json().catch(() => null));
    if (!parsed.success) return insightError(parsed.error);
    if (await InsightModel.slugTaken(parsed.data.slug, id)) {
      return Response.json({ message: "An insight already uses that slug." }, { status: 409 });
    }

    await InsightModel.update(id, parsed.data);
    return Response.json({ id });
  }

  static async destroy(request: Request, context: Context) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const { id } = await context.params;
    const removed = await InsightModel.delete(id);
    if (!removed) return Response.json({ message: "Insight not found." }, { status: 404 });
    return Response.json({ ok: true });
  }
}
