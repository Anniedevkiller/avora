import { cn } from "@/lib/utils";
import React from "react";

type SectionBackground = "white" | "mist" | "navy";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: SectionBackground;
  as?: React.ElementType;
  id?: string;
}

const bgMap: Record<SectionBackground, string> = {
  white: "bg-soft-white",
  mist: "bg-mist-grey",
  navy: "bg-navy-500",
};

/**
 * Section wrapper with consistent vertical padding and background options.
 */
export function Section({
  children,
  className,
  background = "white",
  as: Tag = "section",
  id,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("py-16 md:py-20 lg:py-24", bgMap[background], className)}
    >
      {children}
    </Tag>
  );
}
