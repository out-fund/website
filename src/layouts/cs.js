import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const CS = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Outfund vyplatil 115 milionů liber v investici série A a zavazuje se k půjčce dalších 500 milionům liber pro letošní firmy v e-podnikání!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Dočtěte se více"
        />
      )}

      <LangProvider langKey="cs">
        {!simpleNavbar && !noNavbar && <Navbar lang="cs" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="cs" />}
        {children}
        {!noFooter && <FooterSimple lang="cs" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default CS
