import { Metadata } from "next"
import parse from "html-react-parser"

import {
  Navbar,
  HeroBox,
  TrustPilotStrip,
  FindOut,
  Calculator,
  ClientsSay,
  AboutUs,
} from "@/components"

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
      <header>
        <Navbar locale={params.locale} />
        <HeroBox
          title={parse(t("pages.home.heroBox.title"))}
          description={t("pages.home.heroBox.description")}
          button={t("pages.home.heroBox.button")}
          note={t("pages.home.heroBox.note")}
        />
      </header>
      <main>
        <TrustPilotStrip reviews={[...t("pages.home.trustPilotData")]} />
        <FindOut
          title={parse(t("pages.home.findOut.title"))}
          description={t("pages.home.findOut.description")}
          title2={t("pages.home.findOut.title2")}
          list={[...t("pages.home.findOut.list")]}
        >
          <Calculator
            first={t("pages.home.calculator.first")}
            second={t("pages.home.calculator.second")}
            third={t("pages.home.calculator.third")}
            note={t("pages.home.calculator.note")}
            button={t("pages.home.calculator.button")}
            creditNote={t("pages.home.calculator.creditNote")}
            currency="£"
          />
        </FindOut>
        <ClientsSay
          title={t("pages.home.clientsSay.title")}
          clients={...t("pages.home.clientsSay.clients")}
        />

        <AboutUs title="About us" description="desc" />
      </main>

      <footer>
        {t("footer.copyright", {
          year: new Date().getFullYear(),
        })}
      </footer>
    </>
  )
}

export default HomePage
