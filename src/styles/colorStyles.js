import { css } from "styled-components"

export const colors = {
  light: {
    ctaPprimary: "#3913B8",
    ctaSecondary: "#2FB5FC",
    backgroundColor: "#f2f6ff",
  },
  dark: {
    primary: "#3913B8",
    secondary: "#2FB5FC",
    backgroundColor: "#f2f6ff",
  },
}

export const cssVariables = css`
  @media (prefers-color-scheme: dark) {
    :root {
      --ctaPprimary: #1a65ba;
      --ctaSecondary: #00a3d7;
      --backgroundColor: #f2f6fa;
    }
  }
`
