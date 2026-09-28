import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

const fieldNames: Record<string, string> = {
  shortName: "Short name",
  primaryHref: "Primary link",
  secondaryHref: "Secondary link",
  primaryLabel: "Primary button",
  secondaryLabel: "Secondary button",
  ctaLabel: "Button label",
  actionHref: "Button link",
  actionLabel: "Button label",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  primaryNav: "Desktop menu label",
  mobileNav: "Mobile menu label",
  newsletterTitle: "Newsletter heading",
  newsletterText: "Newsletter text",
  profilesTitle: "Profiles heading",
  profilesText: "Profiles text",
  capabilityCta: "Default service button",
  routeLoading: "Page transition",
  categoriesLabel: "Category navigation label",
  sampleBadge: "Sample badge",
  illustrativeBadge: "Article badge",
  readSample: "Sample link",
  read: "Article link",
  notPublication: "Sample note",
  sampleNotice: "Sample notice",
  attachmentNote: "Attachment note",
  archiveSample: "Archive description, samples",
  archivePublished: "Archive description",
  sampleBanner: "Sample banner",
  loadError: "Load error",
  loadingList: "Loading list",
  emptyCategory: "Empty category",
  caseStudiesTitle: "Case studies heading",
  caseStudiesText: "Case studies text",
  kindLabels: "Article types",
  includeTitle: "Sidebar heading",
  openingsTitle: "Openings heading",
  openingsNote: "Openings note",
  whyTitle: "Section heading",
  practicesTitle: "Practices heading",
  principlesTitle: "Principles heading",
  engagementsEyebrow: "Engagements label",
  engagementsTitle: "Engagements heading",
  audiencesTitle: "Audience heading",
  domainsTitle: "Domains heading",
  lifecycleTitle: "Lifecycle heading",
  servicesTitle: "Services heading",
  programmesTitle: "Programmes heading",
  featuredTitle: "Featured heading",
  featuredSample: "Featured note, samples",
  featuredPublished: "Featured note",
  areasTitle: "Areas heading",
  cyberLink: "Cybersecurity link",
  startingEyebrow: "Starting label",
  startingTitle: "Starting heading",
  evaluateTitle: "Evaluation heading",
  fitsTitle: "Fits heading",
  misfitsTitle: "Misfits heading",
  deliveryEyebrow: "Delivery label",
  responsibleTitle: "Responsible AI heading",
  navLabel: "Side navigation label",
  footerLead: "Footer lead",
  footerLink: "Footer link",
  sampleDescription: "Description while samples are showing",
  publishedDescription: "Description after publication",
};

const icons = ["technology", "ai", "blockchain", "advisory", "research", "ecosystem"];
const inputClass = "w-full border border-line bg-paper px-3 text-sm text-body outline-none focus:border-brand";

function isRecord(value: JsonValue): value is { [key: string]: JsonValue } {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function fieldLabel(key: string) {
  if (fieldNames[key]) return fieldNames[key];
  const spaced = key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[-_]/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function summary(value: JsonValue, index: number) {
  if (typeof value === "string") return value || `Line ${index + 1}`;
  if (!isRecord(value)) return `Item ${index + 1}`;
  for (const key of ["title", "label", "name", "eyebrow"]) {
    const field = value[key];
    if (typeof field === "string" && field.trim()) return field;
  }
  return `Item ${index + 1}`;
}

function blankLike(value: JsonValue): JsonValue {
  if (typeof value === "string") return "";
  if (typeof value === "number") return 0;
  if (typeof value === "boolean") return false;
  if (value === null) return "";
  if (Array.isArray(value)) return value.map((item) => blankLike(item));
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, blankLike(item)]));
}

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (next: string) => void }) {
  const long = value.length > 80 || value.includes("\n");
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      {long ? (
        <textarea value={value} rows={4} onChange={(event) => onChange(event.target.value)} className={`${inputClass} mt-2 py-2.5 leading-relaxed`} />
      ) : (
        <input value={value} onChange={(event) => onChange(event.target.value)} className={`${inputClass} mt-2 h-11`} />
      )}
    </label>
  );
}

function RecordFields({
  value,
  onChange,
}: {
  value: { [key: string]: JsonValue };
  onChange: (next: JsonValue) => void;
}) {
  const entries = Object.entries(value);
  const scalars = entries.filter(([, item]) => item === null || ["string", "number", "boolean"].includes(typeof item));
  const nested = entries.filter(([, item]) => item !== null && typeof item === "object");

  return (
    <div className="space-y-8">
      {scalars.length > 0 ? (
        <div className="space-y-5">
          {scalars.map(([key, item]) => (
            <Field key={key} name={key} value={item} onChange={(next) => onChange({ ...value, [key]: next })} />
          ))}
        </div>
      ) : null}
      {nested.map(([key, item]) => (
        <section key={key} className="space-y-4">
          <h3 className="text-base font-semibold text-ink">{fieldLabel(key)}</h3>
          <Field name={key} value={item} onChange={(next) => onChange({ ...value, [key]: next })} hideLabel />
        </section>
      ))}
    </div>
  );
}

