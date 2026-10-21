/**
 * Internal notification email — sent to Avora team when a contact form is submitted.
 */

import { Text } from "@react-email/components";
import {
  EmailShell,
  EmailHeading,
  EmailParagraph,
  EmailDivider,
  EmailRow,
  emailBrand,
} from "./EmailShell";

interface ContactLeadEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt?: string;
}

export default function ContactLeadEmail({
  name,
  email,
  subject,
  message,
  submittedAt,
}: ContactLeadEmailProps) {
  return (
    <EmailShell preview={`New contact form: ${subject} — ${name}`}>
      <EmailHeading>New contact form submission</EmailHeading>
      <EmailParagraph>
        Someone has sent a message through the website contact form.
      </EmailParagraph>

      <EmailDivider />

      <EmailRow label="Name" value={name} />
      <EmailRow label="Email" value={email} />
      <EmailRow label="Subject" value={subject} />
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
        Message
      </Text>
      <Text
        style={{
          color: emailBrand.bodyText,
          fontSize: "15px",
          lineHeight: "1.65",
          margin: 0,
          whiteSpace: "pre-wrap",
          backgroundColor: emailBrand.softWhite,
          padding: "16px",
          borderRadius: "6px",
          borderLeft: `3px solid ${emailBrand.teal}`,
        }}
      >
        {message}
      </Text>

      <EmailDivider />

      <EmailParagraph>
        Reply directly to this email to respond to {name} at {email}.
      </EmailParagraph>
    </EmailShell>
  );
}

ContactLeadEmail.PreviewProps = {
  name: "Sarah Mitchell",
  email: "sarah@shopfirm.co",
  subject: "Customer support for e-commerce store",
  message:
    "Hi, I run a Shopify store with around 150 orders a month and I'm currently handling all customer emails myself. Looking for someone to help with email support about 3–4 days a week. Would love to understand your pricing and how the onboarding works.",
  submittedAt: "21 October 2026, 3:14 PM",
} satisfies ContactLeadEmailProps;
