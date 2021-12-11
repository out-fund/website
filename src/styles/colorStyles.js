import { css } from "styled-components"

export const colors = {
  backgroundColor: "var(--backgroundColor)",
}

export const cssVariables = css`
  /* Light/default variables */
  :root {
    --backgroundColor: #f2f6fa;
  }

  /* Dark mode variagles */
  @media (prefers-color-scheme: dark) {
    :root {
      --backgroundColor: #faf;
    }
  }
`
