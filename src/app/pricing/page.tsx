import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PricingCard } from "@/components/ui/PricingCard";
import { CTABand } from "@/components/layout/CTABand";
import { pricingPackages, staffingServices, addOns } from "@/data/pricing";
import Link from "next/link";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear, flexible pricing for Managed Customer Support and Remote Staffing. Three packages from $349/month. No hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pb-0">
        <Container>
          <div className="border-b border-mist-dark pb-16 md:pb-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-500">
              Pricing
            </p>
            <h1 className="font-heading text-4xl font-bold text-navy-500 md:text-5xl max-w-2xl">
              Flexible support. Clear pricing.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[#3a5068]">
              All packages are billed monthly in USD. Setup fees are one-time.
              Everything is agreed in writing before the engagement starts.
            </p>
          </div>
        </Container>
      </Section>

      {/* Managed support packages */}
      <Section background="white" id="managed-support">
        <Container>
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-navy-500">
              Managed Customer Support
            </h2>
            <p className="mt-2 text-[#3a5068]">Monthly packages. Cancel or adjust with notice.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>

          {/* Important note */}
          <div className="mt-8 flex gap-3 rounded-lg border border-mist-dark bg-mist-grey p-5">
            <Info size={18} className="mt-0.5 shrink-0 text-[#6b8ea8]" aria-hidden="true" />
            <p className="text-sm text-[#3a5068]">
              Hours are staffed delivery time, not a guaranteed number of tickets or resolutions.
              Response targets, opening hours and ticket volume assumptions are agreed in each
              contract.
            </p>
          </div>
        </Container>
      </Section>

      {/* Staffing services */}
      <Section background="mist" id="remote-staffing">
        <Container>
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-navy-500">
              Remote Staffing
            </h2>
            <p className="mt-2 text-[#3a5068]">
              Recruitment, onboarding and ongoing administration of remote professionals.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-mist-dark bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-mist-dark">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">
                    Service
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">
                    Price (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist-grey">
                {staffingServices.map((row) => (
                  <tr key={row.service} className="hover:bg-mist-grey/30 transition-colors">
                    <td className="px-6 py-4 text-[#3a5068]">{row.service}</td>
                    <td className="px-6 py-4 text-right font-semibold text-navy-500">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Add-ons */}
      <Section background="white" id="add-ons">
        <Container>
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-navy-500">Add-ons</h2>
            <p className="mt-2 text-[#3a5068]">
              Available as supplements to any managed support package.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-mist-dark bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-mist-dark">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">
                    Add-on
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">
                    Price (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist-grey">
                {addOns.map((row) => (
                  <tr key={row.service} className="hover:bg-mist-grey/30 transition-colors">
                    <td className="px-6 py-4 text-[#3a5068]">{row.service}</td>
                    <td className="px-6 py-4 text-right font-semibold text-navy-500">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-[#6b8ea8]">
            Not sure which plan fits?{" "}
            <Link href="/book" className="font-semibold text-teal-500 hover:underline">
              Book a discovery call.
            </Link>
          </p>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
