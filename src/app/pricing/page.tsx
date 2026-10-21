import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/layout/CTABand";
import { RevealGrid } from "@/components/ui/RevealGrid";
import { pricingPackages, staffingRoles, addOns, bundles } from "@/data/pricing";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Pricing — ${siteConfig.name}`,
  description:
    "Transparent, USD-denominated pricing for managed customer support, virtual assistance, phone support, social media management, and remote staffing.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="label-tag label-tag-instant mb-4">{children}</p>
  );
}

function PriceNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-sm text-[#6b8ea8]">{children}</p>
  );
}

// ─── Service rate table ───────────────────────────────────────────────────────
interface RateRow {
  label: string;
  h20: string;
  h40: string;
  h80: string;
  h160: string;
  overage: string;
  setup: string;
}

const serviceRates: RateRow[] = [
  {
    label: "Virtual Assistance",
    h20: "$240",
    h40: "$450",
    h80: "$850",
    h160: "$1,550",
    overage: "$14/hr",
    setup: "$150",
  },
  {
    label: "Customer Support (email/chat)",
    h20: "$280",
    h40: "$520",
    h80: "$950",
    h160: "$1,650",
    overage: "$16/hr",
    setup: "$200",
  },
  {
    label: "Phone Support",
    h20: "$320",
    h40: "$600",
    h80: "$1,100",
    h160: "$1,750",
    overage: "$18/hr",
    setup: "$250",
  },
  {
    label: "Back-Office / Admin",
    h20: "$220",
    h40: "$420",
    h80: "$750",
    h160: "$1,300",
    overage: "$13/hr",
    setup: "$100",
  },
  {
    label: "Executive Assistant",
    h20: "—",
    h40: "$650",
    h80: "$1,200",
    h160: "$1,900",
    overage: "$20/hr",
    setup: "$200",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Section background="mist" className="pt-28 pb-16">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="font-heading text-4xl font-bold text-navy-500 md:text-5xl">
              Flexible support. Clear pricing.
            </h1>
            <p className="mt-5 text-lg text-[#3a5068] leading-relaxed">
              All prices are in USD, billed monthly in advance. Scope, hours,
              and working arrangements are agreed in writing before any
              engagement begins. There are no hidden fees.
            </p>
            <p className="mt-3 text-sm text-[#6b8ea8]">
              Not sure which option fits your business?{" "}
              <Link href="/book" className="font-semibold text-teal-500 underline-link">
                Book a free discovery call.
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Managed support packages ─────────────────────────────────────── */}
      <Section background="white" id="managed-support">
        <Container>
          <div className="mb-10">
            <SectionLabel>Managed customer support</SectionLabel>
            <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
              We manage quality. You focus on your business.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#3a5068]">
              Avora recruits, trains, supervises, and quality-reviews your
              support team. These packages cover email and live chat. Phone
              support and social inbox are available as add-ons or in bundles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  "card-lift flex flex-col rounded-lg border p-7",
                  pkg.recommended
                    ? "border-teal-500 bg-navy-500 text-white"
                    : "border-mist-dark bg-white"
                )}
              >
                {pkg.recommended && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-teal-500 px-3 py-1 text-xs font-bold text-navy-500">
                    Most popular
                  </span>
                )}
                <h3 className={cn("font-heading text-xl font-bold", pkg.recommended ? "text-white" : "text-navy-500")}>
                  {pkg.name}
                </h3>
                <p className={cn("mt-1 text-sm leading-relaxed", pkg.recommended ? "text-white/70" : "text-[#3a5068]")}>
                  {pkg.description}
                </p>
                <div className="my-6">
                  <span className={cn("font-heading text-4xl font-bold", pkg.recommended ? "text-white" : "text-navy-500")}>
                    {pkg.price}
                  </span>
                  <span className={cn("text-sm", pkg.recommended ? "text-white/60" : "text-[#6b8ea8]")}>
                    {pkg.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <Check size={15} className={cn("mt-0.5 shrink-0", pkg.recommended ? "text-teal-300" : "text-teal-500")} aria-hidden="true" />
                      ) : (
                        <X size={15} className={cn("mt-0.5 shrink-0 opacity-30", pkg.recommended ? "text-white" : "text-navy-500")} aria-hidden="true" />
                      )}
                      <span className={cn(f.included ? "" : "opacity-40", pkg.recommended ? "text-white" : "text-[#3a5068]")}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={cn("mt-auto space-y-1 border-t pt-5 text-xs", pkg.recommended ? "border-white/15 text-white/50" : "border-mist-dark text-[#6b8ea8]")}>
                  <p>Setup fee: <span className="font-semibold">{pkg.setup}</span></p>
                  <p>Overage: <span className="font-semibold">{pkg.extraHours}</span></p>
                  <p>Minimum term: <span className="font-semibold">3 months</span></p>
                </div>

                <Link
                  href="/book"
                  className={cn(
                    "btn-arrow mt-6 inline-flex items-center justify-center gap-2 rounded py-3 text-sm font-semibold transition-colors duration-150 min-h-[44px]",
                    pkg.recommended
                      ? "bg-teal-500 text-navy-500 hover:bg-teal-400"
                      : "border border-navy-200 text-navy-500 hover:bg-mist-grey"
                  )}
                >
                  Book a discovery call
                  <span className="arrow-icon"><ArrowRight size={14} aria-hidden="true" /></span>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Full service rate table ───────────────────────────────────────── */}
      <Section background="mist" id="service-rates">
        <Container>
          <div className="mb-10">
            <SectionLabel>All service rates</SectionLabel>
            <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
              Every service, every package.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#3a5068]">
              Choose the service type and the hours that match your volume. Setup
              fees are one-time and waived on Growth and Dedicated plans.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-mist-dark bg-white shadow-subtle">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-mist-dark bg-mist-grey/40">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">Service</th>
                  <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">20 hrs</th>
                  <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">40 hrs</th>
                  <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#6b8ea8] bg-teal-50/60">80 hrs</th>
                  <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">160 hrs</th>
                  <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">Overage</th>
                  <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">Setup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist-grey">
                {serviceRates.map((row) => (
                  <tr key={row.label} className="pricing-row">
                    <td className="px-6 py-4 font-semibold text-navy-500">{row.label}</td>
                    <td className="px-4 py-4 text-center text-[#3a5068]">{row.h20}</td>
                    <td className="px-4 py-4 text-center text-[#3a5068]">{row.h40}</td>
                    <td className="px-4 py-4 text-center font-semibold text-teal-600 bg-teal-50/30">{row.h80}</td>
                    <td className="px-4 py-4 text-center text-[#3a5068]">{row.h160}</td>
                    <td className="px-4 py-4 text-center text-[#6b8ea8]">{row.overage}</td>
                    <td className="px-4 py-4 text-center text-[#6b8ea8]">{row.setup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-[#6b8ea8]">
            80-hour column highlighted as the most common starting point. Executive Assistant is not offered at 20 hours.
            Social media management is priced by platform — see below. Phone support includes telephony platform and number provisioning.
            Setup fees are waived for 80-hour and 160-hour plans.
          </p>
        </Container>
      </Section>

      {/* ── Social media ─────────────────────────────────────────────────── */}
      <Section background="white" id="social-media">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel>Social media & community</SectionLabel>
              <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
                Priced by platform and scope.
              </h2>
              <p className="mt-4 text-base text-[#3a5068] leading-relaxed">
                Base packages cover DMs, comments, inbox management, and basic
                scheduling. Content creation, graphic design, video editing, and
                paid advertising management are available as separately quoted
                add-ons.
              </p>
              <p className="mt-4 text-sm text-[#6b8ea8]">
                Setup fee: $150–$200 one-time. Minimum 3-month term.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { name: "Starter", platforms: "1 platform", scope: "DMs, comments & inbox only", price: "$350", setup: "$150" },
                { name: "Standard", platforms: "2 platforms", scope: "Inbox management + basic scheduling", price: "$550", setup: "$200" },
                { name: "Growth", platforms: "3 platforms", scope: "Full inbox + scheduling + moderation", price: "$750", setup: "$200" },
              ].map((plan) => (
                <div key={plan.name} className="card-accent flex items-center justify-between gap-6 rounded-lg border border-mist-dark bg-white px-6 py-5">
                  <div>
                    <p className="font-semibold text-navy-500">{plan.name} — {plan.platforms}</p>
                    <p className="mt-0.5 text-sm text-[#6b8ea8]">{plan.scope}</p>
                  </div>
                  <p className="shrink-0 font-heading text-xl font-bold text-teal-500">{plan.price}<span className="text-xs font-normal text-[#6b8ea8]">/mo</span></p>
                </div>
              ))}
              <p className="text-xs text-[#6b8ea8] px-1">
                Content creation, graphic design, video editing, and paid ad management are quoted separately.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Bundles ───────────────────────────────────────────────────────── */}
      <Section background="mist" id="bundles">
        <Container>
          <div className="mb-10">
            <SectionLabel>Multi-service bundles</SectionLabel>
            <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
              More than one service? Start here.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#3a5068]">
              Bundles combine services under a single monthly fee. Hours are
              shared across all included services — they are not multiplied per
              service. Additional hours are billed at the stated overage rate.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {bundles.map((bundle) => (
              <div key={bundle.name} className="card-lift flex flex-col rounded-lg border border-mist-dark bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">{bundle.hours}</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-navy-500">{bundle.name}</h3>
                <p className="mt-1 text-sm text-[#6b8ea8] italic">{bundle.tagline}</p>
                <p className="mt-3 text-sm text-[#3a5068] leading-relaxed">{bundle.description}</p>

                <div className="my-5">
                  <span className="font-heading text-3xl font-bold text-navy-500">{bundle.price}</span>
                  <span className="text-sm text-[#6b8ea8]">/month</span>
                  <p className="mt-1 text-xs text-[#6b8ea8]">Setup: {bundle.setup} · Minimum 3 months</p>
                </div>

                <ul className="mb-5 flex flex-col gap-2 border-t border-mist-dark pt-5">
                  {bundle.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#3a5068]">
                      <Check size={14} className="mt-0.5 shrink-0 text-teal-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b8ea8]">Not included</p>
                  <ul className="flex flex-col gap-1">
                    {bundle.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[#6b8ea8]">
                        <X size={12} className="mt-0.5 shrink-0 opacity-40" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/book" className="btn-arrow mt-6 inline-flex items-center justify-center gap-2 rounded border border-navy-200 py-3 text-sm font-semibold text-navy-500 hover:bg-mist-grey transition-colors duration-150 min-h-[44px]">
                  Book a discovery call
                  <span className="arrow-icon"><ArrowRight size={14} aria-hidden="true" /></span>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Remote staffing ───────────────────────────────────────────────── */}
      <Section background="white" id="remote-staffing">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <SectionLabel>Remote staffing</SectionLabel>
              <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
                Your team. Our recruitment and administration.
              </h2>
              <p className="mt-4 text-base text-[#3a5068] leading-relaxed">
                We source, screen, and onboard the right professional for your
                team. You manage day-to-day work. We handle HR administration,
                performance monitoring, and provide a replacement guarantee.
              </p>
              <p className="mt-4 text-sm text-[#3a5068]">
                A one-time placement fee applies per hire, plus an optional
                monthly administration fee if you want us to remain involved.
              </p>
              <Link href="/book" className="btn-arrow mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors duration-150">
                <span className="underline-link">Talk to us about staffing</span>
                <span className="arrow-icon"><ArrowRight size={14} aria-hidden="true" /></span>
              </Link>
            </div>

            <div className="overflow-hidden rounded-lg border border-mist-dark bg-white">
              <div className="border-b border-mist-dark bg-mist-grey/40 px-6 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">Dedicated staffing — monthly rate</p>
              </div>
              {staffingRoles.map((row) => (
                <div key={row.role} className="industry-row flex items-center justify-between gap-4 border-b border-mist-grey px-6 py-4 last:border-b-0">
                  <div>
                    <p className="font-semibold text-navy-500">{row.role}</p>
                    <p className="text-sm text-[#6b8ea8]">{row.notes}</p>
                  </div>
                  <p className="shrink-0 font-semibold text-teal-500">{row.rate}</p>
                </div>
              ))}
              <div className="bg-mist-grey/30 px-6 py-3">
                <p className="text-xs text-[#6b8ea8]">
                  Rates are for the dedicated staffing model. One-time placement fee applies. Contact us for the full rate card.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Add-ons ───────────────────────────────────────────────────────── */}
      <Section background="mist" id="add-ons">
        <Container>
          <div className="mb-10">
            <SectionLabel>Add-ons</SectionLabel>
            <h2 className="font-heading text-3xl font-bold text-navy-500">
              Supplement any package.
            </h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-mist-dark bg-white">
            {addOns.map((addon, i) => (
              <div
                key={addon.service}
                className={cn(
                  "pricing-row flex items-center justify-between gap-6 px-6 py-4",
                  i < addOns.length - 1 && "border-b border-mist-grey"
                )}
              >
                <p className="text-navy-500">{addon.service}</p>
                <p className="shrink-0 font-semibold text-teal-500">{addon.price}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Pricing FAQs ─────────────────────────────────────────────────── */}
      <Section background="white" id="pricing-faq">
        <Container>
          <RevealGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                q: "Do unused hours roll over?",
                a: "No. Hours are allocated to a specific calendar month and do not carry forward. This allows us to plan staffing properly.",
              },
              {
                q: "What happens if I need more hours?",
                a: "Overage hours are billed at the stated rate at the end of the month. We ask clients to pre-approve overages above 10 hours to avoid surprises.",
              },
              {
                q: "Is there a minimum term?",
                a: "All packages require a 3-month minimum. After that, 30 days' written notice to cancel. This allows us to hire and train properly.",
              },
              {
                q: "What does the setup fee cover?",
                a: "Agent onboarding, response template creation, escalation process documentation, and system access configuration — all before the first day of service.",
              },
              {
                q: "What are my responsibilities?",
                a: "You provide access to your systems, designate a point of contact, and respond to escalations within one business day. We handle everything else in scope.",
              },
              {
                q: "Can I change my package?",
                a: "Yes. Upgrades take effect on the next billing date. Downgrades apply at renewal after the minimum term. Scope changes require a written change order.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="reveal">
                <h3 className="mb-2 font-heading text-base font-bold text-navy-500">{q}</h3>
                <p className="text-sm text-[#3a5068] leading-relaxed">{a}</p>
              </div>
            ))}
          </RevealGrid>
        </Container>
      </Section>


      <CTABand
        headline="Not sure which plan is right for you?"
        subtext="Tell us about your business and we'll recommend the right service. No commitment required."
        primaryLabel="Book a Discovery Call"
        primaryHref="/book"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </>
  );
}
