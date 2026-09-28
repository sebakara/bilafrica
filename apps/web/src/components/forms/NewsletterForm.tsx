import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useSite } from "@/components/site/SiteContent";

type NewsletterState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const { chrome } = useSite();
  const labels = chrome.forms;
  const [state, setState] = useState<NewsletterState>(initialState);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setPending(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      setState((await response.json()) as NewsletterState);
    } catch {
      setState({ status: "error", message: labels.newsletterError });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4" noValidate>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="newsletter-website">Website</label>
        <input id="newsletter-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label htmlFor="newsletter-email" className="sr-only">
        {labels.newsletterEmail}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={labels.newsletterPlaceholder}
          aria-invalid={state.status === "error" || undefined}
          aria-describedby={state.message ? "newsletter-status" : undefined}
          className="h-11 w-full border border-white/15 bg-white/5 px-3 text-sm text-paper placeholder:text-haze"
        />
        <Button type="submit" variant="dark" loading={pending}>
          {labels.newsletterSubmit}
        </Button>
      </div>
      {state.message ? (
        <p id="newsletter-status" role={state.status === "error" ? "alert" : "status"} className="mt-2 text-sm text-foam">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
