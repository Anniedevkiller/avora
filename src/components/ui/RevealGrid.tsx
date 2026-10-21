"use client";

import { useRevealChildren } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

/**
 * A client wrapper that attaches IntersectionObserver to its children.
 * Any element with .reveal, .label-tag, or .step-badge inside will animate
 * when the container scrolls into view.
 *
 * Use this in server components to add scroll-reveal to static grids
 * without converting the whole page to a client component.
 */
export function RevealGrid({
  children,
  className,
  threshold = 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useRevealChildren<HTMLDivElement>({ threshold });
  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
