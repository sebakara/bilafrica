import { useEffect, useMemo, useState } from "react";
import type { SiteDocument } from "@bil/shared";
import { ContentForm, type JsonValue } from "@/components/admin/ContentForm";
import { contentOutline, getAt, setAt } from "@/components/admin/content-outline";
import { Button } from "@/components/ui/Button";
import { AdminApiError, adminFetch } from "@/lib/admin-api";

export default function AdminContentPage() {
  const [document, setDocument] = useState<SiteDocument | null>(null);
  const [saved, setSaved] = useState("");
  const [screenId, setScreenId] = useState("identity");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    adminFetch<SiteDocument>("/api/admin/site")
      .then((next) => {
        setDocument(next);
        setSaved(JSON.stringify(next));
      })
      .catch((reason: unknown) => setError(reason instanceof AdminApiError ? reason.message : "Could not load site content."));
  }, []);

  const groups = useMemo(() => (document ? contentOutline(document) : []), [document]);
  const screens = groups.flatMap((group) => group.screens);
  const current = screens.find((screen) => screen.id === screenId) ?? screens[0];
  const needle = query.trim().toLowerCase();
  const dirty = document ? JSON.stringify(document) !== saved : false;

  async function save() {
    if (!document) return;
    setPending(true);
    setNotice("");
    setError("");
    try {
      const next = await adminFetch<SiteDocument>("/api/admin/site", {
        method: "PUT",
        body: JSON.stringify(document),
      });
      setDocument(next);
      setSaved(JSON.stringify(next));
      setNotice("Saved. Reload the public page to see it.");
    } catch (reason: unknown) {
      setError(reason instanceof AdminApiError ? reason.message : "Could not save site content.");
    } finally {
      setPending(false);
    }
  }

  if (error && !document) return <p className="text-danger">{error}</p>;
  if (!document || !current) return <p className="text-muted">Loading site content.</p>;

  return (
    <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start lg:gap-10">
      <aside className="lg:sticky lg:top-8">
        <label className="sr-only" htmlFor="content-screen">
          Section
        </label>
        <select
          id="content-screen"
          value={current.id}
          onChange={(event) => setScreenId(event.target.value)}
          className="h-11 w-full border border-line bg-paper px-3 text-sm lg:hidden"
        >
          {groups.map((group) => (
            <optgroup key={group.label} label={group.label}>
              {group.screens.map((screen) => (
                <option key={screen.id} value={screen.id}>
                  {screen.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <div className="mt-4 hidden lg:block">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a section"
            className="h-10 w-full border border-line bg-paper px-3 text-sm outline-none focus:border-brand"
          />
          <nav aria-label="Content sections" className="mt-4 max-h-[calc(100vh-8rem)] space-y-5 overflow-y-auto pr-2">
            {groups.map((group) => {
              const visible = group.screens.filter((screen) => screen.label.toLowerCase().includes(needle));
              if (visible.length === 0) return null;
              return (
                <div key={group.label}>
                  <p className="px-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-haze">{group.label}</p>
                  <ul className="mt-1">
                    {visible.map((screen) => (
                      <li key={screen.id}>
                        <button
                          type="button"
                          onClick={() => setScreenId(screen.id)}
                          className={
                            screen.id === current.id
                              ? "w-full border-l-2 border-brand bg-mist px-3 py-2 text-left text-sm font-semibold text-ink"
                              : "w-full border-l-2 border-transparent px-3 py-2 text-left text-sm text-muted hover:text-ink"
                          }
                        >
                          {screen.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      <section className="mt-6 min-w-0 lg:mt-0">
        <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-display text-4xl text-ink">{current.label}</h1>
            {current.note ? <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{current.note}</p> : null}
            {dirty ? <p className="mt-2 text-sm font-medium text-brand">Unsaved changes</p> : null}
            {notice ? <p className="mt-2 text-sm text-body">{notice}</p> : null}
            {error ? <p className="mt-2 text-sm text-danger">{error}</p> : null}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            {current.href ? (
              <a href={current.href} className="text-sm font-semibold text-brand" target="_blank" rel="noreferrer">
                View page
              </a>
            ) : null}
            <Button type="button" onClick={save} disabled={!dirty || pending}>
              {pending ? "Saving" : "Save"}
            </Button>
          </div>
        </div>
        <div className="mt-8 max-w-3xl space-y-10">
          {current.parts.map((part) => (
            <ContentForm
              key={part.path.join(".")}
              label={part.label}
              value={getAt(document, part.path) as JsonValue}
              onChange={(next) => setDocument((latest) => (latest ? setAt(latest, part.path, next) : latest))}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
