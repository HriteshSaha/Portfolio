export const brand = {
  name: "Codewise Technologies",
  role: "Full-Stack Web Development",
  email: "hsworkmail.1@gmail.com",
  tagline: "Websites, web apps & AI-enabled products, built end to end.",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    index: "01",
    title: "Websites",
    description:
      "Corporate sites, landing pages, portfolios and SEO-friendly, CMS-backed builds — fast, responsive, and built to convert.",
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
      "Custom storefronts or Shopify / WooCommerce builds — catalogs, checkout, payments, inventory and shipping integrations.",
    tags: ["Custom storefronts", "Shopify", "WooCommerce"],
  },
  {
    index: "05",
    title: "APIs & Integrations",
    description:
      "REST APIs, webhooks and third-party integrations — payments, messaging, accounting, CRM and logistics providers.",
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

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
};

// Placeholder case studies — swap in real project names, links and screenshots.
export const projects: Project[] = [
  {
    title: "Client Portal & Billing Platform",
    category: "SaaS",
    description:
      "Multi-tenant subscription platform with org management, role-based dashboards and integrated billing.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Docker"],
  },
  {
    title: "Operations Management System",
    category: "Web Application",
    description:
      "Internal ERP-style tool for inventory, procurement and reporting across multiple warehouses.",
    tags: ["React", "Fastify", "MySQL", "Role-based access"],
  },
  {
    title: "AI-Assisted Support Desk",
    category: "AI Integration",
    description:
      "Ticketing system with an AI assistant that triages, drafts responses and extracts data from documents.",
    tags: ["Next.js", "Node.js", "AI APIs", "MongoDB"],
  },
  {
    title: "Storefront & Order Management",
    category: "E-Commerce",
    description:
      "Custom storefront with catalog, checkout and an admin panel for orders, stock and shipping.",
    tags: ["React", "Express", "PostgreSQL", "Payment gateway"],
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
    description: "Ship in small, working increments — frontend, backend and integrations in parallel.",
  },
  {
    step: "04",
    title: "Deploy & Support",
    description: "Production deployment, SSL, monitoring, and ongoing iteration after launch.",
  },
];
