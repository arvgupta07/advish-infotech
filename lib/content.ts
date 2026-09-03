import type {
  IndustryContent,
  NavItem,
  ServicePageContent,
  ServiceSlug,
  ServiceSummary,
  Testimonial,
} from "./types";

export const SITE = {
  name: "Advish Infotech",
  tagline: "Intelligent Operations. Scalable Growth.",
  email: "hello@advishinfotech.com",
  city: "Bangalore, India",
  description:
    "Advish Infotech delivers AI-powered BPO, CRM integration, and contact center solutions that reduce manual work and give your team back the time to grow.",
};

export const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SERVICE_SUMMARIES: ServiceSummary[] = [
  {
    slug: "voice-ai",
    title: "Voice AI Agents",
    shortDescription:
      "Inbound & outbound AI agents with auto routing, AI receptionists, voice bots, and full contact center deployment.",
    href: "/services/voice-ai",
    icon: "voice",
  },
  {
    slug: "chat-ai",
    title: "Chat & WhatsApp AI",
    shortDescription:
      "Chat AI agents, chatbots, WhatsApp automations, SMS integration, and multi-channel messaging workflows.",
    href: "/services/chat-ai",
    icon: "chat",
  },
  {
    slug: "crm-integration",
    title: "CRM & Workflow Integration",
    shortDescription:
      "End-to-end CRM setup, workflow automation, platform connectivity, and company-wide process integration.",
    href: "/services/crm-integration",
    icon: "crm",
  },
  {
    slug: "tech-build",
    title: "Tech Build",
    shortDescription:
      "Custom landing pages, full-stack SaaS products, mobile apps, and website or application migration.",
    href: "/services/tech-build",
    icon: "build",
  },
  {
    slug: "cloud-microsoft",
    title: "Cloud & Microsoft",
    shortDescription:
      "Cloud infrastructure setup, Microsoft 365 licensing, and scalable cloud solutions tailored to your business size.",
    href: "/services/cloud-microsoft",
    icon: "cloud",
  },
  {
    slug: "voice-ai",
    title: "Contact Center Solutions",
    shortDescription:
      "End-to-end contact center setup with agent routing, call tracking, escalation flows, and productivity dashboards.",
    href: "/services/voice-ai",
    icon: "center",
  },
];

