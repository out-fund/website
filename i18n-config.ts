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
  return pathname.split("/")[1]
}

const translations = {
  "en-gb": () =>
    import("./translations/en-gb.json").then((module) => module.default),
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

export const getHtmlLang = (locale: string) => {
  return locale.split("-")[1]
    ? locale.split("-")[0] + "-" + locale.split("-")[1].toUpperCase()
    : "en-GB"
}

export const getHref = (currentLocale: string, page: string) => {
  if (page) {
    if (currentLocale) return `/${currentLocale}/${page}`
    return `/${page}`
  }
  return `/${currentLocale}`
}

export const getAlternates = (pageUrl: string, locale: string) => {
  const languages: { [key: string]: string } = {}

  locales.forEach((loc) => {
    languages[getHtmlLang(loc)] = `/${loc}/${pageUrl}`
  })

  return {
    canonical: `/${locale}/${pageUrl}`,
    languages: languages,
  }
}
