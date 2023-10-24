import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"
import { sortLocales } from "@/lib/utils"

import { Wrapper, PageLink, Logo } from "@/components/atoms"

type FooterParams = {
  locale: string
}

export default async function Footer({ locale }: FooterParams) {
  const client = createClient()
  const navigation = await client.getSingle("footer")

  const repository = await client.getRepository()
  const locales = sortLocales(repository.languages)

  return (
    <footer className="bg-bgMedium">
      <Wrapper>
        <div className="flex flex-col pt-10">
          <div className="top">
            <div className="grid grid-cols-5">
              {/* <div className="logo">
                <Link href="/">Outfund</Link>
              </div> */}
              <Link href={`/${locale}`} className="h-[26px] w-[142px]">
                <span className="sr-only">Outfund</span>
                <Logo variant="mono" />
              </Link>

              <ul className="flex flex-col gap-2">
                {navigation.data.company_links.map(({ label, link }) => (
                  <li key={label}>
                    <PageLink field={link} className="text-body">
                      {label}
                    </PageLink>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                {navigation.data.funding_links.map(({ label, link }) => (
                  <li key={label}>
                    <PageLink field={link} className="text-body">
                      {label}
                    </PageLink>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                {navigation.data.support_links.map(({ label, link }) => (
                  <li key={label}>
                    <PageLink field={link} className="text-body">
                      {label}
                    </PageLink>
                  </li>
                ))}
              </ul>
              <div className="availableIn">
                <ul className=" flex flex-col gap-2">
                  {locales.map((locale) => (
                    <li key={locale.id} className="flex gap-2">
                      {/* <span className={`fi fi-${locale.id.split("-")[1]}`} /> */}
                      <Link
                        href={`/${locale.id}`}
                        className="inline-block text-base font-[500] text-body underline-offset-2 antialiased hover:underline focus:underline focus:outline-none"
                      >
                        {locale.name.split("- ")[1]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-5 mt-5 max-w-[800px] text-sm text-body">
            {navigation.data.fca_statement}
          </div>
          <div className="bottom flex justify-between pb-5">
            <div className="text-xs text-body">
              Copyright © {new Date().getFullYear()} Outfund.{" "}
              {navigation.data.copyright}
            </div>
            <ul className="flex gap-2 ">
              {navigation.data.policy_links.map(({ label, link }) => (
                <li key={label}>
                  <PageLink
                    field={link}
                    className="text-xs text-body underline"
                  >
                    {label}
                  </PageLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
