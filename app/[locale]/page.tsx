import Link from "next/link"
import { ValidLocale, getTranslationObject, locales } from "@/i18n-config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Homepage | Outfund",
  },
  description: "Funding for your business",
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: `${locale}` }))
}

const HomePage = async ({ params }: { params: { locale: string } }) => {
  // console.log(params)
  const t = await getTranslationObject(params.locale as ValidLocale)

  return (
    <>
      <h1>{JSON.stringify(params)}</h1>
      <h1>{t("welcome.helloWorld")}</h1>
    </>
  )
}

export default HomePage
