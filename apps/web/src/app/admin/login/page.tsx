import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { AdminApiError, adminFetch } from "@/lib/admin-api";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    adminFetch("/api/admin/session", { redirectOnAuth: false })
      .then(() => navigate("/admin", { replace: true }))
      .catch((reason: unknown) => {
        if (reason instanceof AdminApiError && reason.status === 503) {
          setError("Admin access is not configured on the API.");
        }
      });
  }, [navigate]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");

    try {
      await adminFetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      navigate("/admin", { replace: true });
    } catch (reason) {
      setError(reason instanceof AdminApiError ? reason.message : "Sign-in failed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <form onSubmit={onSubmit} className="w-full max-w-md border border-line bg-paper p-8">
        <Logo variant="mark" theme="dark" className="h-12 w-12" linked={false} />
        <h1 className="mt-6 font-display text-3xl text-ink">Admin sign in</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">Use the admin account stored in the database.</p>
        <label htmlFor="email" className="mt-6 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 h-11 w-full border border-line px-3 text-sm outline-none"
          required
        />
        <label htmlFor="password" className="mt-5 block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 h-11 w-full border border-line px-3 text-sm outline-none"
          required
        />
        {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
        <Button type="submit" className="mt-6 w-full" disabled={pending}>
          {pending ? "Signing in" : "Sign in"}
        </Button>
      </form>
    </main>
  );
}
