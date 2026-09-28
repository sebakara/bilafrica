import type { OfferingGroup } from "../types";

export const technologyGroups: OfferingGroup[] = [
  {
    title: "Software and platforms",
    introduction:
      "Product and platform engineering for organisations that need a system they can operate, change and integrate.",
    items: [
      {
        title: "Custom Software Development",
        description: "Applications designed around a defined workflow, user and operating constraint.",
      },
      {
        title: "Enterprise Platforms",
        description: "Core digital platforms that several teams, products or institutions share.",
      },
      {
        title: "Web Applications",
        description: "Browser-based products for customers, staff or partner organisations.",
      },
      {
        title: "Mobile Applications",
        description: "Mobile products where the task, connectivity and device context justify a native or cross-platform build.",
      },
      {
        title: "Backend Systems",
        description: "Services, data stores and business logic that other products depend on.",
      },
      {
        title: "API Development",
        description: "Interfaces that let internal teams and external partners use a system safely.",
      },
      {
        title: "Systems Integration",
        description: "Connections between new platforms and the core systems that already run the organisation.",
      },
      {
        title: "Digital Platforms",
        description: "Multi-sided or institutional platforms, including the operational tools around them.",
      },
      {
        title: "Workflow Automation",
        description: "Removal of manual handoffs where the process is stable enough to encode.",
      },
      {
        title: "Legacy System Modernization",
        description: "Incremental replacement or wrapping of older systems without stopping the operation.",
      },
    ],
  },
  {
    title: "Financial and public digital systems",
    introduction:
      "Platforms that sit close to payments, identity and public services, where reliability and governance matter as much as features.",
    items: [
      {
        title: "Fintech Solutions",
        description: "Financial products and operational systems built to fit existing rails, controls and partners.",
      },
      {
        title: "Digital Payment Platforms",
        description: "Payment experiences, reconciliation and the integrations behind them.",
      },
      {
        title: "Digital Identity",
        description: "Issuance, verification, recovery and the relying services that consume a credential.",
      },
      {
        title: "Digital Public Infrastructure",
        description: "Shared digital capabilities for public institutions, designed to be implemented and governed.",
      },
      {
        title: "Data Platforms",
        description: "Platforms that collect, govern and serve data to products and decisions.",
      },
    ],
  },
  {
    title: "Emerging technology engineering",
    introduction:
      "AI and blockchain engineering as part of a wider build, used when the problem calls for them.",
    items: [
      {
        title: "Artificial Intelligence Solutions",
        description: "Applied models and assistants embedded in a workflow, with evaluation and oversight.",
      },
      {
        title: "Blockchain Solutions",
        description: "Ledger-based systems only after a feasibility assessment shows a shared record is warranted.",
      },
      {
        title: "Smart Contracts",
        description: "Programmable agreements where the rules, parties and failure cases are explicit.",
      },
      {
        title: "Tokenization Platforms",
        description: "Systems for representing assets or claims digitally, within the relevant legal structure.",
      },
    ],
  },
  {
    id: "digital-infrastructure",
    title: "Digital infrastructure",
    introduction: "The operational foundation under products: cloud, delivery and the path from code to a running service.",
    items: [
      {
        title: "Cloud Architecture",
        description: "Environments shaped for reliability, cost, security and the team that will run them.",
      },
      {
        title: "DevOps",
        description: "Delivery pipelines, environments and operating practices that keep releases predictable.",
      },
    ],
  },
];

