import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', Arial, Helvetica, sans-serif;
    font-feature-settings: "ss06" on, "ss01" on;
  }

  h1, h2, h3, h4{
    letter-spacing: -0.02em;
    /* font-feature-settings: "ss02" on, "ss03" on, "ss04" on; */
  }
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`

export default GlobalStyle
