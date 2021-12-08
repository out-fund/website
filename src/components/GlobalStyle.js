import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
      background-color: #fff;
      margin: 0;
      padding: 0;
      font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      letter-spacing: -0.02em;
      color: #051734;
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
