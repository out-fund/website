import { Locale } from "../../i18n-config"
import LocaleSwitcher from "@/components/LocaleSwitcher"
import Link from "next/link"

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div>
      <h1>No interest funding for everyone</h1>
      <p>
        Outfund provides flexible revenue-based funding for all your needs. No
        raising interest rates to speak of, just s simple single fee. Learn more
      </p>
      <button>Check eligibility</button>
      <p>It won’t affect your credit score</p>

      <LocaleSwitcher />

      <p>Current locale: {lang}</p>
      <nav>
        <Link href="/choose-country/">Choose Your Country</Link>
        <Link
          href={{
            pathname: "/about-us/",
            query: { name: "test" },
          }}
        >
          About Us
        </Link>
        <Link
          href={{
            pathname: "/choose-country/",
          }}
        >
          CC
        </Link>
      </nav>
    </div>
  )
}

export default HomePage

// import Link from "next/link";

// const HomePage = () => {
//   return (
//     <>
//       <nav>
//         <Link href="/choose-country/">Choose Your Country</Link>
//         <Link
//           href={{
//             pathname: "/about-us/",
//             query: { name: "test" },
//           }}
//         >
//           About Us
//         </Link>
//       </nav>
//       <main>HomePage</main>
//     </>
//   );
// };

// export default HomePage;
