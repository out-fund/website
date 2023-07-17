// export const i18n = {
//   defaultLocale: "/",
//   locales: ["us", "au", "ie", "es"],
// } as const;
export const i18n = {
  defaultLocale: "en-GB",
  locales: ["en-GB", "en-US", "es-ES", "en-AU", "en-IE", "en-DE", "en-NL"],
} as const

export type Locale = (typeof i18n)["locales"][number]
