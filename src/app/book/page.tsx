import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BookingForm } from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Tell us about your business and support needs. We will recommend the right service and follow up within one business day.",
};

export default function BookPage() {
  return (
    <>
      <Section background="white" className="pb-0">
        <Container>
          <div className="border-b border-mist-dark pb-12 md:pb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-500">
              Discovery call
            </p>
            <h1 className="font-heading text-4xl font-bold text-navy-500 md:text-5xl">
              Tell us about your business.
            </h1>
            <p className="mt-4 text-lg text-[#3a5068]">
              Fill in the form below and we will follow up within one business day. If we are
              a good fit, we will arrange a short call to discuss your needs and recommend a service.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="mx-auto max-w-2xl">
            <BookingForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
