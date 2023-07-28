import LocaleSwitcher from "@/components/LocaleSwitcher"
import { getAlternates } from "@/i18n-config"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://out.fund"),
  title: "Country Selector",
  description: "Funding for your business",
  alternates: {
    canonical: `/country-selector`,
  },
}

const CountrySelectorPage = () => {
  return (
    <main>
      <h1>Choose Your Country</h1>
      <LocaleSwitcher />
    </main>
  )
}

export default CountrySelectorPage
