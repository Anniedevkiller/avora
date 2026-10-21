import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Avora Support.",
};

export default function PrivacyPage() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-2 inline-flex rounded border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
            Draft — have this reviewed by a solicitor before publishing.
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold text-navy-500 md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[#6b8ea8]">Last updated: October 2026</p>

          <div className="mt-10 space-y-8 text-base text-[#3a5068] leading-relaxed">
            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">1. Who we are</h2>
              <p>
                {siteConfig.name} is a remote customer support and staffing company. Our contact
                email is{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-teal-500 hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">
                2. Personal data we collect
              </h2>
              <p>We collect personal data in the following circumstances:</p>
              <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
                <li>When you complete our booking, contact, or careers form</li>
                <li>When you email us directly</li>
                <li>
                  When we provide customer support on behalf of our clients (in which case our
                  clients are the data controllers and we act as processors)
                </li>
              </ul>
              <p className="mt-3">
                The data we collect may include: name, email address, phone number, company name,
                location, and any information you choose to include in correspondence with us.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">
                3. How we use your data
              </h2>
              <p>We use your data to:</p>
              <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
                <li>Respond to your enquiries and manage our business relationship</li>
                <li>Process job applications</li>
                <li>Deliver agreed support services on behalf of our clients</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">
                4. Cross-border data transfers
              </h2>
              <p>
                {siteConfig.name} operates between Nigeria and the United States. By submitting
                data to us, you acknowledge that your data may be transferred to, stored and
                processed in Nigeria. We take reasonable steps to ensure your data is handled
                securely and in accordance with this policy, regardless of where it is processed.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">
                5. Data retention
              </h2>
              <p>
                We retain personal data only for as long as necessary for the purposes for which
                it was collected, or as required by law. Job application data is typically retained
                for six months unless you consent to longer retention for our talent pool.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">
                6. Your rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, delete,
                or restrict processing of your personal data. To make a request, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-teal-500 hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">7. Cookies</h2>
              <p>
                This website does not currently use analytics or tracking cookies. If this changes,
                this policy will be updated and a cookie notice will be added.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-navy-500">8. Contact</h2>
              <p>
                For any privacy-related questions, contact us at{" "}
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
