import * as React from "react"
import Logo from "../images/svg/OutfundLogo.svg"
import styled from "styled-components"
import { SecondaryButton } from "./shared/Button"

const StyledNavbar = styled.nav`
  background-color: #f2f6fa;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 32px;
  .logo {
    background-color: #fff;
  }
`

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <Logo className="logo" />
      <SecondaryButton>Start live chat</SecondaryButton>
    </StyledNavbar>
  )
}

export default Navbar
