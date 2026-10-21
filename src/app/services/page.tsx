import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/layout/CTABand";
import { ArrowRight, Headphones, Users, LayoutList, Settings } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Avora Support offers Managed Customer Support, Remote Staffing, Virtual Assistance, and Customer Experience Operations for growing businesses.",
};

const services = [
  {
    id: "managed-support",
    icon: Headphones,
    title: "Managed Customer Support",
    description:
      "We handle agreed customer enquiries across email, live chat, and other supported channels. Our service includes agent onboarding, documented response procedures, escalation management, and regular performance reporting.",
    details: [
      "Email and live chat coverage during agreed hours",
      "Documented response templates tailored to your brand voice",
      "Escalation paths defined and agreed before the engagement starts",
      "Weekly quality reviews and monthly performance reports",
      "Named point of contact throughout",
    ],
  },
  {
    id: "remote-staffing",
    icon: Users,
    title: "Remote Staffing",
    description:
      "We help businesses recruit and onboard remote customer support professionals and virtual assistants, with a clearly defined recruitment process and support arrangements tailored to their needs.",
    details: [
      "Sourcing and screening of remote support candidates",
      "Structured written assessments and interviews",
      "Onboarding coordination and documentation",
      "Ongoing agent administration and performance oversight",
      "Clear terms set before placement begins",
    ],
  },
  {
    id: "virtual-assistance",
    icon: LayoutList,
    title: "Virtual Assistance",
    description:
      "From appointment coordination and CRM updates to customer follow-ups and administrative tasks, we help businesses keep routine operations organised.",
    details: [
      "Calendar and appointment management",
      "CRM data entry and maintenance",
      "Customer follow-up emails and routine correspondence",
      "Research and administrative support",
      "Documented scope agreed before the engagement starts",
    ],
  },
  {
    id: "cx-operations",
    icon: Settings,
    title: "Customer Experience Operations",
    description:
      "We help establish support workflows, response templates, knowledge bases, quality reviews and reporting procedures that improve consistency as your business grows.",
    details: [
      "Support workflow design and documentation",
      "Response template creation",
      "Knowledge base structure and content",
      "Quality review frameworks",
      "Reporting templates and procedures",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pb-0">
        <Container>
          <div className="border-b border-mist-dark pb-16 md:pb-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-500">
              Our services
            </p>
            <h1 className="font-heading text-4xl font-bold text-navy-500 md:text-5xl max-w-2xl">
              Customer support built around your business.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#3a5068]">
              Every engagement begins with a defined scope, agreed working hours,
              responsibilities and measurable service expectations.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded bg-teal-500 px-6 py-3 text-base font-semibold text-navy-500 hover:bg-teal-600 transition-colors duration-150 min-h-[44px]"
            >
              Book a Discovery Call
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Services */}
      {services.map((service, idx) => (
        <Section
          key={service.id}
          id={service.id}
          background={idx % 2 === 0 ? "white" : "mist"}
        >
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Alternate text/detail sides */}
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-500">
                  <service.icon size={24} aria-hidden="true" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-[#3a5068] leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/book"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors duration-150 group"
                >
                  Discuss this service
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Detail list */}
              <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="rounded-lg border border-mist-dark bg-white p-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6b8ea8]">
                    What&apos;s included
                  </p>
                  <ul className="flex flex-col gap-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                        <span className="text-[#3a5068]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Closing note */}
      <Section background="mist">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base text-[#3a5068] italic border border-mist-dark rounded-lg p-8 bg-white">
              &ldquo;Every engagement begins with a defined scope, agreed working hours,
              responsibilities and measurable service expectations.&rdquo;
            </p>
            <Link
              href="/pricing"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors duration-150"
            >
              See our pricing
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