export const SERVICE_PAGES: Record<ServiceSlug, ServicePageContent> = {
  "voice-ai": {
    slug: "voice-ai",
    title: "Voice AI Agents & Contact Center",
    heroDescription:
      "Deploy inbound and outbound Voice AI agents, AI receptionists, and a full contact center stack that routes every call with intent — then writes the outcome back into your CRM.",
    overview:
      "Voice is still how high-stakes conversations happen. We design agents that sound natural, escalate cleanly, and never leave your operations team guessing what happened on the line.",
    capabilities: [
      "Inbound Voice AI agents with natural language understanding",
      "Outbound Voice AI for sales calls, reminders, and follow-ups",
      "Automatic agent routing based on intent detection",
      "AI receptionists for front-desk call handling",
      "Voice bots for FAQ, appointment booking, and escalation",
      "Full contact center solution with dashboards and reporting",
      "SMS integration for post-call follow-ups",
    ],
    steps: [
      {
        title: "Audit",
        description:
          "We audit your current call flow and CRM setup so routing, scripts, and handoffs match how your team actually works.",
      },
      {
        title: "Design",
        description:
          "We design the AI agent script, routing logic, and escalation rules before a single number goes live.",
      },
      {
        title: "Deploy",
        description:
          "We deploy, integrate with your CRM, and run QA testing against real conversation scenarios.",
      },
      {
        title: "Go live",
        description:
          "You go live with real-time dashboards tracking every interaction, from first ring to closed ticket.",
      },
    ],
    audiences: [
      {
        role: "Sales operations leaders",
        description:
          "Keep outbound follow-up running after hours without adding headcount to the floor.",
      },
      {
        role: "Customer support directors",
        description:
          "Absorb inbound volume spikes while senior agents handle only the cases that need judgement.",
      },
      {
        role: "Clinic and branch managers",
        description:
          "Put an AI receptionist on the line so appointments, FAQs, and transfers never stall at the desk.",
      },
    ],
    outcomes: [
      { value: "60%+", label: "Lift in agent productive talk time" },
      { value: "24/7", label: "Coverage without overnight staffing" },
      { value: "CRM", label: "Every call logged with context" },
    ],
    related: ["chat-ai", "crm-integration"],
  },
  "chat-ai": {
    slug: "chat-ai",
    title: "Chat AI, WhatsApp & Messaging Automation",
    heroDescription:
      "Unify website chat, WhatsApp, SMS, and in-app messaging into one intelligent layer that captures leads, answers customers, and writes everything back to your CRM.",
    overview:
      "Customers do not stay on a single channel. We build conversation systems that recognise intent, keep context across WhatsApp and web, and know when a human should take over.",
    capabilities: [
      "Chat AI agents for website, app, or portal",
      "WhatsApp Business automation (replies, sequences, broadcasts)",
      "Chatbots for lead capture, support, and booking",
      "SMS integration and drip campaigns",
      "Multi-channel messaging unified into CRM",
      "Company-wide communication automation",
    ],
    steps: [
      {
        title: "Map",
        description:
          "We map your customer communication touchpoints and identify where messages stall or get lost.",
      },
      {
        title: "Build",
        description:
          "We build the conversation flows, triggers, and escalation paths for each channel you actually use.",
      },
      {
        title: "Connect",
        description:
          "We deploy across your chosen channels and connect every thread to CRM records and owners.",
      },
      {
        title: "Optimise",
        description:
          "We monitor, optimise, and report on engagement metrics so copy and routing keep improving.",
      },
    ],
    audiences: [
      {
        role: "E-commerce operators",
        description:
          "Handle order status, returns, and abandoned-cart recovery on WhatsApp without a growing inbox.",
      },
      {
        role: "Growth and demand teams",
        description:
          "Qualify inbound chat and SMS leads before they hit a salesperson's calendar.",
      },
      {
        role: "Field and logistics teams",
        description:
          "Send status updates and collect confirmations by SMS while exceptions route to a dispatcher.",
      },
    ],
    outcomes: [
      { value: "3x", label: "Faster first response on digital channels" },
      { value: "1 inbox", label: "Unified view across WhatsApp, chat, SMS" },
      { value: "0 lost", label: "Leads dropped between chat and CRM" },
    ],
    related: ["voice-ai", "crm-integration"],
  },
  "crm-integration": {
    slug: "crm-integration",
    title: "CRM & Workflow Integration",
    heroDescription:
      "Stand up a CRM that your teams will actually use — then automate assignment, follow-up, and reporting so data stops living in spreadsheets and inboxes.",
    overview:
      "A CRM only pays for itself when calling, messaging, and ops tools feed it automatically. We configure the platform, migrate the data, and wire the workflows that keep records honest.",
    capabilities: [
      "Full CRM setup, configuration, and data migration",
      "Workflow automation (lead assignment, follow-up triggers, task creation)",
      "Integration between CRM and calling, SMS, WhatsApp, and email tools",
      "Connecting third-party platforms (ERP, helpdesk, marketing tools)",
      "Custom automation rules and pipeline management",
      "Ongoing CRM management and reporting",
    ],
    steps: [
      {
        title: "Discover",
        description:
          "We document pipelines, owners, and the systems that currently hold customer truth.",
      },
      {
        title: "Configure",
        description:
          "We configure objects, permissions, and automations to match how your company sells and supports.",
      },
      {
        title: "Integrate",
        description:
          "We connect voice, chat, email, and operational tools so activity writes itself into the record.",
      },
      {
        title: "Operate",
        description:
          "We train teams, ship dashboards, and stay on to keep workflows accurate as the business changes.",
      },
    ],
    audiences: [
      {
        role: "Revenue operations",
        description:
          "Replace spreadsheet pipelines with assignment rules, SLAs, and a forecast you can defend.",
      },
      {
        role: "Founders scaling past founder-led sales",
        description:
          "Get a CRM live in weeks, not quarters, without hiring a full-time admin on day one.",
      },
      {
        role: "IT and systems owners",
        description:
          "Connect CRM to ERP, helpdesk, and marketing tools without another year of middleware projects.",
      },
    ],
    outcomes: [
      { value: "3x", label: "Faster CRM deployment vs. in-house builds" },
      { value: "45%", label: "Fewer manual status updates" },
      { value: "10+", label: "Platforms we routinely connect" },
    ],
    related: ["voice-ai", "tech-build"],
  },
  "tech-build": {
    slug: "tech-build",
    title: "Custom Tech Build",
    heroDescription:
      "From high-conversion landing pages to full-stack SaaS and mobile apps — we design, build, and migrate the software your operations actually run on.",
    overview:
      "When off-the-shelf tools leave a gap, we build the product, portal, or migration path that sits cleanly beside your CRM and communication stack.",
    capabilities: [
      "Custom landing pages (high-conversion, fast-loading)",
      "Full-stack SaaS product development",
      "Mobile app development (iOS and Android)",
      "Website design and development",
      "Application and website migration",
      "API development and third-party integrations",
    ],
    steps: [
      {
        title: "Scope",
        description:
          "We define the business outcome, users, and integrations before a line of code is written.",
      },
      {
        title: "Design",
        description:
          "We prototype the experience and data model so stakeholders can pressure-test the workflow.",
      },
      {
        title: "Build",
        description:
          "We ship in short cycles with staging environments, QA, and documented APIs.",
      },
      {
        title: "Handover",
        description:
          "We migrate, launch, and leave you with runbooks — or stay on to operate the product.",
      },
    ],
    audiences: [
      {
        role: "Product and digital leads",
        description:
          "Need a customer portal or internal tool that CRM and no-code platforms cannot stretch to cover.",
      },
      {
        role: "Marketing teams",
        description:
          "Require landing pages and campaign sites that load fast and feed qualified leads into CRM.",
      },
      {
        role: "CTOs mid-migration",
        description:
          "Moving a legacy site or app to a modern stack without freezing the business for six months.",
      },
    ],
    outcomes: [
      { value: "Weeks", label: "To a production landing or MVP, not months" },
      { value: "Full stack", label: "Web, mobile, APIs, and migrations" },
      { value: "Owned", label: "Code and infrastructure you control" },
    ],
    related: ["cloud-microsoft", "crm-integration"],
  },
  "cloud-microsoft": {
    slug: "cloud-microsoft",
    title: "Cloud & Microsoft Solutions",
    heroDescription:
      "Plan, license, and run Microsoft 365 and cloud infrastructure that scales with headcount — without turning IT into a bottleneck for every new hire or office.",
    overview:
      "We treat cloud and Microsoft 365 as operations infrastructure: licensing, identity, collaboration, and hosting that stay secure as the company grows.",
    capabilities: [
      "Microsoft 365 licensing and setup (Teams, Outlook, SharePoint)",
      "Cloud infrastructure planning and deployment",
      "Cloud migration from on-premise or legacy systems",
      "Scalable hosting and server configuration",
      "Security and compliance setup for cloud environments",
      "Ongoing cloud management and support",
    ],
    steps: [
      {
        title: "Assess",
        description:
          "We inventory licenses, identity, and workloads so the target architecture is sized to reality.",
      },
      {
        title: "Plan",
        description:
          "We sequence licensing, tenant setup, and migration windows around your working calendar.",
      },
      {
        title: "Migrate",
        description:
          "We move mail, files, and applications with rollback paths and user communications.",
      },
      {
        title: "Run",
        description:
          "We harden security, document access, and stay available for ongoing management.",
      },
    ],
    audiences: [
      {
        role: "Operations and office leads",
        description:
          "Need Teams, Outlook, and SharePoint working the week new employees join.",
      },
      {
        role: "IT managers",
        description:
          "Want a cloud landing zone and Microsoft tenant they can govern, not a pile of unmanaged tenants.",
      },
      {
        role: "Finance and compliance owners",
        description:
          "Require licensing that matches actual seats and environments that meet audit expectations.",
      },
    ],
    outcomes: [
      { value: "M365", label: "Licensing and tenant setup done right" },
      { value: "Secure", label: "Identity, access, and backup baselines" },
      { value: "Scale", label: "Hosting sized to your next headcount jump" },
    ],
    related: ["tech-build", "crm-integration"],
  },
};

