import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { useLangProvider } from "./../../utils/LangProvider"

// TODO Add language context later
const Link = ({ children, to, ...props }) => {
  // console.log("Link", props)
  const langKey = useLangProvider()
  if (to && langKey !== "en") {
    to = "/" + langKey + to
  }
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
