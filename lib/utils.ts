import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2, // Remove cents for whole numbers
    maximumFractionDigits: 2, // Keep up to 2 decimal places for non-whole numbers
  }).format(value)
}
