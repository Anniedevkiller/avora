"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ClipboardList, ShieldCheck, BarChart3, RefreshCw } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { useRevealChildren } from "@/lib/useReveal";

const pillars = [
  {
    icon: ClipboardList,
    heading: "Documented procedures",
    body: "Every engagement starts with documented response procedures written specifically for your business. Agents follow these consistently, so quality does not depend on any one person.",
  },
  {
    icon: ShieldCheck,
    heading: "Secure access controls",
    body: "Agents access only the systems required for your account, using secure credentials. Data handling responsibilities are set out clearly in each agreement.",
  },
  {
    icon: RefreshCw,
    heading: "Weekly quality checks",
    body: "Support interactions are reviewed regularly against agreed quality criteria. Findings are shared with the team and used to improve responses over time.",
  },
  {
    icon: BarChart3,
    heading: "Monthly performance reports",
    body: "You receive a structured report each month covering activity, quality findings, and any issues raised. No surprises — just a clear picture of how the service is running.",
  },
];

export function QualitySection() {
  const headingRef = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const cardsRef = useRevealChildren<HTMLDivElement>({ threshold: 0.05 });

  return (
    <Section background="navy" id="quality">
      <Container>
        <div ref={headingRef} className="reveal mb-12 max-w-xl">
          <p className="label-tag label-tag-light">How we keep quality high</p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Dependable by design, not by chance.
          </h2>
          <p className="mt-4 text-base text-white/70">
            Good customer support is the result of clear processes, regular
            reviews, and honest communication. These are the practices we
            follow in every engagement.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2">
          {pillars.map(({ icon: Icon, heading, body }, i) => (
            <div
              key={heading}
              className={`reveal reveal-delay-${i + 1} quality-card rounded-lg border border-white/10 bg-white/5 p-7`}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-500/15 text-teal-300 transition-colors duration-200">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-white">{heading}</h3>
              <p className="text-sm leading-relaxed text-white/65">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
