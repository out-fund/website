import React from "react"
import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import { theme, breakpoints } from "styles"

const Button = ({ btnUrl, variant, children, size, ...props }) => {
  // console.log("btn", props)
  // const { btnUrl, variant, children, size } = props
  return (
    <ButtonWrap variant={variant} size={size}>
      {btnUrl ? (
        <GatsbyLink to={btnUrl} {...props}>
          {children}
        </GatsbyLink>
      ) : (
        <button {...props}>{children}</button>
      )}
    </ButtonWrap>
  )
}

const ButtonWrap = styled.div`
  display: inline-block;
  a {
    text-decoration: none;
  }

  a,
  button {
    display: inline-block;
    margin: 0;
    padding: 8px 24px;
    font-size: 16px;
    line-height: 1.5;
    border: none;
    border-radius: 20px;
    cursor: pointer;

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
          color: ${theme.primaryAction};
        `
    }}

    ${(props) => {
      if (props.size === "large")
        return `
            font-size: 18px;
            padding: 12px 32px;
            border-radius: 24px;
          `
      if (props.size === "small")
        return `
            font-size: 14px;
            padding: 8px 16px;
            border-radius: 16px;
          `
    }};
  }
`

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]).isRequired,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  size: "medium",
}

export default Button
