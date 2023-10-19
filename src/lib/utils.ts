export const convertLocaleToLang = (locale: string) => {
  return locale.split("-")[1]
    ? locale.split("-")[0] + "-" + locale.split("-")[1].toUpperCase()
    : "en-GB"
}
