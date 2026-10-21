"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

interface CTABandProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABand({
  headline = "Ready to give your customers better support?",
  subtext = "Tell us about your business. We'll recommend the right service and talk through how we can help.",
  primaryLabel = "Book a Discovery Call",
  primaryHref = "/book",
  secondaryLabel = "See pricing",
  secondaryHref = "/pricing",
}: CTABandProps) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="bg-navy-500 py-16 md:py-20 overflow-hidden">
      <Container>
        <div ref={ref} className="reveal flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            {/* Teal accent dash */}
            <div className="mb-4 h-0.5 w-8 rounded bg-teal-500" aria-hidden="true" />
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              {headline}
            </h2>
            <p className="mt-3 text-base text-white/70">{subtext}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="btn-arrow inline-flex items-center justify-center gap-2 rounded bg-teal-500 px-6 py-3 text-base font-semibold text-navy-500 hover:bg-teal-400 transition-colors duration-150 min-h-[44px] whitespace-nowrap"
            >
              {primaryLabel}
              <span className="arrow-icon"><ArrowRight size={16} aria-hidden="true" /></span>
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-colors duration-150 min-h-[44px] whitespace-nowrap"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
