import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

// TODO Add language context later
const Link = ({ children, to, ...props }) => {
  // console.log("Link", props)
  if (to)
    return (
      <StyledLink>
        <GatsbyLink to={to} {...props}>
          {children}
        </GatsbyLink>
      </StyledLink>
    )
  return (
    <StyledLink>
      <a {...props}>{children}</a>
    </StyledLink>
  )
}

export default Link

const StyledLink = styled.span`
  display: inline-block;
  a {
    white-space: nowrap;
    text-decoration: none;
  }
`
