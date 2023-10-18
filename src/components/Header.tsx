import { createClient } from "@/prismicio"

import Wrapper from "@/components/atoms/Wrapper"
import Link from "@/components/atoms/Link"
import Logo from "@/components/atoms/Logo"

export default async function Header() {
  const client = createClient()
  const navigation = await client.getSingle("navigation")

  return (
    <header>
      <Wrapper>
        <div className="logo">
          <Link href="/">
            <Logo />
          </Link>
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
