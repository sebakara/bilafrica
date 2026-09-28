import type { SiteDocument } from "@bil/shared";

export type ContentPath = (string | number)[];

export type ContentPart = {
  label?: string;
  path: ContentPath;
};

export type ContentScreen = {
  id: string;
  label: string;
  href?: string;
  note?: string;
  parts: ContentPart[];
};

export type ContentGroup = {
  label: string;
  screens: ContentScreen[];
};

const pageNames: Record<string, string> = {
  about: "About",
  careers: "Careers",
  contact: "Contact",
  privacy: "Privacy",
  terms: "Terms",
  services: "What we do",
  technology: "Technology",
  ai: "AI & Data",
  blockchain: "Blockchain",
  advisory: "Advisory",
  research: "Research & policy",
  cybersecurity: "Cybersecurity",
  labs: "Labs",
  ecosystem: "Ecosystem",
  industries: "Industries",
};

const pageHrefs: Record<string, string> = {
  about: "/about",
  careers: "/careers",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  services: "/services",
  technology: "/services/technology",
  ai: "/services/ai-data",
  blockchain: "/services/blockchain",
  advisory: "/services/advisory",
  research: "/services/research-policy",
  cybersecurity: "/services/cybersecurity",
  labs: "/labs",
  ecosystem: "/ecosystem",
  industries: "/industries",
};

function screen(id: string, label: string, parts: ContentPart[], extra?: { href?: string; note?: string }): ContentScreen {
  return { id, label, parts, ...extra };
}

