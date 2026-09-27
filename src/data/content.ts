export const brand = {
  name: "Codewise Technologies",
  role: "Full-Stack Web Development",
  email: "hsworkmail.1@gmail.com",
  tagline: "Websites, web apps & AI-enabled products, built end to end.",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    index: "01",
    title: "Websites",
    description:
      "Corporate sites, landing pages, portfolios and SEO-friendly, CMS-backed builds fast, responsive, and built to convert.",
    tags: ["Marketing sites", "SEO", "CMS", "E-commerce fronts"],
  },
  {
    index: "02",
    title: "Web Applications",
    description:
      "Custom CRM, ERP, HR, inventory, ticketing and booking systems with roles, permissions, workflows and admin interfaces.",
    tags: ["CRM / ERP", "Booking & ticketing", "Internal tools"],
  },
  {
    index: "03",
    title: "SaaS Products",
    description:
      "From MVP to production: multi-tenant auth, subscriptions & billing, org/team management, and usage tracking.",
    tags: ["Multi-tenant", "Billing", "Admin panels"],
  },
  {
    index: "04",
    title: "E-Commerce",
    description:
      "Custom storefronts or Shopify / WooCommerce builds catalogs, checkout, payments, inventory and shipping integrations.",
    tags: ["Custom storefronts", "Shopify", "WooCommerce"],
  },
  {
    index: "05",
    title: "APIs & Integrations",
    description:
      "REST APIs, webhooks and third-party integrations payments, messaging, accounting, CRM and logistics providers.",
    tags: ["REST APIs", "Webhooks", "Payment gateways"],
  },
  {
    index: "06",
    title: "AI Integration",
    description:
      "Chatbots, document processing, data extraction, AI-powered search and workflow automation wired into real business data.",
    tags: ["AI chatbots", "Document processing", "Automation"],
  },
  {
    index: "07",
    title: "Dashboards & Admin",
    description:
      "Analytics dashboards with charts, tables, filters, exports and role-based access, connected to existing backends.",
    tags: ["Analytics", "Reporting", "Role management"],
  },
];

export const stack = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Fastify", "Express.js", "TypeScript", "REST APIs", "Webhooks", "Auth & authorization"],
  },
  {
    group: "CMS & Website Platforms",
    items: ["WordPress", "Shopify", "WooCommerce", "Custom CMS development", "CMS customization & integrations"],
  },
  {
    group: "Database & Infrastructure",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Nginx", "VPS / Cloud"],
  },
];

export const architecture = [
  { label: "Frontend", detail: "React / Next.js / TypeScript" },
  { label: "Backend", detail: "Node.js / Fastify / Express" },
  { label: "API & Business Logic", detail: "Auth, workflows, integrations" },
  { label: "Database", detail: "PostgreSQL / MySQL / MongoDB" },
  { label: "Infrastructure", detail: "Docker / Nginx / Linux / Cloud" },
];

export type MockupVariant = "dashboard" | "table" | "kanban" | "chat" | "cards";

export type CaseStudyImage =
  | { kind: "screenshot"; src: string; label: string }
  | { kind: "mockup"; variant: MockupVariant; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  domain: string;
  url?: string;
  tagline: string;
  problem: string;
  solution: string;
  tags: string[];
  images: CaseStudyImage[];
};

