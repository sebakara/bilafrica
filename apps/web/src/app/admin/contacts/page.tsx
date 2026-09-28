import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminApiError, adminFetch, formatWhen, type ContactMessage } from "@/lib/admin-api";

export default function AdminContactsPage() {
  const [items, setItems] = useState<ContactMessage[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminFetch<ContactMessage[]>("/api/admin/contacts")
      .then(setItems)
      .catch((reason: unknown) => setError(reason instanceof AdminApiError ? reason.message : "Could not load messages."));
  }, []);

  if (error) return <p className="text-danger">{error}</p>;
  if (!items) return <p className="text-muted">Loading messages.</p>;

  return (
    <div>
      <h1 className="font-display text-4xl text-ink">Messages</h1>
      <p className="mt-2 text-muted">Contact form submissions.</p>
      {items.length === 0 ? (
        <p className="mt-8 text-muted">No messages yet.</p>
      ) : (
        <div className="mt-8 overflow-x-auto border border-line bg-paper">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-line text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">From</th>
                <th className="px-4 py-3 font-semibold">Interest</th>
                <th className="px-4 py-3 font-semibold">Received</th>
              </tr>
            </thead>
            <tbody>
              {items.map((message) => (
                <tr key={message.id} className="border-b border-line last:border-0">
                  <td className="px-4 py-3">
                    <Link to={`/admin/contacts/${message.id}`} className="font-semibold hover:text-brand">
                      {message.fullName}
                    </Link>
                    <p className="text-muted">
                      {message.organisation} · {message.email}
                    </p>
                  </td>
                  <td className="px-4 py-3">{message.interest}</td>
                  <td className="px-4 py-3">{formatWhen(message.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
