import React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import { Navbar, FooterSimple, NewsBar } from "./../components"
import { SimpleNavbar } from "./../components/elements/Navbar"

import "./../styles/new/typography/font.css"

import { LangProvider } from "./../utils/LangProvider"

const FR = ({ children, simpleNavbar, pt, noNavbar, noFooter }) => {
  return (
    <GlobalLayout pt={pt}>
      {!noNavbar && (
        <NewsBar
          text="🎉 Outfund lève 115 millions de livres sterling en série A et s'engage à emprunter 500 millions de livres sterling supplémentaires aux entreprises de commerce électronique cette année !"
          url="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
          urlText="Lire la suite"
        />
      )}

      <LangProvider langKey="fr">
        {!simpleNavbar && !noNavbar && <Navbar lang="fr" />}
        {simpleNavbar && !noNavbar && <SimpleNavbar lang="fr" />}
        {children}
        {!noFooter && <FooterSimple lang="fr" />}
      </LangProvider>
    </GlobalLayout>
  )
}

export default FR
