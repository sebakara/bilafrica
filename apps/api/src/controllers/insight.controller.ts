import { InsightModel } from "@/models/insight.model";

export class InsightController {
  static async index(request: Request) {
    const category = new URL(request.url).searchParams.get("category");
    return Response.json(await InsightModel.list(category));
  }

  static async show(_request: Request, context: { params: Promise<{ slug: string }> }) {
    const { slug } = await context.params;
    const insight = await InsightModel.findBySlug(slug);
    if (!insight) return Response.json({ message: "Insight not found." }, { status: 404 });
    return Response.json(insight);
  }
}
