import React from "react"
import { theme } from "./../styles/new/theme"
import styled from "styled-components"

// const GlobalLayout = ({ children, location }) => {
const GlobalLayout = ({ children, pt }) => {
  return (
    <>
      <GlobalWrapper pt={pt}>{children}</GlobalWrapper>
    </>
  )
}

export default GlobalLayout

const GlobalWrapper = styled.div`
  overflow-x: hidden;
  ${(props) =>
    props.pt
      ? `padding-top: 0px;`
      : `padding-top: ${theme.size.navbarHeight}px;`}; ;
`
