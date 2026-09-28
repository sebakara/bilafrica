import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { AdminApiError, adminFetch, formatWhen, type ContactMessage } from "@/lib/admin-api";

export default function AdminContactPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState<ContactMessage | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminFetch<ContactMessage>(`/api/admin/contacts/${id}`)
      .then(setMessage)
      .catch((reason: unknown) => setError(reason instanceof AdminApiError ? reason.message : "Could not load this message."));
  }, [id]);

  async function remove() {
    if (!message || !window.confirm("Delete this message?")) return;
    await adminFetch(`/api/admin/contacts/${message.id}`, { method: "DELETE" });
    navigate("/admin/contacts");
  }

  if (error) return <p className="text-danger">{error}</p>;
  if (!message) return <p className="text-muted">Loading message.</p>;

  const fields = [
    ["Organisation", message.organisation],
    ["Email", message.email],
    ["Phone", message.phone || "Not provided"],
    ["Country", message.country || "Not provided"],
    ["Interest", message.interest],
    ["Received", formatWhen(message.createdAt)],
  ];

  return (
    <div className="max-w-3xl">
      <Link to="/admin/contacts" className="text-sm font-semibold text-brand">
        Back to messages
      </Link>
      <h1 className="mt-3 font-display text-4xl text-ink">{message.fullName}</h1>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        {fields.map(([label, value]) => (
          <div key={label}>
            <dt className="text-sm font-semibold text-muted">{label}</dt>
            <dd className="mt-1">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 whitespace-pre-wrap border border-line bg-paper p-5 leading-relaxed">{message.message}</p>
      <Button type="button" variant="outline" className="mt-6" onClick={() => remove().catch(() => setError("Could not delete this message."))}>
        Delete message
      </Button>
    </div>
  );
}
