import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { RolesList } from "@/components/sections/RolesList";
import { ApplicationForm } from "@/components/sections/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Avora Support's remote team in Nigeria. We're building a small, carefully screened team of customer support agents, virtual assistants, QA reviewers and team leads.",
};

const hiringSteps = [
  { number: "01", label: "Apply", detail: "Submit your application using the form below." },
  { number: "02", label: "Short written assessment", detail: "We send a brief written task relevant to the role." },
  { number: "03", label: "Interview", detail: "A structured video or audio interview with our team." },
  { number: "04", label: "Trial", detail: "A paid or unpaid trial period as agreed for the role." },
  { number: "05", label: "Onboarding", detail: "Full onboarding with documented processes and clear expectations." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pb-0">
        <Container>
          <div className="border-b border-mist-dark pb-16 md:pb-20 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-500">
              Careers
            </p>
            <h1 className="font-heading text-4xl font-bold text-navy-500 md:text-5xl">
              Build better customer experiences with us.
            </h1>
            <p className="mt-4 text-lg text-[#3a5068]">
              We are building a small, carefully screened remote team in Nigeria. We hire as
              client work grows, and we take every placement seriously.
            </p>
          </div>
        </Container>
      </Section>

      {/* Open roles */}
      <Section background="white" id="open-roles">
        <Container>
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy-500">Open roles</h2>
            <p className="mt-2 text-[#3a5068]">
              Click a role to see the full description, requirements and working arrangements.
            </p>
          </div>
          <RolesList />
        </Container>
      </Section>

      {/* What it&apos;s like to work with us */}
      <Section background="mist" id="culture">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-500 mb-4">
                What it&apos;s like to work with us
              </h2>
              <div className="flex flex-col gap-4 text-base text-[#3a5068] leading-relaxed">
                <p>
                  We keep things documented and well-organised. You will always have clear written
                  instructions for your role, a process to follow for edge cases, and a named person
                  to reach if something is unclear.
                </p>
                <p>
                  Performance is reviewed regularly. We share feedback directly and constructively,
                  and we expect the same from our team. If something is not working, we address it
                  early rather than letting it drift.
                </p>
                <p>
                  Every customer interaction you handle matters to us and to the client whose
                  business you represent. We work with people who take that responsibility seriously.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-500 mb-6">
                Our hiring process
              </h2>
              <div className="flex flex-col gap-4">
                {hiringSteps.map(({ number, label, detail }) => (
                  <div key={number} className="flex items-start gap-4">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-teal-500 text-xs font-bold text-teal-500 font-heading">
                      {number}
                    </span>
                    <div>
                      <p className="font-semibold text-navy-500">{label}</p>
                      <p className="mt-0.5 text-sm text-[#3a5068]">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-[#6b8ea8] italic">
                Employment arrangement (employee or contractor) and compensation are confirmed per role.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Application form */}
      <Section background="white" id="apply">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy-500">Apply now</h2>
              <p className="mt-2 text-[#3a5068]">
                Fill in the form below. If no current role fits, select &ldquo;Join our talent
                pool&rdquo; and we will keep your details for future openings.
              </p>
            </div>
            <ApplicationForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
