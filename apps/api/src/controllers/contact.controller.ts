import { contactSchema, fieldErrorsFromZod, interestAreas, isListedInterest } from "@bil/shared";
import { allowRequest, clientAddress } from "@/middleware/rate-limit";
import { ContactModel } from "@/models/contact.model";
import { SiteModel } from "@/models/site.model";
import { deliverEmail } from "@/services/email.service";

async function allowedInterests() {
  const document = await SiteModel.publicDocument();
  const listed = document?.catalog?.interestAreas;
  if (Array.isArray(listed) && listed.length > 0 && listed.every((item) => typeof item === "string")) return listed;
  return [...interestAreas];
}

export class ContactController {
  static async create(request: Request) {
    if (!allowRequest(`contact:${clientAddress(request)}`)) {
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

    if (!isListedInterest(parsed.data.interest, await allowedInterests())) {
      return Response.json(
        {
          status: "error",
          message: "Please correct the highlighted fields.",
          fieldErrors: { interest: "Select an area of interest." },
        },
        { status: 400 },
      );
    }

    await ContactModel.create(parsed.data);

    const data = parsed.data;
    const result = await deliverEmail({
      subject: `BIL enquiry: ${data.interest}`,
      replyTo: data.email,
      text: [
        `Name: ${data.fullName}`,
        `Organisation: ${data.organisation}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Country: ${data.country || "Not provided"}`,
        `Interest: ${data.interest}`,
        "",
        data.message,
      ].join("\n"),
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
}
