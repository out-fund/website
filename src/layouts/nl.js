import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const NL = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "nl", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Outfund haalt £ 115 miljoen in serie A-investeringen op en committeert zich dit jaar voor nog eens £ 500 miljoen aan leningen aan e-commercebedrijven!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Lees verder"
        />
      )}

      <LangProvider langKey="nl">
        {!simpleNavbar && !noNavbar && <Navbar lang="nl" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="nl" />}
        {children}
        {!noFooter && <FooterSimple lang="nl" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default NL
