/**
 * Internal notification email — sent to Avora team when a discovery call is booked.
 */

import {
  EmailShell,
  EmailHeading,
  EmailParagraph,
  EmailDivider,
  EmailRow,
  EmailButton,
} from "./EmailShell";
import { siteConfig } from "@/config/site";

interface BookingLeadEmailProps {
  name: string;
  email: string;
  company?: string;
  service?: string;
  teamSize?: string;
  message?: string;
  submittedAt?: string;
}

export default function BookingLeadEmail({
  name,
  email,
  company,
  service,
  teamSize,
  message,
  submittedAt,
}: BookingLeadEmailProps) {
  return (
    <EmailShell preview={`Discovery call request: ${name}${company ? ` · ${company}` : ""}`}>
      <EmailHeading>New discovery call request</EmailHeading>
      <EmailParagraph>
        A prospect has completed the booking form. Review the details below and
        confirm a time through your calendar link.
      </EmailParagraph>

      <EmailDivider />

      <EmailRow label="Name" value={name} />
      <EmailRow label="Email" value={email} />
      {company && <EmailRow label="Company" value={company} />}
      {service && <EmailRow label="Service of interest" value={service} />}
      {teamSize && <EmailRow label="Team / company size" value={teamSize} />}
      {submittedAt && <EmailRow label="Submitted" value={submittedAt} />}

      {message && (
        <>
          <EmailDivider />
          <EmailParagraph>
            <strong>Additional context:</strong>{"\n"}{message}
          </EmailParagraph>
        </>
      )}

      <EmailDivider />

      <EmailButton href={`mailto:${email}`}>
        Reply to {name}
      </EmailButton>

      <EmailParagraph>
        Or send your Calendly link directly to {email} to confirm a time.
      </EmailParagraph>
    </EmailShell>
  );
}

BookingLeadEmail.PreviewProps = {
  name: "James Okonkwo",
  email: "james@scalescale.io",
  company: "ScaleScale",
  service: "Customer Experience Bundle",
  teamSize: "5–15 employees",
  message: "We handle about 80–100 support tickets a week and currently use a mix of Freshdesk and email. Would love to talk through handing this over.",
  submittedAt: "21 October 2026, 4:02 PM",
} satisfies BookingLeadEmailProps;

// Silence unused import warning
void siteConfig;
