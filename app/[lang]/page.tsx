import Link from "next/link"

// export default function HomePage({
//   params,
// }: {
//   params: { lang: string; country: string }
// }) {
//   return <h1>{JSON.stringify(params)}</h1>
// }

const HomePage = ({
  params,
}: {
  params: { lang: string; country: string }
}) => {
  return (
    <>
      <nav>
        <Link href="/choose-country/">Choose Your Country</Link>
        <Link href={"/about-us/"}>About Us</Link>
      </nav>
      <main>
        <h1>{JSON.stringify(params)}</h1>
      </main>
    </>
  )
}

export default HomePage

// locales: ["en-GB", "en-US", "es-ES", "en-AU", "en-IE", "en-DE", "en-NL"],