// Real project first (open by default) — the rest are placeholders. Swap in
// real names, links and screenshots as more case studies come in.
export const caseStudies: CaseStudy[] = [
  {
    slug: "gigmapro",
    name: "GigmaPro",
    category: "Marketplace",
    domain: "gigmapro.onrender.com",
    url: "https://gigmapro.onrender.com/",
    tagline: "A freelance marketplace connecting clients with freelancers.",
    problem:
      "Hiring freelance talent today is scattered across DMs, spreadsheets, and generic job boards that aren't built for bidding-based work clients struggle to compare proposals side-by-side, and freelancers lack a structured way to discover and pitch for relevant projects.",
    solution:
      "GigmaPro gives clients a dedicated space to post projects with budgets and required skills, lets freelancers browse and bid with a quotation and delivery timeline, and gives clients a clear comparison view to assign the right freelancer and move straight into a contract all in one workflow instead of piecing it together across tools.",
    tags: ["React", "Node.js", "MySQL", "Bidding workflow", "Auth"],
    images: [
      { kind: "screenshot", src: "/projects/gigmapro/home.png", label: "Landing page" },
      { kind: "screenshot", src: "/projects/gigmapro/login.png", label: "Login" },
      { kind: "screenshot", src: "/projects/gigmapro/client-dashboard.png", label: "Client dashboard" },
      { kind: "screenshot", src: "/projects/gigmapro/freelancer-dashboard.png", label: "Freelancer dashboard" },
      { kind: "screenshot", src: "/projects/gigmapro/find-work.png", label: "Browse projects" },
      { kind: "screenshot", src: "/projects/gigmapro/bid-detail.png", label: "Place a bid" },
    ],
  },
  {
    slug: "client-portal",
    name: "Client Portal & Billing Platform",
    category: "SaaS",
    domain: "portal.example.com",
    tagline: "Multi-tenant subscription platform with billing built in.",
    problem:
      "Growing SaaS teams often manage billing, plan changes and org access across a patchwork of spreadsheets and their payment provider's dashboard — clients have no self-serve view into their own subscription, seats or invoices.",
    solution:
      "A dedicated client portal that brings org management, role-based dashboards and subscription billing into one place, so account admins can manage their own team and plan without opening a support ticket.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Docker"],
    images: [
      { kind: "mockup", variant: "dashboard", label: "Billing overview" },
      { kind: "mockup", variant: "table", label: "Org & team management" },
      { kind: "mockup", variant: "cards", label: "Subscription plans" },
    ],
  },
  {
    slug: "operations",
    name: "Operations Management System",
    category: "Web Application",
    domain: "ops.example.com",
    tagline: "Internal ERP-style tool for inventory across multiple warehouses.",
    problem:
      "Inventory, procurement and reporting were split across spreadsheets and email threads per warehouse, so stock counts drifted out of sync and getting a company-wide picture meant manually stitching sheets together.",
    solution:
      "A single internal system that centralizes stock movement, procurement requests and cross-warehouse reporting, with role-based access so each site only sees and edits what's relevant to them.",
    tags: ["React", "Fastify", "MySQL", "Role-based access"],
    images: [
      { kind: "mockup", variant: "dashboard", label: "Inventory dashboard" },
      { kind: "mockup", variant: "kanban", label: "Procurement requests" },
      { kind: "mockup", variant: "table", label: "Warehouse reporting" },
    ],
  },
  {
    slug: "support-desk",
    name: "AI-Assisted Support Desk",
    category: "AI Integration",
    domain: "support.example.com",
    tagline: "Ticketing system with an AI layer that triages and drafts replies.",
    problem:
      "Support agents were spending most of their time on repetitive triage — sorting incoming tickets by topic and urgency, then digging through docs to answer the same handful of questions over and over.",
    solution:
      "An AI assistant wired into the ticketing system that auto-triages incoming tickets, drafts a suggested reply from existing documentation, and extracts key details from attachments — agents review and send instead of writing from scratch.",
    tags: ["Next.js", "Node.js", "AI APIs", "MongoDB"],
    images: [
      { kind: "mockup", variant: "table", label: "Ticket queue" },
      { kind: "mockup", variant: "chat", label: "AI draft response" },
      { kind: "mockup", variant: "dashboard", label: "Document extraction" },
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understand the goal, users and constraints before writing a line of code.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "Design the data model, API surface and infrastructure to fit the actual scale.",
  },
  {
    step: "03",
    title: "Build",
    description: "Ship in small, working increments frontend, backend and integrations in parallel.",
  },
  {
    step: "04",
    title: "Deploy & Support",
    description: "Production deployment, SSL, monitoring, and ongoing iteration after launch.",
  },
];
