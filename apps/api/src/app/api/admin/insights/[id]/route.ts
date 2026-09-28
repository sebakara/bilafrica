import { AdminInsightController } from "@/controllers/admin-insight.controller";

export const GET = AdminInsightController.show;
export const PATCH = AdminInsightController.update;
export const DELETE = AdminInsightController.destroy;
