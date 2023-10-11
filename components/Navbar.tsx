// "use client"

// import { usePathname } from "next/navigation"
import Link from "next/link"
import { ValidLocale, getTranslationObject } from "@/i18n-config"

import { Logo, Wide, PageLink } from "@/components/atoms"

const Navbar = async ({ locale }: { locale: ValidLocale }) => {
  // const pathname = usePathname()
  // console.log(pathname)
  const t = await getTranslationObject(locale)
  return (
    <nav>
      <Wide>
        <div className="flex h-15 items-center">
          <Link href={`/${locale}`} className="grid">
            <span className="sr-only">Outfund</span>
            <Logo className="h-[26px] w-[142px]" />
          </Link>
          <ul className="relative top-[6px] ml-8 flex items-center gap-8">
            <li>
              <PageLink page="how-funding-works" locale={locale}>
                {t("navbar.howFundingWorks")}
              </PageLink>
            </li>
            <li>
              <PageLink page="about-us" locale={locale}>
                {t("navbar.aboutUs")}
              </PageLink>
            </li>
            <li>
              <PageLink page="faq" locale={locale}>
                {t("navbar.faqs")}
              </PageLink>
            </li>
          </ul>
          <ul className="relative top-[6px] ml-auto flex items-center gap-3">
            <li>
              <PageLink
                href="https://client.out.fund/signin"
                className="text-text"
              >
                {t("navbar.login")}
              </PageLink>
            </li>
            <li>
              <i className="block h-2 w-px bg-text opacity-50"></i>
            </li>

            <li>
              <PageLink
                page="country-selector"
                locale=""
                className="flex items-center gap-1 text-text"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="h-[16px] w-[16px]"
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
              </PageLink>
            </li>
          </ul>
        </div>
      </Wide>
    </nav>
  )
}

export default Navbar
