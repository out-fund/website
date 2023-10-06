import { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { getHtmlLang, ValidLocale } from "@/i18n-config"

// import classes from "@/styles/Variables.module.scss"

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
      <body className="box-border">{children}</body>
    </html>
  )
}

export default GlobalLayout
