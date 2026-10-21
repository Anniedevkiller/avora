"use client";

import { useState } from "react";
import { FormField, inputClasses, textareaClasses, selectClasses } from "@/components/ui/FormField";
import { siteConfig } from "@/config/site";
import { CheckCircle2, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const newErrors: Record<string, string> = {};

    // Honeypot check
    if (data.get("company_url") as string) return; // bot

    const required = ["name", "email", "companyName", "industry", "interestedIn", "mainProblem"];
    for (const f of required) {
      if (!data.get(f)) newErrors[f] = "This field is required.";
    }
    const emailVal = data.get("email") as string;
    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/book", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-6">
        <div className="rounded-lg border border-teal-200 bg-teal-50 p-8 text-center">
          <CheckCircle2 size={40} className="mx-auto mb-4 text-teal-500" aria-hidden="true" />
          <h2 className="font-heading text-xl font-bold text-navy-500 mb-2">
            Thank you — we&apos;ll be in touch shortly.
          </h2>
          <p className="text-base text-[#3a5068]">
            We typically respond within one business day. If you would like to book a time now,
            you can use the link below.
          </p>
        </div>

        {/* Calendly embed placeholder */}
        <div className="rounded-lg border border-mist-dark bg-mist-grey p-8 text-center">
          <p className="text-sm font-semibold text-navy-500 mb-3">Book a time directly</p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded bg-teal-500 px-6 py-3 text-base font-semibold text-navy-500 hover:bg-teal-600 transition-colors duration-150 min-h-[44px]"
          >
            Open scheduling link →
          </a>
          <p className="mt-3 text-xs text-[#8faabb]">
            Opens in a new tab. Update the link in site.ts when your booking page is live.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot */}
      <input type="text" name="company_url" tabIndex={-1} aria-hidden="true" className="sr-only" />

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Your name" required error={errors.name}>
          <input name="name" type="text" placeholder="Jane Smith" className={inputClasses} autoComplete="name" />
        </FormField>
        <FormField label="Business email" required error={errors.email}>
          <input name="email" type="email" placeholder="jane@company.com" className={inputClasses} autoComplete="email" />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Company name" required error={errors.companyName}>
          <input name="companyName" type="text" placeholder="Acme Co." className={inputClasses} />
        </FormField>
        <FormField label="Website" error={errors.website}>
          <input name="website" type="url" placeholder="https://yoursite.com" className={inputClasses} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Industry" required error={errors.industry}>
          <select name="industry" className={selectClasses} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>E-commerce</option>
            <option>SaaS</option>
            <option>Professional services</option>
            <option>Online education</option>
            <option>Other</option>
          </select>
        </FormField>
        <FormField label="Team size" error={errors.teamSize}>
          <select name="teamSize" className={selectClasses} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>1–5</option>
            <option>6–20</option>
            <option>21–50</option>
            <option>50+</option>
          </select>
        </FormField>
      </div>

      <FormField label="Current support channels" hint="Select all that apply" error={errors.channels}>
        <div className="flex flex-wrap gap-3 pt-1">
          {["Email", "Live chat", "Phone", "Social media", "Tickets/helpdesk", "None yet"].map((ch) => (
            <label key={ch} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="channels" value={ch} className="h-4 w-4 rounded border-mist-dark accent-teal-500" />
              <span className="text-sm text-[#3a5068]">{ch}</span>
            </label>
          ))}
        </div>
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Estimated monthly enquiry volume" error={errors.volume}>
          <select name="volume" className={selectClasses} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Under 100</option>
            <option>100–500</option>
            <option>500–2,000</option>
            <option>2,000+</option>
            <option>Not sure</option>
          </select>
        </FormField>
        <FormField label="Preferred coverage hours / time zone" error={errors.timezone}>
          <input name="timezone" type="text" placeholder="e.g. 9am–5pm EST, Mon–Fri" className={inputClasses} />
        </FormField>
      </div>

      <FormField label="Interested in" required error={errors.interestedIn}>
        <select name="interestedIn" className={selectClasses} defaultValue="">
          <option value="" disabled>Select…</option>
          <option value="managed-support">Managed customer support</option>
          <option value="dedicated-staffing">Dedicated remote staffing</option>
          <option value="both">Both / not sure yet</option>
        </select>
      </FormField>

      <FormField label="Budget range (monthly)" error={errors.budget}>
        <select name="budget" className={selectClasses} defaultValue="">
          <option value="" disabled>Select…</option>
          <option>Under $500</option>
          <option>$500–$1,000</option>
          <option>$1,000–$2,000</option>
          <option>$2,000+</option>
          <option>Not sure yet</option>
        </select>
      </FormField>

      <FormField label="What is the main problem you want to solve?" required error={errors.mainProblem}>
        <textarea
          name="mainProblem"
          placeholder="Describe your current support challenges and what good support would look like for your business."
          className={textareaClasses}
          rows={5}
        />
      </FormField>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <AlertCircle size={16} aria-hidden="true" />
          Something went wrong. Please try again or email us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded bg-teal-500 px-6 py-3.5 text-base font-semibold text-navy-500 hover:bg-teal-600 transition-colors duration-150 min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Submit Request"}
      </button>
    </form>
  );
}