export const aiGroups: OfferingGroup[] = [
  {
    id: "enterprise-ai",
    title: "Enterprise AI",
    introduction: "AI designed around a real operation, with a named owner and a boundary on what the system may do.",
    items: [
      {
        title: "Enterprise AI Integration",
        description: "Connecting models to the systems, permissions and workflows an institution already uses.",
      },
      {
        title: "AI Agents",
        description: "Task-specific agents with tools, limits and a path back to a human decision.",
      },
      {
        title: "Generative AI Applications",
        description: "Drafting, search and assistance products grounded in approved institutional knowledge.",
      },
      {
        title: "Business Process Automation",
        description: "Automation of repeatable steps, with exceptions routed to people.",
      },
    ],
  },
  {
    title: "Machine learning and predictive systems",
    items: [
      {
        title: "Machine Learning",
        description: "Models trained for a defined prediction or classification problem, then evaluated in context.",
      },
      {
        title: "Predictive Analytics",
        description: "Forecasts and signals that operators can inspect, not only a score.",
      },
      {
        title: "Recommendation Systems",
        description: "Ranking and suggestion where there is enough behaviour or catalogue data to justify it.",
      },
      {
        title: "Fraud Detection",
        description: "Detection models and review workflows for payments and digital services.",
      },
      {
        title: "Risk Scoring",
        description: "Scores that sit inside an existing decision process, with documented limits.",
      },
      {
        title: "Decision Support Systems",
        description: "Tools that prepare evidence for a person who remains accountable.",
      },
    ],
  },
  {
    title: "Language, vision and data",
    items: [
      {
        title: "Natural Language Processing",
        description: "Extraction, classification and search over text that the organisation is allowed to use.",
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis for a concrete operational check.",
      },
      {
        title: "Data Engineering",
        description: "Pipelines, quality checks and storage that make later analysis possible.",
      },
      {
        title: "Data Analytics",
        description: "Reporting and exploration tied to decisions the organisation already makes.",
      },
      {
        title: "Data Platforms",
        description: "Shared data foundations for products, research and operational reporting.",
      },
      {
        title: "AI APIs",
        description: "Interfaces that let other teams use an approved model or capability safely.",
      },
    ],
  },
];

export const responsibleAi = [
  {
    title: "Purpose and proportion",
    description: "The system is scoped to a task. A model is not introduced because it is available.",
  },
  {
    title: "Human accountability",
    description: "A person or institution remains responsible for decisions that affect people or money.",
  },
  {
    title: "Data governance",
    description: "Training and inference use data the organisation has the right and the reason to use.",
  },
  {
    title: "Evaluation",
    description: "Quality, failure modes and drift are examined before a pilot touches a live process.",
  },
  {
    title: "Security and privacy",
    description: "Prompts, outputs and connected tools are treated as part of the security boundary.",
  },
  {
    title: "Appropriate transparency",
    description: "Users and operators can tell when a system is assisting, and what it is not allowed to decide.",
  },
] as const;

export const blockchainGroups: OfferingGroup[] = [
  {
    title: "Strategy and architecture",
    items: [
      {
        title: "Blockchain Strategy",
        description: "A decision on whether a ledger belongs in the architecture, and what would have to be true.",
      },
      {
        title: "Blockchain Feasibility Assessments",
        description: "A structured test of trust boundaries, participants, cost and governance before a build.",
      },
      {
        title: "Public Blockchain Solutions",
        description: "Public networks when openness, settlement or existing ecosystems are part of the requirement.",
      },
      {
        title: "Permissioned Blockchain Solutions",
        description: "Known participants and controlled membership when a public network is the wrong trust model.",
      },
    ],
  },
  {
    title: "Engineering",
    items: [
      {
        title: "Smart Contract Engineering",
        description: "On-chain logic with explicit rules, tests and a plan for upgrade and failure.",
      },
      {
        title: "Blockchain APIs",
        description: "Interfaces that let existing products read and submit transactions without exposing the chain to every user.",
      },
      {
        title: "Wallet Infrastructure",
        description: "Key management and signing flows appropriate to an institution, not only an individual user.",
      },
      {
        title: "Blockchain Infrastructure",
        description: "Nodes, environments and monitoring for a network the operator can actually run.",
      },
      {
        title: "Web3 Integration",
        description: "Connections between current systems and a ledger, including identity and transaction flow.",
      },
      {
        title: "Proof-of-Concept Development",
        description: "A narrow build used to test a claim before a larger commitment.",
      },
    ],
  },
  {
    title: "Applications",
    items: [
      {
        title: "Asset Tokenization",
        description: "Digital representation of an asset or claim, designed with the legal structure in view.",
      },
      {
        title: "Stablecoin Infrastructure",
        description:
          "Infrastructure for institutions working with asset-backed digital money under the applicable rules. BIL does not operate an exchange and does not sell tokens.",
      },
      {
        title: "Blockchain Payments",
        description: "Payment flows that use a ledger where settlement or shared visibility is the point.",
      },
      {
        title: "Digital Identity",
        description: "Credentials and verification patterns where a shared or user-held record adds something a directory does not.",
      },
      {
        title: "Supply Chain Traceability",
        description: "Provenance across organisations that do not share one database.",
      },
      {
        title: "Blockchain Audit Trails",
        description: "Histories that several parties can inspect and that are costly to alter quietly.",
      },
    ],
  },
  {
    title: "Assurance",
    items: [
      {
        title: "Blockchain Security Reviews",
        description: "Review of contracts, keys, admin powers and the off-chain systems around them.",
      },
    ],
  },
];

