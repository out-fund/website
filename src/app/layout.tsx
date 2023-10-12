import type { Metadata } from "next"
import cn from "@/utils/cn"

import "@/styles/globals.css"
import { worksans } from "@/utils/font"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(worksans.className)}>
      <body>{children}</body>
    </html>
  )
}
