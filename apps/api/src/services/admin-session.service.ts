import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE = "bil_admin";
const MAX_AGE_SECONDS = 60 * 60 * 12;

export function adminConfigured() {
  return Boolean(process.env.ADMIN_SESSION_SECRET);
}

function sign(payload: string) {
  return createHmac("sha256", process.env.ADMIN_SESSION_SECRET ?? "").update(payload).digest("base64url");
}

export function createSessionToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + MAX_AGE_SECONDS * 1000 })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function sessionIsValid(token: string) {
  const [payload, signature] = token.split(".");
  if (!payload || !signature || !process.env.ADMIN_SESSION_SECRET) return false;

  const expected = sign(payload);
  const left = Buffer.from(signature);
  const right = Buffer.from(expected);
  if (left.length !== right.length || !timingSafeEqual(left, right)) return false;

  try {
    const body = JSON.parse(Buffer.from(payload, "base64url").toString()) as { exp?: number };
    return typeof body.exp === "number" && body.exp > Date.now();
  } catch {
    return false;
  }
}

export function hasAdminSession(request: Request) {
  const header = request.headers.get("cookie") ?? "";
  const token = header
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE}=`))
    ?.slice(COOKIE.length + 1);

  return Boolean(token && sessionIsValid(token));
}

export function sessionCookie(token: string, request: Request) {
  const forwarded = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const secure = forwarded === "https" ? "; Secure" : "";
  return `${COOKIE}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${MAX_AGE_SECONDS}${secure}`;
}

export function clearSessionCookie() {
  return `${COOKIE}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`;
}
