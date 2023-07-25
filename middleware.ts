import { NextRequest, NextResponse } from "next/server"
import { defaultLocale, locales, getCurrentLocale } from "@/i18n-config"

import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const findBestMatchingLocale = (request: NextRequest): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
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
  const curentLocale = getCurrentLocale(pathname)
  // console.log("----------------------------------")
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
  console.log("pathnameIsMissingValidLocale", pathnameIsMissingValidLocale())

  if (pathnameIsMissingValidLocale()) {
    const bestestMatchingLocale = findBestMatchingLocale(request)

    console.log("bestestMatchingLocale", bestestMatchingLocale)
    if (bestestMatchingLocale !== defaultLocale) {
      return NextResponse.redirect(
        new URL(`/${bestestMatchingLocale}${pathname}`, request.url)
      )
    } else {
      console.log("else")
      return NextResponse.rewrite(
        new URL(`/${defaultLocale}${pathname}`, request.url)
      )
    }
  }
}

export const config = {
  // Matcher ignoring
  // `/_next/*`
  // `/api/*`
  // `/choose-country/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|choose-country).*)"],
}
