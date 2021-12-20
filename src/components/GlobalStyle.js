import { createGlobalStyle, css } from "styled-components"
import { normalize, theme, cssVariables } from "styles"
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
    /*    ${theme.above.laptop} {
      padding-top: 104px;
    }*/
  }
`
// Component that gets imported in the index layout
const GlobalStyle = createGlobalStyle`
  /* ${cssVariables} */
  ${colorVariables}
  ${reset}
  ${normalize}
  ${globalCss}
`
export default GlobalStyle
