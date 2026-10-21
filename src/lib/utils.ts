import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Install clsx + tailwind-merge if not already present
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a USD amount */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
}
