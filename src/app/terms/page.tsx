import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Avora Support.",
};

export default function TermsPage() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-2 inline-flex rounded border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
            Draft — have this reviewed by a solicitor before publishing.
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold text-navy-500 md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-[#6b8ea8]">Last updated: October 2026</p>

          <div className="mt-10 space-y-8 text-base text-[#3a5068] leading-relaxed">
            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">1. Agreement</h2>
              <p>
                These Terms of Service govern the use of services provided by {siteConfig.name}.
                By engaging our services, you agree to these terms. Individual engagements are
                governed by a separate service agreement or statement of work agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">2. Services</h2>
              <p>
                {siteConfig.name} provides remote customer support, staffing, and related
                services as agreed in writing for each engagement. The scope, hours, deliverables
                and pricing are confirmed in a service agreement before work begins.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">3. Payment</h2>
              <p>
                Fees are as agreed in each service agreement. Setup fees are payable before
                the engagement begins. Monthly fees are invoiced in advance. Late payments may
                result in suspension of services. All fees are in USD unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">
                4. Placement and direct hire
              </h2>
              <p>
                Where {siteConfig.name} introduces a candidate to a client, the direct hire or
                independent engagement of that individual during or within six months of an active
                engagement is subject to a placement fee as set out in the relevant service
                agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">
                5. Confidentiality
              </h2>
              <p>
                Both parties agree to keep the other&apos;s confidential information private.
                This includes client data, business processes, and any information designated
                as confidential in the service agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">
                6. Limitation of liability
              </h2>
              <p>
                {siteConfig.name}&apos;s liability for any claim arising from services provided
                is limited to the fees paid in the month in which the relevant incident occurred.
                We are not liable for indirect, consequential or incidental losses.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">7. Termination</h2>
              <p>
                Either party may terminate an engagement with notice as set out in the service
                agreement. {siteConfig.name} reserves the right to terminate immediately in cases
                of non-payment or material breach of the service agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">
                8. Governing law
              </h2>
              <p>
                These terms are governed by the laws of the Federal Republic of Nigeria. Any
                disputes will first be addressed through good-faith negotiation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">9. Contact</h2>
              <p>
                Questions about these terms:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-teal-500 hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
