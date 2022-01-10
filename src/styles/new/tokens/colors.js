import { css } from "styled-components"

export const colorVariables = css`
  /* Light/default variables */
  :root {
    --white: #fff;
    --gray100: #f2f6fa;
    --gray200: #bbc7d6;
    --gray300: #8a9cb0;
    --gray400: #1c3654;
    --gray500: #051734;

    --actiton-primary: #1a65ba;
    --actiton-secondary: #00a3d7;
  }

  /* Dark mode variagles */
  /* @media (prefers-color-scheme: dark) {
    :root {
      --backgroundColor: #faf;
    }
  } */
`

export const color = {
  white: "var(--white)",
  background: {
    default: "var(--white)",
    emphesized: "var(--gray100)",
  },
  storke: {
    default: "var(--gray200)",
  },
  text: {
    // body: "var(--gray400)",
    body: "var(--gray500)",
    placeholder: "var(--gray300)",
    headings: "var(--gray500)",
  },
  button: {
    primary: {
      color: "var(--white)",
      backgroundColor: "var(--actiton-primary)",
      hover: "#0956ac",
    },
    secondary: {
      color: "var(--actiton-primary)",
      backgroundColor: "transparetn",
      hover: "#deeeff",
    },
    tertiary: {
      color: "var(--actiton-secondary)",
      backgroundColor: "transparetn",
    },
  },
  input: {
    default: {
      border: "var(--gray200)",
      placeholder: "var(--gray300)",
    },
    focus: {
      border: "var(--actiton-primary)",
    },
  },
}

// const colors = {
//   blue: {
//     100: "#3a36e0",
//     200: "#0804b8",
//     300: "#030086",
//     400: "#5f25a4",
//     500: "#050449",
//   },
//   neutral: {
//     100: "#ffffff",
//     200: "#f4f5f7",
//     300: "#e1e1e1",
//     400: "#737581",
//     500: "#4a4b53",
//     600: "#000000",
//   },
// }
