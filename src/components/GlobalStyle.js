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
    font-feature-settings: "case" 0, "cpsp" 0, "dlig" 0, "frac" 0, "dnom" 0,
      "numr" 0, "salt" 0, "subs" 0, "sups" 0, "tnum" 0, "zero" 0, "ss01" 0,
      "ss02", "ss03" 0, "ss04" 0, "cv01" 0, "cv02", "cv03", "cv04", "cv05" 0,
      "cv06" 0, "cv07" 0, "cv08" 0, "cv09", "cv10" 0, "cv11" 0, "calt", "ccmp",
      "kern";
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