export const blockchainFits = [
  "Several organisations need a shared record that none of them should rewrite alone.",
  "Auditability or provenance is part of the transaction, not an after-the-fact report.",
  "Ownership or claims need to move between parties under agreed rules.",
  "Settlement or conditional logic should execute the same way for every participant.",
  "Transparency requirements are not met by bilateral reporting.",
  "The participants will actually operate and govern the network after the pilot.",
] as const;

export const blockchainMisfits = [
  "One organisation already controls the data and the process.",
  "A database with access control and an audit log would meet the requirement.",
  "The hard problem is integration, data quality or adoption, not shared state.",
  "Participants will not run nodes, manage keys or accept shared governance.",
  "The cost and complexity of the network outweigh the value of a common ledger.",
  "A public chain is being proposed mainly because it is familiar in the market.",
] as const;

export const evaluationCriteria = [
  "Trust boundaries",
  "Multiple organisations",
  "Auditability",
  "Ownership",
  "Transparency",
  "Programmability",
  "Settlement",
  "Decentralisation requirements",
] as const;

export const advisoryGroups: OfferingGroup[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    items: [
      {
        title: "Digital Transformation Strategy",
        description: "A path from the current operating model to systems and teams that can carry it.",
      },
      {
        title: "Process Digitisation",
        description: "Which processes should become software, and which should stay under human control.",
      },
      {
        title: "Digital Maturity Assessments",
        description: "A clear reading of capability, systems and gaps before a programme is funded.",
      },
    ],
  },
  {
    id: "technology-strategy",
    title: "Technology Strategy",
    items: [
      {
        title: "Technology Strategy",
        description: "Investment, sequencing and the capabilities the organisation needs to own.",
      },
      {
        title: "Emerging Technology Strategy",
        description: "Where AI, digital assets or new infrastructure deserve a pilot, and where they do not.",
      },
      {
        title: "Innovation Strategy",
        description: "How an institution finds, tests and adopts ideas without turning innovation into a side office.",
      },
      {
        title: "Technology Roadmaps",
        description: "A sequenced plan that engineering, procurement and leadership can use.",
      },
    ],
  },
  {
    id: "enterprise-architecture",
    title: "Enterprise Architecture",
    items: [
      {
        title: "IT Architecture Reviews",
        description: "An independent look at whether the current architecture can support the stated direction.",
      },
      {
        title: "Enterprise Architecture",
        description: "Structure across applications, data, integration and security.",
      },
      {
        title: "Build-vs-Buy Analysis",
        description: "A practical comparison of building, buying or combining both.",
      },
      {
        title: "Technology Procurement Advisory",
        description: "Support for buying technology with requirements that vendors can be held to.",
      },
      {
        title: "Vendor Evaluation",
        description: "Assessment of claims, architecture, security and the reality of implementation.",
      },
    ],
  },
  {
    id: "due-diligence",
    title: "Technology Due Diligence",
    items: [
      {
        title: "Technology Due Diligence",
        description: "Technical review for a partnership, investment, acquisition or major contract.",
      },
      {
        title: "CTO Advisory",
        description: "Senior technical counsel for leaders who need an engineering counterpart.",
      },
    ],
  },
  {
    id: "cyber-and-policy",
    title: "Cybersecurity and policy",
    items: [
      {
        title: "Cybersecurity Advisory",
        description: "Governance, architecture and risk questions that sit above a single penetration test.",
      },
      {
        title: "Policy & Regulation",
        description: "Technology advice that takes the regulatory environment seriously, alongside BIL Research & Policy.",
      },
    ],
  },
];

