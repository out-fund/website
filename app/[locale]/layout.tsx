import { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { getHtmlLang, ValidLocale } from "@/i18n-config"

import Navbar from "@/components/Navbar"
import styles from "@/styles/Global.module.scss"

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
    <html
      lang={getHtmlLang(params.locale)}
      className={[workSans.className, styles.global].join(" ")}
    >
      <body>
        <Navbar locale={params.locale} />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default GlobalLayout
