import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const CZ = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "cz", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Outfund vyplatil 115 milionů liber v investici série A a zavazuje se k půjčce dalších 500 milionům liber pro letošní firmy v e-podnikání!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Dočtěte se více"
        />
      )}

      <LangProvider langKey="cz">
        {!simpleNavbar && !noNavbar && <Navbar lang="cz" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="cz" />}
        {children}
        {!noFooter && <FooterSimple lang="cz" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default CZ
