import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"

import { Wrapper } from "@/components/atoms"

export default async function Footer() {
  const client = createClient()
  const navigation = await client.getSingle("footer")

  return (
    <footer>
      <Wrapper>
        <div className="logo">
          <Link href="/">Outfund</Link>
        </div>

        <ul>
          {navigation.data.company_links.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
        <ul>
          {navigation.data.funding_links.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
        <ul>
          {navigation.data.support_links.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>

        <div>
          Copyright © {new Date().getFullYear()} Outfund.{" "}
          {navigation.data.copyright}
        </div>
        <div>{navigation.data.fca_statement}</div>
        <ul>
          {navigation.data.policy_links.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </Wrapper>
    </footer>
  )
}
