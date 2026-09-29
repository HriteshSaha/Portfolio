export const brand = {
  name: "Codewise Technologies",
  role: "Full-Stack Web Development",
  email: "hsworkmail.1@gmail.com",
  tagline: "Websites, web apps & AI-enabled products, built end to end.",
};

export const nav = [
  { label: "What we do", href: "services" },
  { label: "Tools we use", href: "stack" },
  { label: "Our work", href: "work" },
  { label: "How we work", href: "process" },
  { label: "Contact us", href: "contact" },
];

export const services = [
  {
    index: "01",
    title: "Websites",
    description:
      "Business websites, landing pages, and portfolios that look great, load fast, and help you get more customers.",
    tags: ["Business websites", "Landing pages", "Portfolios", "Online stores"],
  },
  {
    index: "02",
    title: "Web Applications",
    description:
      "Custom online tools to manage customers, staff, inventory, bookings, and support tickets — with secure logins and easy-to-use dashboards.",
    tags: ["Customer management", "Booking systems", "Staff tools"],
  },
  {
    index: "03",
    title: "SaaS Products",
    description:
      "Subscription-based software products with user accounts, payments, team management, and usage tracking — ready to launch and grow.",
    tags: ["Subscriptions", "Payments", "Admin panels"],
  },
  {
    index: "04",
    title: "E-Commerce",
    description:
      "Online stores with product listings, payments, inventory, and shipping — custom-built or on Shopify and WooCommerce.",
    tags: ["Custom storefronts", "Shopify", "WooCommerce"],
  },
  {
    index: "05",
    title: "Connections & Integrations",
    description:
      "Connect your website or app to other services — payments, messaging, accounting, CRM, and shipping.",
    tags: ["Payments", "Messaging", "Accounting"],
  },
  {
    index: "06",
    title: "AI Tools",
    description:
      "AI chatbots, smart search, and automation that read documents and handle repetitive tasks — connected to your real business data.",
    tags: ["AI chatbots", "Document processing", "Automation"],
  },
  {
    index: "07",
    title: "Dashboards & Reports",
    description:
      "Reports and dashboards with charts, filters, and exports — so you can see how your business is doing and control who sees what.",
    tags: ["Reports", "Charts", "Access control"],
  },
];

export const stack = [
  {
    group: "What users see",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    group: "Behind the scenes",
    items: ["Node.js", "Fastify", "Express.js", "TypeScript", "REST APIs", "Webhooks", "Auth & authorization"],
  },
  {
    group: "Website platforms",
    items: ["WordPress", "Shopify", "WooCommerce", "Custom CMS development", "CMS customization & integrations"],
  },
  {
    group: "Data & hosting",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Nginx", "VPS / Cloud"],
  },
];

export const architecture = [
  { label: "What users see", detail: "React / Next.js / TypeScript" },
  { label: "Behind the scenes", detail: "Node.js / Fastify / Express" },
  { label: "How it works", detail: "Auth, workflows, integrations" },
  { label: "Where data is stored", detail: "PostgreSQL / MySQL / MongoDB" },
  { label: "Where it runs", detail: "Docker / Nginx / Linux / Cloud" },
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
    tags: ["React", "Node.js", "MySQL", "Bidding system", "Secure login"],
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
    description: "We learn about your goals, your users, and what you need.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "We plan the best way to build it — so it's simple, secure, and ready to grow.",
  },
  {
    step: "03",
    title: "Build",
    description: "We build in stages and show you progress along the way.",
  },
  {
    step: "04",
    title: "Deploy & Support",
    description: "We launch your site, make sure it's secure, and keep improving it after it's live.",
  },
];
