import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

const recentRequests = new Map<string, number[]>();
const RATE_LIMIT = 2;
const WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const times = (recentRequests.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (times.length >= RATE_LIMIT) return true;
  times.push(now);
  recentRequests.set(ip, times);
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const data = await req.formData();

  // Honeypot
  if (data.get("company_url")) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.get("name") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const companyName = (data.get("companyName") as string | null)?.trim() ?? "";
  const website = (data.get("website") as string | null)?.trim() ?? "";
  const industry = (data.get("industry") as string | null)?.trim() ?? "";
  const teamSize = (data.get("teamSize") as string | null)?.trim() ?? "";
  const channels = data.getAll("channels").join(", ");
  const volume = (data.get("volume") as string | null)?.trim() ?? "";
  const timezone = (data.get("timezone") as string | null)?.trim() ?? "";
  const interestedIn = (data.get("interestedIn") as string | null)?.trim() ?? "";
  const budget = (data.get("budget") as string | null)?.trim() ?? "";
  const mainProblem = (data.get("mainProblem") as string | null)?.trim() ?? "";

  if (!name || !email || !interestedIn || !mainProblem) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? siteConfig.contactEmail;
  const fromEmail = process.env.FROM_EMAIL ?? siteConfig.fromEmail;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const leadSummary = `
NEW DISCOVERY CALL REQUEST
──────────────────────────────
Name:          ${name}
Email:         ${email}
Company:       ${companyName}
Website:       ${website}
Industry:      ${industry}
Team size:     ${teamSize}
Channels:      ${channels}
Volume:        ${volume}
Timezone:      ${timezone}
Interested in: ${interestedIn}
Budget:        ${budget}

Main problem:
${mainProblem}
──────────────────────────────
Reply directly to this email to respond to the prospect.
`.trim();

  const prospectConfirm = `
Hi ${name},

Thank you for reaching out to Avora Support.

We have received your request and will review it shortly. We typically respond within one business day.

Here is a summary of what you submitted:
- Company: ${companyName}
- Interested in: ${interestedIn}
- Industry: ${industry}

If you would like to book a time directly, visit: ${siteConfig.bookingUrl}

We look forward to speaking with you.

The Avora Support team
${siteConfig.email}
`.trim();

  try {
    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        replyTo: email,
        subject: `[Lead] Discovery call request from ${name} — ${companyName}`,
        text: leadSummary,
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "We received your request — Avora Support",
        text: prospectConfirm,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Book email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
