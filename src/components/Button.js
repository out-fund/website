import React from "react"
import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import { theme } from "styles"

const Button = ({ btnUrl, variant, children, size, href, color, ...props }) => {
  // console.log("btn", props)
  // const { btnUrl, variant, children, size } = props
  return (
    <ButtonWrap
      variant={variant}
      size={size}
      color={color}
      className="ButtonWrap"
    >
      {btnUrl ? (
        <GatsbyLink to={btnUrl} activeClassName="currentPage" {...props}>
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
            background-color: ${theme.primaryAction};
            color: ${theme.white};
            transition: background-color 0.1s ease-in-out;
            :hover {
              background-color: #0956ac;
            }
          `
        : variant === "secondary"
        ? css`
            box-shadow: ${(props) =>
              props.color === "white"
                ? `inset 0px 0px 0px 1px #fff`
                : `inset 0px 0px 0px 1px ${theme.primaryAction}`};

            background-color: transparent;
            color: ${(props) =>
              props.color === "white" ? "#fff" : theme.primaryAction};
            transition: background-color 0.1s ease-in-out;
            :hover {
              background-color: ${(props) =>
                props.color === "white" ? "rgba(255,255,255, 0.3)" : "#deeeff"};
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

export default Button
