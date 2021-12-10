import * as React from "react"
import GlobalStyle from "components/GlobalStyle"

// const GlobalLayout = ({ children, location }) => {
const GlobalLayout = ({ children }) => {
  // console.log("test", location)
  return (
    <>
      {/* <p>Helmet</p> */}
      <GlobalStyle />
      {children}
    </>
  )
}

export default GlobalLayout
