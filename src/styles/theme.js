import { colors } from "./colorStyles"
import { css } from "styled-components"
// import * as margins from "./margins"

const above = {
  mobile: "@media (min-width: 280px)",
  tablet: "@media (min-width: 640px)",
  laptop: "@media (min-width: 1024px)",
  mediumLaptop: "@media (min-width: 1224px)",
  desktop: "@media (min-width: 1470px)",
  mediumDesktop: "@media (min-width: 1670px)",
  largeDesktop: "@media (min-width: 1870px)",
}
const below = {
  mobile: "@media (max-width: 280px)",
  tablet: "@media (max-width: 640px)",
  laptop: "@media (max-width: 1024px)",
  mediumLaptop: "@media (max-width: 1224px)",
  desktop: "@media (max-width: 1470px)",
  mediumDesktop: "@media (max-width: 1640px)",
  largeDesktop: "@media (max-width: 1870px)",
}

const width = {
  text: "1170px",
  content: "1370px",
  image: "1570px",
  max: "1770px",
}

const contentWidths = {
  tablet: "80vw",
  laptop: "970px",
  mediumLaptop: "1170px",
  desktop: "1270px",
  mediumDesktop: "1470px",
  largeDesktop: "1670px",
  maxWidth: "1770px",
}
// const breakpoints = {
//   mobile: "280",
//   tablet: "640",
//   laptop: "1024",
//   mediumLaptop: "1224",
//   desktop: "1470",
//   mediumDesktop: "1640",
//   largeDesktop: "1870",
// }

const width2 = {
  xs: "770px",
  s: "970px",
  m: "1170px",
  l: "1270px",
  ll: "1370px",
  xl: "1470px",
  xxl: "1570px",
  max: "1770px",
  full: "100%",
}

const maxWidth = {
  xs: "41vw",
  s: "51vw",
  m: "61vw",
  l: "67vw",
  ll: "72vw",
  xl: "77vw",
  xxl: "81vw",
  max: "93vw",
  full: "100%",
}

const shadows = {
  boxShadow:
    "0px 0.6px 1.3px rgba(1, 53, 113, 0.011), 0px 1.3px 3.2px rgba(1, 53, 113, 0.015), 0px 2.5px 6px rgba(1, 53, 113, 0.017), 0px 4.5px 10.7px rgba(1, 53, 113, 0.019), 0px 8.4px 20.1px rgba(1, 53, 113, 0.022), 0px 20px 48px rgba(1, 53, 113, 0.03), inset 0px 0px 0px 0.5px rgba(1, 53, 113, 0.1)",
}

const margin = {
  button: css`
    margin-top: 16px;
    ${above.tablet} {
      margin-top: 24px;
    }
    ${above.laptop} {
      margin-top: 32px;
    }
  `,
  heroImage: css`
    margin: 16px 0;
    ${above.tablet} {
      margin: 24px 0;
    }
    ${above.laptop} {
      margin: 32px 0;
    }
  `,
}

export const theme = {
  ...colors,
  width,
  shadows,
  above,
  below,
  ...contentWidths,
  maxWidth,
  width2,
  margin,
}
