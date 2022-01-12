import { createGlobalStyle, css } from "styled-components"
import { normalize } from "styles"
// This was causing the flicker, more info here https://github.com/styled-components/styled-components/issues/2205#issuecomment-438844490
// import { InterWebLatin } from "../typography/font"
// import isDevEnv from "./../utils/isDevEnv"

import { colorVariables } from "../tokens/colors"
import { reset } from "../../reset"
import { theme } from "../theme"

// const rightReset = isDevEnv() ? resetDevelopment : reset

const globalCss = css`
  html {
    /* scroll-behavior: smooth; */
  }
  body {
    /* padding-top: ${theme.size.navbarHeight}px; */
    overflow-x: hidden;
    font-size: 16px;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      "Helvetica", "Segoe UI", "Arial", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", sans-serif;
    line-height: 1;
    /* background-color: #ccc; */
    background-color: ${theme.color.white};
    font-feature-settings: "case" 0, "cpsp" 0, "dlig" 0, "frac" 0, "dnom" 0,
      "numr" 0, "salt" 0, "subs" 0, "sups" 0, "tnum" 0, "zero" 0, "ss01" 0,
      "ss02", "ss03" 0, "ss04" 0, "cv01" 0, "cv02", "cv03", "cv04", "cv05" 0,
      "cv06" 0, "cv07" 0, "cv08" 0, "cv09", "cv10" 0, "cv11" 0, "calt", "ccmp",
      "kern";
  }
  p {
    a {
      color: ${theme.color.button.primary.backgroundColor};
    }
  }
`
// Component that gets imported in the index layout
const GlobalStyle = createGlobalStyle`
  ${colorVariables}
  ${reset}
  ${normalize}
  ${globalCss}
`
export default GlobalStyle
