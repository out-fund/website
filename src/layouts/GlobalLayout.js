import React from "react"
import { theme } from "./../styles/new/theme"
import styled from "styled-components"
// import GlobalStyle from "./../styles/new/utils/GlobalStyle"

// import "./../styles/new/typography/font.css"

// const GlobalLayout = ({ children, location }) => {
const GlobalLayout = ({ children, pt }) => {
  // console.log("test", location)
  return (
    <>
      {/* <p>Helmet</p> */}
      {/* <GlobalStyle /> */}
      <GlobalWrapper pt={pt}>{children}</GlobalWrapper>
    </>
  )
}

export default GlobalLayout

const GlobalWrapper = styled.div`
  ${(props) =>
    props.pt
      ? `padding-top: 0px;`
      : `padding-top: ${theme.size.navbarHeight}px;`}; ;
`
