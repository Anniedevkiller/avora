import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { siteConfig } from "@/config/site";
import ApplicationLeadEmail from "@/emails/ApplicationLeadEmail";
import ApplicationConfirmEmail from "@/emails/ApplicationConfirmEmail";


const recentRequests = new Map<string, number[]>();
const RATE_LIMIT = 2;
const WINDOW_MS = 120_000;

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
  if (data.get("website_url")) {
    return NextResponse.json({ ok: true });
  }

  const fullName = (data.get("fullName") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const phone = (data.get("phone") as string | null)?.trim() ?? "";
  const city = (data.get("city") as string | null)?.trim() ?? "";
  const role = (data.get("role") as string | null)?.trim() ?? "";
  const experience = (data.get("experience") as string | null)?.trim() ?? "";
  const writingSample = (data.get("writingSample") as string | null)?.trim() ?? "";
  const availability = (data.get("availability") as string | null)?.trim() ?? "";
  const whyFit = (data.get("whyFit") as string | null)?.trim() ?? "";

  if (!fullName || !email || !city || !role || !experience || !availability || !whyFit) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Validate CV file
  const cvFile = data.get("cv");
  let cvAttachment: { filename: string; content: string; contentType: string } | undefined;

  if (cvFile instanceof File && cvFile.size > 0) {
    if (cvFile.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "CV file too large (max 5 MB)" }, { status: 400 });
    }
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(cvFile.type)) {
      return NextResponse.json({ error: "Only PDF or DOC/DOCX allowed" }, { status: 400 });
    }

    const buffer = Buffer.from(await cvFile.arrayBuffer());
    cvAttachment = {
      filename: cvFile.name,
      content: buffer.toString("base64"),
      contentType: cvFile.type,
    };
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? siteConfig.contactEmail;
  const fromEmail = process.env.FROM_EMAIL ?? siteConfig.fromEmail;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const internalText = `
NEW APPLICATION
──────────────────────────────
Name:         ${fullName}
Email:        ${email}
Phone:        ${phone}
Location:     ${city}
Role:         ${role}
Experience:   ${experience}
Availability: ${availability}
Writing:      ${writingSample || "—"}

Why a good fit:
${whyFit}
──────────────────────────────
CV ${cvAttachment ? "attached" : "not provided"}.
`.trim();

  const applicantText = `
Hi ${fullName},

Thank you for applying to ${siteConfig.name}.

We have received your application for the ${role} role and will review it carefully.

Our hiring process:
1. Application review
2. Short written assessment
3. Interview
4. Trial period (as agreed)
5. Onboarding

We aim to respond to all applications, but please allow up to two weeks for an initial response. Volume can affect this timeline.

If you have any questions, you can reach us at ${siteConfig.email}.

The Avora Support team
`.trim();

  try {
    const firstName = fullName.split(" ")[0];
    const submittedAt = new Date().toLocaleString("en-GB", { timeZone: "Africa/Lagos" });

    const [leadHtml, confirmHtml] = await Promise.all([
      render(ApplicationLeadEmail({
        fullName,
        email,
        phone: phone || undefined,
        city,
        role,
        experience,
        availability,
        writingSample: writingSample || undefined,
        whyFit,
        cvAttached: !!cvAttachment,
        submittedAt,
      })),
      render(ApplicationConfirmEmail({ firstName, role })),
    ]);

    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        replyTo: email,
        subject: `[Application] ${role} — ${fullName}`,
        html: leadHtml,
        text: internalText,
        ...(cvAttachment
          ? {
              attachments: [
                {
                  filename: cvAttachment.filename,
                  content: cvAttachment.content,
                },
              ],
            }
          : {}),
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: `Application received — ${siteConfig.name}`,
        html: confirmHtml,
        text: applicantText,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Application email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

