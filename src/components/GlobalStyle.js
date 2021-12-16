import { createGlobalStyle, css } from "styled-components"
import { reset, resetDevelopment, normalize, theme, cssVariables } from "styles"
import isDevEnv from "./../utils/isDevEnv"

const rightReset = isDevEnv() ? resetDevelopment : reset

const globalCss = css`
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    padding-top: 80px;
    background-color: ${theme.backgroundColor};
    /*    ${theme.above.laptop} {
      padding-top: 104px;
    }*/
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }
  p {
    a,
    span,
    b {
      display: inline;
    }
    a {
      color: var(--blue);
    }
  }
`
// Component that gets imported in the index layout
const GlobalStyle = createGlobalStyle`
  ${cssVariables}
  ${rightReset}
  ${normalize}
  ${globalCss}
`
export default GlobalStyle
