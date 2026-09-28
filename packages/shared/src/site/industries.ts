export type Industry = {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  help: string[];
  capabilities: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    summary: "Banks and financial institutions modernising platforms without losing control of risk and operations.",
    challenges: [
      "Core systems that are expensive to change and risky to replace in one move.",
      "Reconciliation and reporting across products, partners and channels.",
      "Pressure to adopt AI or digital assets before the operating case is clear.",
    ],
    help: [
      "Architecture and sequencing for modernisation that operations can absorb.",
      "Platform and integration engineering around payments, data and channels.",
      "Due diligence and feasibility work before a new technology is funded.",
    ],
    capabilities: ["Enterprise platforms", "Payments", "Cybersecurity", "Advisory"],
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    summary: "Public institutions building services that have to work across agencies and remain operable.",
    challenges: [
      "Services that depend on several institutions, registries and vendors.",
      "Procurement that needs requirements precise enough to hold a supplier to.",
      "Policy moving faster, or slower, than the systems that would implement it.",
    ],
    help: [
      "Design and delivery of digital public platforms and integrations.",
      "Advisory that connects architecture to the way a service is governed.",
      "Research and policy analysis commissioned alongside implementation.",
    ],
    capabilities: ["Digital public infrastructure", "Identity", "Research & policy", "Integration"],
  },
  {
    slug: "fintech",
    name: "Fintech",
    summary: "Companies building financial products that institutions, partners and supervisors can examine.",
    challenges: [
      "Getting from a product idea to a system that can be integrated and audited.",
      "Depending on banks, switches and identity providers the company does not control.",
      "Explaining technology choices to investors and regulators in concrete terms.",
    ],
    help: [
      "Product and platform engineering, including the unglamorous operational core.",
      "Feasibility work on ledgers, data and AI before they are written into the roadmap.",
      "Regulatory readiness support together with the technical design.",
    ],
    capabilities: ["Fintech platforms", "Payments", "Blockchain assessments", "Advisory"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Providers and health organisations that need reliable digital systems around sensitive data.",
    challenges: [
      "Records and workflows split across facilities, vendors and paper.",
      "Data that is both operationally necessary and tightly constrained.",
      "Systems that have to stay available for clinical and administrative work.",
    ],
    help: [
      "Platform, integration and data architecture for administrative and care-adjacent workflows.",
      "Security reviews of applications and the infrastructure under them.",
      "Advisory before a large replacement of existing clinical or operational systems.",
    ],
    capabilities: ["Data platforms", "Integration", "Cybersecurity", "Advisory"],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    summary: "Operators extending beyond connectivity into digital services, identity and partnerships.",
    challenges: [
      "New digital services that must sit on complex existing networks and IT.",
      "Partner platforms, APIs and customer channels that multiply integration work.",
      "Data and security obligations that grow with every new product.",
    ],
    help: [
      "Platform and API engineering for digital services.",
      "Technology strategy for what the operator should own versus partner.",
      "Security architecture for customer-facing and partner-facing systems.",
    ],
    capabilities: ["Digital platforms", "APIs", "Cloud", "Data"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    summary: "Insurers digitising distribution, servicing and the data behind risk decisions.",
    challenges: [
      "Policy, claims and distribution processes that still depend on manual handoffs.",
      "Data that is hard to use for pricing, fraud or service decisions.",
      "Legacy administration systems that constrain new products.",
    ],
    help: [
      "Workflow and platform work around distribution, servicing and claims support.",
      "Data and applied AI where the decision and the data quality support it.",
      "Architecture reviews before a core replacement or vendor selection.",
    ],
    capabilities: ["Workflow systems", "Data", "Applied AI", "Architecture"],
  },
  {
    slug: "education",
    name: "Education",
    summary: "Universities and education providers that need platforms, research collaboration and skills programmes.",
    challenges: [
      "Digital services for students, staff and partners that do not share one system.",
      "Research ambitions without a technical partner who can build.",
      "Training needs that are real, but easy to turn into generic courses.",
    ],
    help: [
      "Platform engineering for institutional services.",
      "Research partnerships with a defined question and output.",
      "Training and technical programmes commissioned by the institution.",
    ],
    capabilities: ["Platforms", "Research partnerships", "Training", "Labs"],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    summary: "Companies modernising systems while the current operation has to keep running.",
    challenges: [
      "A landscape of applications that grew by project rather than by design.",
      "Uncertainty about what to build, buy, retire or integrate.",
      "Transformation plans that are not yet grounded in delivery capacity.",
    ],
    help: [
      "Engineering of platforms, integrations and replacements in stages.",
      "Enterprise architecture and build-versus-buy advice.",
      "Due diligence on vendors and major technology commitments.",
    ],
    capabilities: ["Modernisation", "Enterprise architecture", "Cloud", "Integration"],
  },
  {
    slug: "startups",
    name: "Startups & Innovation",
    summary: "Early companies and innovation teams that need a system a partner can take seriously.",
    challenges: [
      "A concept that has not yet become an architecture or a working slice.",
      "Technical choices made for speed that later block a bank, ministry or enterprise partner.",
      "Programmes and pilots with no path into an operable product.",
    ],
    help: [
      "Product engineering and focused prototypes.",
      "Technical assessment before a raise, a pilot or a regulatory conversation.",
      "Startup and developer programmes run for a sponsoring institution.",
    ],
    capabilities: ["Product engineering", "Prototypes", "Ecosystem programmes", "Advisory"],
  },
  {
    slug: "development",
    name: "Development Sector",
    summary: "Development organisations commissioning technology that local teams must be able to run.",
    challenges: [
      "Programmes specified as activities rather than as operable systems.",
      "Multiple implementers and a weak definition of what will remain after funding.",
      "Research and delivery procured separately, so the evidence never meets the build.",
    ],
    help: [
      "Commissioned design and delivery of digital systems.",
      "Assessments, research and policy support tied to implementation.",
      "Training and ecosystem programmes structured as paid engagements.",
    ],
    capabilities: ["Digital public infrastructure", "Research", "Training", "Advisory"],
  },
  {
    slug: "technology",
    name: "Technology Companies",
    summary: "Technology firms that need specialised engineering, assurance or a research partner.",
    challenges: [
      "A product that needs security or architecture review before a major customer will proceed.",
      "Capacity gaps in AI, data, integration or digital-asset infrastructure.",
      "A wish to run a developer or innovation programme without building a new internal unit first.",
    ],
    help: [
      "Co-delivery on defined parts of a product.",
      "Security, architecture and technical due diligence.",
      "Labs collaborations and commissioned community programmes.",
    ],
    capabilities: ["Engineering", "Cybersecurity", "Labs", "Ecosystem programmes"],
  },
];
