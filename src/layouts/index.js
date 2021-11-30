import * as React from "react"
import GlobalStyle from "../components/shared/GlogalStyl"

const Layout = ({ children, location }) => {
  // console.log("test", location)
  return (
    <>
      {/* <p>Helmet</p> */}
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
