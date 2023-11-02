import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const rentoformConfig = {
  // Replace with your own project name
  name: "Rentoform",
  // Replace with your own logo, 40x40px
  logo: "https://placehold.co/40",
}

export type RentformConfig = typeof rentoformConfig
