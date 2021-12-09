import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(GatsbyLink)`
  background-color: ${(props) =>
    props.variant === "primary" ? "#1A65BA" : "transparent"};
  border: none;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 24px;
  border-radius: 36px;
  font-family: inherit;
  font-weight: 500;
  color: ${(props) => (props.variant === "primary" ? "#fff" : "#1A65BA")};
  text-decoration: none;
  display: inline-block;
  letter-spacing: -0.01em;

  box-shadow: ${(props) =>
    props.variant === "secondary" ? "inset 0px 0px 0px 1px #1a65ba" : "none"};
  position: relative;
  align-self: flex-start;
  ${(props) => {
    if (props.variant === "secondaryWhite")
      return `
          box-shadow: inset 0px 0px 0px 1px #fff;
          color: #fff;
        `
  }}
`

// TODO Add language context later
const Link = ({ variant, children, to, ...props }) => {
  return (
    <>
      <StyledLink to={to} variant={variant} {...props}>
        {children}
      </StyledLink>
    </>
  )
}

export default Link
