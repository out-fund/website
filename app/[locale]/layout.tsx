import { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { getHtmlLang, ValidLocale } from "@/i18n-config"

export const metadata: Metadata = {
  metadataBase: new URL("https://out.fund"),
  title: {
    template: "%s | Outfund",
    default: "Outfund",
  },
}

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
})

const GlobalLayout = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: ValidLocale }
}) => {
  return (
    <html lang={getHtmlLang(params.locale)} className={workSans.className}>
      <body className="box-border bg-white tracking-tighter text-text	">
        {children}
      </body>
    </html>
  )
}

export default GlobalLayout
