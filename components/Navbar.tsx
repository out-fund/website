import Link from "next/link"
import { getHref } from "@/i18n-config"

import { ValidLocale, getTranslationObject } from "@/i18n-config"

const Navbar = async ({ locale }: { locale: ValidLocale }) => {
  const t = await getTranslationObject(locale)
  return (
    <nav>
      <ul>
        <li>
          <Link href={`/${locale}`}>Logo</Link>
        </li>
        <li>
          <Link href="/">{t("navbar.howFundingWorks")}</Link>
        </li>
        <li>
          <Link href={getHref(locale, "about-us")}>{t("navbar.aboutUs")}</Link>
        </li>
        <li>
          <Link href="/">{t("navbar.faqs")}</Link>
        </li>
        <li>
          <Link href="/">{t("navbar.login")}</Link>
        </li>
        <li>
          <Link href="/country-selector">{t("navbar.selectCountry")}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