function Collection({
  items,
  onChange,
}: {
  items: JsonValue[];
  onChange: (next: JsonValue) => void;
}) {
  const [open, setOpen] = useState(0);
  const strings = items.every((item) => typeof item === "string" || item === null);

  function replace(next: JsonValue[]) {
    onChange(next);
  }

  if (strings) {
    return (
      <div className="space-y-3">
        <ul className="divide-y divide-line border border-line bg-paper">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 px-3">
              <input
                value={typeof item === "string" ? item : ""}
                onChange={(event) => replace(items.map((entry, entryIndex) => (entryIndex === index ? event.target.value : entry)))}
                className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none"
                aria-label={`Line ${index + 1}`}
              />
              <button type="button" className="text-haze hover:text-danger" aria-label={`Remove line ${index + 1}`} onClick={() => replace(items.filter((_, entryIndex) => entryIndex !== index))}>
                <Trash2 className="size-4" />
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand" onClick={() => replace([...items, ""])}>
          <Plus className="size-4" />
          Add line
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <article key={index} className="border border-line bg-paper">
            <div className="flex items-center gap-2 px-3">
              <button type="button" className="flex min-w-0 flex-1 items-center gap-2 py-3 text-left" aria-expanded={expanded} onClick={() => setOpen(expanded ? -1 : index)}>
                <ChevronDown className={`size-4 shrink-0 text-haze ${expanded ? "rotate-180" : ""}`} />
                <span className="truncate text-sm font-medium">{summary(item, index)}</span>
              </button>
              <button type="button" className="text-haze hover:text-ink disabled:opacity-30" aria-label="Move up" disabled={index === 0} onClick={() => {
                const next = items.slice();
                const [moved] = next.splice(index, 1);
                next.splice(index - 1, 0, moved);
                replace(next);
                setOpen(index - 1);
              }}>
                <ChevronUp className="size-4" />
              </button>
              <button type="button" className="text-haze hover:text-ink disabled:opacity-30" aria-label="Move down" disabled={index === items.length - 1} onClick={() => {
                const next = items.slice();
                const [moved] = next.splice(index, 1);
                next.splice(index + 1, 0, moved);
                replace(next);
                setOpen(index + 1);
              }}>
                <ChevronDown className="size-4" />
              </button>
              <button type="button" className="text-haze hover:text-danger" aria-label="Remove" onClick={() => {
                replace(items.filter((_, entryIndex) => entryIndex !== index));
                setOpen(Math.max(0, index - 1));
              }}>
                <Trash2 className="size-4" />
              </button>
            </div>
            {expanded ? (
              <div className="border-t border-line px-4 py-4">
                <Field name="" value={item} onChange={(next) => replace(items.map((entry, entryIndex) => (entryIndex === index ? next : entry)))} hideLabel />
              </div>
            ) : null}
          </article>
        );
      })}
      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
        onClick={() => {
          const template = items.length > 0 ? blankLike(items[items.length - 1]) : "";
          replace([...items, template]);
          setOpen(items.length);
        }}
      >
        <Plus className="size-4" />
        Add item
      </button>
    </div>
  );
}

function Field({
  name,
  value,
  onChange,
  hideLabel = false,
}: {
  name: string;
  value: JsonValue;
  onChange: (next: JsonValue) => void;
  hideLabel?: boolean;
}) {
  const label = fieldLabel(name);

  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-3 text-sm font-medium text-ink">
        <input type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} />
        {label}
      </label>
    );
  }

  if (typeof value === "number") {
    return (
      <label className="block">
        <span className="text-sm font-medium text-ink">{label}</span>
        <input type="number" value={value} onChange={(event) => onChange(Number(event.target.value))} className={`${inputClass} mt-2 h-11`} />
      </label>
    );
  }

  if (typeof value === "string" || value === null) {
    const text = value ?? "";
    if (name === "icon") {
      const options = icons.includes(text) ? icons : [text, ...icons];
      return (
        <label className="block">
          <span className="text-sm font-medium text-ink">{label}</span>
          <select value={text} onChange={(event) => onChange(event.target.value)} className={`${inputClass} mt-2 h-11`}>
            {options.map((icon) => (
              <option key={icon} value={icon}>
                {fieldLabel(icon)}
              </option>
            ))}
          </select>
        </label>
      );
    }
    return <TextField label={hideLabel ? "Text" : label} value={text} onChange={onChange} />;
  }

  if (Array.isArray(value)) return <Collection items={value} onChange={onChange} />;
  if (hideLabel) return <RecordFields value={value} onChange={onChange} />;

  return (
    <section className="space-y-4">
      <h3 className="text-base font-semibold text-ink">{label}</h3>
      <RecordFields value={value} onChange={onChange} />
    </section>
  );
}

export function ContentForm({
  label,
  value,
  onChange,
}: {
  label?: string;
  value: JsonValue;
  onChange: (next: JsonValue) => void;
}) {
  if (value === undefined) return <p className="text-sm text-muted">This section is missing from the saved document.</p>;

  if (typeof value === "string" || value === null) {
    return <TextField label={label || "Text"} value={value ?? ""} onChange={onChange} />;
  }

  return (
    <div className="space-y-4">
      {label && (Array.isArray(value) || isRecord(value)) ? <h3 className="text-base font-semibold text-ink">{label}</h3> : null}
      <Field name={label || "content"} value={value} onChange={onChange} hideLabel />
    </div>
  );
}

export type { JsonValue };
