import { newsletterSchema } from "@bil/shared";
import { database } from "@/lib/db";
import { deliverEmail } from "@/lib/email";
import { allowRequest } from "@/lib/rate-limit";

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return `newsletter:${forwarded || request.headers.get("x-real-ip") || "local"}`;
}

export async function POST(request: Request) {
  if (!allowRequest(clientKey(request), 8)) {
    return Response.json(
      { status: "error", message: "Too many attempts. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  const body = (await request.json()) as Record<string, unknown>;

  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ status: "success", message: "Thank you. Your interest has been noted." });
  }

  const parsed = newsletterSchema.safeParse({ email: body.email });

  if (!parsed.success) {
    return Response.json(
      { status: "error", message: parsed.error.issues[0]?.message ?? "Enter a valid email address." },
      { status: 400 },
    );
  }

  const pool = await database();
  await pool.query("INSERT IGNORE INTO newsletter_subscribers (email) VALUES (?)", [parsed.data.email]);

  const result = await deliverEmail({
    subject: "BIL research updates request",
    text: `Please add this address to research updates when the list is active:\n${parsed.data.email}`,
    replyTo: parsed.data.email,
  });

  if (result.status === "failed" || result.status === "unconfigured") {
    return Response.json(
      {
        status: "success",
        message: "Thank you. Your address is saved. Email delivery is not configured yet.",
      },
    );
  }

  return Response.json({
    status: "success",
    message:
      result.status === "logged"
        ? "Thank you. Your address is saved. Email delivery is not configured yet."
        : "Thank you. We will be in touch when research updates are being sent.",
  });
}
