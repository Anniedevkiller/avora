/**
 * Applicant confirmation email — sent to the candidate after applying.
 */

import {
  EmailShell,
  EmailHeading,
  EmailParagraph,
  EmailDivider,
  emailBrand,
} from "./EmailShell";
import { Text, Section } from "@react-email/components";
import { siteConfig } from "@/config/site";

interface ApplicationConfirmEmailProps {
  firstName: string;
  role: string;
}

const hiringSteps = [
  "Application review",
  "Short written assessment",
  "Interview",
  "Trial period (as agreed)",
  "Onboarding",
];

export default function ApplicationConfirmEmail({
  firstName,
  role,
}: ApplicationConfirmEmailProps) {
  return (
    <EmailShell preview={`Application received — ${role} at Avora Support`}>
      <EmailHeading>Application received.</EmailHeading>

      <EmailParagraph>Hi {firstName},</EmailParagraph>

      <EmailParagraph>
        Thank you for applying to Avora Support. We've received your application
        for the <strong style={{ color: emailBrand.navy }}>{role}</strong> role
        and will review it carefully.
      </EmailParagraph>

      <EmailDivider />

      <Text
        style={{
          margin: "0 0 12px",
          fontSize: "13px",
          fontWeight: "700",
          color: emailBrand.navy,
          letterSpacing: "-0.01em",
        }}
      >
        Our hiring process
      </Text>

      <Section>
        {hiringSteps.map((step, i) => (
          <Text
            key={step}
            style={{
              color: emailBrand.bodyText,
              fontSize: "14px",
              lineHeight: "1.5",
              margin: "0 0 8px",
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                minWidth: "22px",
                height: "22px",
                lineHeight: "22px",
                textAlign: "center",
                borderRadius: "50%",
                backgroundColor: emailBrand.teal,
                color: emailBrand.navy,
                fontSize: "11px",
                fontWeight: "700",
                marginRight: "10px",
              }}
            >
              {i + 1}
            </span>
            {step}
          </Text>
        ))}
      </Section>

      <EmailDivider />

      <EmailParagraph>
        We aim to respond to all applications. Please allow up to two weeks for
        an initial response — volume can affect this timeline. We will not leave
        you without a response.
      </EmailParagraph>

      <EmailParagraph>
        If you have any questions in the meantime, write to us at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          style={{ color: emailBrand.teal, textDecoration: "none", fontWeight: "600" }}
        >
          {siteConfig.email}
        </a>.
      </EmailParagraph>

      <EmailParagraph>The Avora Support team</EmailParagraph>
    </EmailShell>
  );
}

ApplicationConfirmEmail.PreviewProps = {
  firstName: "Chidinma",
  role: "Customer Support Agent",
} satisfies ApplicationConfirmEmailProps;
