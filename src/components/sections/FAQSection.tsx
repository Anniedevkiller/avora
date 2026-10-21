"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";
import Link from "next/link";
import { useReveal } from "@/lib/useReveal";

export function FAQSection() {
  const headingRef = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const accordionRef = useReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <Section background="white" id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Left: heading */}
          <div ref={headingRef} className="reveal">
            <p className="label-tag">FAQ</p>
            <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
              Common questions.
            </h2>
            <p className="mt-4 text-base text-[#3a5068]">
              If something is not covered here, ask us directly.
            </p>
            <Link
              href="/contact"
              className="btn-arrow mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors duration-150"
            >
              <span className="underline-link">Contact us</span>
              <span className="arrow-icon">→</span>
            </Link>
          </div>

          {/* Right: accordion */}
          <div ref={accordionRef} className="reveal reveal-delay-1">
            <Accordion items={faqItems} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
