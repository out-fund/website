import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const RO = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Outfund a ridicat 115 de milioane de lire sterline în investiții în seria A. Anul acesta se angajează să împrumute 500 de milioane de lire sterline firmelor de comerț electronic!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Află mai mult"
        />
      )}

      <LangProvider langKey="ro">
        {!simpleNavbar && !noNavbar && <Navbar lang="ro" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="ro" />}
        {children}
        {!noFooter && <FooterSimple lang="ro" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default RO
