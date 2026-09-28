import { requireAdmin } from "@/middleware/require-admin";
import { SubscriberModel } from "@/models/subscriber.model";

export class AdminSubscriberController {
  static async index(request: Request) {
    const denied = requireAdmin(request);
    if (denied) return denied;
    return Response.json(await SubscriberModel.list());
  }

  static async destroy(request: Request, context: { params: Promise<{ id: string }> }) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const { id } = await context.params;
    const removed = await SubscriberModel.delete(Number(id));
    if (!removed) return Response.json({ message: "Subscriber not found." }, { status: 404 });
    return Response.json({ ok: true });
  }
}
