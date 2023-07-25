import { Metadata } from "next"
// import { getHtmlLang } from "@/i18n-config"
import { locales, getTranslation } from "@/i18n-config"

// export async function generateStaticParams() {
//   return locales.map((locale) => ({ locale: `${locale}` }))
// }

export const metadata: Metadata = {
  title: "Outfund",
  description: "Funding for your business",
}

// const getHtmlLang = () => {
//   return "en-GB"
// }

const EnGbLayout = ({ children }: { children: React.ReactNode }) => {
  // console.log(params)
  // const htmlLang = await getHtmlLang()

  return (
    <html lang="test">
      <body>{children}</body>
    </html>
  )
}

export default EnGbLayout
