import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"

export default async function Header() {
  const client = createClient()
  const navigation = await client.getSingle("navigation")

  return (
    <header>
      <h1>Header</h1>
      <div className="logo">
        <Link href="/">Outfund</Link>
      </div>
      <nav>
        <ul>
          {navigation.data.navbar_links.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
