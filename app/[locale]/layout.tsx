import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    template: "%s | Outfund",
    default: "Outfund",
  },
  description: "Funding for your business",
  // alternates: {
  //   canonical: `https://outfund.com/`,
  //   languages: {
  //     "en-GB": `https://outfund.com/`,
  //     "en-US": `https://outfund.com/en-us/`,

  //   }
  // },
}

const getHtmlLang = (locale: string) => {
  return locale.split("-")[0] + "-" + locale.split("-")[1].toUpperCase()
}

const EnGbLayout = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) => {
  console.log(`${params.locale}/contact-us/`)
  return (
    <html lang={getHtmlLang(params.locale)}>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/choose-country/">Choose Your Country</Link>
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
