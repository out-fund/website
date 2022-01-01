import React from "react"
// import GlobalStyle from "./../styles/new/utils/GlobalStyle"

// const GlobalLayout = ({ children, location }) => {
const GlobalLayout = ({ children }) => {
  // console.log("test", location)
  return (
    <>
      {/* <p>Helmet</p> */}
      {/* <GlobalStyle /> */}
      {children}
    </>
  )
}

export default GlobalLayout
