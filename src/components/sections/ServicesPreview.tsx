"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useRevealChildren } from "@/lib/useReveal";
import { useReveal } from "@/lib/useReveal";
import { Headphones, Users, LayoutList, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Headphones,
    title: "Managed Customer Support",
    description:
      "We handle agreed support interactions on your behalf across email and live chat, with documented procedures, escalation paths, and regular quality reviews.",
    href: "/services#managed-support",
  },
  {
    icon: Users,
    title: "Remote Staffing",
    description:
      "We source, screen, and onboard remote customer support professionals for your team, with clear terms and ongoing administration support.",
    href: "/services#remote-staffing",
  },
  {
    icon: LayoutList,
    title: "Virtual Assistance",
    description:
      "Calendar management, CRM updates, customer follow-ups, and administrative support — documented scope agreed before the engagement begins.",
    href: "/services#virtual-assistance",
  },
  {
    icon: Settings,
    title: "CX Operations",
    description:
      "We design the workflows, templates, knowledge bases, and quality frameworks that make your support operation consistent as you scale.",
    href: "/services#cx-operations",
  },
];

export function ServicesPreview() {
  const headingRef = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const cardsRef = useRevealChildren<HTMLDivElement>({ threshold: 0.05 });

  return (
    <Section background="white" id="services">
      <Container>
        {/* Heading */}
        <div ref={headingRef} className="reveal mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="label-tag">What we do</p>
            <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
              Two ways to work with us.
            </h2>
          </div>
          <Link
            href="/services"
            className="btn-arrow underline-link inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors duration-150 mb-1"
          >
            All services
            <span className="arrow-icon"><ArrowRight size={14} aria-hidden="true" /></span>
          </Link>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className={`reveal reveal-delay-${i + 1} card-accent group flex flex-col gap-4 rounded-lg border border-mist-dark bg-white p-7 no-underline`}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-500 transition-colors duration-200 group-hover:bg-teal-500 group-hover:text-white">
                <service.icon size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1.5 font-heading text-lg font-bold text-navy-500 transition-colors duration-200 group-hover:text-teal-600">
                  {service.title}
                </h3>
                <p className="text-sm text-[#3a5068] leading-relaxed">{service.description}</p>
              </div>
              <span className="btn-arrow mt-auto inline-flex items-center gap-1 text-xs font-semibold text-teal-500">
                Learn more <span className="arrow-icon"><ArrowRight size={12} aria-hidden="true" /></span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
