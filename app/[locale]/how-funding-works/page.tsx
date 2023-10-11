import { Metadata } from "next"
import parse from "html-react-parser"
// import Link from "next/link"

import {
  ValidLocale,
  getTranslationObject,
  locales,
  getAlternates,
} from "@/i18n-config"

import { Navbar, HeroBox } from "@/components"

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return {
    title: "How funding works",
    description: "Funding for your business",
    alternates: getAlternates("how-funding-works", params.locale),
  }
}

// const AboutUsPage = () => {
//   return (
const AboutUsPage = async ({ params }: { params: { locale: ValidLocale } }) => {
  const t = await getTranslationObject(params.locale)
  // console.log(params.locale)
  return (
    <>
      <header>
        <Navbar locale={params.locale} />
        <HeroBox
          title={"How our funding works"}
          description={t("pages.home.heroBox.description")}
          button={t("pages.home.heroBox.button")}
          note={t("pages.home.heroBox.note")}
          image={<section>Test</section>}
        />
      </header>
      <h1>How funding works</h1>
      <p>Lasdfasdfas</p>
    </>
  )
}

export default AboutUsPage
