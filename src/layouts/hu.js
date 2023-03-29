import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const HU = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "hu", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      {/* {!noNavbar && (
        <NewsBar
          text="🎉 Az Outfund 115 millió fontot gyűjt az A sorozatú befektetésből, és idén további 500 millió GBP kölcsönt vállal e-kereskedelmi cégeknek!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Bővebben"
        />
      )} */}

      <LangProvider langKey="hu">
        {!simpleNavbar && !noNavbar && <Navbar lang="hu" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="hu" />}
        {children}
        {!noFooter && <FooterSimple lang="hu" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default HU
