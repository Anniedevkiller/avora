// ─────────────────────────────────────────────────────────────────────────────
// Site configuration — single source of truth for brand name, URLs & contacts.
// Update this file when the trademark clears or contact details change.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Avora Support",
  tagline: "Great service. Thoughtfully delivered.",
  secondaryLine: "Your customers. Our care.",
  description:
    "Avora Support is a remote customer support and staffing company helping US small businesses, e-commerce brands and SaaS startups manage customer conversations and build remote support teams.",
  url: "https://avorasupport.com", // Update when domain is live

  // Contact details
  email: "hello@avorasupport.com",    // Update with real address
  supportEmail: "support@avorasupport.com", // Update with real address

  // Email sending config (used in route handlers, must match .env)
  fromEmail: process.env.FROM_EMAIL ?? "Avora Support <hello@avorasupport.com>",
  contactEmail: process.env.CONTACT_EMAIL ?? "hello@avorasupport.com",

  // Social media — replace # with real profile URLs
  social: {
    linkedin: "https://linkedin.com/company/avorasupport",
    instagram: "https://instagram.com/avorasupport",
    twitter: "https://x.com/avorasupport",
    email: "mailto:hello@avorasupport.com",
  },

  // Calendly or similar booking embed URL — replace with real link
  bookingUrl: "https://calendly.com/avorasupport/discovery",

  // Navigation links (used in Header and Footer)
  navLinks: [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
  ],

  // Open Graph defaults
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Avora Support",
  },
} as const;

export type SiteConfig = typeof siteConfig;
