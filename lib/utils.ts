import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const IMPACTIT_CONFIG = {
  isProd: process.env.NEXT_PUBLIC_VERCEL_ENV === "production",
};
