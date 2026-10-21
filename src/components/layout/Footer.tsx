import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import Link from "next/link";

function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group w-fit">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#1AA6A0" />
        <path
          d="M8 10C8 9.44772 8.44772 9 9 9H23C23.5523 9 24 9.44772 24 10V19C24 19.5523 23.5523 20 23 20H14L10 24V20H9C8.44772 20 8 19.5523 8 19V10Z"
          fill="#14263D"
          opacity="0.9"
        />
        <circle cx="12" cy="14.5" r="1.5" fill="#1AA6A0" />
        <circle cx="16" cy="14.5" r="1.5" fill="#1AA6A0" />
        <circle cx="20" cy="14.5" r="1.5" fill="#1AA6A0" />
      </svg>
      <span className="font-heading text-base font-bold text-white group-hover:text-teal-300 transition-colors duration-150">
        {siteConfig.name}
      </span>
    </Link>
  );
}

const footerNav = [
  {
    heading: "Services",
    links: [
      { label: "Managed Customer Support", href: "/services#managed-support" },
      { label: "Remote Staffing", href: "/services#remote-staffing" },
      { label: "Virtual Assistance", href: "/services#virtual-assistance" },
      { label: "CX Operations", href: "/services#cx-operations" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Industries", href: "/industries" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Book a Discovery Call", href: "/book" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

// Next.js 16 detects unstable `new Date()` during static prerendering.
// Using a build-time constant keeps the footer copyright year static until next deploy.
const CURRENT_YEAR = 2026;

export function Footer() {

  return (
    <footer className="bg-navy-500 text-white/80">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <FooterLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <SocialLinks theme="light" className="mt-6" iconSize={18} />
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            &copy; {CURRENT_YEAR} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
