import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const PL = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Firma Outfund zbiera 115 000 000 £ w inwestycji serii A i zobowiązuje się do dalszych 500 000 000 £ pożyczek dla firm z branży e-commerce w tym roku!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Czytaj dalej"
        />
      )}

      <LangProvider langKey="pl">
        {!simpleNavbar && !noNavbar && <Navbar lang="pl" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="pl" />}
        {children}
        {!noFooter && <FooterSimple lang="pl" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default PL
