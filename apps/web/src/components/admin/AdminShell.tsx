import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { adminFetch } from "@/lib/admin-api";

export function AdminShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState<"loading" | "in" | "out" | "unconfigured">("loading");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    adminFetch("/api/admin/session", { redirectOnAuth: false })
      .then(() => setAccess("in"))
      .catch((error: unknown) => {
        const status = error instanceof Error && "status" in error ? Number(error.status) : 0;
        setAccess(status === 503 ? "unconfigured" : "out");
      });
  }, []);

  useEffect(() => {
    if (access === "out") navigate("/admin/login", { replace: true });
  }, [access, navigate]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    navigate("/admin/login", { replace: true });
  }

  if (access === "loading" || access === "out") {
    return <p className="px-6 py-16 text-muted">Checking access.</p>;
  }

  if (access === "unconfigured") {
    return (
      <main className="mx-auto max-w-lg px-6 py-20">
        <h1 className="font-display text-3xl text-ink">Admin is not configured</h1>
        <p className="mt-4 leading-relaxed text-muted">
          Set <code>ADMIN_SESSION_SECRET</code> on the API, then restart it.
        </p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-canvas">
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-ink/50 md:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
      <AdminSidebar open={open} onNavigate={() => setOpen(false)} onLogout={logout} />
      <div className="md:pl-64">
        <header className="flex items-center gap-3 border-b border-line bg-paper px-4 py-3 md:hidden">
          <button
            type="button"
            className="rounded-md p-1 text-ink"
            aria-expanded={open}
            aria-controls="admin-sidebar"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </button>
          <p className="text-sm font-semibold">BIL admin</p>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
