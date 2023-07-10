import React, { useEffect } from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"
import Cookies from "js-cookie"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const PT = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  useEffect(() => {
    Cookies.set("languageGetFunded", "pt", { domain: "out.fund" })
  }, [])

  return (
    <GlobalLayout pt={pt}>
      {/* {!noNavbar && (
        <NewsBar
          text="🎉 A Outfund angariou 115 milhões de GBP em investimentos de série A e compromete-se, ainda este ano, a obter mais 500 milhões para empréstimos a empresas de comércio eletrónico!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Mais informações"
        />
      )} */}

      <LangProvider langKey="pt">
        {!simpleNavbar && !noNavbar && <Navbar lang="pt" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="pt" />}
        {children}
        {!noFooter && <FooterSimple lang="pt" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default PT
