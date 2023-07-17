import Link from "next/link"

const HomePage = () => {
  return (
    <>
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
      </nav>
      <main>HomePage</main>
    </>
  )
}

export default HomePage
