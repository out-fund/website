import Link from "next/link"
import { ValidLocale, getTranslationObject, locales } from "@/i18n-config"

// export async function generateStaticParams() {
//   // console.log(locales.map((locale) => ({ lang: `${locale}` })))
//   return locales.map((locale) => ({ lang: `${locale}` }))
// }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: `${locale}` }))
}

const HomePage = async ({ params }: { params: { locale: string } }) => {
  // console.log(params)
  const t = await getTranslationObject(params.locale as ValidLocale)

  return (
    <>
      <nav>
        <Link href="/choose-country/">Choose Your Country</Link>
        <Link href={"/about-us/"}>About Us</Link>
      </nav>
      <main>
        <h1>{JSON.stringify(params)}</h1>
        <h1>{t("welcome.helloWorld")}</h1>
      </main>
    </>
  )
}

export default HomePage
