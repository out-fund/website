import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"

export default async function Footer() {
  const client = createClient()
  const navigation = await client.getSingle("navigation")

  return (
    <header>
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
    </header>
  )
}
