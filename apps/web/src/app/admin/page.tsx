import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminApiError, adminFetch, formatWhen, type AdminOverview } from "@/lib/admin-api";

export default function AdminHomePage() {
  const [overview, setOverview] = useState<AdminOverview | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminFetch<AdminOverview>("/api/admin/overview")
      .then(setOverview)
      .catch((reason: unknown) => setError(reason instanceof AdminApiError ? reason.message : "Could not load the overview."));
  }, []);

  if (error) return <p className="text-danger">{error}</p>;
  if (!overview) return <p className="text-muted">Loading overview.</p>;

  const cards = [
    { label: "Site content", value: "Edit", href: "/admin/content" },
    { label: "Insights", value: overview.insights, href: "/admin/insights" },
    { label: "Messages", value: overview.contacts, href: "/admin/contacts" },
    { label: "Subscribers", value: overview.subscribers, href: "/admin/subscribers" },
  ];

  return (
    <div>
      <h1 className="font-display text-4xl text-ink">Overview</h1>
      <p className="mt-2 text-muted">Records stored by the site.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link key={card.href} to={card.href} className="border border-line bg-paper p-5 hover:border-navy">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{card.label}</p>
            <p className="mt-3 font-display text-4xl text-ink">{card.value}</p>
          </Link>
        ))}
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Latest messages</h2>
        {overview.recentContacts.length === 0 ? (
          <p className="mt-3 text-muted">No contact messages yet.</p>
        ) : (
          <ul className="mt-4 divide-y divide-line border border-line bg-paper">
            {overview.recentContacts.map((message) => (
              <li key={message.id}>
                <Link to={`/admin/contacts/${message.id}`} className="block px-4 py-3 hover:bg-mist">
                  <span className="font-semibold">{message.fullName}</span>
                  <span className="text-muted"> · {message.organisation}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {message.interest} · {formatWhen(message.createdAt)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
