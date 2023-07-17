import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { i18n } from "@/i18n-config"

import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // console.log("negotiatorHeaders", negotiatorHeaders)

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  // Matches locale with supported locales
  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  // console.log("locale", locale)
  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /about-us/
    // The new URL is now /en-US/about-us/
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    )
  }

  // console.log("pathnameIsMissingLocale", pathnameIsMissingLocale)
}

export const config = {
  // Matcher ignoring
  // `/_next/*`
  // `/api/*`
  // `/choose-country/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|choose-country).*)"],
}
