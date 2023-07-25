import { NextRequest, NextResponse } from "next/server"
import { defaultLocale, locales, getCurrentLocale } from "@/i18n-config"

import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const findBestMatchingLocale = (request: NextRequest): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  // @ts-ignore complaining about value and key types
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const localesList: string[] = locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    localesList
  )
  const matchedLocale = matchLocale(languages, localesList, defaultLocale)
  return matchedLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      "manifest.json",
      "favicon.ico",
      // Your other files in `public`
    ].includes(pathname)
  )
    return

  const curentLocale = getCurrentLocale(pathname)
  console.log("----------------------------------")
  // console.log("request.url", request.url)
  // console.log("pathname", request.nextUrl.pathname)
  // console.log("curentLocale", curentLocale)
  // console.log("findBestMatchingLocale", findBestMatchingLocale(request))
  // console.log("defaultLocale", defaultLocale)

  if (curentLocale === defaultLocale) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${curentLocale}/`,
          pathname.startsWith("/") ? "/" : ""
        ),
        request.url
      )
    )
  }

  const pathnameIsMissingValidLocale = () => {
    // @ts-ignore locales are readonly
    const localesList: string[] = locales
    return !localesList.includes(curentLocale)
  }
  // console.log("pathnameIsMissingValidLocale", pathnameIsMissingValidLocale())

  if (pathnameIsMissingValidLocale()) {
    const bestestMatchingLocale = findBestMatchingLocale(request)

    // console.log("bestestMatchingLocale", bestestMatchingLocale)
    if (bestestMatchingLocale !== defaultLocale) {
      return NextResponse.redirect(
        new URL(`/${bestestMatchingLocale}${pathname}`, request.url)
      )
    } else {
      // console.log("else")
      return NextResponse.rewrite(
        new URL(`/${defaultLocale}${pathname}`, request.url)
      )
    }
  }
}

// export const getHtmlLang = (locale: ValidLocale) => {
//   console.log(locale)
//   // const htmlLang =
//   //   locale.split("-")[0] + "-" + locale.split("-")[1].toUpperCase()
//   // let htmlLang = params.locale
//   // if (params.locale.split("-")[1]) {
//   //   htmlLang =
//   //     params.locale.split("-")[0] +
//   //     "-" +
//   //     params.locale.split("-")[1].toUpperCase()
//   // } else {
//   //   htmlLang = "en-GB"
//   // }
//   return "test"
// }

export const config = {
  // Matcher ignoring
  // `/_next/*`
  // `/api/*`
  // `/choose-country/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|choose-country).*)"],
}
