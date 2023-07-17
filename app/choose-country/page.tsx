// import Link from "next/link"
import LocaleSwitcher from "@/components/LocaleSwitcher"

const ChooseYourCountryPage = () => {
  return (
    <main>
      <h1>Choose Your Country</h1>
      <LocaleSwitcher />
      {/* <ul>
        <li>
          <Link href="/">United Kingdom</Link>
        </li>
      </ul> */}
    </main>
  )
}

export default ChooseYourCountryPage
