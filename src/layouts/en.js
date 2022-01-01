import * as React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import Navbar from "./../components/elements/Navbar"
import "./../styles/new/typography/font.css"
// import Footer from "components/Footer"

const EN = ({ children }) => {
  return (
    <GlobalLayout>
      <Navbar lang={"en"} />
      {children}
    </GlobalLayout>
  )
}

export default EN
