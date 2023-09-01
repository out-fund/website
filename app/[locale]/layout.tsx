import { Metadata } from "next"

import { getHtmlLang, ValidLocale } from "@/i18n-config"

import Navbar from "@/components/Navbar"

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
  params: { locale: ValidLocale }
}) => {
  return (
    <html lang={getHtmlLang(params.locale)}>
      <body>
        <Navbar locale={params.locale} />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default GlobalLayout
