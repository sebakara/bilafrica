import { siteDocumentError, type SiteDocument } from "@bil/shared";
import { requireAdmin } from "@/middleware/require-admin";
import { SiteModel } from "@/models/site.model";

export class AdminSiteController {
  static async show(request: Request) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const document = await SiteModel.publicDocument();
    if (!document) return Response.json({ message: "Site content is not available." }, { status: 503 });
    return Response.json(document);
  }

  static async update(request: Request) {
    const denied = requireAdmin(request);
    if (denied) return denied;

    const body = await request.json().catch(() => null);
    const problem = siteDocumentError(body);
    if (problem || !body) return Response.json({ message: problem ?? "Site content must be an object." }, { status: 400 });

    await SiteModel.replace(body as SiteDocument);
    return Response.json(await SiteModel.publicDocument());
  }
}
