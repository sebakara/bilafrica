import { adminConfigured, hasAdminSession } from "@/services/admin-session.service";

export function requireAdmin(request: Request) {
  if (!adminConfigured()) {
    return Response.json({ message: "Admin access is not configured." }, { status: 503 });
  }

  if (!hasAdminSession(request)) {
    return Response.json({ message: "Sign in required." }, { status: 401 });
  }

  return null;
}
