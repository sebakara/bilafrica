type OutboundEmail = {
  subject: string;
  text: string;
  replyTo?: string;
};

export type DeliveryResult =
  | { status: "sent" }
  | { status: "logged" }
  | { status: "unconfigured" }
  | { status: "failed" };

/**
 * Sends mail through Resend when CONTACT_EMAIL, CONTACT_FROM_EMAIL and
 * RESEND_API_KEY are set. Otherwise logs in development and reports that
 * delivery is not configured.
 *
 * TODO: confirm the production sender domain and inbox before launch.
 */
export async function deliverEmail(message: OutboundEmail): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[bil-mail] Email delivery is not configured. Message logged for development.", {
        to: to ?? null,
        subject: message.subject,
        text: message.text,
      });
      return { status: "logged" };
    }

    console.error("[bil-mail] Refusing to accept mail because delivery is not configured.");
    return { status: "unconfigured" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: message.subject,
      text: message.text,
      reply_to: message.replyTo,
    }),
  });

  if (!response.ok) {
    console.error("[bil-mail] Resend request failed.", response.status);
    return { status: "failed" };
  }

  return { status: "sent" };
}
