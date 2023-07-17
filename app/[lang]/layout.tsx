import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Outfund",
//   description: "Funding for your business",
// };

// const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// };

// export default GlobalLayout;
import Head from "next/head"
import { i18n } from "../../i18n-config"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: "Outfund",
  description: "Funding for your business",
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <Head>
        <meta http-equiv="Content-Language" content="en" />
      </Head>
      <body>{children}</body>
    </html>
  )
}

// export const metadata = {
//   title: "Outfund",
//   description: "Funding designed for your business",
//   "Content-Language": "en",
// }
