import { cn } from "@/lib/utils";
import React from "react";

// ── Variant map ──────────────────────────────────────────────────────────────
const variants = {
  primary:
    "bg-teal-500 text-navy-500 font-semibold hover:bg-teal-600 active:bg-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2",
  secondary:
    "bg-transparent text-navy-500 font-semibold border border-navy-200 hover:bg-mist-grey active:bg-mist-dark focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-teal-500 font-semibold hover:text-teal-600 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-teal-500",
  "primary-dark":
    "bg-teal-500 text-navy-500 font-semibold hover:bg-teal-400 active:bg-teal-600 focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-500",
  "secondary-dark":
    "bg-transparent text-soft-white font-semibold border border-white/30 hover:bg-white/10 active:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-500",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm min-h-[36px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-lg min-h-[52px]",
} as const;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  asChild?: boolean;
  href?: string;
}

// Polymorphic: renders as <a> if href is provided, otherwise <button>
export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded transition-all duration-150 cursor-pointer select-none whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
