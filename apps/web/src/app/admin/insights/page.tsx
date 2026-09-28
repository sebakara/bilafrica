import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { AdminApiError, adminFetch, type Insight } from "@/lib/admin-api";

export default function AdminInsightsPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<Insight[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminFetch<Insight[]>("/api/admin/insights")
      .then(setItems)
      .catch((reason: unknown) => setError(reason instanceof AdminApiError ? reason.message : "Could not load insights."));
  }, []);

  async function remove(insight: Insight) {
    if (!window.confirm(`Delete “${insight.title}”?`)) return;
    await adminFetch(`/api/admin/insights/${insight.id}`, { method: "DELETE" });
    setItems((current) => current?.filter((item) => item.id !== insight.id) ?? null);
  }

  if (error) return <p className="text-danger">{error}</p>;
  if (!items) return <p className="text-muted">Loading insights.</p>;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl text-ink">Insights</h1>
          <p className="mt-2 text-muted">These records are what the public archive reads.</p>
        </div>
        <Button href="/admin/insights/new">New insight</Button>
      </div>
      <div className="mt-8 overflow-x-auto border border-line bg-paper">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-line text-muted">
            <tr>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold"> </th>
            </tr>
          </thead>
          <tbody>
            {items.map((insight) => (
              <tr key={insight.id} className="border-b border-line last:border-0">
                <td className="px-4 py-3">
                  <Link to={`/admin/insights/${insight.id}`} className="font-semibold hover:text-brand">
                    {insight.title}
                  </Link>
                  <p className="text-muted">{insight.slug}</p>
                </td>
                <td className="px-4 py-3">{insight.category}</td>
                <td className="px-4 py-3">{insight.sample ? "Sample" : "Publication"}{insight.featured ? " · Featured" : ""}</td>
                <td className="px-4 py-3 text-right">
                  <button type="button" className="font-semibold text-danger" onClick={() => remove(insight).catch(() => navigate(0))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 ? <p className="px-4 py-6 text-muted">No insights yet.</p> : null}
      </div>
    </div>
  );
}
