import { createGlobalStyle } from "styled-components"
import { reset, normalize } from "styles"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  body {
    font-family: "Work Sans";
    /* background-color: #f1f5fa;
    color: #1C3654; */
  }
  /* html {
    box-sizing: border-box;
    line-height: 1;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Work Sans", Arial, Helvetica, sans-serif;
    background-color: #f1f5fa;
    color: #1C3654;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #051734;
    letter-spacing: -0.02em;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  } */
`
export default GlobalStyle
