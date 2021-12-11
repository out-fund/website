import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import { theme } from "styles"

export default function Button(props) {
  const { btnUrl, variant, children } = props
  return (
    <>
      {btnUrl ? (
        <StyledLink to={btnUrl} as={GatsbyLink} {...props}>
          {children}
        </StyledLink>
      ) : (
        <StyledButton {...props}>{children}</StyledButton>
      )}
    </>
  )
}

const Base = styled.button`
  display: inline-block;

  /* border: none;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 24px;
  border-radius: 36px;
  font-family: inherit;
  font-weight: 500;
  display: inline-block; */

  ${(props) => {
    if (props.variant === "primary")
      return `
          background-color: ${theme.primaryAction};
          color: ${theme.white};
        `
    if (props.variant === "secondary")
      return `
          box-shadow: inset 0px 0px 0px 1px ${theme.primaryAction};
          background-color: transparent;
        `
  }};
`
const StyledButton = styled(Base)``
const StyledLink = styled(Base)`
  text-decoration: none;
`

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
}

// const Secondary = styled(Buton)`
//   /* background-color: #ffa; */
//   background-color: transparent;
//   color: #1a65ba;
//   box-shadow: inset 0px 0px 0px 1px #1a65ba;
// `

// export const PrimaryButton = ({ children, ...props }) => {
//   return <Primary {...props}>{children}</Primary>
// }

// export const SecondaryButton = ({ children, ...props }) => {
//   return <Secondary {...props}>{children}</Secondary>
// }
