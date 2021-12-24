import * as React from "react"
import GlobalLayout from "./../layouts/GlobalLayout"
import Navbar from "./../components/elements/Navbar"
// import Footer from "components/Footer"

const ES = ({ children, ...props }) => {
  return (
    <GlobalLayout {...props}>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </GlobalLayout>
  )
}

export default ES
