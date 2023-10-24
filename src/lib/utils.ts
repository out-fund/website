import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}

export const convertLocaleToLang = (locale: string) => {
  return locale.split("-")[1]
    ? locale.split("-")[0] + "-" + locale.split("-")[1].toUpperCase()
    : "en-GB"
}
