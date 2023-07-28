import {
  ValidLocale,
  getTranslationObject,
  locales,
  getAlternates,
} from "@/i18n-config"
import { Metadata } from "next"

export async function generateStaticParams() {
  return [
    { locale: "en-gb" },
    { locale: "en-us" },
    { locale: "es-es" },
    { locale: "en-au" },
    { locale: "en-ie" },
    { locale: "de-de" },
    { locale: "en-de" },
    { locale: "nl-nl" },
    { locale: "en-nl" },
  ]
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
      {/* <h1>{JSON.stringify(params)}</h1> */}
      <h1>{t("welcome.helloWorld")}</h1>
    </>
  )
}

export default HomePage
