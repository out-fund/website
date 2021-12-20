import React from "react"
import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import { theme } from "./../styles/new/theme"

const Button = ({ to, variant, children, size, href, color, ...props }) => {
  // console.log("btn", props)
  // const { to, variant, children, size } = props
  return (
    <ButtonWrap
      variant={variant}
      size={size}
      color={color}
      className="ButtonWrap"
    >
      {to ? (
        <GatsbyLink to={to} activeClassName="currentPage" {...props}>
          {children}
        </GatsbyLink>
      ) : href ? (
        <a href={href} {...props}>
          {children}
        </a>
      ) : (
        <button {...props}>{children}</button>
      )}
    </ButtonWrap>
  )
}

export default Button

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
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    white-space: nowrap;
    text-align: center;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    user-select: none;

    :disabled {
      opacity: 0.5;
    }

    ${({ variant }) =>
      variant === "primary"
        ? css`
            background-color: ${theme.color.button.primary.backgroundColor};
            color: ${theme.color.white};
            transition: background-color 0.1s ease-in-out;
            :hover {
              background-color: ${theme.color.button.primary.hover};
            }
          `
        : variant === "secondary"
        ? css`
            box-shadow: ${(props) =>
              props.color === "white"
                ? `inset 0px 0px 0px 1px ${theme.color.white}`
                : `inset 0px 0px 0px 1px ${theme.color.button.secondary.color}`};

            background-color: ${theme.color.button.secondary.backgroundColor};
            color: ${(props) =>
              props.color === "white"
                ? theme.color.white
                : theme.color.button.secondary.color};
            transition: background-color 0.1s ease-in-out;
            :hover {
              background-color: ${(props) =>
                props.color === "white"
                  ? theme.color.white
                  : theme.color.button.secondary.hover};
            }
          `
        : variant === "navLink"
        ? css`
            box-shadow: inset 0px 0px 0px 1px transparent;
            background-color: transparent;
            color: #1c3654;
            transition: all 0.1s ease-in-out;
            :hover {
              color: ${theme.primaryAction};
              box-shadow: inset 0px 0px 0px 1px ${theme.primaryAction};
            }
            &.currentPage {
              background-color: #deeeff;
            }
          `
        : ""};

    ${({ size }) =>
      size === "large"
        ? css`
            font-size: 18px;
            padding: 12px 32px;
            border-radius: 24px;
          `
        : size === "small"
        ? css`
            font-size: 14px;
            padding: 8px 16px;
            border-radius: 18px;
          `
        : ""};
  }
`

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "navLink"]).isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]).isRequired,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  size: "medium",
}
