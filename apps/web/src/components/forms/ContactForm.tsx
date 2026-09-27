import { useState } from "react";
import type { ContactField } from "@/lib/contact-schema";
import { interestAreas } from "@/lib/contact-schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "h-11 w-full border border-line bg-paper px-3 text-sm text-body outline-none placeholder:text-muted";

function Field({
  id,
  label,
  error,
  children,
  optional = false,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-body">
        {label}
        {optional ? <span className="font-normal text-muted"> (optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, setState] = useState<ContactState>(initialState);
  const [pending, setPending] = useState(false);
  const errors = state.fieldErrors;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setPending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const body = (await response.json()) as ContactState;
      setState(body);
    } catch {
      setState({ status: "error", message: "We could not send your message. Please try again in a few minutes." });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.message ? (
        <p
          role={state.status === "error" ? "alert" : "status"}
          className={cn(
            "border px-4 py-3 text-sm",
            state.status === "error" ? "border-danger/30 bg-red-50 text-danger" : "border-line bg-mist text-body",
          )}
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors?.fullName}>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors?.fullName) || undefined}
            aria-describedby={errors?.fullName ? "fullName-error" : undefined}
          />
        </Field>
        <Field id="organisation" label="Organisation" error={errors?.organisation}>
          <input
            id="organisation"
            name="organisation"
            autoComplete="organization"
            className={fieldClass}
            aria-invalid={Boolean(errors?.organisation) || undefined}
            aria-describedby={errors?.organisation ? "organisation-error" : undefined}
          />
        </Field>
        <Field id="email" label="Email" error={errors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(errors?.email) || undefined}
            aria-describedby={errors?.email ? "email-error" : undefined}
          />
        </Field>
        <Field id="phone" label="Phone" optional error={errors?.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            aria-invalid={Boolean(errors?.phone) || undefined}
            aria-describedby={errors?.phone ? "phone-error" : undefined}
          />
        </Field>
        <Field id="country" label="Country" optional error={errors?.country}>
          <input
            id="country"
            name="country"
            autoComplete="country-name"
            className={fieldClass}
            aria-invalid={Boolean(errors?.country) || undefined}
            aria-describedby={errors?.country ? "country-error" : undefined}
          />
        </Field>
        <Field id="interest" label="Area of interest" error={errors?.interest}>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            className={fieldClass}
            aria-invalid={Boolean(errors?.interest) || undefined}
            aria-describedby={errors?.interest ? "interest-error" : undefined}
          >
            <option value="" disabled>
              Select an area
            </option>
            {interestAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field id="message" label="Message" error={errors?.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full border border-line bg-paper px-3 py-3 text-sm text-body outline-none"
          aria-invalid={Boolean(errors?.message) || undefined}
          aria-describedby={errors?.message ? "message-error" : undefined}
        />
      </Field>
      <p className="text-sm text-muted">
        We use this information only to respond to your enquiry. Read the{" "}
        <a href="/privacy" className="font-medium text-brand">
          privacy notice
        </a>
        .
      </p>
      <Button type="submit" loading={pending}>
        {pending ? "Sending" : "Start a Conversation"}
      </Button>
    </form>
  );
}
