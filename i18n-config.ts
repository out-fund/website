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
  const locale = pathname.split("/")[1]
  return locale
}

const translations = {
  "en-gb": () =>
    import("./translations/en-GB.json").then((module) => module.default),
  "es-es": () =>
    import("./translations/es-es.json").then((module) => module.default),
  "de-de": () =>
    import("./translations/de-de.json").then((module) => module.default),
} as const

export const getTranslation = async (locale: ValidLocale) => {
  // if translation exists, send it
  // @ts-ignore locales are readonly
  if (translations[locale]) {
    // @ts-ignore locales are readonly
    return await translations[locale]()
  }
  // if translation doesn't exist, send default
  return await translations[defaultLocale]()
}

export const getTranslationObject = async (locale: ValidLocale) => {
  const dictionary = await getTranslation(locale)
  // console.log("dictionary", dictionary)
  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary)
    if (!translation) {
      return key
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value))
      })
    }
    return translation
  }
}
