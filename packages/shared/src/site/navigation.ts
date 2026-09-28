export type NavLink = {
  label: string;
  href: string;
  description: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: NavLink[];
};

export const whatWeDoMenu: NavGroup[] = [
  {
    label: "Technology",
    href: "/services/technology",
    items: [
      {
        label: "Software Engineering",
        href: "/services/technology",
        description: "Products, platforms and the systems that connect them.",
      },
      {
        label: "Artificial Intelligence & Data",
        href: "/services/ai-data",
        description: "Applied AI, analytics and data platforms for real operations.",
      },
      {
        label: "Blockchain & Digital Assets",
        href: "/services/blockchain",
        description: "Shared ledgers and digital assets only where they earn their place.",
      },
      {
        label: "Digital Infrastructure",
        href: "/services/technology#digital-infrastructure",
        description: "Cloud, APIs, identity and public digital systems.",
      },
      {
        label: "Cybersecurity",
        href: "/services/cybersecurity",
        description: "Security architecture, assurance and technical risk.",
      },
    ],
  },
  {
    label: "Advisory",
    href: "/services/advisory",
    items: [
      {
        label: "Digital Transformation",
        href: "/services/advisory#digital-transformation",
        description: "Change programmes tied to systems that can actually be delivered.",
      },
      {
        label: "Technology Strategy",
        href: "/services/advisory#technology-strategy",
        description: "Choices about architecture, investment and operating model.",
      },
      {
        label: "Enterprise Architecture",
        href: "/services/advisory#enterprise-architecture",
        description: "How platforms, data and teams fit together.",
      },
      {
        label: "Technology Due Diligence",
        href: "/services/advisory#due-diligence",
        description: "A technical reading of a product, vendor or programme.",
      },
    ],
  },
  {
    label: "Research",
    href: "/services/research-policy",
    items: [
      {
        label: "Applied Research",
        href: "/labs",
        description: "Experiments and prototypes inside BIL Labs.",
      },
      {
        label: "Emerging Technologies",
        href: "/labs#domains",
        description: "Focused inquiry across AI, infrastructure and digital systems.",
      },
      {
        label: "Policy & Regulation",
        href: "/services/research-policy",
        description: "Evidence for rules, readiness and institutional decisions.",
      },
      {
        label: "Market Intelligence",
        href: "/services/research-policy#market-intelligence",
        description: "Structured reading of markets, actors and technology options.",
      },
    ],
  },
  {
    label: "Innovation",
    href: "/ecosystem",
    items: [
      {
        label: "Innovation Programs",
        href: "/ecosystem",
        description: "Programmes designed and run for institutions and partners.",
      },
      {
        label: "Startup Programs",
        href: "/ecosystem#startup",
        description: "Structured support for young companies, commissioned by a sponsor.",
      },
      {
        label: "Developer Ecosystems",
        href: "/ecosystem#developers",
        description: "Communities, challenges and technical events.",
      },
      {
        label: "Training & Workshops",
        href: "/ecosystem#training",
        description: "Professional learning for teams that build or govern technology.",
      },
    ],
  },
];

export const researchMenu: NavLink[] = [
  {
    label: "BIL Labs",
    href: "/labs",
    description: "Applied research, prototypes and technical experiments.",
  },
  {
    label: "Research & Policy",
    href: "/services/research-policy",
    description: "Evidence for technology, market and regulatory decisions.",
  },
  {
    label: "Insights",
    href: "/insights",
    description: "Notes and the place where future publications will live.",
  },
];

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  capabilities: [
    { label: "Technology", href: "/services/technology" },
    { label: "AI & Data", href: "/services/ai-data" },
    { label: "Blockchain", href: "/services/blockchain" },
    { label: "Advisory", href: "/services/advisory" },
    { label: "Research", href: "/services/research-policy" },
    { label: "Labs", href: "/labs" },
    { label: "Ecosystem", href: "/ecosystem" },
  ],
  resources: [
    { label: "Insights", href: "/insights" },
    { label: "Research", href: "/services/research-policy" },
    { label: "Policy", href: "/services/research-policy#policy-analysis" },
    { label: "Industries", href: "/industries" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
