import type { Insight } from "./types";

/**
 * Illustrative writing used to exercise the insights archive.
 * Every record is sample content. Do not present these as BIL publications.
 */
export const insights: Insight[] = [
  {
    id: "sample-ledger-choice",
    slug: "choosing-a-record-before-a-ledger",
    title: "Choosing a record before choosing a ledger",
    subtitle: "A sample perspective on when a shared system is actually the problem.",
    summary:
      "An illustrative note on the questions that should come before any recommendation to use a blockchain.",
    kind: "perspective",
    category: "Blockchain",
    topics: ["Architecture", "Trust", "Feasibility"],
    publicationDate: "2026-03-12",
    readingTime: "6 min",
    featured: true,
    sample: true,
    authors: ["BIL sample desk"],
    content: [
      {
        type: "paragraph",
        text: "This is illustrative sample writing. It is not a BIL research publication.",
      },
      {
        type: "paragraph",
        text: "Teams often arrive with a ledger in mind and a problem described only in outline. The useful first step is to name the record: who creates it, who is allowed to change it, who must rely on it, and what happens when two parties disagree.",
      },
      {
        type: "paragraph",
        text: "A shared database, an integration layer, or a signed audit log may already answer that question. A blockchain becomes relevant when several organisations need a common history that none of them should be able to rewrite alone, and when they are willing to operate the governance that comes with it.",
      },
      {
        type: "heading",
        text: "What to examine first",
      },
      {
        type: "list",
        items: [
          "The trust boundary between the organisations involved.",
          "Whether auditability, ownership or settlement is the actual requirement.",
          "Who will pay for, run and govern the network after the pilot.",
          "Which existing systems must remain the operational source of truth.",
        ],
      },
      {
        type: "paragraph",
        text: "The architecture should follow those answers. Technology selection is the later decision, not the opening one.",
      },
    ],
  },
  {
    id: "sample-enterprise-ai",
    slug: "questions-before-an-enterprise-ai-pilot",
    title: "Questions to settle before an enterprise AI pilot",
    subtitle: "A sample technology note on scope, data and accountability.",
    summary:
      "An illustrative checklist for institutions considering an AI pilot inside an existing operation.",
    kind: "technology-note",
    category: "AI",
    topics: ["Enterprise AI", "Governance", "Data"],
    publicationDate: "2026-02-04",
    readingTime: "7 min",
    featured: true,
    sample: true,
    authors: ["BIL sample desk"],
    content: [
      {
        type: "paragraph",
        text: "This is illustrative sample writing. It is not a BIL research publication.",
      },
      {
        type: "paragraph",
        text: "An AI pilot fails quietly when the task is vague, the data cannot support it, or nobody owns the decision the system is meant to inform. The model is rarely the first gap.",
      },
      {
        type: "paragraph",
        text: "A practical pilot names one workflow, the person accountable for the outcome, the data that may be used, and the point at which a human must intervene. It also states what will be measured before anyone discusses a vendor or a foundation model.",
      },
      {
        type: "list",
        items: [
          "Which decision or task is in scope, and which are explicitly out of scope.",
          "Where the source data lives and who is permitted to use it.",
          "How errors will be detected by the people who do the work.",
          "What must be true before the pilot is allowed to touch a live process.",
        ],
      },
    ],
  },
  {
    id: "sample-dpi",
    slug: "questions-for-digital-public-infrastructure",
    title: "Questions institutions should ask of digital public infrastructure",
    subtitle: "A sample policy brief on building public digital systems that can be operated.",
    summary:
      "An illustrative brief on identity, payments and data exchange as institutional systems rather than slogans.",
    kind: "policy-brief",
    category: "Digital Public Infrastructure",
    topics: ["Policy", "Identity", "Public sector"],
    publicationDate: "2026-01-20",
    readingTime: "8 min",
    featured: true,
    sample: true,
    authors: ["BIL sample desk"],
    content: [
      {
        type: "paragraph",
        text: "This is illustrative sample writing. It is not a BIL policy brief or commissioned report.",
      },
      {
        type: "paragraph",
        text: "Digital public infrastructure is a set of shared capabilities: identity, payments, data exchange and the rules around them. The technical design matters, and so does the institution that will run the service after the programme closes.",
      },
      {
        type: "paragraph",
        text: "Before a platform is specified, it is worth asking who the relying parties are, what a citizen or firm must be able to do, which existing registries remain authoritative, and how disputes, outages and access will be handled.",
      },
      {
        type: "paragraph",
        text: "Policy and engineering should be read together. A standard that cannot be implemented, and a system that cannot be governed, both fail the institution they were meant to serve.",
      },
    ],
  },
  {
    id: "sample-payments",
    slug: "shared-trust-in-payment-infrastructure",
    title: "Shared trust in payment infrastructure",
    subtitle: "A sample article on multi-party payments without assuming a ledger.",
    summary:
      "An illustrative article on settlement, reconciliation and the architectures institutions actually have to operate.",
    kind: "article",
    category: "Fintech",
    topics: ["Payments", "Africa", "Architecture"],
    publicationDate: "2025-11-18",
    readingTime: "6 min",
    featured: false,
    sample: true,
    authors: ["BIL sample desk"],
    content: [
      {
        type: "paragraph",
        text: "This is illustrative sample writing. It is not a BIL publication.",
      },
      {
        type: "paragraph",
        text: "Payment problems are often described as technology gaps. In practice they are agreements: who holds funds, who confirms a transfer, how exceptions are resolved, and which regulator can see the trail.",
      },
      {
        type: "paragraph",
        text: "African markets show the range clearly. Some needs are met by connecting to existing switches and bank rails. Others involve new distribution, identity or reconciliation across firms that do not share a core system. A new ledger is one option among those, and only sometimes the right one.",
      },
      {
        type: "paragraph",
        text: "The useful design conversation starts with the transaction, the participants and the failure cases. The platform follows.",
      },
    ],
  },
];