export const researchGroups: OfferingGroup[] = [
  {
    title: "Applied research",
    items: [
      {
        title: "Emerging Technology Research",
        description: "Studies of technologies that institutions are being asked to adopt.",
      },
      {
        title: "Blockchain Research",
        description: "Evidence on where ledgers, tokenization and digital assets do and do not help.",
      },
      {
        title: "Artificial Intelligence Research",
        description: "Applied questions about AI in operations, services and governance.",
      },
      {
        title: "Fintech Research",
        description: "Market and systems research on financial technology and infrastructure.",
      },
      {
        title: "Commissioned Research",
        description: "A defined study for an institution, with questions agreed in advance.",
      },
      {
        title: "Institutional Research",
        description: "Longer research relationships with public bodies, firms or universities.",
      },
    ],
  },
  {
    id: "market-intelligence",
    title: "Market intelligence",
    items: [
      {
        title: "Market Intelligence",
        description: "A structured view of actors, products, infrastructure and constraints in a market.",
      },
      {
        title: "Industry Reports",
        description: "Written analysis for leadership, policy or programme design.",
      },
      {
        title: "Technology Assessments",
        description: "What a technology can do today, what it costs to operate, and what remains unproven.",
      },
    ],
  },
  {
    id: "policy-analysis",
    title: "Policy analysis",
    items: [
      {
        title: "Regulatory Research",
        description: "How current and proposed rules affect a technology or a market.",
      },
      {
        title: "Policy Analysis",
        description: "Options and consequences, written so a decision-maker can use them.",
      },
      {
        title: "Regulatory Readiness Assessments",
        description: "Whether a product or institution is prepared for the rules that apply to it.",
      },
      {
        title: "Regulatory Sandbox Advisory",
        description: "Support for institutions preparing to test under a supervisory arrangement.",
      },
      {
        title: "Policy Impact Assessments",
        description: "What a proposed rule or system is likely to change in practice.",
      },
      {
        title: "Technology Standards",
        description: "Work on standards that need both technical and institutional reading.",
      },
    ],
  },
  {
    title: "Domains",
    items: [
      {
        title: "Digital Asset Policy",
        description: "Policy questions around tokens, stablecoins and market infrastructure.",
      },
      {
        title: "AI Policy",
        description: "Governance of AI systems in institutions and public services.",
      },
      {
        title: "Digital Identity Policy",
        description: "Rules, trust frameworks and implementation choices for identity.",
      },
      {
        title: "Data Governance",
        description: "How data is collected, shared, retained and disputed.",
      },
      {
        title: "Digital Infrastructure",
        description: "Policy and design questions for shared digital public and market systems.",
      },
    ],
  },
];

export const cybersecurityOfferings: OfferingGroup[] = [
  {
    title: "A capability, not a separate division",
    introduction:
      "Cybersecurity at BIL supports engineering, advisory and research. It is not presented as an independent company.",
    items: [
      {
        title: "Application Security",
        description: "Review and improvement of the security of the software being built or bought.",
      },
      {
        title: "API Security",
        description: "Authentication, authorisation and abuse cases for interfaces.",
      },
      {
        title: "Cloud Security Assessments",
        description: "Configuration, identity and exposure of cloud environments.",
      },
      {
        title: "Infrastructure Security Reviews",
        description: "The security posture of the systems a product depends on.",
      },
      {
        title: "Security Architecture",
        description: "Security decisions made while the architecture is still open.",
      },
      {
        title: "Smart Contract Security",
        description: "Review of on-chain logic, admin keys and the surrounding application.",
      },
      {
        title: "DevSecOps",
        description: "Security checks inside delivery, rather than only at the end.",
      },
      {
        title: "Secure Software Development",
        description: "Engineering practices that reduce the defects teams ship.",
      },
      {
        title: "Technology Risk Assessments",
        description: "A clear account of technical risk for leadership or a board committee.",
      },
      {
        title: "Cybersecurity Governance",
        description: "Roles, policies and oversight that match how the organisation actually builds.",
      },
      {
        title: "Technical Due Diligence",
        description: "Security and engineering review of a partner, vendor or acquisition target.",
      },
    ],
  },
];

