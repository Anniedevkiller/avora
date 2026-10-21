/**
 * Shared layout shell for all Avora Support transactional emails.
 * Uses inline styles only — email clients strip external stylesheets.
 */

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from "@react-email/components";

const brand = {
  navy: "#14263D",
  teal: "#1AA6A0",
  softWhite: "#F8FAFC",
  mistGrey: "#E8EEF3",
  bodyText: "#3A5068",
  mutedText: "#6B8EA8",
};

export function EmailShell({
  preview,
  children,
}: {
  preview: string;
  children: React.ReactNode;
}) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: brand.softWhite,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            maxWidth: "560px",
            margin: "32px auto",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            border: `1px solid ${brand.mistGrey}`,
            overflow: "hidden",
          }}
        >
          {/* Header band */}
          <Section style={{ backgroundColor: brand.navy, padding: "24px 32px" }}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "700",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Avora Support
            </Text>
            <Text
              style={{
                color: brand.teal,
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "4px 0 0",
              }}
            >
              Great service. Thoughtfully delivered.
            </Text>
          </Section>

          {/* Body */}
          <Section style={{ padding: "32px" }}>{children}</Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: brand.softWhite,
              borderTop: `1px solid ${brand.mistGrey}`,
              padding: "20px 32px",
            }}
          >
            <Text
              style={{
                color: brand.mutedText,
                fontSize: "12px",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              Avora Support · Remote business support for US companies
              <br />
              This email was sent automatically. Do not reply to this address.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/** Reusable heading inside email body */
export function EmailHeading({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        color: brand.navy,
        fontSize: "22px",
        fontWeight: "700",
        margin: "0 0 8px",
        lineHeight: "1.3",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </Text>
  );
}

/** Reusable paragraph */
export function EmailParagraph({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        color: brand.bodyText,
        fontSize: "15px",
        lineHeight: "1.65",
        margin: "0 0 16px",
      }}
    >
      {children}
    </Text>
  );
}

/** Divider */
export function EmailDivider() {
  return <Hr style={{ borderColor: brand.mistGrey, margin: "24px 0" }} />;
}

/** Data row (label: value) */
export function EmailRow({ label, value }: { label: string; value: string }) {
  return (
    <Section style={{ marginBottom: "10px" }}>
      <Text style={{ margin: 0, fontSize: "11px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: brand.mutedText }}>
        {label}
      </Text>
      <Text style={{ margin: "2px 0 0", fontSize: "15px", color: brand.navy, fontWeight: "600" }}>
        {value}
      </Text>
    </Section>
  );
}

/** Teal CTA button */
export function EmailButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-block",
        backgroundColor: brand.teal,
        color: brand.navy,
        fontSize: "14px",
        fontWeight: "700",
        padding: "12px 24px",
        borderRadius: "6px",
        textDecoration: "none",
        marginTop: "8px",
      }}
    >
      {children}
    </Link>
  );
}

export const emailBrand = brand;
