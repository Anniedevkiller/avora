"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useRevealChildren } from "@/lib/useReveal";
import { useReveal } from "@/lib/useReveal";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "We learn about your business, support volume, and what good service looks like for your customers. No commitment required.",
  },
  {
    number: "02",
    title: "Scope and agreement",
    description:
      "We document the service scope, working hours, escalation paths, and reporting cadence in a clear written agreement before anything starts.",
  },
  {
    number: "03",
    title: "Onboarding",
    description:
      "We learn your products, systems, and brand voice. Response templates and workflows are documented and approved before we handle any customer contact.",
  },
  {
    number: "04",
    title: "Ongoing service",
    description:
      "We handle agreed interactions, run weekly quality reviews, and share regular reporting. If anything needs to change, we adjust together.",
  },
];

export function HowItWorks() {
  const headingRef = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const stepsRef = useRevealChildren<HTMLDivElement>({ threshold: 0.05 });

  return (
    <Section background="mist" id="how-it-works">
      <Container>
        {/* Heading */}
        <div ref={headingRef} className="reveal mb-14 max-w-xl">
          <p className="label-tag">How it works</p>
          <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
            A predictable process from day one.
          </h2>
          <p className="mt-4 text-base text-[#3a5068]">
            We define expectations before work starts and review performance
            regularly throughout the engagement.
          </p>
        </div>

        {/* Steps grid */}
        <div ref={stepsRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col`}
            >
              {/* Connector line between steps (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-6 left-full z-0 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-mist-dark to-transparent lg:block"
                  aria-hidden="true"
                />
              )}

              {/* Step number badge */}
              <div
                className="step-badge relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal-500 bg-white font-heading text-sm font-bold text-teal-500 transition-colors duration-200 group-hover:bg-teal-500 group-hover:text-white"
                aria-hidden="true"
              >
                {step.number}
              </div>

              <h3 className="mb-2 font-heading text-lg font-bold text-navy-500 transition-colors duration-200 group-hover:text-teal-600">
                {step.title}
              </h3>
              <p className="text-sm text-[#3a5068] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
