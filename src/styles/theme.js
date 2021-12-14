import { colors } from "./colorStyles"

// mobile: "@media (min-width: 280px)", // this is min-width based, so when using mobile it means all resolutions above 350
// tablet: "@media (min-width: 640px)",
// laptop: "@media (min-width: 1024px)",
// desktop: "@media (min-width: 1440px)",
// largeDesktop: "@media (min-width: 1800px)",

// belowMobile: "@media (max-width: 280px)", // this is min-width based, so when using mobile it means all resolutions above 350
// belowTablet: "@media (max-width: 640px)",
// belowLaptop: "@media (max-width: 1024px)",
// belowDesktop: "@media (max-width: 1440px)",
// belowLargeDesktop: "@media (max-width: 1800px)",

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
}

const shadows = {
  boxShadow:
    "0px 0.6px 1.3px rgba(1, 53, 113, 0.011), 0px 1.3px 3.2px rgba(1, 53, 113, 0.015), 0px 2.5px 6px rgba(1, 53, 113, 0.017), 0px 4.5px 10.7px rgba(1, 53, 113, 0.019), 0px 8.4px 20.1px rgba(1, 53, 113, 0.022), 0px 20px 48px rgba(1, 53, 113, 0.03), inset 0px 0px 0px 0.5px rgba(1, 53, 113, 0.1)",
}

export const theme = {
  ...colors,
  width,
  shadows,
  above,
  below,
  ...contentWidths,
}
