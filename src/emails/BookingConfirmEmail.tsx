/**
 * Prospect confirmation email — sent to the person who requested a discovery call.
 */

import {
  EmailShell,
  EmailHeading,
  EmailParagraph,
  EmailDivider,
  EmailButton,
  emailBrand,
} from "./EmailShell";
import { Text } from "@react-email/components";
import { siteConfig } from "@/config/site";

interface BookingConfirmEmailProps {
  firstName: string;
  service?: string;
  calendlyUrl?: string;
}

export default function BookingConfirmEmail({
  firstName,
  service,
  calendlyUrl,
}: BookingConfirmEmailProps) {
  const bookingUrl = calendlyUrl ?? siteConfig.bookingUrl;

  return (
    <EmailShell preview={`We've received your request, ${firstName} — what happens next`}>
      <EmailHeading>We've received your request.</EmailHeading>

      <EmailParagraph>
        Hi {firstName},
      </EmailParagraph>

      <EmailParagraph>
        Thank you for reaching out to Avora Support. We've received your
        discovery call request{service ? ` about ${service}` : ""} and someone
        from our team will be in touch shortly to confirm a time.
      </EmailParagraph>

      <EmailParagraph>
        If you'd like to book a specific time right away, you can use the
        link below. Calls are typically 20–30 minutes and are free of charge.
      </EmailParagraph>

      <EmailButton href={bookingUrl}>
        Choose a time that works →
      </EmailButton>

      <EmailDivider />

      <Text
        style={{
          backgroundColor: emailBrand.softWhite,
          borderLeft: `3px solid ${emailBrand.teal}`,
          padding: "16px",
          borderRadius: "6px",
          fontSize: "14px",
          color: emailBrand.bodyText,
          lineHeight: "1.65",
          margin: "0 0 16px",
        }}
      >
        <strong style={{ color: emailBrand.navy }}>What to expect on the call</strong>
        <br />
        We'll learn about your business, support volume, and what you're trying
        to achieve. We'll explain how we work and whether we're a good fit.
        There's no pressure and no obligation.
      </Text>

      <EmailParagraph>
        If you have any questions in the meantime, reply to this email or write
        to us at{" "}
        <a href={`mailto:${siteConfig.email}`} style={{ color: emailBrand.teal, textDecoration: "none", fontWeight: "600" }}>
          {siteConfig.email}
        </a>.
      </EmailParagraph>

      <EmailParagraph>
        The Avora Support team
      </EmailParagraph>
    </EmailShell>
  );
}

BookingConfirmEmail.PreviewProps = {
  firstName: "James",
  service: "Customer Experience Bundle",
  calendlyUrl: "https://calendly.com/avora-support",
} satisfies BookingConfirmEmailProps;
