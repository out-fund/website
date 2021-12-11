import { css } from "styled-components"

export const cssVariables = css`
  /* Light/default variables */
  :root {
    --backgroundColor: #f2f6fa;
    --headingsColor: #051734;
  }

  /* Dark mode variagles */
  @media (prefers-color-scheme: dark) {
    :root {
      --backgroundColor: #faf;
    }
  }
`

export const colors = {
  backgroundColor: "var(--backgroundColor)",
  headingsColor: "var(--headingsColor)",
}
