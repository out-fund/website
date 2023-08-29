import {
  ValidLocale,
  getTranslationObject,
  locales,
  getAlternates,
} from "@/i18n-config"
import { Metadata } from "next"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
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
  // console.log(params.locale)
  return (
    <>
      <h1>{t("pages.home.title")}</h1>
      <footer>
        {t("footer.copyright", {
          year: new Date().getFullYear(),
        })}
      </footer>
    </>
  )
}

export default HomePage
