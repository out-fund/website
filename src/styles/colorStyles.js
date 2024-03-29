import { css } from "styled-components"

export const cssVariables = css`
  /* Light/default variables */
  :root {
    --background: #f2f6fa;
    --darkblue: #051734;
    --blue: #003edb;
    --white: #fff;
    --bodyText: #1c3654;
  }

  /* Dark mode variagles */
  /* @media (prefers-color-scheme: dark) {
    :root {
      --backgroundColor: #faf;
    }
  } */
`

export const colors = {
  backgroundColor: "var(--background)",
  headingsColor: "var(--darkblue)",
  primaryAction: "var(--blue)",
  white: "var(--white)",
  bodyText: "var(--bodyText)",
}
