import type { AdminOverview, ContactMessage, Insight, InsightWrite, NewsletterSubscriber } from "@bil/shared";

export class AdminApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

type AdminRequest = RequestInit & { redirectOnAuth?: boolean };

export async function adminFetch<T>(path: string, init?: AdminRequest): Promise<T> {
  const { redirectOnAuth = true, ...request } = init ?? {};
  const response = await fetch(path, {
    ...request,
    headers: {
      ...(request.body ? { "Content-Type": "application/json" } : {}),
      ...request.headers,
    },
  });

  if (response.status === 204) return undefined as T;

  const body = (await response.json().catch(() => ({}))) as T & { message?: string };

  if (response.status === 401 && redirectOnAuth && !path.endsWith("/api/admin/login")) {
    window.location.assign("/admin/login");
  }

  if (!response.ok) {
    throw new AdminApiError(body.message || "The request failed.", response.status);
  }

  return body;
}

export function formatWhen(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export type { AdminOverview, ContactMessage, Insight, InsightWrite, NewsletterSubscriber };
