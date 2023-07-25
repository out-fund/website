import { Metadata } from "next"
import { locales } from "@/i18n-config"

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: `${locale}` }))
}

export const metadata: Metadata = {
  title: "Outfund",
  description: "Funding for your business",
}

const EnGbLayout = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) => {
  let htmlLang = params.lang
  if (params.lang.split("-")[1]) {
    htmlLang =
      params.lang.split("-")[0] + "-" + params.lang.split("-")[1].toUpperCase()
  } else {
    htmlLang = "en-GB"
  }
  return (
    <html lang={htmlLang}>
      <body>{children}</body>
    </html>
  )
}

export default EnGbLayout
