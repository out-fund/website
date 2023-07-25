export const defaultLocale = "en-gb"
export const locales = [
  "en-gb",
  "en-us",
  "es-es",
  "en-au",
  "en-ie",
  "de-de",
  "en-de",
  "nl-nl",
  "en-nl",
] as const
export type ValidLocale = (typeof locales)[number]

export const getCurrentLocale = (pathname: string) => {
  // const locale = pathname.replaceAll("/", "")
  const locale = pathname.split("/")[1]
  return locale
}

// export const i18n = {
//   defaultLocale: "en-gb",
//   locales: ["en-gb", "en-us", "es-es", "en-au", "en-ie", "en-de", "en-nl"],
// } as const

// export type locale = (typeof i18n)["locales"][number]
