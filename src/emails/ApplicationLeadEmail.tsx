/**
 * Internal notification email — sent to Avora team when a job application is submitted.
 */

import { Text } from "@react-email/components";
import {
  EmailShell,
  EmailHeading,
  EmailParagraph,
  EmailDivider,
  EmailRow,
  EmailButton,
  emailBrand,
} from "./EmailShell";

interface ApplicationLeadEmailProps {
  fullName: string;
  email: string;
  phone?: string;
  city: string;
  role: string;
  experience: string;
  availability: string;
  writingSample?: string;
  whyFit: string;
  cvAttached: boolean;
  submittedAt?: string;
}

export default function ApplicationLeadEmail({
  fullName,
  email,
  phone,
  city,
  role,
  experience,
  availability,
  writingSample,
  whyFit,
  cvAttached,
  submittedAt,
}: ApplicationLeadEmailProps) {
  return (
    <EmailShell preview={`New application: ${role} — ${fullName}`}>
      <EmailHeading>New application received</EmailHeading>
      <EmailParagraph>
        A candidate has applied for a role through the careers page.
      </EmailParagraph>

      <EmailDivider />

      <EmailRow label="Role applied for" value={role} />
      <EmailRow label="Full name" value={fullName} />
      <EmailRow label="Email" value={email} />
      {phone && <EmailRow label="Phone" value={phone} />}
      <EmailRow label="Location" value={city} />
      <EmailRow label="Experience" value={experience} />
      <EmailRow label="Availability" value={availability} />
      <EmailRow label="CV attached" value={cvAttached ? "Yes" : "Not provided"} />
      {submittedAt && <EmailRow label="Submitted" value={submittedAt} />}

      <EmailDivider />

      <Text
        style={{
          margin: "0 0 8px",
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: emailBrand.mutedText,
        }}
      >
        Why they're a good fit
      </Text>
      <Text
        style={{
          color: emailBrand.bodyText,
          fontSize: "15px",
          lineHeight: "1.65",
          margin: "0 0 20px",
          whiteSpace: "pre-wrap",
          backgroundColor: emailBrand.softWhite,
          padding: "16px",
          borderRadius: "6px",
          borderLeft: `3px solid ${emailBrand.teal}`,
        }}
      >
        {whyFit}
      </Text>

      {writingSample && (
        <>
          <Text
            style={{
              margin: "0 0 8px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: emailBrand.mutedText,
            }}
          >
            Writing sample
          </Text>
          <Text
            style={{
              color: emailBrand.bodyText,
              fontSize: "15px",
              lineHeight: "1.65",
              margin: "0 0 20px",
              whiteSpace: "pre-wrap",
              fontStyle: "italic",
            }}
          >
            {writingSample}
          </Text>
        </>
      )}

      <EmailDivider />

      <EmailButton href={`mailto:${email}`}>
        Reply to {fullName}
      </EmailButton>
    </EmailShell>
  );
}

ApplicationLeadEmail.PreviewProps = {
  fullName: "Chidinma Adeyemi",
  email: "chidinma.adeyemi@gmail.com",
  phone: "+234 801 234 5678",
  city: "Lagos, Nigeria",
  role: "Customer Support Agent",
  experience: "3–5 years",
  availability: "Full-time, Monday to Friday, US Eastern hours",
  writingSample: "Thank you for reaching out to us. I've reviewed your order and I can see the package was dispatched on Monday. Here's the tracking link so you can follow its progress directly.",
  whyFit: "I've spent four years in customer support for a Nigerian fintech company supporting international clients. I'm familiar with Freshdesk and Zendesk and have worked ET hours before. I'm organised, take quality seriously, and I'm looking for a long-term arrangement.",
  cvAttached: true,
  submittedAt: "21 October 2026, 5:47 PM",
} satisfies ApplicationLeadEmailProps;
