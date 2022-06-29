import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const IT = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Quest’anno, Outfund raccoglie 115.000.000 £ in investimenti di serie A e impegna ulteriori 500.000.000 £ di credito alle società di e-commerce!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Leggi di più"
        />
      )}

      <LangProvider langKey="it">
        {!simpleNavbar && !noNavbar && <Navbar lang="it" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="it" />}
        {children}
        {!noFooter && <FooterSimple lang="it" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default IT
