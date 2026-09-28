import { requireAdmin } from "@/middleware/require-admin";
import { ContactModel } from "@/models/contact.model";
import { InsightModel } from "@/models/insight.model";
import { SubscriberModel } from "@/models/subscriber.model";

export class AdminOverviewController {
  static async show(request: Request) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const [insights, contacts, subscribers, recentContacts] = await Promise.all([
      InsightModel.count(),
      ContactModel.count(),
      SubscriberModel.count(),
      ContactModel.latest(5),
    ]);

    return Response.json({ insights, contacts, subscribers, recentContacts });
  }
}
