import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

// TODO Add language context later
const Link = ({ children, to, ...props }) => {
  // console.log("Link", props)
  return (
    <StyledLink>
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    </StyledLink>
  )
}

export default Link

const StyledLink = styled.div`
  display: inline-block;
  a {
    white-space: nowrap;
  }
`
