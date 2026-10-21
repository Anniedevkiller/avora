import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

// Simple in-memory rate limiting (resets on serverless cold start — acceptable for launch)
const recentRequests = new Map<string, number[]>();
const RATE_LIMIT = 3;
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
  if (data.get("website_ref")) {
    return NextResponse.json({ ok: true }); // silent discard
  }

  const name = (data.get("name") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const subject = (data.get("subject") as string | null)?.trim() ?? "(no subject)";
  const message = (data.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? siteConfig.contactEmail;
  const fromEmail = process.env.FROM_EMAIL ?? siteConfig.fromEmail;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `[Contact] ${subject} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
