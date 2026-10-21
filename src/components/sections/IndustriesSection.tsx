"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useReveal } from "@/lib/useReveal";
import { useRevealChildren } from "@/lib/useReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    name: "E-commerce",
    detail: "Order status, returns, shipping updates, product questions.",
    href: "/industries#ecommerce",
  },
  {
    name: "SaaS & startups",
    detail: "Account queries, bug triage, onboarding support.",
    href: "/industries#saas",
  },
  {
    name: "Professional services",
    detail: "Client communication, appointment scheduling, CRM admin.",
    href: "/industries#professional-services",
  },
  {
    name: "Online education",
    detail: "Course access, enrolment, learner support.",
    href: "/industries#online-education",
  },
];

export function IndustriesSection() {
  const headingRef = useReveal<HTMLDivElement>();
  const listRef = useRevealChildren<HTMLDivElement>();

  return (
    <Section background="mist" id="industries">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Heading */}
          <div ref={headingRef} className="reveal">
            <p className="label-tag">Industries</p>
            <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
              We focus where we can genuinely help.
            </h2>
            <p className="mt-4 text-base text-[#3a5068] leading-relaxed">
              Avora Support works with businesses in a small set of sectors
              where organised remote support makes a material difference.
            </p>
            <Link
              href="/industries"
              className="btn-arrow mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors duration-150"
            >
              <span className="underline-link">See all industry details</span>
              <span className="arrow-icon"><ArrowRight size={14} aria-hidden="true" /></span>
            </Link>
          </div>

          {/* Industry rows */}
          <div ref={listRef} className="flex flex-col divide-y divide-mist-dark overflow-hidden rounded-lg border border-mist-dark bg-white">
            {industries.map((ind, i) => (
              <Link
                key={ind.name}
                href={ind.href}
                className={`reveal reveal-delay-${i + 1} industry-row flex items-center justify-between gap-4 px-6 py-5 no-underline transition-colors duration-150 hover:bg-mist-grey group`}
              >
                <div>
                  <p className="font-semibold text-navy-500 transition-colors duration-150 group-hover:text-teal-600">
                    {ind.name}
                  </p>
                  <p className="mt-0.5 text-sm text-[#6b8ea8]">{ind.detail}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-mist-dark transition-all duration-150 group-hover:text-teal-500 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
