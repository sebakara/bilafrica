import { useEffect, useState } from "react";
import { insightCategoryOptions, insightKinds, type ContentBlock, type Insight, type InsightWrite, type SiteDocument } from "@bil/shared";
import { Button } from "@/components/ui/Button";
import { adminFetch } from "@/lib/admin-api";

const fieldClass = "h-11 w-full border border-line bg-paper px-3 text-sm outline-none";

const kindLabels: Record<(typeof insightKinds)[number], string> = {
  "research-report": "Research report",
  article: "Article",
  perspective: "Perspective",
  "policy-brief": "Policy brief",
  "case-study": "Case study",
  "technology-note": "Technology note",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 160);
}

function emptyDraft(): InsightWrite {
  return {
    slug: "",
    title: "",
    subtitle: "",
    summary: "",
    kind: "article",
    category: "Innovation",
    topics: [],
    publicationDate: new Date().toISOString().slice(0, 10),
    readingTime: "5 min",
    featured: false,
    sample: true,
    authors: [],
    content: [{ type: "paragraph", text: "" }],
  };
}

function fromInsight(insight: Insight): InsightWrite {
  return {
    slug: insight.slug,
    title: insight.title,
    subtitle: insight.subtitle ?? "",
    summary: insight.summary,
    kind: insight.kind,
    category: insight.category,
    topics: insight.topics,
    publicationDate: insight.publicationDate,
    readingTime: insight.readingTime,
    featured: insight.featured,
    sample: insight.sample,
    authors: insight.authors,
    content: insight.content.length > 0 ? insight.content : [{ type: "paragraph", text: "" }],
  };
}

