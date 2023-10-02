import Link from "next/link"
import { getHref } from "@/i18n-config"
import { ValidLocale, getTranslationObject } from "@/i18n-config"

import { Logo, Wide } from "@/components/atoms"

import classes from "./Navbar.module.scss"
import utils from "@/styles/Utils.module.scss"

const Navbar = async ({ locale }: { locale: ValidLocale }) => {
  const t = await getTranslationObject(locale)
  return (
    <nav id="navbar">
      <Wide>
        <div className={classes.navbar}>
          <Link href={`/${locale}`} className={classes.logo}>
            <span className={utils.visuallyHidden}>Outfund</span>
            <Logo />
          </Link>
          <ul className={classes.primaryLinks}>
            <li>
              <Link href={getHref(locale, "how-funding-works")}>
                {t("navbar.howFundingWorks")}
              </Link>
            </li>
            <li>
              <Link href={getHref(locale, "about-us")}>
                {t("navbar.aboutUs")}
              </Link>
            </li>
            <li>
              <Link href="/">{t("navbar.faqs")}</Link>
            </li>
          </ul>
          <ul className={classes.secondaryLinks}>
            <li>
              <Link href="/">{t("navbar.login")}</Link>
            </li>
            <li>
              <i></i>
            </li>
            <li className={classes.countrySelector}>
              <Link href="/country-selector">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="#1C3654"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.424 10.188H1.812a6.56 6.56 0 0 0 6.19 4.383c-1.195 0-2.207-1.828-2.578-4.383ZM5.263 8c0-.733.053-1.464.16-2.189v0c.378-2.526 1.389-4.383 2.578-4.383a6.554 6.554 0 0 0-6.189 8.76h3.611A14.788 14.788 0 0 1 5.263 8v0Z"
                  />
                  <path
                    stroke="#1C3654"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 14.571a6.56 6.56 0 0 0 6.189-4.383h-3.612c-.371 2.555-1.383 4.383-2.577 4.383ZM8 1.428c1.194 0 2.206 1.829 2.577 4.383a15.177 15.177 0 0 1 0 4.377h3.612A6.56 6.56 0 0 0 8 1.428v0Z"
                  />
                  <path
                    stroke="#1C3654"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.266 8c-.001.732.052 1.464.16 2.188h5.143a14.79 14.79 0 0 0 0-4.377H5.426c-.108.725-.161 1.456-.16 2.189v0ZM10.578 10.188H5.436c.377 2.555 1.388 4.383 2.577 4.383 1.188 0 2.194-1.828 2.565-4.383ZM5.422 5.811h5.143c-.36-2.526-1.372-4.383-2.566-4.383-1.194 0-2.2 1.857-2.577 4.383ZM5.424 5.81H1.812M10.576 5.81H14.2"
                  />
                </svg>

                {t("navbar.selectCountry")}
              </Link>
            </li>
          </ul>
        </div>
      </Wide>
    </nav>
  )
}

export default Navbar
