import type { PricingCardProps } from "@/components/ui/PricingCard";

export const pricingPackages: PricingCardProps[] = [
  {
    name: "Essential Inbox",
    price: "$349",
    period: "/month",
    description: "For businesses that need reliable email support coverage without a large team.",
    setup: "$100",
    extraHours: "$12/hour",
    recommended: false,
    features: [
      { text: "Up to 30 staffed hours/month", included: true },
      { text: "One channel (email or tickets)", included: true },
      { text: "Scheduled business-hour coverage", included: true },
      { text: "Response templates & escalation process", included: true },
      { text: "Monthly activity summary", included: true },
      { text: "Weekly quality checks", included: false },
      { text: "Monthly performance report", included: false },
      { text: "Dedicated agent", included: false },
    ],
  },
  {
    name: "Growth Care",
    price: "$699",
    period: "/month",
    description: "Our most popular plan for growing businesses managing multiple support channels.",
    setup: "$150",
    extraHours: "$12/hour",
    recommended: true,
    features: [
      { text: "Up to 60 staffed hours/month", included: true },
      { text: "Email + one additional channel (e.g. live chat)", included: true },
      { text: "Scheduled coverage & escalation", included: true },
      { text: "Shared support agent", included: true },
      { text: "Weekly internal quality checks", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Dedicated agent", included: false },
      { text: "Extended hours (quoted separately)", included: false },
    ],
  },
  {
    name: "Dedicated Care",
    price: "$1,499",
    period: "/month",
    description: "One dedicated agent, fully onboarded to your business and reporting regularly.",
    setup: "$200",
    extraHours: "Quoted separately",
    recommended: false,
    features: [
      { text: "One dedicated agent", included: true },
      { text: "Up to 160 hours/month", included: true },
      { text: "One or more agreed channels", included: true },
      { text: "Client-specific onboarding & training", included: true },
      { text: "Regular quality reviews", included: true },
      { text: "Weekly activity & issue reporting", included: true },
      { text: "Extended hours available", included: true },
      { text: "Custom workflow documentation", included: true },
    ],
  },
];

export interface StaffingRow {
  service: string;
  price: string;
}

export const staffingServices: StaffingRow[] = [
  { service: "Recruitment & screening", price: "$150–$300 per hire" },
  { service: "Onboarding support", price: "$100–$250 per hire" },
  { service: "Ongoing agent administration", price: "$150–$300 per agent/month" },
  { service: "Fully managed dedicated professional", price: "From $1,400/month" },
];

export interface AddOnRow {
  service: string;
  price: string;
}

export const addOns: AddOnRow[] = [
  { service: "Social inbox management", price: "$100–$200/month" },
  { service: "Phone support", price: "From $250/month" },
  { service: "Knowledge-base creation", price: "$150–$350" },
  { service: "SOP development", price: "$150–$400" },
  { service: "Weekend coverage", price: "From $150/month" },
  { service: "Additional hours", price: "$12–$15/hour" },
];
