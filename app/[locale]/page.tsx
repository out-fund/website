import { Metadata } from "next"
import HeroBox from "@/components/HeroBox"
import TrustPilotStrip from "@/components/TrustPilotStrip"
import {
  ValidLocale,
  getTranslationObject,
  locales,
  getAlternates,
} from "@/i18n-config"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: ValidLocale }
}): Promise<Metadata> {
  return {
    title: {
      absolute: "Homepage | Outfund",
    },
    description: "Funding for your business",
    alternates: getAlternates("", params.locale),
  }
}

const HomePage = async ({ params }: { params: { locale: ValidLocale } }) => {
  const t = await getTranslationObject(params.locale)
  // console.log(params.locale)
  return (
    <>
      <HeroBox
        title={t("pages.home.title")}
        description={t("pages.home.description")}
      />
      <TrustPilotStrip />
      <footer>
        {t("footer.copyright", {
          year: new Date().getFullYear(),
        })}
      </footer>
    </>
  )
}

export default HomePage
