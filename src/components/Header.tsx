import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
// import Link from "next/link"
import Wrapper from "@/components/atoms/Wrapper"

import Link from "@/components/atoms/Link"

export default async function Header() {
  const client = createClient()
  const navigation = await client.getSingle("navigation")

  return (
    <header>
      <Wrapper>
        <div className="logo">
          <Link href="/">Outfund</Link>
        </div>
        <nav>
          <ul>
            {navigation.data.navbar_links.map(({ label, link }) => (
              <li key={label}>
                <Link field={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </header>
  )
}
