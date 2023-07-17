import Link from "next/link"

const HomePage = () => {
  return (
    <>
      <nav>
        <Link href="/choose-country/">Choose Your Country</Link>
        <Link href={"/en-gb/about-us/"}>About Us</Link>
      </nav>
      <main>HomePage</main>
    </>
  )
}

export default HomePage

// locales: ["en-GB", "en-US", "es-ES", "en-AU", "en-IE", "en-DE", "en-NL"],
