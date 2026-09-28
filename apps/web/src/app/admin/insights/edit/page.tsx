import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { InsightForm } from "@/components/admin/InsightForm";
import { AdminApiError, adminFetch, type Insight, type InsightWrite } from "@/lib/admin-api";

export default function AdminInsightEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const creating = !id || id === "new";
  const [initial, setInitial] = useState<Insight | null>(null);
  const [error, setError] = useState("");
  const [loadError, setLoadError] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (creating) return;
    adminFetch<Insight>(`/api/admin/insights/${id}`)
      .then(setInitial)
      .catch((reason: unknown) => setLoadError(reason instanceof AdminApiError ? reason.message : "Could not load this insight."));
  }, [creating, id]);

  async function onSubmit(value: InsightWrite) {
    setPending(true);
    setError("");
    try {
      if (creating) {
        const created = await adminFetch<{ id: string }>("/api/admin/insights", {
          method: "POST",
          body: JSON.stringify(value),
        });
        navigate(`/admin/insights/${created.id}`, { replace: true });
        return;
      }
      await adminFetch(`/api/admin/insights/${id}`, {
        method: "PATCH",
        body: JSON.stringify(value),
      });
      navigate("/admin/insights");
    } catch (reason) {
      setError(reason instanceof AdminApiError ? reason.message : "Could not save this insight.");
    } finally {
      setPending(false);
    }
  }

  if (loadError) return <p className="text-danger">{loadError}</p>;
  if (!creating && !initial) return <p className="text-muted">Loading insight.</p>;

  return (
    <div>
      <Link to="/admin/insights" className="text-sm font-semibold text-brand">
        Back to insights
      </Link>
      <h1 className="mt-3 font-display text-4xl text-ink">{creating ? "New insight" : "Edit insight"}</h1>
      <div className="mt-8 max-w-3xl">
        <InsightForm key={initial?.id ?? "new"} initial={initial ?? undefined} pending={pending} error={error} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
