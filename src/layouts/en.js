import * as React from "react"
import GlobalLayout from "./GlobalLayout"
import Navbar from "./../components/Navbar"
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
