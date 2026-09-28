const homeCrumb = { label: "Home", href: "/" };
const workCrumb = { label: "What we do", href: "/services" };

export const pages = {
  about: {
    eyebrow: "About BIL",
    title: "An emerging-technology company with four practices.",
    description:
      "Blockchain & Innovation Landscape builds digital systems, studies emerging technology, advises institutions and designs innovation programmes. The practices are meant to strengthen one another.",
    breadcrumbs: [homeCrumb, { label: "About" }],
    action: { label: "Work With BIL", href: "/contact" },
    who: {
      title: "Who we are",
      paragraphs: [
        "BIL is a commercial technology company. Engineering is the centre of the work. Research, policy and ecosystem programmes exist so that what gets built is better informed, and so that institutions can use the same team for more than one kind of problem.",
        "The company is not an exchange, a blockchain association or an NGO. Blockchain is one capability inside a wider innovation landscape. The same is true of artificial intelligence, digital identity and public digital infrastructure.",
      ],
    },
    why: {
      title: "Why BIL exists",
      paragraphs: [
        "Strategy firms often stop at the recommendation. Engineering firms can ship a system without studying the institution that has to live with it. Research groups can describe a technology without putting it into operation.",
        "BIL exists to hold those practices in one company. A feasibility study can become a prototype. A prototype can become a platform. An advisory engagement can be checked against people who have built the kind of system being discussed.",
      ],
    },
    practicesTitle: "Build. Research. Advise. Innovate.",
    approach: {
      title: "Our approach",
      steps: [
        "Understand the institution, the users and the constraint that actually matters.",
        "Examine the evidence, the existing systems and the options that are operable.",
        "Recommend an architecture, a study or a programme only when it fits the problem.",
        "Build, advise or research according to what the work requires.",
        "Leave behind a system, a decision or a capability that someone else can carry.",
      ],
    },
    principlesTitle: "Our principles",
    africa: {
      title: "Africa and global innovation",
      paragraphs: [
        "BIL begins from an African context, including Rwanda and the wider region. The work is aimed at institutions whose partners, standards and markets are also international.",
        "That means taking local operating conditions seriously: payments infrastructure, public digital systems, talent and regulation. It also means refusing a lower technical standard because a project is delivered in an African market.",
      ],
    },
    leadership: {
      title: "Leadership",
      text: "Leadership profiles will be published here once they are confirmed. This space is reserved for named people and roles. No biographies are shown until they can be verified.",
      placeholder: "Placeholder for future leadership entries: name, role, focus and a short biography.",
      ventures: "BIL Ventures is a future initiative and is not operational. It is not an investment activity of the company today.",
    },
    cta: {
      title: "Work with BIL",
      description:
        "Tell us about the system, the study or the programme you need. We will respond with a clear view of whether we are the right team.",
      primaryLabel: "Start a Conversation",
    },
  },
  careers: {
    eyebrow: "Careers",
    title: "Careers at BIL",
    description:
      "The company needs people who can build, study and explain technology without inflating it. Roles will be posted when they are real.",
    breadcrumbs: [homeCrumb, { label: "Careers" }],
    whyTitle: "Why BIL",
    why: "Work moves between delivery, research and institutional problems. That suits people who want commercial technology practice with room for evidence and long-term systems, rather than a single service line.",
    areas: [
      {
        title: "Engineering",
        text: "People who design and build platforms, integrations and the operational detail around them.",
      },
      {
        title: "Research",
        text: "People who can frame a technology question, test it and write so an institution can use the result.",
      },
      {
        title: "Innovation",
        text: "People who can design a programme, a community or a learning experience for a paying partner.",
      },
      {
        title: "Graduate opportunities",
        text: "Early-career roles will be listed here when they are open. None are published at the moment.",
      },
    ],
    openingsTitle: "Open positions",
    openings: "There are currently no published openings.",
    openingsNote:
      "If you want to be considered when a role opens, use the contact form, choose Other, and describe the kind of work you do.",
    cta: {
      title: "Share your profile",
      description:
        "A short note on what you build or research is enough. Please do not send confidential material from a current employer.",
      primaryLabel: "Contact BIL",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Start a conversation.",
    description:
      "Tell us about the institution, the problem and the kind of help you need. A precise note is more useful than a long one.",
    breadcrumbs: [homeCrumb, { label: "Contact" }],
    includeTitle: "What to include",
    include: [
      "The organisation and the country you work from.",
      "Whether you need a build, research, advice or a programme.",
      "Any deadline or constraint that changes the shape of the work.",
    ],
    note: "BIL does not publish an office address or phone number on this site yet. The form is the contact path.",
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy notice",
    description:
      "This notice explains how the website handles information you send through its forms. It will be updated with registered-entity details before it is treated as a final legal policy.",
    breadcrumbs: [homeCrumb, { label: "Privacy" }],
    sections: [
      {
        title: "Who this notice is from",
        text: "This website is operated for Blockchain & Innovation Landscape (BIL). A postal address, registration number and dedicated privacy contact will be added when those details are confirmed. Until then, privacy questions can be sent through the contact form.",
      },
      {
        title: "What we collect",
        text: "If you use the contact form, we collect the details you submit: name, organisation, email, optional phone and country, area of interest and message. The research-updates form collects an email address. A hidden field is used to reduce automated spam. We do not ask for payment details or account passwords.",
      },
      {
        title: "Why we use it",
        text: "Contact details are used to reply to your enquiry and, if you asked, to note interest in future research updates. We do not sell personal information. We do not use enquiry content to train public models.",
      },
      {
        title: "How it is delivered",
        text: "When email delivery is configured, messages are sent to a BIL inbox through an email provider. Access is limited to people who need it to respond. Server logs may include technical data such as IP address for security and abuse prevention.",
      },
      {
        title: "How long it is kept",
        text: "Enquiry records are kept for as long as needed to respond and to keep a reasonable record of the conversation, then deleted or reduced. A formal retention schedule will be published with the final policy.",
      },
      {
        title: "Your requests",
        text: "You may ask what we hold from your enquiry, ask for a correction, or ask us to delete it where we are not required to keep it. Use the contact form and put Privacy in the message. Applicable law may give you additional rights. This draft does not limit those rights.",
      },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of use",
    description:
      "These terms cover use of this website. They are a working draft and will be updated with the company legal entity before they are treated as final.",
    breadcrumbs: [homeCrumb, { label: "Terms" }],
    sections: [
      {
        title: "Using the site",
        text: "You may use this website to learn about Blockchain & Innovation Landscape and to send an enquiry. You may not misuse the forms, attempt to disrupt the site, or scrape it in a way that degrades the service.",
      },
      {
        title: "No offer of services by itself",
        text: "Descriptions of capabilities are not a proposal, a quote or an agreement to perform work. Work begins only when both sides agree scope and terms in writing. Sample insights are not publications and must not be cited as BIL research.",
      },
      {
        title: "Intellectual property",
        text: "Site text, design and code are owned by BIL or used with permission. You may not copy substantial parts for a competing site. Sharing a link is welcome.",
      },
      {
        title: "Accuracy",
        text: "We aim to keep the site accurate. It may be incomplete while the company publishes real leadership, research and contact details. Do not rely on sample content for a regulatory, investment or technical decision.",
      },
      {
        title: "Liability",
        text: "The website is provided as a source of information. To the extent the law allows, BIL is not liable for loss arising only from use of the public website. This does not exclude liability that cannot legally be excluded. Project contracts will set their own terms.",
      },
      {
        title: "Contact",
        text: "Questions about these terms can be sent through the contact form.",
      },
    ],
  },
  services: {
    eyebrow: "What we do",
    title: "Engineering, research, advisory and innovation in one practice.",
    description:
      "Choose a capability to see how BIL works. Each practice is commercial. Together they let an institution move from a question to a system, a study or a programme.",
    breadcrumbs: [homeCrumb, { label: "What we do" }],
    pillars: [
      {
        label: "Build",
        text: "Technology development and engineering, including AI, data, digital infrastructure and blockchain where it fits.",
        links: [
          { label: "Technology", href: "/services/technology" },
          { label: "AI & Data", href: "/services/ai-data" },
          { label: "Blockchain & Digital Assets", href: "/services/blockchain" },
          { label: "Cybersecurity", href: "/services/cybersecurity" },
        ],
      },
      {
        label: "Research",
        text: "Applied R&D in BIL Labs, and evidence for markets, technology and regulation.",
        links: [
          { label: "BIL Labs", href: "/labs" },
          { label: "Research & Policy", href: "/services/research-policy" },
        ],
      },
      {
        label: "Advise",
        text: "Strategy, architecture, transformation and due diligence grounded in delivery experience.",
        links: [{ label: "Advisory", href: "/services/advisory" }],
      },
      {
        label: "Innovate",
        text: "Programmes for developers, startups, universities and corporate partners. These are designed and operated for sponsors.",
        links: [{ label: "Ecosystem", href: "/ecosystem" }],
      },
    ],
    engagementsEyebrow: "Engagements",
    engagementsTitle: "Ways to work together",
    engagements:
      "Engagements are scoped to the problem. A single organisation may use more than one of these over time.",
    ventures:
      "BIL Ventures may be developed later as a separate initiative. It is not operational, and it is not offered as a service today.",
    cta: { primaryLabel: "Discuss a Project", secondaryHref: "/labs", secondaryLabel: "Explore BIL Labs" },
  },
  technology: {
    eyebrow: "BIL Technologies",
    title: "Digital systems built around the problem.",
    description:
      "BIL Technologies designs and builds software, platforms and infrastructure. Artificial intelligence, data and blockchain sit inside that practice. They are chosen when they solve something a simpler system cannot.",
    breadcrumbs: [homeCrumb, workCrumb, { label: "Technology" }],
    action: "Discuss a Project",
    intro:
      "Work covers custom software, enterprise platforms, financial and public digital systems, and the cloud and delivery practices that keep them running. Cybersecurity is part of the same engineering conversation.",
    cyberLink: "See the cybersecurity capability",
    areasTitle: "Technology areas",
  },
  ai: {
    eyebrow: "AI & Data",
    title: "AI designed around real operations.",
    description:
      "Models, agents and data platforms are useful when they sit inside a workflow someone owns. BIL scopes the task, the data and the point at which a person must decide.",
    breadcrumbs: [homeCrumb, workCrumb, { label: "AI & Data" }],
    action: "Explore AI Solutions",
    ctaLabel: "Discuss an AI system",
    deliveryEyebrow: "Delivery",
    responsibleTitle: "Responsible AI",
    responsible:
      "These are working principles for delivery. They are not a certification, and they do not replace the rules that apply to a particular sector.",
  },
  blockchain: {
    eyebrow: "Blockchain & Digital Assets",
    title: "Blockchain where it creates real value.",
    description:
      "BIL does not recommend a ledger because it is fashionable. We start with the problem, then test whether shared state, auditability or settlement actually require one.",
    breadcrumbs: [homeCrumb, workCrumb, { label: "Blockchain" }],
    action: "Explore Blockchain Solutions",
    ctaLabel: "Discuss a blockchain question",
    startingEyebrow: "Starting point",
    startingTitle: "We start with the problem, not the technology.",
    starting:
      "Before a network is proposed, BIL looks at trust boundaries, the number of organisations involved, auditability, ownership, transparency, programmability, settlement and any real requirement for decentralisation. The recommendation may be a blockchain. It may be a database, an integration or a decision not to proceed.",
    evaluateTitle: "What we evaluate",
    fitsTitle: "When blockchain can make sense",
    misfitsTitle: "When blockchain may not be necessary",
  },
  advisory: {
    eyebrow: "BIL Advisory",
    title: "Technology strategy grounded in engineering.",
    description:
      "Advisory helps organisations decide what to build, buy, stop or study. The difference from a general consulting practice is that BIL can also design, build and research the systems under discussion.",
    breadcrumbs: [homeCrumb, workCrumb, { label: "Advisory" }],
    action: "Discuss an advisory engagement",
    ctaLabel: "Talk to BIL",
    intro:
      "A strategy that cannot be engineered is unfinished. BIL uses delivery experience and, where needed, BIL Labs and Research & Policy, so advice stays tied to evidence and to what an institution can run.",
  },
  research: {
    eyebrow: "BIL Research & Policy",
    title: "Evidence for emerging technology decisions.",
    description:
      "Research at BIL connects technology, markets, institutions and regulation. It is commissioned work and applied inquiry, written so a decision-maker can use it.",
    breadcrumbs: [homeCrumb, workCrumb, { label: "Research & Policy" }],
    action: "Commission research",
    ctaLabel: "Discuss a research brief",
    intro: "Evidence-based technology and policy advisory.",
    featuredTitle: "Featured research",
    featuredSample:
      "BIL has not released institutional reports on this site yet. The cards show the format future publications will use. They are samples, not BIL publications, and they do not cite fabricated findings.",
    featuredPublished: "Featured writing from the insights archive. Sample pieces stay labelled.",
  },
  cybersecurity: {
    eyebrow: "Cybersecurity & technology assurance",
    title: "Security as part of how systems are designed.",
    description:
      "This is a capability inside BIL, not a separate division. It supports builds, architecture reviews and technical due diligence.",
    breadcrumbs: [homeCrumb, workCrumb, { label: "Cybersecurity" }],
    action: "Request an assessment",
    ctaLabel: "Discuss a security review",
  },
  labs: {
    eyebrow: "BIL Labs",
    title: "Experiment today. Build what comes next.",
    description:
      "Labs is where BIL studies emerging technology closely enough to prototype it, reject it or turn it into a system. The work is applied, commissioned or pursued as a partnership.",
    breadcrumbs: [homeCrumb, { label: "BIL Labs" }],
    action: "Discuss an R&D partnership",
    paragraphs: [
      "A lab result is useful when it changes a decision or becomes something that can be operated. BIL Labs works with the engineering, advisory and policy practices so an experiment does not stay isolated from the company that would have to deliver it.",
      "Digital currency infrastructure is a research domain, not a product BIL issues. The same restraint applies to every other area on this page.",
    ],
    domainsTitle: "Research domains",
    lifecycleTitle: "How a study moves",
    servicesTitle: "What can be commissioned",
    cta: {
      title: "Bring a question to BIL Labs",
      description: "A useful brief names the decision the research should inform, the constraints, and whether a prototype is required.",
      primaryLabel: "Discuss an R&D partnership",
    },
  },
  ecosystem: {
    eyebrow: "BIL Ecosystem",
    title: "Innovation grows through ecosystems.",
    description:
      "BIL designs and operates programmes for organisations and partners. They are sponsored, commissioned or institutionally funded. They are not charitable activities of the company.",
    breadcrumbs: [homeCrumb, { label: "Ecosystem" }],
    action: "Commission a programme",
    intro:
      "A programme has a host, a purpose, a cohort and a result that can be evaluated. That may be a developer community, a challenge, a training series, support for startups, or a forum where policy and implementation meet.",
    programmesTitle: "Programmes",
    cta: {
      title: "Design a programme with BIL",
      description: "Tell us who the programme is for, who is funding it, and what should be true when it ends.",
      primaryLabel: "Work With BIL",
    },
  },
  industries: {
    eyebrow: "Industries",
    title: "Problems first. Sectors second.",
    description:
      "We work with organisations across the groups below. Nothing on this page is a claim of a current client, contract or partnership.",
    breadcrumbs: [homeCrumb, { label: "Industries" }],
    navLabel: "Industries",
    challenges: "Challenges",
    help: "How BIL helps",
    capabilities: "Relevant capabilities",
    audiencesTitle: "Organisations we are built to work with",
    ctaLabel: "Discuss a sector problem",
  },
} as const;
