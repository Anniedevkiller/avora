"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the CSS classes in `addClasses`
 * are added (default: "visible"). Works with .reveal, .label-tag, .step-badge.
 */
export function useReveal<T extends Element>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

/**
 * Observes a container and adds "visible" to all direct children that have
 * the .reveal class (staggered via CSS delay helpers).
 */
export function useRevealChildren<T extends Element>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.querySelectorAll(".reveal, .label-tag, .step-badge").forEach((el) => {
            el.classList.add("visible");
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px", ...options }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
