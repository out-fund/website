export const defaultLocale = "en-gb"
export const locales = [
  "en-gb",
  "en-us",
  "es-es",
  "en-au",
  "en-ie",
  "en-de",
  "en-nl",
] as const
export type ValidLocale = (typeof locales)[number]

export const getLocale = (pathname: string) => {
  const locale = pathname.replaceAll("/", "")
  return locale
}

// export const i18n = {
//   defaultLocale: "en-gb",
//   locales: ["en-gb", "en-us", "es-es", "en-au", "en-ie", "en-de", "en-nl"],
// } as const

// export type locale = (typeof i18n)["locales"][number]