export const INDUSTRIES: IndustryContent[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb: "Automate lead follow-up, CRM updates, and agent communication.",
    paragraphs: [
      "Brokerages lose deals in the gap between inquiry and first human response. Leads arrive on WhatsApp, portal forms, and missed calls — then sit until an agent has time to type a follow-up. Meanwhile inventory, site-visit notes, and owner conversations live in personal chats instead of a shared CRM.",
      "Advish wires Voice AI and chat agents to capture every inquiry, book site visits, and write outcomes into CRM so agents spend time closing, not chasing. Routing rules send hot buyers to senior closers and keep channel partners visible to leadership.",
      "We also stand up the landing pages and WhatsApp sequences that marketing actually needs for project launches, without a separate vendor for each campaign.",
    ],
    services: ["Voice AI Agents", "Chat & WhatsApp AI", "CRM & Workflow Integration"],
    icon: "estate",
  },
  {
    slug: "fintech",
    name: "FinTech / BFSI",
    blurb: "Compliant contact center flows with intelligent call routing.",
    paragraphs: [
      "Banks, NBFCs, and fintechs cannot treat the contact center as a generic call queue. KYC callbacks, collections, onboarding, and dispute handling each need different scripts, audit trails, and escalation paths. Manual routing creates both customer delay and compliance risk.",
      "We deploy contact center and Voice AI flows with intent-based routing, CRM logging, and supervisor dashboards so every conversation is attributable. Sensitive journeys stay with licensed agents; routine status and reminder calls can run through outbound Voice AI with clear handoff rules.",
      "Integrations back into core CRM, ticketing, and collections platforms keep the floor aligned with risk and operations — not a parallel spreadsheet of call notes.",
    ],
    services: ["Voice AI Agents", "Contact Center Solutions", "CRM & Workflow Integration"],
    icon: "fintech",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb: "AI receptionists and appointment automation for clinics and hospitals.",
    paragraphs: [
      "Clinics and hospital groups lose appointments on hold music and after-hours voicemail. Front desks juggle billing questions, reports, and walk-ins while the phone keeps ringing. Patients who cannot get through often do not call back.",
      "Advish puts AI receptionists on inbound lines to handle hours, directions, appointment booking, and common FAQs, then escalates clinical or billing issues to staff with full context. WhatsApp and SMS reminders cut no-shows without adding a coordinator for every location.",
      "CRM and scheduling integrations keep patient communication consistent across branches, so a call at one site is not invisible at another.",
    ],
    services: ["Voice AI Agents", "Chat & WhatsApp AI", "CRM & Workflow Integration"],
    icon: "health",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    blurb: "Multi-channel support bots and WhatsApp order automation.",
    paragraphs: [
      "Order status, COD confirmation, returns, and size questions flood WhatsApp and chat faster than a support team can type. Every delayed reply is a cancelled order or a public review. Catalog and warehouse systems rarely talk to the same inbox agents live in.",
      "We automate the high-volume journeys — tracking, FAQs, address updates, and cart recovery — on chat and WhatsApp, then route exceptions to humans with order context already loaded. CRM and helpdesk stay the source of truth for repeat buyers.",
      "When you need campaign landing pages or a customer portal, the same tech-build team ships them against the same data model, so marketing and support are not running two versions of the customer.",
    ],
    services: ["Chat & WhatsApp AI", "CRM & Workflow Integration", "Custom Tech Build"],
    icon: "commerce",
  },
  {
    slug: "logistics",
    name: "Logistics",
    blurb: "Dispatch communication, SMS updates, and field agent coordination.",
    paragraphs: [
      "Dispatchers spend the day on calls that should have been status messages: ETAs, POD requests, exception flags, and driver check-ins. When those conversations stay on personal phones, the control tower cannot see delay until a customer escalates.",
      "Advish automates outbound SMS and voice updates, captures inbound exceptions, and writes events into the systems operations already use. Field coordinators get a cleaner queue; customers get proactive communication instead of silence.",
      "We connect messaging to CRM or TMS workflows so a missed delivery is a tracked case, not a WhatsApp screenshot forwarded at 9 p.m.",
    ],
    services: ["Chat & WhatsApp AI", "Voice AI Agents", "CRM & Workflow Integration"],
    icon: "logistics",
  },
  {
    slug: "education",
    name: "Education",
    blurb: "Student inquiry bots, CRM tracking, and automated follow-up sequences.",
    paragraphs: [
      "Schools, universities, and edtech programmes take inquiries across forms, WhatsApp, and walk-ins. Counsellors cannot personally answer every fee, batch, and eligibility question in the first hour — which is when parents decide to look elsewhere.",
      "We deploy chat and Voice AI to qualify inquiries, book counselling slots, and drip programme information, while CRM tracks every student from lead to enrolment. Teams see which campuses or courses convert instead of arguing from inbox volume.",
      "Follow-up sequences keep warm applicants moving without relying on a counsellor remembering to send the next message after a campus event.",
    ],
    services: ["Chat & WhatsApp AI", "CRM & Workflow Integration", "Voice AI Agents"],
    icon: "education",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Advish replaced a patchwork of calling tools and spreadsheets with a CRM and Voice AI stack our regional managers actually trust. Follow-up no longer depends on who remembered to log the call.",
    name: "Priya Menon",
    title: "Head of Sales Operations",
    company: "Northline Realty",
    rating: 5,
  },
  {
    quote:
      "We needed WhatsApp order automation that wrote back into our helpdesk, not another bot that lived in isolation. Their team mapped the journeys, shipped in weeks, and stayed on to tune the flows.",
    name: "Rahul Desai",
    title: "Director of Customer Experience",
    company: "Kartwell Commerce",
    rating: 5,
  },
  {
    quote:
      "The contact center rollout came with dashboards, not a slide deck. We can see routing, handle time, and CRM completeness in the same place — which is what we asked for from day one.",
    name: "Ananya Rao",
    title: "VP, Operations",
    company: "Helix Financial Services",
    rating: 5,
  },
];

export const SERVICE_INTEREST_OPTIONS = [
  "Voice AI Agents",
  "Chat & WhatsApp AI",
  "CRM & Workflow Integration",
  "Custom Tech Build",
  "Cloud & Microsoft",
  "Contact Center",
  "Not Sure Yet",
  "Multiple Services",
] as const;

export const COMPANY_SIZE_OPTIONS = [
  "1–10",
  "11–50",
  "51–200",
  "200+ employees",
] as const;
