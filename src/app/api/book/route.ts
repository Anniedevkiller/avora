import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { siteConfig } from "@/config/site";
import BookingLeadEmail from "@/emails/BookingLeadEmail";
import BookingConfirmEmail from "@/emails/BookingConfirmEmail";

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

  if (data.get("company_url")) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.get("name") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const companyName = (data.get("companyName") as string | null)?.trim() ?? "";
  const industry = (data.get("industry") as string | null)?.trim() ?? "";
  const teamSize = (data.get("teamSize") as string | null)?.trim() ?? "";
  const interestedIn = (data.get("interestedIn") as string | null)?.trim() ?? "";
  const mainProblem = (data.get("mainProblem") as string | null)?.trim() ?? "";

  if (!name || !email || !interestedIn || !mainProblem) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const firstName = name.split(" ")[0];
  const contactEmail = process.env.CONTACT_EMAIL ?? siteConfig.contactEmail;
  const fromEmail = process.env.FROM_EMAIL ?? siteConfig.fromEmail;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const submittedAt = new Date().toLocaleString("en-GB", { timeZone: "Africa/Lagos" });

  try {
    const [leadHtml, confirmHtml] = await Promise.all([
      render(BookingLeadEmail({
        name,
        email,
        company: companyName,
        service: interestedIn,
        teamSize: teamSize || undefined,
        message: mainProblem,
        submittedAt,
      })),
      render(BookingConfirmEmail({
        firstName,
        service: interestedIn,
        calendlyUrl: siteConfig.bookingUrl,
      })),
    ]);

    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        replyTo: email,
        subject: `[Lead] Discovery call — ${name}${companyName ? ` · ${companyName}` : ""}`,
        html: leadHtml,
        text: `New discovery call request from ${name} (${email}). Interested in: ${interestedIn}. Industry: ${industry}. Message: ${mainProblem}`,
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "We've received your request — Avora Support",
        html: confirmHtml,
        text: `Hi ${firstName}, thank you for reaching out. We'll be in touch shortly. You can also book directly at ${siteConfig.bookingUrl}`,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Book email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
