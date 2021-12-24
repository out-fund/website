import React from "react"
import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import { theme } from "./../../styles/new/theme"

const Button = ({
  to,
  variant,
  children,
  size,
  href,
  color,
  className,
  ...props
}) => {
  // console.log("btn", props)
  // const { to, variant, children, size } = props
  return (
    <ButtonWrap
      variant={variant}
      size={size}
      color={color}
      className={`ButtonWrap ${className ? className : ""}`}
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
              color: ${theme.color.button.primary.backgroundColor};
              box-shadow: inset 0px 0px 0px 1px
                ${theme.color.button.primary.backgroundColor};
            }
            &.currentPage {
              background-color: #deeeff;
            }
          `
        : variant === "navDropDown"
        ? css`
            box-shadow: inset 0px 0px 0px 1px transparent;
            background-color: transparent;
            color: #1c3654;
            transition: all 0.1s ease-in-out;
            position: relative;
            display: flex;
            align-items: center;

            /* Not sure if padding needs to be different here
               But I will leave it for now */
            padding: 8px 20px 8px 24px;

            &:after {
              position: relative;
              /* top: 17px;
              right: 12px; */
              display: inline-block;
              width: 8px;
              height: 6px;
              margin-left: 6px;
              background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6 0 2h8L4 6Z' fill='%23051734'/%3E%3C/svg%3E");
              opacity: 0.5;
              transition: all 0.1s ease-in-out;
              content: "";
            }
            :hover {
              /* background-color: #deeeff; */
              box-shadow: inset 0px 0px 0px 1px
                ${theme.color.button.primary.backgroundColor};
              &:after {
                opacity: 1;
              }
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
  variant: PropTypes.oneOf(["primary", "secondary", "navLink", "navDropDown"])
    .isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]).isRequired,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  size: "medium",
}
