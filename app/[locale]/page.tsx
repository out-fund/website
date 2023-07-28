import {
  ValidLocale,
  getTranslationObject,
  locales,
  getAlternates,
} from "@/i18n-config"
import { Metadata } from "next"

export async function generateStaticParams() {
  return locales.map((locale) =>
    locale === "en-gb" ? { locale: `/` } : { locale: `${locale}` }
  )
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return {
    title: {
      absolute: "Homepage | Outfund",
    },
    description: "Funding for your business",
    alternates: getAlternates("", params.locale),
  }
}

const HomePage = async ({ params }: { params: { locale: string } }) => {
  const t = await getTranslationObject(params.locale as ValidLocale)

  return (
    <>
      <h1>{JSON.stringify(params)}</h1>
      <h1>{t("welcome.helloWorld")}</h1>
    </>
  )
}

export default HomePage