export function contentOutline(document: SiteDocument): ContentGroup[] {
  const pages = document.pages as Record<string, { title?: string }>;

  return [
    {
      label: "Site",
      screens: [
        screen("identity", "Identity", [{ path: ["site"] }], {
          note: "The name and description used in the header, footer, and search results.",
        }),
        screen("header", "Header", [{ path: ["chrome", "header"] }]),
        screen("footer", "Footer", [
          { label: "Footer text", path: ["chrome", "footer"] },
          { label: "Footer links", path: ["navigation", "footerNavigation"] },
        ]),
        screen("work-menu", "What we do menu", [{ path: ["navigation", "whatWeDoMenu"] }]),
        screen("research-menu", "Research menu", [{ path: ["navigation", "researchMenu"] }]),
        screen("forms", "Forms", [{ path: ["chrome", "forms"] }], {
          note: "Labels and messages on the contact form and the research-updates form.",
        }),
        screen("shared", "Shared labels", [
          { label: "Skip link", path: ["chrome", "skip"] },
          { label: "First loading line", path: ["chrome", "loading"] },
          { label: "Unavailable message", path: ["chrome", "unavailable"] },
          { label: "Page transition", path: ["chrome", "routeLoading"] },
          { label: "Breadcrumb label", path: ["chrome", "breadcrumb"] },
          { label: "Default service button", path: ["chrome", "capabilityCta"] },
        ]),
        screen("missing", "Missing page", [{ path: ["chrome", "notFound"] }]),
        screen("error", "Error page", [{ path: ["chrome", "error"] }]),
      ],
    },
    {
      label: "Homepage",
      screens: [
        screen("hero", "Hero", [{ path: ["chrome", "hero"] }], { href: "/" }),
        screen("principles", "Principles", [
          { label: "Heading", path: ["chrome", "bands", "principles"] },
          { label: "Cards", path: ["home", "principles"] },
        ]),
        screen("home-capabilities", "Capability cards", [
          { label: "Heading", path: ["chrome", "bands", "capabilities"] },
          { label: "Cards", path: ["home", "capabilities"] },
        ]),
        screen("home-technology", "Technology", [
          { label: "Heading", path: ["chrome", "bands", "technology"] },
          { label: "Areas", path: ["home", "technologyAreas"] },
        ]),
        screen("home-labs", "Labs", [
          { label: "Heading", path: ["chrome", "bands", "labs"] },
          { label: "Steps", path: ["home", "labSteps"] },
        ]),
        screen("home-advisory", "Advisory", [
          { label: "Heading", path: ["chrome", "bands", "advisory"] },
          { label: "Highlights", path: ["home", "advisoryHighlights"] },
        ]),
        screen("home-research", "Research", [
          { label: "Heading", path: ["chrome", "bands", "research"] },
          { label: "Formats", path: ["home", "researchFormats"] },
        ]),
        screen("home-innovation", "Innovation", [
          { label: "Heading", path: ["chrome", "bands", "innovation"] },
          { label: "Programmes", path: ["capabilities", "ecosystemPrograms"] },
        ]),
        screen("home-industries", "Industries band", [
          { label: "Heading", path: ["chrome", "bands", "industries"] },
          { label: "Audiences", path: ["home", "audiences"] },
        ]),
        screen("home-africa", "Africa", [
          { label: "Heading", path: ["chrome", "bands", "africa"] },
          { label: "Themes", path: ["home", "africaThemes"] },
        ]),
        screen("home-insights", "Insights band", [{ path: ["chrome", "bands", "insights"] }]),
        screen("home-cta", "Closing prompt", [{ path: ["chrome", "cta"] }]),
      ],
    },
    {
      label: "Pages",
      screens: Object.keys(pages).map((key) => {
        const parts: ContentPart[] = [{ path: ["pages", key] }];
        if (key === "about") parts.push({ label: "Principles", path: ["home", "values"] });
        if (key === "services") parts.push({ label: "Engagements", path: ["home", "engagementModels"] });
        if (key === "technology") parts.push({ label: "Offerings", path: ["capabilities", "technologyGroups"] });
        if (key === "ai") {
          parts.push({ label: "Offerings", path: ["capabilities", "aiGroups"] });
          parts.push({ label: "Responsible AI", path: ["capabilities", "responsibleAi"] });
        }
        if (key === "blockchain") {
          parts.push({ label: "What we evaluate", path: ["capabilities", "evaluationCriteria"] });
          parts.push({ label: "When it can fit", path: ["capabilities", "blockchainFits"] });
          parts.push({ label: "When it may not", path: ["capabilities", "blockchainMisfits"] });
          parts.push({ label: "Offerings", path: ["capabilities", "blockchainGroups"] });
        }
        if (key === "advisory") parts.push({ label: "Offerings", path: ["capabilities", "advisoryGroups"] });
        if (key === "research") parts.push({ label: "Offerings", path: ["capabilities", "researchGroups"] });
        if (key === "cybersecurity") parts.push({ label: "Offerings", path: ["capabilities", "cybersecurityOfferings"] });
        if (key === "labs") {
          parts.push({ label: "Domains", path: ["capabilities", "labDomains"] });
          parts.push({ label: "How a study moves", path: ["capabilities", "labLifecycle"] });
          parts.push({ label: "What can be commissioned", path: ["capabilities", "labServices"] });
        }
        if (key === "ecosystem") parts.push({ label: "Programmes", path: ["capabilities", "ecosystemPrograms"] });
        return screen(`page-${key}`, pageNames[key] ?? key, parts, { href: pageHrefs[key] });
      }),
    },
    {
      label: "Industries",
      screens: document.industries.map((industry, index) =>
        screen(`industry-${index}`, industry.name, [{ path: ["industries", index] }], { href: `/industries#${industry.slug}` }),
      ),
    },
    {
      label: "Insights",
      screens: [
        screen("insight-labels", "Labels", [{ path: ["chrome", "insights"] }], {
          note: "Badges, buttons, and the notes around the insights archive. The articles themselves are edited under Insights.",
        }),
        screen("categories", "Categories", [{ path: ["catalog", "insightCategories"] }], {
          note: "These are the filters on the insights page. Keep All as the first item.",
        }),
        screen("interests", "Contact interests", [{ path: ["catalog", "interestAreas"] }], {
          note: "These are the choices in the contact form.",
        }),
      ],
    },
  ];
}

export function getAt(root: unknown, path: ContentPath) {
  return path.reduce<unknown>((current, key) => {
    if (current == null || typeof current !== "object") return undefined;
    return (current as Record<string, unknown>)[String(key)];
  }, root);
}

export function setAt<T>(root: T, path: ContentPath, next: unknown): T {
  if (path.length === 0) return next as T;
  const [head, ...rest] = path;
  if (Array.isArray(root)) {
    const copy = root.slice();
    copy[Number(head)] = setAt(root[Number(head)], rest, next);
    return copy as T;
  }
  const record = root as Record<string, unknown>;
  return { ...record, [String(head)]: setAt(record[String(head)], rest, next) } as T;
}
