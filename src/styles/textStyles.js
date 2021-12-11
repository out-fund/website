import styled from "styled-components"
import { breakpoints } from "styles"
import { theme } from "styles"

export const H1 = styled.h1`
  color: ${theme.headingsColor};
  letter-spacing: -0.02em;
  font-weight: 700;
  font-size: 24px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 40px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 48px;
  }
  @media (min-width: ${breakpoints.largeDesktop}) {
    font-size: 64px;
  }
`

export const H2 = styled.h2`
  color: ${theme.headingsColor};
  letter-spacing: -0.02em;
  font-weight: 700;
  font-size: 24px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 40px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 48px;
  }
  @media (min-width: ${breakpoints.largeDesktop}) {
    font-size: 64px;
  }
`

export const H3 = styled.h3`
  color: ${theme.headingsColor};
  letter-spacing: -0.02em;
  font-weight: 700;
  font-size: 24px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 40px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 48px;
  }
  @media (min-width: ${breakpoints.largeDesktop}) {
    font-size: 64px;
  }
`
export const SubHeading = styled.p`
  color: ${theme.headingsColor};
  letter-spacing: -0.01em;
  font-size: 14px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 18px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
  }
  @media (min-width: ${breakpoints.largeDesktop}) {
  }
`

// export const BodyIntro = styled.p`
//   font-weight: 500;
//   font-size: 24px;
//   line-height: 140%;
// `

// export const BodyMain = styled.p`
//   font-weight: normal;
//   font-size: 20px;
//   line-height: 140%;
// `
