import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const LT = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "lt", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      {/* {!noNavbar && (
        <NewsBar
          text="🎉 Outfund pritraukia 115 mln. svarų sterlingų A serijos investicijų ir įsipareigoja šiais metais paskolinti dar 500 mln. svarų sterlingų e. prekybos įmonėms!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Skaityti daugiau"
        />
      )} */}

      <LangProvider langKey="lt">
        {!simpleNavbar && !noNavbar && <Navbar lang="lt" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="lt" />}
        {children}
        {!noFooter && <FooterSimple lang="lt" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default LT
