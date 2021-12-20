import { createGlobalStyle, css } from "styled-components"
import { normalize, theme } from "styles"
import { InterWebLatin } from "./../styles/new/typography/font"
// import isDevEnv from "./../utils/isDevEnv"

import { colorVariables } from "./../styles/new/tokens/colors"
import { reset } from "./../styles/reset"

// const rightReset = isDevEnv() ? resetDevelopment : reset

const globalCss = css`
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    /* padding-top: 80px; */
    /* background-color: ${theme.backgroundColor}; */
    background-color: #ccc;
    /*    ${theme.above.laptop} {
      padding-top: 104px;
    }*/
    img,
    svg {
      max-width: 400px !important;
    }
    svg {
      max-height: 32px !important;
    }
  }
`
// Component that gets imported in the index layout
const GlobalStyle = createGlobalStyle`
  ${InterWebLatin}
  ${colorVariables}
  ${reset}
  ${normalize}
  ${globalCss}
`
export default GlobalStyle
