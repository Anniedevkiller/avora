"use client";

import { roles } from "@/data/careers";
import { FormField, inputClasses, textareaClasses, selectClasses } from "@/components/ui/FormField";
import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const CURRENT_ROLES = roles.map((r) => r.title);

export function ApplicationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Basic client validation
    const newErrors: Record<string, string> = {};
    const required = ["fullName", "email", "city", "role", "experience", "availability", "whyFit"];
    for (const field of required) {
      if (!data.get(field)) newErrors[field] = "This field is required.";
    }
    if (!data.get("equipmentConfirm")) newErrors["equipmentConfirm"] = "Please confirm your equipment.";
    if (!data.get("consent")) newErrors["consent"] = "Please confirm your consent.";

    const emailVal = data.get("email") as string;
    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      newErrors["email"] = "Please enter a valid email address.";
    }

    const cvFile = data.get("cv") as File;
    if (cvFile?.size > 0) {
      if (cvFile.size > 5 * 1024 * 1024) newErrors["cv"] = "File must be under 5 MB.";
      if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(cvFile.type)) {
        newErrors["cv"] = "Only PDF or DOC/DOCX files are accepted.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/careers/apply", { method: "POST", body: data });
      if (!res.ok) throw new Error("submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-teal-200 bg-teal-50 p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto mb-4 text-teal-500" aria-hidden="true" />
        <h3 className="font-heading text-xl font-bold text-navy-500 mb-2">Application received.</h3>
        <p className="text-base text-[#3a5068]">
          We will review your application and be in touch if there is a good fit. We aim to respond
          to all applications within two weeks, though this may vary with volume.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot */}
      <input type="text" name="website_url" tabIndex={-1} aria-hidden="true" className="sr-only" />

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Full name" required error={errors.fullName}>
          <input name="fullName" type="text" placeholder="Your full name" className={inputClasses} autoComplete="name" />
        </FormField>
        <FormField label="Email address" required error={errors.email}>
          <input name="email" type="email" placeholder="you@example.com" className={inputClasses} autoComplete="email" />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Phone / WhatsApp" error={errors.phone} hint="Include country code e.g. +234">
          <input name="phone" type="tel" placeholder="+234 800 000 0000" className={inputClasses} autoComplete="tel" />
        </FormField>
        <FormField label="City and state" required error={errors.city}>
          <input name="city" type="text" placeholder="Lagos, Lagos State" className={inputClasses} />
        </FormField>
      </div>

      <FormField label="Role applying for" required error={errors.role}>
        <select name="role" className={selectClasses} defaultValue="">
          <option value="" disabled>Select a role…</option>
          {CURRENT_ROLES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
          <option value="talent-pool">Join our talent pool (no current opening)</option>
        </select>
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Years of relevant experience" required error={errors.experience}>
          <select name="experience" className={selectClasses} defaultValue="">
            <option value="" disabled>Select…</option>
            <option value="0-1">Less than 1 year</option>
            <option value="1-2">1–2 years</option>
            <option value="2-4">2–4 years</option>
            <option value="4+">4+ years</option>
          </select>
        </FormField>
        <FormField label="Typing speed / writing sample link" hint="Optional — include a link if you have one" error={errors.writingSample}>
          <input name="writingSample" type="url" placeholder="https://docs.google.com/…" className={inputClasses} />
        </FormField>
      </div>

      <FormField
        label="CV upload"
        hint="PDF or DOC/DOCX, max 5 MB"
        error={errors.cv}
      >
        <input
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="block w-full text-sm text-[#3a5068] file:mr-4 file:rounded file:border file:border-mist-dark file:bg-mist-grey file:px-4 file:py-2 file:text-sm file:font-semibold file:text-navy-500 hover:file:bg-mist-dark file:cursor-pointer cursor-pointer"
        />
      </FormField>

      <FormField label="Availability and preferred hours" required error={errors.availability} hint="e.g. Monday–Friday, 9am–5pm EST">
        <input name="availability" type="text" placeholder="Mon–Fri, 9am–5pm EST" className={inputClasses} />
      </FormField>

      <FormField label="Why are you a good fit?" required error={errors.whyFit}>
        <textarea name="whyFit" placeholder="Tell us briefly about your experience and why you want to work with Avora Support." className={textareaClasses} rows={5} />
      </FormField>

      {/* Checkboxes */}
      <div className="flex flex-col gap-3">
        <label className={`flex items-start gap-3 cursor-pointer ${errors.equipmentConfirm ? "text-red-600" : ""}`}>
          <input
            type="checkbox"
            name="equipmentConfirm"
            className="mt-1 h-4 w-4 rounded border-mist-dark accent-teal-500"
          />
          <span className="text-sm text-[#3a5068]">
            I have a reliable internet connection, a computer in good working order, and a backup
            power or connectivity plan.
          </span>
        </label>
        {errors.equipmentConfirm && (
          <p role="alert" className="text-xs font-medium text-red-600 ml-7">{errors.equipmentConfirm}</p>
        )}

        <label className={`flex items-start gap-3 cursor-pointer ${errors.consent ? "text-red-600" : ""}`}>
          <input
            type="checkbox"
            name="consent"
            className="mt-1 h-4 w-4 rounded border-mist-dark accent-teal-500"
          />
          <span className="text-sm text-[#3a5068]">
            I consent to Avora Support storing and processing my application data for recruitment purposes.
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="text-xs font-medium text-red-600 ml-7">{errors.consent}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <AlertCircle size={16} aria-hidden="true" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded bg-teal-500 px-6 py-3.5 text-base font-semibold text-navy-500 hover:bg-teal-600 transition-colors duration-150 min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>

      <p className="text-center text-xs text-[#8faabb]">
        Employment arrangement (employee or contractor) and compensation are confirmed per role.
      </p>
    </form>
  );
}
