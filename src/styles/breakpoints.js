export const breakpoints = {
  mobile: "@media (min-width: 280px)", // this is min-width based, so when using mobile it means all resolutions above 350
  tablet: "@media (min-width: 640px)",
  laptop: "@media (min-width: 1024px)",
  desktop: "@media (min-width: 1440px)",
  largeDesktop: "@media (min-width: 1800px)",

  belowMobile: "@media (max-width: 280px)", // this is min-width based, so when using mobile it means all resolutions above 350
  belowTablet: "@media (max-width: 640px)",
  belowLaptop: "@media (max-width: 1024px)",
  belowDesktop: "@media (max-width: 1440px)",
  belowLargeDesktop: "@media (max-width: 1800px)",
}
