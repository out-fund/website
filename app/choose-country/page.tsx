import Link from "next/link"
import LocaleSwitcher from "@/components/LocaleSwitcher"

const ChooseYourCountryPage = () => {
  return (
    <main>
      <h1>Choose Your Country</h1>
      {/* <ul>
        <li>
          <Link href="/">United Kingdom</Link>
        </li>
      </ul> */}
      <LocaleSwitcher />
    </main>
  )
}

export default ChooseYourCountryPage
