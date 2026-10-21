import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/layout/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Avora Support is a remote customer support and staffing company. We deliver thoughtful, organised support for US businesses through a documented, quality-reviewed approach.",
};

const values = [
  {
    label: "Professionalism",
    description:
      "We represent your business to your customers. Every interaction should reflect the standards you would set yourself.",
  },
  {
    label: "Accountability",
    description:
      "We own what we agree to deliver. When something does not go to plan, we address it clearly and quickly.",
  },
  {
    label: "Continuous learning",
    description:
      "We review our own performance regularly and treat quality checks as learning, not just measurement.",
  },
  {
    label: "Respect for every customer interaction",
    description:
      "Every enquiry we handle belongs to a real person with a real need. We treat each one accordingly.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pb-0">
        <Container>
          <div className="border-b border-mist-dark pb-16 md:pb-20 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-500">
              About us
            </p>
            <h1 className="font-heading text-4xl font-bold text-navy-500 md:text-5xl">
              Thoughtful support. Dependable people.
            </h1>
          </div>
        </Container>
      </Section>

      {/* Why we exist */}
      <Section background="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-500 mb-4">
                Why Avora Support exists
              </h2>
              <div className="flex flex-col gap-4 text-base text-[#3a5068] leading-relaxed">
                <p>
                  Many growing businesses reach a point where customer enquiries start to overwhelm
                  the team. Handling support in-house takes time and focus away from the work that
                  drives the business forward. Outsourcing can feel risky if it is not managed carefully.
                </p>
                <p>
                  We built Avora Support to offer a middle path: professional, organised remote support
                  that feels like a natural extension of your business, not a disconnected third party.
                  We work from documented procedures, review quality regularly, and communicate clearly
                  throughout every engagement.
                </p>
                <p>
                  We are based in Nigeria and work with US businesses, bringing together qualified
                  remote professionals and the operational rigour to make those arrangements work well
                  for everyone involved.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-500 mb-4">
                Our approach
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    heading: "Thoughtful communication",
                    body: "We write responses that reflect your brand voice and treat every customer enquiry as an opportunity to make a good impression.",
                  },
                  {
                    heading: "Documented processes",
                    body: "Every engagement begins with written procedures. Agents follow these consistently, so quality does not depend on any single individual.",
                  },
                  {
                    heading: "Regular quality reviews",
                    body: "We review interactions weekly against agreed criteria and share findings openly. We use that process to improve, not just to report.",
                  },
                  {
                    heading: "Flexible remote staffing",
                    body: "Our staffing arrangements adapt to your growth. We help you find and onboard the right people, with clear terms from the start.",
                  },
                ].map(({ heading, body }) => (
                  <div key={heading} className="border-l-2 border-teal-500 pl-4">
                    <p className="font-semibold text-navy-500">{heading}</p>
                    <p className="mt-1 text-sm text-[#3a5068]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="mist">
        <Container>
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-navy-500">Our values</h2>
            <p className="mt-2 text-base text-[#3a5068]">
              These guide how we work, how we hire, and how we review our own performance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map(({ label, description }) => (
              <div
                key={label}
                className="rounded-lg border border-mist-dark bg-white p-6"
              >
                <h3 className="mb-2 font-heading text-lg font-bold text-navy-500">{label}</h3>
                <p className="text-sm text-[#3a5068] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section background="white">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xl font-heading font-semibold text-navy-500 leading-relaxed">
              &ldquo;Our goal is simple: to become a trusted remote support partner for
              businesses that value their customers.&rdquo;
            </p>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
