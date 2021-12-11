import { createGlobalStyle, css } from "styled-components"
import { reset, normalize, theme, cssVariables } from "styles"

const globalCss = css`
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    font-family: "Work Sans";
    background-color: ${theme.backgroundColor};
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
`
// Component that gets imported in the index layout
const GlobalStyle = createGlobalStyle`
  ${cssVariables}
  ${reset}
  ${normalize}
  ${globalCss}
`
export default GlobalStyle
