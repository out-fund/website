import { css } from "styled-components"

// Modified version of the mayerweb reset
// http://meyerweb.com/eric/tools/css/reset/
// v2.0 | 20110126
// License: none (public domain)

export const reset = css`
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  article,
  aside,
  figure,
  figcaption,
  footer,
  header,
  menu,
  nav {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
    /* vertical-align: baseline; */
    /* border: 0; */
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    font-size: 16px;
    font-family: "Work Sans", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Helvetica", "Segoe UI", "Arial", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", sans-serif;
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  /* blockquote,
  q {
    quotes: none;
  } */
  /* blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  } */
  /* table {
    border-collapse: collapse;
    border-spacing: 0;
  } */
  /* Additions */
  input {
    box-sizing: border-box;
    background: red;
  }
`

// p {
//   a,
//   span,
//   b {
//     display: inline;
//   }
//   a {
//     color: var(--blue);
//   }
// }

// dl,
// dt,
// dd,
// ol,
// ul,
// li,

// b,
// u,
// i,
// small,
// strong,
// s
// em
// a,
// img,
