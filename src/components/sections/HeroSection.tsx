"use client";

import { SocialLinks } from "@/components/ui/SocialLinks";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

function SupportIllustration() {
  return (
    <div className="relative flex h-full min-h-[360px] items-center justify-center rounded-xl bg-mist-grey hero-dot-grid p-8 lg:min-h-[460px] overflow-hidden">
      {/* Teal accent corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/8 rounded-bl-[80px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-navy-500/5 rounded-tr-[60px]" aria-hidden="true" />

      <svg
        viewBox="0 0 360 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-full max-w-[300px] drop-shadow-sm"
      >
        {/* Main speech bubble */}
        <rect x="20" y="20" width="220" height="140" rx="16" fill="#14263D" />
        <path d="M60 160 L80 140 L60 140 Z" fill="#14263D" />

        {/* Typing dots */}
        <circle cx="80" cy="90" r="10" fill="#1AA6A0" />
        <circle cx="130" cy="90" r="10" fill="#1AA6A0" opacity="0.65" />
        <circle cx="180" cy="90" r="10" fill="#1AA6A0" opacity="0.35" />

        {/* Response bubble */}
        <rect x="120" y="120" width="200" height="100" rx="12" fill="white" />
        <path d="M300 220 L280 220 L280 202 Z" fill="white" />

        {/* Text lines in response */}
        <rect x="140" y="147" width="120" height="7" rx="3.5" fill="#D0DBE5" />
        <rect x="140" y="164" width="80" height="7" rx="3.5" fill="#D0DBE5" />
        <rect x="140" y="181" width="100" height="7" rx="3.5" fill="#D0DBE5" />

        {/* Check circle */}
        <circle cx="320" cy="148" r="22" fill="#1AA6A0" />
        <path d="M310 148 L317 155 L332 141" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Small decorative dots */}
        <circle cx="32" cy="248" r="5" fill="#1AA6A0" opacity="0.25" />
        <circle cx="48" cy="265" r="3.5" fill="#14263D" opacity="0.12" />
        <circle cx="338" cy="38" r="4" fill="#1AA6A0" opacity="0.2" />
      </svg>

      {/* Small floating badge */}
      <div className="absolute bottom-8 right-6 flex items-center gap-2 rounded-lg border border-mist-dark bg-white px-3 py-2 shadow-card">
        <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" aria-hidden="true" />
        <span className="text-xs font-semibold text-navy-500">Active support</span>
      </div>

      <p className="sr-only">Illustration showing a customer support conversation with a clear, prompt response.</p>
    </div>
  );
}

export function HeroSection() {
  const textRef = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const illustrationRef = useReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="bg-soft-white pt-16 pb-0 md:pt-20 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <div ref={textRef} className="reveal max-w-xl py-12 lg:py-20">
            {/* Label */}
            <div className="label-tag label-tag-instant mb-5">
              Remote customer support &amp; staffing
            </div>

            {/* Headline with teal left accent */}
            <div className="flex gap-4 items-stretch">
              <div className="w-1 rounded-full bg-teal-500 shrink-0 mt-1" aria-hidden="true" />
              <h1 className="font-heading text-4xl font-bold leading-tight text-navy-500 sm:text-5xl lg:text-[3.2rem]">
                Your customers deserve support that feels personal.
              </h1>
            </div>

            <p className="mt-6 text-lg text-[#3a5068] leading-relaxed">
              We help growing businesses manage customer conversations, deliver
              dependable service, and build remote support teams without
              unnecessary complexity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="btn-arrow inline-flex items-center gap-2 rounded bg-teal-500 px-6 py-3.5 text-base font-semibold text-navy-500 transition-all duration-150 hover:bg-teal-600 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 min-h-[44px]"
              >
                Book a Discovery Call
                <span className="arrow-icon"><ArrowRight size={16} aria-hidden="true" /></span>
              </Link>
              <Link
                href="/pricing"
                className="underline-link inline-flex items-center text-base font-semibold text-navy-500 hover:text-teal-500 transition-colors duration-150 min-h-[44px]"
              >
                See pricing
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <p className="text-sm text-[#8faabb]">Find us:</p>
              <SocialLinks theme="dark" iconSize={18} />
            </div>
          </div>

          {/* Right: illustration */}
          <div ref={illustrationRef} className="reveal reveal-delay-2 hidden lg:block">
            <SupportIllustration />
          </div>
        </div>
      </Container>

      <div className="mt-0 border-b border-mist-dark" />
    </section>
  );
}
