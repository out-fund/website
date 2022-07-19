import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const PL = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "pl", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Firma Outfund otrzymała inwestycję 115 mln GBP w ramach Serii A, i zapowiedzieła udzielić w tym roku dalsze 500 000 000 GBP pożyczek dla firm z branży e-commerce!"
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
