import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const DE = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Outfund sammelt 115 Millionen Pfund inA Serien Investitionen ein und verpflichtet sich, in diesem Jahr weitere 500 Millionen Pfund an E-Commerce-Unternehmen zu verleihen!"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Mehr lesen"
        />
      )}

      <LangProvider langKey="de">
        {!simpleNavbar && !noNavbar && <Navbar lang="de" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="de" />}
        {children}
        {!noFooter && <FooterSimple lang="de" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default DE
