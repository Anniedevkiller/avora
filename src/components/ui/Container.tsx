import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Consistent max-width container with horizontal padding.
 * Max-width 1280px, padding adjusts at breakpoints.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-10",
        className
      )}
    >
      {children}
    </Tag>
  );
}
