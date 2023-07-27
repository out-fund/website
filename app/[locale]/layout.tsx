import { Metadata } from "next"
import Link from "next/link"
import { getHtmlLang } from "@/i18n-config"

export const metadata: Metadata = {
  metadataBase: new URL("https://out.fund"),
  title: {
    template: "%s | Outfund",
    default: "Outfund",
  },
}

const EnGbLayout = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) => {
  return (
    <html lang={getHtmlLang(params.locale)}>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/country-selector/">Choose Your Country</Link>
            </li>
            <li>
              <Link href={"/about-us/"}>About Us</Link>
            </li>
            <li>
              <Link href={`/${params.locale}/contact-us/`}>Contact us</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default EnGbLayout
