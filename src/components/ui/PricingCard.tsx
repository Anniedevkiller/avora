import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import Link from "next/link";

interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  setup?: string;
  extraHours?: string;
  recommended?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  setup,
  extraHours,
  recommended = false,
  ctaLabel = "Book a discovery call",
  ctaHref = "/book",
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-lg border bg-white p-8 transition-shadow duration-200 hover:shadow-card-hover",
        recommended
          ? "border-teal-500 shadow-card ring-1 ring-teal-500/20"
          : "border-mist-dark shadow-subtle",
        className
      )}
    >
      {recommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500 px-4 py-1 text-xs font-semibold text-navy-500">
            <Star size={12} fill="currentColor" aria-hidden="true" />
            Recommended
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="mb-1 text-lg font-bold text-navy-500">{name}</h3>
        <p className="text-sm text-[#6b8ea8]">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-navy-500">{price}</span>
          <span className="text-sm text-[#6b8ea8]">{period}</span>
        </div>
        {setup && (
          <p className="mt-1 text-xs text-[#8faabb]">Setup fee: {setup}</p>
        )}
        {extraHours && (
          <p className="text-xs text-[#8faabb]">Extra hours: {extraHours}</p>
        )}
      </div>

      <ul className="mb-8 flex flex-col gap-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check
              size={16}
              className={cn(
                "mt-0.5 shrink-0",
                feature.included ? "text-teal-500" : "text-mist-dark"
              )}
              aria-hidden="true"
            />
            <span
              className={feature.included ? "text-[#3a5068]" : "text-[#8faabb] line-through"}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Link
          href={ctaHref}
          className={cn(
            "inline-flex w-full items-center justify-center rounded px-6 py-3 text-base font-semibold transition-all duration-150 min-h-[44px]",
            recommended
              ? "bg-teal-500 text-navy-500 hover:bg-teal-600"
              : "border border-navy-200 bg-transparent text-navy-500 hover:bg-mist-grey"
          )}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
