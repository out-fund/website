import React from "react"
import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import { theme, breakpoints } from "styles"

const Button = ({ btnUrl, variant, children, size, ...props }) => {
  // console.log("btn", props)
  // const { btnUrl, variant, children, size } = props
  return (
    <ButtonWrap>
      {btnUrl ? (
        <GatsbyLink to={btnUrl} {...props}>
          <StyledButton variant={variant} size={size}>
            {children}
          </StyledButton>
        </GatsbyLink>
      ) : (
        <button {...props}>
          <StyledButton variant={variant} size={size}>
            {children}
          </StyledButton>
        </button>
      )}
    </ButtonWrap>
  )
}

const ButtonWrap = styled.span`
  &,
  a {
    display: inline-block;
  }
  button {
    margin: 0;
    padding: 0;
    line-height: 1;
    background-color: transparent;
    border: none;
  }
`

// const StyledLink = styled.a`
//   display: inline-block;
//   font-size: 16px;
//   padding: 8px 24px;
//   border: none;
//   ${(props) => {
//     if (props.variant === "primary")
//       return `
//         background-color: ${theme.primaryAction};
//         color: ${theme.white};
//       `
//     if (props.variant === "secondary")
//       return `
//         box-shadow: inset 0px 0px 0px 1px ${theme.primaryAction};
//         background-color: transparent;
//         color: ${theme.primaryAction};
//       `
//   }};
// `

const StyledButton = styled.span`
  display: inline-block;
  font-size: 16px;
  padding: 8px 24px;
  border: none;
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
        `
    if (props.size === "small")
      return `
          font-size: 14px;
          padding: 8px 16px;
        `
  }};
`

// const Base = css`

//   /* border: none;
//   font-size: 16px;
//   line-height: 1.5;
//   padding: 8px 24px;
//   border-radius: 36px;
//   font-family: inherit;
//   font-weight: 500;
//   display: inline-block; */
// `
// const StyledButton = styled.button`
//   ${Base}
// `
// const StyledLink = styled.div`
//   ${Base}

//   text-decoration: none;

// ${(props) => {
//   if (props.size === "large")
//     return `
//         font-size: 18px;
//         padding: 12px 32px;
//       `
//   if (props.size === "small")
//     return `
//         font-size: 14px;
//         padding: 8px 16px;
//       `
// }};

// `

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]).isRequired,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  size: "medium",
}

export default Button

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
