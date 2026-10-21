"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pricingPackages } from "@/data/pricing";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/useReveal";

export function PricingPreview() {
  const headingRef = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const tableRef = useReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <Section background="mist" id="pricing">
      <Container>
        <div ref={headingRef} className="reveal mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="label-tag">Pricing</p>
            <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
              Flexible support. Clear pricing.
            </h2>
            <p className="mt-3 text-base text-[#3a5068]">
              Three packages, billed monthly in USD. No hidden fees.
            </p>
          </div>
          <Link
            href="/pricing"
            className="btn-arrow inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors duration-150 shrink-0"
          >
            <span className="underline-link">Full pricing details</span>
            <span className="arrow-icon"><ArrowRight size={14} aria-hidden="true" /></span>
          </Link>
        </div>

        {/* Compact pricing table */}
        <div ref={tableRef} className="reveal overflow-x-auto rounded-lg border border-mist-dark bg-white shadow-subtle">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-mist-dark">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">
                  Package
                </th>
                {pricingPackages.map((pkg) => (
                  <th
                    key={pkg.name}
                    className={cn(
                      "px-6 py-4 text-center text-sm font-bold text-navy-500",
                      pkg.recommended && "text-teal-600"
                    )}
                  >
                    {pkg.name}
                    {pkg.recommended && (
                      <span className="ml-2 rounded-full bg-teal-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                        Best value
                      </span>
                    )}
                  </th>
                ))}
              </tr>
              <tr className="border-b border-mist-dark bg-mist-grey/40">
                <td className="px-6 py-3 text-xs text-[#6b8ea8]">Monthly price</td>
                {pricingPackages.map((pkg) => (
                  <td
                    key={pkg.name}
                    className={cn(
                      "px-6 py-3 text-center font-bold",
                      pkg.recommended ? "text-teal-500 text-lg" : "text-navy-500"
                    )}
                  >
                    {pkg.price}
                    <span className="text-xs font-normal text-[#6b8ea8]">/mo</span>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-mist-grey">
              {pricingPackages[0].features.slice(0, 5).map((_, rowIdx) => (
                <tr key={rowIdx} className="pricing-row">
                  <td className="px-6 py-3.5 text-[#3a5068]">
                    {pricingPackages[0].features[rowIdx].text}
                  </td>
                  {pricingPackages.map((pkg) => (
                    <td key={pkg.name} className="px-6 py-3.5 text-center">
                      {pkg.features[rowIdx]?.included ? (
                        <Check
                          size={16}
                          className="mx-auto text-teal-500"
                          aria-label="Included"
                        />
                      ) : (
                        <span className="text-[#D0DBE5]" aria-label="Not included">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#6b8ea8]">
            Not sure which plan fits?{" "}
            <Link href="/book" className="font-semibold text-teal-500 underline-link">
              Book a discovery call.
            </Link>
          </p>
          <Link
            href="/pricing"
            className="btn-arrow inline-flex items-center gap-1.5 rounded border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-500 hover:bg-mist-grey hover:border-mist-dark transition-colors duration-150 min-h-[44px]"
          >
            Compare all features
            <span className="arrow-icon"><ArrowRight size={14} aria-hidden="true" /></span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
