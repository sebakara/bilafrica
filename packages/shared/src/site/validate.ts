export const siteDocumentKeys = [
  "site",
  "navigation",
  "home",
  "capabilities",
  "industries",
  "catalog",
  "chrome",
  "pages",
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function inspect(value: unknown, depth: number): string | null {
  if (depth > 16) return "Site content is nested too deeply.";
  if (value === null) return null;

  if (typeof value === "string") return value.length > 20000 ? "A field is too long." : null;
  if (typeof value === "number") return Number.isFinite(value) ? null : "A number is invalid.";
  if (typeof value === "boolean") return null;

  if (Array.isArray(value)) {
    if (value.length > 500) return "A list is too long.";
    for (const item of value) {
      const problem = inspect(item, depth + 1);
      if (problem) return problem;
    }
    return null;
  }

  if (isRecord(value)) {
    const entries = Object.entries(value);
    if (entries.length > 200) return "An object has too many fields.";
    for (const [key, item] of entries) {
      if (key === "__proto__" || key === "constructor" || key === "prototype") return "A field name is not allowed.";
      const problem = inspect(item, depth + 1);
      if (problem) return problem;
    }
    return null;
  }

  return "Site content contains a value that cannot be stored.";
}

export function siteDocumentError(value: unknown) {
  if (!isRecord(value)) return "Site content must be an object.";

  for (const key of siteDocumentKeys) {
    if (!(key in value)) return `Missing ${key}.`;
    const problem = inspect(value[key], 1);
    if (problem) return problem;
  }

  return null;
}