export const labDomains = [
  { title: "Artificial Intelligence", description: "Applied models, agents and evaluation methods." },
  { title: "Blockchain", description: "Feasibility, prototypes and the limits of shared ledgers." },
  { title: "Fintech", description: "Payment, market and financial-infrastructure experiments." },
  { title: "Digital Identity", description: "Credential, verification and recovery patterns." },
  { title: "Digital Public Infrastructure", description: "Shared public digital capabilities in prototype form." },
  { title: "Cybersecurity", description: "Defensive experiments tied to systems BIL designs." },
  { title: "Internet of Things", description: "Devices, data and the trust placed in a sensor." },
  { title: "Privacy Technologies", description: "Techniques that reduce unnecessary exposure of data." },
  { title: "Distributed Systems", description: "Coordination, consistency and failure across services." },
  { title: "Autonomous Systems", description: "Systems that act with explicit bounds and oversight." },
  { title: "Digital Currency Infrastructure", description: "Research into institutional digital money infrastructure. Not a currency issuance." },
  { title: "Future Payment Infrastructure", description: "What the next layer of payments may need to interoperate with." },
] as const;

export const labServices = [
  "Applied Research",
  "Technology Feasibility Studies",
  "Prototype Development",
  "Proof of Concepts",
  "Emerging Technology Assessments",
  "Technical White Papers",
  "Technology Benchmarking",
  "Experimental Systems",
  "R&D Partnerships",
] as const;

export const labLifecycle = [
  {
    title: "Observe",
    description: "Watch the market, the regulation and the operational friction before framing a study.",
  },
  {
    title: "Research",
    description: "Gather evidence and define the question tightly enough to test.",
  },
  {
    title: "Prototype",
    description: "Build the smallest system that can confirm or reject the idea.",
  },
  {
    title: "Validate",
    description: "Check the result with technical criteria and with the people who would use it.",
  },
  {
    title: "Transfer",
    description: "Move a valid result into a product, an advisory recommendation, or a decision to stop.",
  },
] as const;

export const ecosystemPrograms = [
  {
    id: "developers",
    title: "Developer Programs",
    description: "Structured programmes for engineers, commissioned by a company, hub or public institution.",
  },
  {
    title: "Developer Communities",
    description: "Ongoing technical communities with a clear host, purpose and standard of contribution.",
  },
  {
    title: "Hackathons",
    description: "Time-bound building events designed around a real problem, not a generic theme.",
  },
  {
    title: "Innovation Challenges",
    description: "Open or invited challenges with criteria, mentors and a path after the prize.",
  },
  {
    id: "training",
    title: "Technology Bootcamps",
    description: "Intensive technical programmes for a defined cohort and sponsor.",
  },
  {
    title: "Professional Training",
    description: "Courses for practitioners and managers who buy, build or govern technology.",
  },
  {
    title: "Technical Workshops",
    description: "Short working sessions on architecture, AI, security or digital infrastructure.",
  },
  {
    id: "startup",
    title: "Startup Programs",
    description: "Support for young companies, funded by a sponsor or partner rather than offered as charity.",
  },
  {
    title: "Incubation Support",
    description: "Technical and programme support during early product development.",
  },
  {
    title: "University Partnerships",
    description: "Joint teaching, research or student programmes with a clear academic counterpart.",
  },
  {
    title: "Research Partnerships",
    description: "Shared inquiry with a university or research institution.",
  },
  {
    title: "Corporate Innovation Programs",
    description: "Programmes that help a company test ideas with founders, developers or its own staff.",
  },
  {
    title: "Developer Conferences",
    description: "Technical gatherings designed and produced for a host organisation.",
  },
  {
    title: "Public Technology Dialogues",
    description: "Forums that put engineers, officials and operators in the same conversation.",
  },
  {
    title: "Policy Forums",
    description: "Structured discussions where policy questions meet implementation experience.",
  },
] as const;
