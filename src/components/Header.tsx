import { createClient } from "@/prismicio"

import Wrapper from "@/components/atoms/Wrapper"
import Link from "@/components/atoms/Link"
import Logo from "@/components/atoms/Logo"

export default async function Header() {
  const client = createClient()
  const links = await client.getSingle("navbar")

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
            {links.data.navbar_left.map(({ label, link }) => (
              <li key={label}>
                <Link field={link}>{label}</Link>
              </li>
            ))}
            {links.data.navbar_right.map(({ label, link }) => (
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
