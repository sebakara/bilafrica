import { useEffect, useState } from "react";
import { AdminApiError, adminFetch, formatWhen, type NewsletterSubscriber } from "@/lib/admin-api";

export default function AdminSubscribersPage() {
  const [items, setItems] = useState<NewsletterSubscriber[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminFetch<NewsletterSubscriber[]>("/api/admin/subscribers")
      .then(setItems)
      .catch((reason: unknown) => setError(reason instanceof AdminApiError ? reason.message : "Could not load subscribers."));
  }, []);

  async function remove(subscriber: NewsletterSubscriber) {
    if (!window.confirm(`Remove ${subscriber.email}?`)) return;
    await adminFetch(`/api/admin/subscribers/${subscriber.id}`, { method: "DELETE" });
    setItems((current) => current?.filter((item) => item.id !== subscriber.id) ?? null);
  }

  if (error) return <p className="text-danger">{error}</p>;
  if (!items) return <p className="text-muted">Loading subscribers.</p>;

  return (
    <div>
      <h1 className="font-display text-4xl text-ink">Subscribers</h1>
      <p className="mt-2 text-muted">Newsletter addresses saved from the site.</p>
      {items.length === 0 ? (
        <p className="mt-8 text-muted">No subscribers yet.</p>
      ) : (
        <div className="mt-8 overflow-x-auto border border-line bg-paper">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="border-b border-line text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Joined</th>
                <th className="px-4 py-3 font-semibold"> </th>
              </tr>
            </thead>
            <tbody>
              {items.map((subscriber) => (
                <tr key={subscriber.id} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 font-semibold">{subscriber.email}</td>
                  <td className="px-4 py-3">{formatWhen(subscriber.createdAt)}</td>
                  <td className="px-4 py-3 text-right">
                    <button type="button" className="font-semibold text-danger" onClick={() => remove(subscriber).catch(() => setError("Could not remove that subscriber."))}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
