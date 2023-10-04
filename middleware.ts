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
      "sitemap.xml", // not sure if this is needed
      "robots.txt", // not sure if this is needed
      // Your other files in `public`
    ].includes(pathname)
  )
    return

  const curentLocale = getCurrentLocale(pathname)

  const pathnameIsMissingValidLocale = () => {
    // @ts-ignore locales are readonly
    return !locales.includes(curentLocale)
  }

  if (pathnameIsMissingValidLocale()) {
    const bestestMatchingLocale = findBestMatchingLocale(request)

    return NextResponse.redirect(
      new URL(`/${bestestMatchingLocale}${pathname}`, request.url)
    )
  }

  // console.log("----------------------------------")
  // console.log("request.url", request.url)
  // console.log("pathname", request.nextUrl.pathname)
  // console.log("curentLocale", curentLocale)
  // console.log("findBestMatchingLocale", findBestMatchingLocale(request))
  // console.log("defaultLocale", defaultLocale)
  // console.log("pathname stats", pathname.startsWith("/"))
}

export const config = {
  // Matcher ignoring
  // `/_next/*`
  // `/api/*`
  // `/country-selector/`
  // `/sitemap.xml` not sure why is this needed, but the page does not show if not added
  // `robots.txt`
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|country-selector|images).*)",
  ],
}
