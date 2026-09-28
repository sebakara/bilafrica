import { allowRequest, clientAddress } from "@/middleware/rate-limit";
import { AdminModel } from "@/models/admin.model";
import {
  adminConfigured,
  clearSessionCookie,
  createSessionToken,
  hasAdminSession,
  sessionCookie,
} from "@/services/admin-session.service";
import { verifyPassword } from "@/services/password.service";

export class AdminAuthController {
  static async create(request: Request) {
    if (!adminConfigured()) {
      return Response.json({ message: "Admin access is not configured." }, { status: 503 });
    }

    if (!allowRequest(`admin-login:${clientAddress(request)}`, 8)) {
      return Response.json({ message: "Too many sign-in attempts. Wait a few minutes and try again." }, { status: 429 });
    }

    const body = (await request.json().catch(() => null)) as { email?: unknown; password?: unknown } | null;
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body?.password === "string" ? body.password : "";
    const admin = email ? await AdminModel.findByEmail(email) : null;

    if (!admin || !verifyPassword(password, admin.passwordHash)) {
      return Response.json({ message: "That email or password is not correct." }, { status: 401 });
    }

    return Response.json({ ok: true }, { headers: { "Set-Cookie": sessionCookie(createSessionToken(), request) } });
  }

  static async destroy() {
    return Response.json({ ok: true }, { headers: { "Set-Cookie": clearSessionCookie() } });
  }

  static async show(request: Request) {
    if (!adminConfigured()) {
      return Response.json({ message: "Admin access is not configured." }, { status: 503 });
    }

    if (!hasAdminSession(request)) {
      return Response.json({ message: "Sign in required." }, { status: 401 });
    }

    return Response.json({ ok: true });
  }
}
