import { SiteModel } from "@/models/site.model";

export class SiteController {
  static async show() {
    const document = await SiteModel.publicDocument();
    if (!document) return Response.json({ message: "Site content is not available." }, { status: 503 });
    return Response.json(document);
  }
}
