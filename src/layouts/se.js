import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const SV = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Outfund tar in 115 miljoner pund i en serie A-investering och förbinder sig att låna ut ytterligare 500 miljoner pund till e-handelsföretag i år!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Läs mer"
        />
      )}

      <LangProvider langKey="sv">
        {!simpleNavbar && !noNavbar && <Navbar lang="sv" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="sv" />}
        {children}
        {!noFooter && <FooterSimple lang="sv" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default SV
