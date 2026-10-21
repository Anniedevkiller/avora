"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

function AvoraLogo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Avora Support — home" className={cn("flex items-center gap-2.5 group", className)}>
      {/* Simple geometric wordmark-style logo */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#14263D" />
        {/* Speech-bubble + relay motif */}
        <path
          d="M8 10C8 9.44772 8.44772 9 9 9H23C23.5523 9 24 9.44772 24 10V19C24 19.5523 23.5523 20 23 20H14L10 24V20H9C8.44772 20 8 19.5523 8 19V10Z"
          fill="#1AA6A0"
          opacity="0.9"
        />
        <circle cx="12" cy="14.5" r="1.5" fill="#14263D" />
        <circle cx="16" cy="14.5" r="1.5" fill="#14263D" />
        <circle cx="20" cy="14.5" r="1.5" fill="#14263D" />
      </svg>
      <span className="font-heading text-lg font-bold text-navy-500 group-hover:text-teal-500 transition-colors duration-150">
        {siteConfig.name}
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Focus trap inside mobile menu
  const trapFocus = useCallback((e: KeyboardEvent) => {
    if (!menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    if (e.key === "Escape") {
      setMenuOpen(false);
      triggerRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("keydown", trapFocus);
      document.body.style.overflow = "hidden";
      // Focus first item after open
      setTimeout(() => firstFocusableRef.current?.focus(), 50);
    } else {
      document.removeEventListener("keydown", trapFocus);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", trapFocus);
      document.body.style.overflow = "";
    };
  }, [menuOpen, trapFocus]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-soft-white transition-shadow duration-200",
          scrolled ? "border-b border-mist-dark shadow-subtle" : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          <AvoraLogo />

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {siteConfig.navLinks.map(({ label, href }) => {
                const active = pathname === href || pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "group relative inline-flex flex-col items-center rounded px-3 py-2 text-sm font-medium transition-colors duration-150 min-h-[44px] justify-center gap-0",
                        active ? "text-teal-500" : "text-[#3a5068] hover:text-navy-500"
                      )}
                    >
                      {label}
                      {/* Animated underline */}
                      <span
                        className={cn(
                          "absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-teal-500 origin-left transition-transform duration-200",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book"
              className="btn-arrow inline-flex items-center gap-1.5 rounded bg-teal-500 px-5 py-2.5 text-sm font-semibold text-navy-500 transition-colors duration-150 hover:bg-teal-600 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 min-h-[44px]"
            >
              Book a Call
              <span className="arrow-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            ref={triggerRef}
            onClick={() => setMenuOpen((v) => !v)}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded text-navy-500 hover:bg-mist-grey lg:hidden transition-colors duration-150"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-500/40 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile slide-in menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(320px,100vw)] flex-col bg-soft-white shadow-2xl transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header row */}
        <div className="flex h-16 items-center justify-between border-b border-mist-dark px-6">
          <AvoraLogo />
          <button
            onClick={() => {
              setMenuOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded text-navy-500 hover:bg-mist-grey transition-colors duration-150"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-4">
          {siteConfig.navLinks.map(({ label, href }, i) => {
            const active = pathname === href || pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                ref={i === 0 ? firstFocusableRef : undefined}
                className={cn(
                  "flex items-center rounded px-4 py-3 text-base font-medium transition-colors duration-150 min-h-[44px] border-l-2",
                  active
                    ? "border-teal-500 bg-teal-50 text-teal-600 font-semibold"
                    : "border-transparent text-navy-500 hover:bg-mist-grey"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="mt-auto p-6 border-t border-mist-dark">
          <Link
            href="/book"
            className="flex w-full items-center justify-center rounded bg-teal-500 px-6 py-3 text-base font-semibold text-navy-500 hover:bg-teal-600 transition-colors duration-150 min-h-[44px]"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </>
  );
}
