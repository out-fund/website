import React from "react"
import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import { theme } from "./../../styles/new/theme"
// import T from "./../../styles/new/typography"

const Button = ({
  to,
  variant,
  children,
  size,
  href,
  color,
  className,
  isOpen,
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
      isOpen={isOpen}
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
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 8px 24px;
    color: ${theme.color.text.headings};
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    white-space: nowrap;
    text-align: center;
    border: none;
    border-radius: 22px;
    cursor: pointer;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    :disabled {
      opacity: 0.5;
    }
    &:focus-visible {
      outline: 2px solid #000;
    }
    /* ${theme.above.t.s} {
      font-size: 17px;
    } */

    ${theme.above.d.m} {
      /* font-size: 18px; */
    }

    ${({ variant }) =>
      variant === "primary"
        ? css`
            background-color: ${theme.color.button.primary.backgroundColor};
            color: ${theme.color.white};
            transition: background-color 0.1s ease-in-out;
            font-weight: 600;
            :hover,
            :focus {
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
            :hover,
            :focus {
              background-color: ${(props) =>
                props.color === "white"
                  ? "rgba(255,255,255, 0.2)"
                  : theme.color.button.secondary.hover};
            }
          `
        : variant === "navLink"
        ? css`
            box-shadow: inset 0px 0px 0px 1px transparent;
            background-color: transparent;
            color: ${theme.color.text.headings};
            transition: all 0.1s ease-in-out;
            :hover,
            :focus {
              color: ${theme.color.button.primary.backgroundColor};
              box-shadow: inset 0px 0px 0px 1px
                ${theme.color.button.primary.backgroundColor};
            }
            &.currentPage {
              background-color: #deeeff;
            }
          `
        : variant === "footerLink"
        ? css`
            box-shadow: inset 0px 0px 0px 1px transparent;
            background-color: transparent;
            margin-left: -24px;
            /* color: ${theme.color.text.headings}; */
            color: #deeeff;
            transition: all 0.1s ease-in-out;
            :hover,
            :focus {
              /* color: ${theme.color.button.primary.backgroundColor}; */
              color: #fff;
              /* box-shadow: inset 0px 0px 0px 1px
                ${theme.color.button.primary.backgroundColor}; */
              box-shadow: inset 0px 0px 0px 1px #deeeff;
            }
            /* &.currentPage {
              background-color: #deeeff;
            } */
          `
        : variant === "countrySelector"
        ? css`
            box-shadow: inset 0px 0px 0px 1px #4f6781;
            background-color: transparent;
            margin-left: -24px;
            color: #deeeff;
            transition: all 0.1s ease-in-out;
            padding: 8px 24px 8px 24px;
            align-items: center;

            :hover,
            :focus {
              color: #fff;
              box-shadow: inset 0px 0px 0px 1px #fff;
            }
            &:after {
              position: relative;
              display: inline-block;
              width: 8px;
              height: 6px;
              margin-left: 6px;
              background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6 0 2h8L4 6Z' fill='%23fff'/%3E%3C/svg%3E");
              opacity: 0.5;
              transition: all 0.1s ease-in-out;
              content: "";
            }
          `
        : variant === "navDropDown"
        ? css`
            box-shadow: inset 0px 0px 0px 1px transparent;
            /* box-shadow: inset 0px 0px 0px 1px
              ${({ isOpen }) =>
              isOpen
                ? theme.color.button.primary.backgroundColor
                : "transparent"}; */

            background-color: transparent;
            /* color: ${theme.color.button.primary.backgroundColor}; */
            transition: all 0.1s ease-in-out;
            position: relative;
            display: flex;
            align-items: center;

            /* Not sure if padding needs to be different here
               But I will leave it for now */
            padding: 8px 24px 8px 24px;

            &:after {
              /* position: relative;
              display: inline-block;
              width: 8px;
              height: 6px;
              margin-left: 6px;
              background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6 0 2h8L4 6Z' fill='%23051734'/%3E%3C/svg%3E");
              opacity: 0.5;
              transition: all 0.1s ease-in-out;
              content: ""; */
            }
            :hover,
            :focus {
              /* background-color: #deeeff; */
              box-shadow: inset 0px 0px 0px 1px ${theme.color.text.headings};
              /* &:after {
                opacity: 1;
              } */
            }
            ${(props) =>
              props.isOpen
                ? css`
                    background-color: #fff;
                    &:after {
                      opacity: 1;
                    }
                  `
                : ""}
          `
        : ""};

    ${({ size }) =>
      size === "large"
        ? css`
            font-size: 16px;
            padding: 0.66666667em 1.77777778em;
            border-radius: 26px;

            ${theme.above.t.s} {
              /* font-size: 17px; */
            }

            ${theme.above.d.m} {
              padding: 12px 32px;
              font-size: 18px;
              line-height: 24px;
            }
          `
        : size === "small"
        ? css`
            font-size: 12px;
            padding: 0.57142857em 1.14285714em;
            border-radius: 20px;

            ${theme.above.t.s} {
              /* font-size: 13px; */
            }

            ${theme.above.d.m} {
              padding: 8px 16px;
              font-size: 14px;
            }
          `
        : ""};
  }
`

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "navLink",
    "navDropDown",
    "footerLink",
    "countrySelector",
  ]).isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

Button.defaultProps = {
  size: "medium",
}
