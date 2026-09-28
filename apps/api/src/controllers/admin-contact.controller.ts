import { requireAdmin } from "@/middleware/require-admin";
import { ContactModel } from "@/models/contact.model";

type Context = { params: Promise<{ id: string }> };

export class AdminContactController {
  static async index(request: Request) {
    const denied = requireAdmin(request);
    if (denied) return denied;
    return Response.json(await ContactModel.list());
  }

  static async show(request: Request, context: Context) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const { id } = await context.params;
    const contact = await ContactModel.findById(Number(id));
    if (!contact) return Response.json({ message: "Message not found." }, { status: 404 });
    return Response.json(contact);
  }

  static async destroy(request: Request, context: Context) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const { id } = await context.params;
    const removed = await ContactModel.delete(Number(id));
    if (!removed) return Response.json({ message: "Message not found." }, { status: 404 });
    return Response.json({ ok: true });
  }
}
