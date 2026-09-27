import { contactSchema, fieldErrorsFromZod } from "@bil/shared";
import { database } from "@/lib/db";
import { deliverEmail } from "@/lib/email";
import { allowRequest } from "@/lib/rate-limit";

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return `contact:${forwarded || request.headers.get("x-real-ip") || "local"}`;
}

export async function POST(request: Request) {
  if (!allowRequest(clientKey(request))) {
    return Response.json(
      { status: "error", message: "Too many messages were sent from this network. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  const body = (await request.json()) as Record<string, unknown>;

  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ status: "success", message: "Thank you. We have received your message." });
  }

  const parsed = contactSchema.safeParse({
    fullName: body.fullName,
    organisation: body.organisation,
    email: body.email,
    phone: body.phone || undefined,
    country: body.country || undefined,
    interest: body.interest,
    message: body.message,
  });

  if (!parsed.success) {
    return Response.json(
      {
        status: "error",
        message: "Please correct the highlighted fields.",
        fieldErrors: fieldErrorsFromZod(parsed.error),
      },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const pool = await database();
  await pool.query(
    `INSERT INTO contact_messages (full_name, organisation, email, phone, country, interest, message)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [data.fullName, data.organisation, data.email, data.phone ?? null, data.country ?? null, data.interest, data.message],
  );

  const text = [
    `Name: ${data.fullName}`,
    `Organisation: ${data.organisation}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Country: ${data.country || "Not provided"}`,
    `Interest: ${data.interest}`,
    "",
    data.message,
  ].join("\n");

  const result = await deliverEmail({
    subject: `BIL enquiry: ${data.interest}`,
    text,
    replyTo: data.email,
  });

  if (result.status === "failed") {
    return Response.json(
      { status: "error", message: "We could not send your message. Please try again in a few minutes." },
      { status: 502 },
    );
  }

  if (result.status === "unconfigured") {
    return Response.json(
      { status: "error", message: "The form cannot deliver messages yet. Please try again later." },
      { status: 503 },
    );
  }

  return Response.json({
    status: "success",
    message:
      result.status === "logged"
        ? "Your message was saved. Email delivery is not configured yet."
        : "Thank you. We have received your message and will respond.",
  });
}
