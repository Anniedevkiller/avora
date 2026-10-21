"use client";

import { cn } from "@/lib/utils";
import React, { useId } from "react";

interface FormFieldProps {
  label: string;
  id?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement> | React.SelectHTMLAttributes<HTMLSelectElement>>;
}

const inputBaseClasses =
  "w-full rounded border border-mist-dark bg-white px-4 py-3 text-base text-navy-500 placeholder:text-[#8faabb] transition-colors duration-150 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 min-h-[44px]";

export const inputClasses = inputBaseClasses;
export const textareaClasses = cn(inputBaseClasses, "min-h-[120px] resize-y");
export const selectClasses = cn(inputBaseClasses, "appearance-none cursor-pointer bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%231AA6A0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\")] bg-[right_12px_center] bg-no-repeat pr-10");

export function FormField({
  label,
  id,
  error,
  hint,
  required,
  className,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = error ? `${fieldId}-error` : undefined;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  const child = React.cloneElement(children, {
    id: fieldId,
    "aria-required": required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
  } as React.HTMLAttributes<HTMLElement>);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={fieldId}
        className="text-sm font-semibold text-navy-500"
      >
        {label}
        {required && (
          <span className="ml-1 text-teal-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {hint && (
        <p id={hintId} className="text-xs text-[#6b8ea8]">
          {hint}
        </p>
      )}

      {child}

      {error && (
        <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
