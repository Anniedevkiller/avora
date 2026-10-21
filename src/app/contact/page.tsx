import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Avora Support. Email us directly or use the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Section background="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            {/* Left: contact info */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-500">
                Contact
              </p>
              <h1 className="font-heading text-3xl font-bold text-navy-500 md:text-4xl">
                Get in touch.
              </h1>
              <p className="mt-4 text-base text-[#3a5068]">
                We respond to all enquiries within one business day.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-50 text-teal-500">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-base font-semibold text-navy-500 hover:text-teal-500 transition-colors duration-150"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold text-[#6b8ea8]">Follow us</p>
                <SocialLinks theme="dark" iconSize={20} />
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
