import type { PricingCardProps } from "@/components/ui/PricingCard";

// ─────────────────────────────────────────────────────────────────────────────
// MANAGED CUSTOMER SUPPORT PACKAGES
// Prices reflect fully-loaded managed service (supervision, QA, reporting).
// Reviewed against cost model October 2026. Target gross margin: 38–50%.
// ─────────────────────────────────────────────────────────────────────────────
export const pricingPackages: PricingCardProps[] = [
  {
    name: "Starter",
    price: "$520",
    period: "/month",
    description:
      "For businesses that need dependable email or chat coverage without committing to a full-time arrangement.",
    setup: "$200",
    extraHours: "$16/hour",
    recommended: false,
    features: [
      { text: "40 staffed hours/month", included: true },
      { text: "One channel (email or live chat)", included: true },
      { text: "Agreed business-hour coverage window", included: true },
      { text: "Response templates & escalation process", included: true },
      { text: "Monthly activity summary", included: true },
      { text: "Weekly quality checks", included: false },
      { text: "Monthly performance report", included: false },
      { text: "Dedicated agent", included: false },
    ],
  },
  {
    name: "Growth",
    price: "$950",
    period: "/month",
    description:
      "Our most popular plan for growing businesses managing email and live chat, with full quality oversight.",
    setup: "Waived",
    extraHours: "$15/hour",
    recommended: true,
    features: [
      { text: "80 staffed hours/month", included: true },
      { text: "Email + live chat", included: true },
      { text: "Agreed coverage window & escalation", included: true },
      { text: "Dedicated agent", included: true },
      { text: "Weekly internal quality checks", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Phone support (add-on)", included: false },
      { text: "Extended hours (quoted separately)", included: false },
    ],
  },
  {
    name: "Dedicated",
    price: "$1,650",
    period: "/month",
    description:
      "One fully onboarded agent committed to your business. Maximum flexibility across channels and hours.",
    setup: "Waived",
    extraHours: "$14/hour",
    recommended: false,
    features: [
      { text: "One dedicated agent", included: true },
      { text: "Up to 160 hours/month", included: true },
      { text: "Agreed channels & coverage hours", included: true },
      { text: "Client-specific onboarding & training", included: true },
      { text: "Weekly quality reviews", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Extended hours available (quoted)", included: true },
      { text: "Workflow documentation included", included: true },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// REMOTE STAFFING RATE CARD
// ─────────────────────────────────────────────────────────────────────────────
export interface StaffingRow {
  role: string;
  rate: string;
  notes: string;
}

export const staffingRoles: StaffingRow[] = [
  {
    role: "Virtual assistant",
    rate: "From $9/hr",
    notes: "Email, calendar, admin, research",
  },
  {
    role: "Customer support agent",
    rate: "From $11/hr",
    notes: "Email and live chat, ticket management",
  },
  {
    role: "Phone support agent",
    rate: "From $12/hr",
    notes: "Inbound calls, booking, follow-ups",
  },
  {
    role: "Social media specialist",
    rate: "From $12/hr",
    notes: "Inbox, community, scheduling",
  },
  {
    role: "Executive assistant",
    rate: "From $15/hr",
    notes: "High-judgment coordination and communication",
  },
  {
    role: "Project coordinator",
    rate: "From $15/hr",
    notes: "Task management, workflow, reporting",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PLACEMENT FEES (recruitment-only model)
// ─────────────────────────────────────────────────────────────────────────────
export const placementFees = [
  { role: "General VA / administrative", fee: "$600–$800" },
  { role: "Customer support agent", fee: "$700–$950" },
  { role: "Phone support agent", fee: "$800–$1,100" },
  { role: "Executive assistant", fee: "$1,200–$1,800" },
  { role: "Project coordinator", fee: "$1,000–$1,500" },
];

// ─────────────────────────────────────────────────────────────────────────────
// ADD-ONS (managed service supplements)
// ─────────────────────────────────────────────────────────────────────────────
export interface AddOnRow {
  service: string;
  price: string;
}

export const addOns: AddOnRow[] = [
  { service: "Phone support (up to 40 hrs)", price: "$600/month" },
  { service: "Social inbox (1 platform)", price: "$350/month" },
  { service: "Social media — content scheduling (1 platform)", price: "$550/month" },
  { service: "Weekend coverage", price: "From $200/month" },
  { service: "Extended hours (evenings/US holidays)", price: "1.25× standard rate" },
  { service: "Knowledge-base creation", price: "$350–$600 one-time" },
  { service: "SOP / workflow documentation", price: "$500–$1,200 one-time" },
  { service: "CS process setup", price: "$600–$1,500 one-time" },
];

// ─────────────────────────────────────────────────────────────────────────────
// MULTI-SERVICE BUNDLES
// ─────────────────────────────────────────────────────────────────────────────
export interface Bundle {
  name: string;
  price: string;
  hours: string;
  setup: string;
  tagline: string;
  description: string;
  includes: string[];
  excludes: string[];
  idealFor: string;
}

export const bundles: Bundle[] = [
  {
    name: "Business Assistant Bundle",
    price: "$599",
    hours: "45 shared hours",
    setup: "$175 one-time",
    tagline: "Organised support for busy business owners.",
    description:
      "One dedicated professional handling your emails, calendar, admin, and routine operations. Hours are shared across all included tasks — not multiplied per service.",
    includes: [
      "Virtual assistance (email, calendar, scheduling)",
      "Administrative support (CRM updates, data entry, research)",
      "45 shared hours/month across both service types",
      "Monthly activity summary",
    ],
    excludes: [
      "Phone support",
      "Social media management",
      "Content creation",
      "Customer support (public-facing)",
    ],
    idealFor:
      "Solo founders, consultants, and small business owners who need organised daily support.",
  },
  {
    name: "Customer Experience Bundle",
    price: "$999",
    hours: "80 shared hours",
    setup: "$250 one-time",
    tagline: "One arrangement for your inbox, chat, and social.",
    description:
      "A consistent agent managing your email support, live chat, and one social inbox. All from one agreed coverage window, with weekly quality reviews.",
    includes: [
      "Email support",
      "Live chat during agreed hours",
      "Social inbox — one platform (DMs and comments only)",
      "80 shared hours/month",
      "Response templates written for your brand",
      "Weekly QA, monthly report",
    ],
    excludes: [
      "Phone support",
      "Content creation or graphic design",
      "Paid advertising",
      "Additional social platforms",
    ],
    idealFor:
      "E-commerce brands and SaaS businesses with regular inbound support volume.",
  },
  {
    name: "Dedicated Remote Professional",
    price: "$1,750",
    hours: "Up to 160 hours",
    setup: "$300 one-time",
    tagline: "A committed professional, embedded in your business.",
    description:
      "One dedicated professional working your agreed hours across customer support and administrative functions. Closest to an embedded team member without the HR overhead of a direct hire.",
    includes: [
      "One dedicated agent",
      "Customer support (email and/or chat)",
      "Administrative and back-office support",
      "Up to 160 hours/month, shared across functions",
      "Weekly QA review",
      "Monthly performance report",
      "15-day replacement guarantee",
    ],
    excludes: [
      "Phone support (available as add-on, +$200/month)",
      "Executive-level tasks",
      "Content creation or social media posting",
    ],
    idealFor:
      "Growing businesses that want one reliable professional handling both customer and operational work.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// LEGACY: keep for backward compatibility with pricing page table component
// ─────────────────────────────────────────────────────────────────────────────
export const staffingServices: { service: string; price: string }[] = [
  { service: "Placement fee — VA / administrative", price: "$600–$800 one-time" },
  { service: "Placement fee — customer support agent", price: "$700–$950 one-time" },
  { service: "Placement fee — executive assistant", price: "$1,200–$1,800 one-time" },
  { service: "HR admin (post-placement)", price: "$80–$150/month" },
  { service: "Performance check-in service", price: "$60/month" },
  { service: "Extended replacement guarantee (12 months)", price: "$150 one-time" },
];
