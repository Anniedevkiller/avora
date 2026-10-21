import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/layout/CTABand";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Avora Support serves e-commerce brands, SaaS startups, professional services, and online education businesses with dependable remote customer support.",
};

const industries = [
  {
    id: "ecommerce",
    label: "E-commerce",
    headline: "Support that keeps up with your orders.",
    body: "E-commerce businesses deal with a consistent, high-volume mix of order enquiries, shipping updates, return requests and product questions. Customers expect quick, accurate responses — and a poor experience at any of these touchpoints directly affects repeat purchase rates.",
    supportTypes: [
      "Order status and tracking enquiries",
      "Delivery updates and courier issue handling",
      "Returns and refund process management",
      "Product questions and pre-purchase support",
      "Post-purchase follow-up and review response",
    ],
    note: "We document your returns policy, shipping partners and escalation paths before we start, so every agent response is consistent with how your business actually operates.",
  },
  {
    id: "saas",
    label: "SaaS & startups",
    headline: "Customer support that matches your product's pace.",
    body: "SaaS businesses and early-stage startups often need support that can adapt quickly — handling account questions while the product is still evolving, triaging incoming issues, and making sure urgent escalations reach the right person without delay.",
    supportTypes: [
      "Account setup, login and billing queries",
      "Product guidance and basic how-to questions",
      "Bug report triage and escalation to your team",
      "Onboarding follow-up for new users",
      "Ticket queue management during high-volume periods",
    ],
    note: "We work from your knowledge base and update our documentation as your product changes. Escalation paths are agreed upfront so nothing falls through.",
  },
  {
    id: "professional-services",
    label: "Professional services",
    headline: "Client communication handled with care.",
    body: "Professional services firms — consultancies, agencies, legal, accounting — need client communication managed with accuracy and discretion. Routine administrative tasks take up time that should be spent on client work.",
    supportTypes: [
      "Appointment scheduling and calendar coordination",
      "Client enquiry handling and follow-up",
      "Intake form processing and documentation",
      "Routine client correspondence",
      "CRM data entry and record maintenance",
    ],
    note: "All agent access is scoped to only the systems and data required for your account. Data handling responsibilities are set out clearly in each agreement.",
  },
  {
    id: "online-education",
    label: "Online education",
    headline: "Learner support that helps people stay on track.",
    body: "Online education businesses — course creators, e-learning platforms, coaching programmes — need reliable support for learner enquiries, access issues and administrative questions. Delays in resolving these can directly affect course completion and learner satisfaction.",
    supportTypes: [
      "Course access and login support",
      "Enrolment and payment enquiries",
      "Content delivery and platform questions",
      "Certificate and completion record requests",
      "Administrative assistance for instructors and coordinators",
    ],
    note: "We get familiar with your platform and course catalogue before we start. Response templates are written to reflect your teaching style and community tone.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pb-0">
        <Container>
          <div className="border-b border-mist-dark pb-16 md:pb-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-500">
              Industries
            </p>
            <h1 className="font-heading text-4xl font-bold text-navy-500 md:text-5xl max-w-2xl">
              Built for businesses where customer relationships matter.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[#3a5068]">
              We focus on a small set of business types where organised, dependable remote support
              makes a real difference to day-to-day operations.
            </p>
          </div>
        </Container>
      </Section>

      {/* Industry sections */}
      {industries.map((industry, idx) => (
        <Section
          key={industry.id}
          id={industry.id}
          background={idx % 2 === 0 ? "white" : "mist"}
        >
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
              {/* Text */}
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-500">
                  {industry.label}
                </p>
                <h2 className="font-heading text-2xl font-bold text-navy-500 md:text-3xl">
                  {industry.headline}
                </h2>
                <p className="mt-4 text-base text-[#3a5068] leading-relaxed">{industry.body}</p>
                <p className="mt-4 text-sm text-[#6b8ea8] italic">{industry.note}</p>
                <Link
                  href="/book"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-600 transition-colors duration-150 group"
                >
                  Talk to us about your business
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Support types */}
              <div className="rounded-lg border border-mist-dark bg-white p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6b8ea8]">
                  Common support types
                </p>
                <ul className="flex flex-col gap-3">
                  {industry.supportTypes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                      <span className="text-sm text-[#3a5068]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <CTABand />
    </>
  );
}
