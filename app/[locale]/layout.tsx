import { Metadata } from "next"
import Link from "next/link"
import { getHtmlLang, getHref } from "@/i18n-config"

export const metadata: Metadata = {
  metadataBase: new URL("https://out.fund"),
  title: {
    template: "%s | Outfund",
    default: "Outfund",
  },
}

const GlobalLayout = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) => {
  // console.log("GlobalLayout", params)
  return (
    <html lang={getHtmlLang(params.locale)}>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/country-selector">Choose Your Country</Link>
            </li>
            <li>
              <Link href={getHref(params.locale, "about-us")}>About us</Link>
            </li>
            <li>
              <Link href={getHref(params.locale, "contact-us")}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default GlobalLayout
