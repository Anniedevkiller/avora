import React from "react";
import { render } from "@react-email/render";
import ContactLeadEmail from "@/emails/ContactLeadEmail";
import BookingLeadEmail from "@/emails/BookingLeadEmail";
import BookingConfirmEmail from "@/emails/BookingConfirmEmail";
import ApplicationLeadEmail from "@/emails/ApplicationLeadEmail";
import ApplicationConfirmEmail from "@/emails/ApplicationConfirmEmail";

/**
 * Email preview route — development only.
 * Visit /emails/preview?t=contact-lead (or any template name below).
 *
 * Available values of ?t=
 *   contact-lead
 *   booking-lead
 *   booking-confirm
 *   application-lead
 *   application-confirm
 */

const templates: Record<string, () => React.ReactElement> = {
  "contact-lead": () =>
    ContactLeadEmail(ContactLeadEmail.PreviewProps),
  "booking-lead": () =>
    BookingLeadEmail(BookingLeadEmail.PreviewProps),
  "booking-confirm": () =>
    BookingConfirmEmail(BookingConfirmEmail.PreviewProps),
  "application-lead": () =>
    ApplicationLeadEmail(ApplicationLeadEmail.PreviewProps),
  "application-confirm": () =>
    ApplicationConfirmEmail(ApplicationConfirmEmail.PreviewProps),
};

export async function GET(req: Request) {
  if (process.env.NODE_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  const t = searchParams.get("t") ?? "contact-lead";

  const factory = templates[t];
  if (!factory) {
    const list = Object.keys(templates)
      .map((k) => `<li><a href="?t=${k}">${k}</a></li>`)
      .join("");
    return new Response(
      `<h2>Unknown template "${t}"</h2><p>Available:</p><ul>${list}</ul>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }

  const html = await render(factory());

  // Inject a navigation bar at the top
  const nav = Object.keys(templates)
    .map(
      (k) =>
        `<a href="?t=${k}" style="
          display:inline-block;padding:6px 14px;margin:4px;border-radius:6px;
          font-family:sans-serif;font-size:13px;font-weight:600;text-decoration:none;
          background:${k === t ? "#14263D" : "#E8EEF3"};
          color:${k === t ? "#fff" : "#14263D"};
        ">${k}</a>`
    )
    .join("");

  const page = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Email preview — ${t}</title>
<style>body{margin:0;background:#f1f5f9;}</style></head>
<body>
  <div style="background:#fff;border-bottom:1px solid #E8EEF3;padding:12px 20px;position:sticky;top:0;z-index:10;">
    <span style="font-family:sans-serif;font-size:12px;font-weight:700;color:#6B8EA8;letter-spacing:.06em;text-transform:uppercase;margin-right:12px;">Email preview</span>
    ${nav}
  </div>
  <div style="padding:24px;">
    ${html}
  </div>
</body>
</html>`;

  return new Response(page, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