export function InsightForm({
  initial,
  pending,
  error,
  onSubmit,
}: {
  initial?: Insight;
  pending: boolean;
  error?: string;
  onSubmit: (value: InsightWrite) => void;
}) {
  const [draft, setDraft] = useState<InsightWrite>(() => (initial ? fromInsight(initial) : emptyDraft()));
  const [slugEdited, setSlugEdited] = useState(Boolean(initial));
  const [topics, setTopics] = useState(initial?.topics.join(", ") ?? "");
  const [authors, setAuthors] = useState(initial?.authors.join(", ") ?? "");
  const [categories, setCategories] = useState<string[]>([...insightCategoryOptions]);

  useEffect(() => {
    adminFetch<SiteDocument>("/api/admin/site")
      .then((document) => {
        const listed = document.catalog.insightCategories.filter((item) => item !== "All");
        if (listed.length > 0) setCategories(listed);
      })
      .catch(() => undefined);
  }, []);

  function update<K extends keyof InsightWrite>(key: K, value: InsightWrite[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function updateBlock(index: number, block: ContentBlock) {
    setDraft((current) => ({
      ...current,
      content: current.content.map((item, itemIndex) => (itemIndex === index ? block : item)),
    }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextContent = draft.content.map((block) => {
      if (block.type !== "list") return block;
      return {
        type: "list" as const,
        items: block.items.map((item) => item.trim()).filter(Boolean),
      };
    });

    onSubmit({
      ...draft,
      subtitle: draft.subtitle?.trim() || undefined,
      topics: topics
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      authors: authors
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      content: nextContent,
    });
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {error ? <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-danger">{error}</p> : null}
      <label className="block text-sm font-medium">
        Title
        <input
          value={draft.title}
          onChange={(event) => {
            const title = event.target.value;
            update("title", title);
            if (!slugEdited) update("slug", slugify(title));
          }}
          className={`${fieldClass} mt-2`}
          required
        />
      </label>
      <label className="block text-sm font-medium">
        Slug
        <input
          value={draft.slug}
          onChange={(event) => {
            setSlugEdited(true);
            update("slug", event.target.value);
          }}
          className={`${fieldClass} mt-2 font-mono`}
          required
        />
      </label>
      <label className="block text-sm font-medium">
        Subtitle <span className="font-normal text-muted">(optional)</span>
        <input
          value={draft.subtitle ?? ""}
          onChange={(event) => update("subtitle", event.target.value)}
          className={`${fieldClass} mt-2`}
        />
      </label>
      <label className="block text-sm font-medium">
        Summary
        <textarea
          value={draft.summary}
          onChange={(event) => update("summary", event.target.value)}
          className="mt-2 min-h-24 w-full border border-line px-3 py-2 text-sm outline-none"
          required
        />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Kind
          <select
            value={draft.kind}
            onChange={(event) => update("kind", event.target.value as InsightWrite["kind"])}
            className={`${fieldClass} mt-2`}
          >
            {insightKinds.map((kind) => (
              <option key={kind} value={kind}>
                {kindLabels[kind]}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium">
          Category
          <select
            value={draft.category}
            onChange={(event) => update("category", event.target.value)}
            className={`${fieldClass} mt-2`}
          >
            {(categories.includes(draft.category) ? categories : [draft.category, ...categories]).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium">
          Publication date
          <input
            type="date"
            value={draft.publicationDate}
            onChange={(event) => update("publicationDate", event.target.value)}
            className={`${fieldClass} mt-2`}
            required
          />
        </label>
        <label className="block text-sm font-medium">
          Reading time
          <input
            value={draft.readingTime}
            onChange={(event) => update("readingTime", event.target.value)}
            className={`${fieldClass} mt-2`}
            required
          />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Authors <span className="font-normal text-muted">(comma separated)</span>
        <input value={authors} onChange={(event) => setAuthors(event.target.value)} className={`${fieldClass} mt-2`} />
      </label>
      <label className="block text-sm font-medium">
        Topics <span className="font-normal text-muted">(comma separated)</span>
        <input value={topics} onChange={(event) => setTopics(event.target.value)} className={`${fieldClass} mt-2`} />
      </label>
      <div className="flex flex-wrap gap-6 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={draft.featured}
            onChange={(event) => update("featured", event.target.checked)}
          />
          Featured
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={draft.sample} onChange={(event) => update("sample", event.target.checked)} />
          Sample content
        </label>
      </div>
      <p className="text-sm text-muted">
        Sample insights stay labelled on the public site. Clear this only for a real BIL publication.
      </p>
      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold">Content</legend>
        {draft.content.map((block, index) => (
          <div key={index} className="border border-line bg-paper p-4">
            <div className="flex items-center justify-between gap-3">
              <label className="text-sm font-medium">
                Block
                <select
                  value={block.type}
                  onChange={(event) => {
                    const type = event.target.value as ContentBlock["type"];
                    updateBlock(index, type === "list" ? { type: "list", items: [""] } : { type, text: "" });
                  }}
                  className="ml-3 h-10 border border-line px-2 text-sm"
                >
                  <option value="paragraph">Paragraph</option>
                  <option value="heading">Heading</option>
                  <option value="list">List</option>
                </select>
              </label>
              <button
                type="button"
                className="text-sm font-semibold text-danger"
                onClick={() =>
                  update(
                    "content",
                    draft.content.filter((_, itemIndex) => itemIndex !== index),
                  )
                }
              >
                Remove
              </button>
            </div>
            {block.type === "list" ? (
              <textarea
                value={block.items.join("\n")}
                onChange={(event) => updateBlock(index, { type: "list", items: event.target.value.split("\n") })}
                className="mt-3 min-h-28 w-full border border-line px-3 py-2 text-sm outline-none"
                placeholder="One list item per line"
              />
            ) : (
              <textarea
                value={block.text}
                onChange={(event) => updateBlock(index, { ...block, text: event.target.value })}
                className="mt-3 min-h-28 w-full border border-line px-3 py-2 text-sm outline-none"
              />
            )}
          </div>
        ))}
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => update("content", [...draft.content, { type: "paragraph", text: "" }])}
          >
            Add paragraph
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => update("content", [...draft.content, { type: "heading", text: "" }])}
          >
            Add heading
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => update("content", [...draft.content, { type: "list", items: [""] }])}
          >
            Add list
          </Button>
        </div>
      </fieldset>
      <Button type="submit" disabled={pending}>
        {pending ? "Saving" : "Save insight"}
      </Button>
    </form>
  );
}
