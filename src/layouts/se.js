import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const SE = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "se", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      {/* {!noNavbar && (
        <NewsBar
          text="🎉 Outfund tar in 115 miljoner pund i en serie A-investering och förbinder sig att låna ut ytterligare 500 miljoner pund till e-handelsföretag i år!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Läs mer"
        />
      )} */}

      <LangProvider langKey="se">
        {!simpleNavbar && !noNavbar && <Navbar lang="se" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="se" />}
        {children}
        {!noFooter && <FooterSimple lang="se" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default SE
