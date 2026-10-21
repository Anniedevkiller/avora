"use client";

import { useState } from "react";
import { FormField, inputClasses, textareaClasses } from "@/components/ui/FormField";
import { CheckCircle2, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website_ref") as string) return; // honeypot

    const newErrors: Record<string, string> = {};
    if (!data.get("name")) newErrors.name = "Please enter your name.";
    if (!data.get("email")) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email") as string)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!data.get("message")) newErrors.message = "Please enter a message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-teal-200 bg-teal-50 p-8 text-center">
        <CheckCircle2 size={36} className="mx-auto mb-3 text-teal-500" aria-hidden="true" />
        <h2 className="font-heading text-lg font-bold text-navy-500 mb-1">Message received.</h2>
        <p className="text-sm text-[#3a5068]">We will get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <input type="text" name="website_ref" tabIndex={-1} aria-hidden="true" className="sr-only" />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" required error={errors.name}>
          <input name="name" type="text" placeholder="Your name" className={inputClasses} autoComplete="name" />
        </FormField>
        <FormField label="Email" required error={errors.email}>
          <input name="email" type="email" placeholder="you@example.com" className={inputClasses} autoComplete="email" />
        </FormField>
      </div>

      <FormField label="Subject" error={errors.subject}>
        <input name="subject" type="text" placeholder="What is this about?" className={inputClasses} />
      </FormField>

      <FormField label="Message" required error={errors.message}>
        <textarea name="message" placeholder="How can we help?" className={textareaClasses} rows={6} />
      </FormField>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <AlertCircle size={16} aria-hidden="true" />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded bg-teal-500 px-6 py-3.5 text-base font-semibold text-navy-500 hover:bg-teal-600 transition-colors duration-150 min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
