import styled, { css } from "styled-components"
import { breakpoints } from "styles"
import { theme } from "styles"

const sharedHeading = css`
  color: ${theme.headingsColor};
  letter-spacing: -0.02em;
  font-weight: 700;
  line-height: 1.1;
`

export const H1 = styled.h1`
  ${sharedHeading}
  font-size: 32px;

  ${breakpoints.tablet} {
    font-size: 40px;
  }
  ${breakpoints.laptop} {
    font-size: 48px;
  }
  ${breakpoints.desktop} {
    font-size: 56px;
  }
  ${breakpoints.largeDesktop} {
    font-size: 64px;
  }
`

export const H2 = styled.h2`
  ${sharedHeading};
  font-size: 28px;

  ${breakpoints.tablet} {
    font-size: 32px;
  }
  ${breakpoints.laptop} {
    font-size: 40px;
  }
  ${breakpoints.desktop} {
    font-size: 48px;
  }
  ${breakpoints.largeDesktop} {
    font-size: 56px;
  }
`

export const H3 = styled.h3`
  ${sharedHeading}
  font-size: 26px;

  ${breakpoints.tablet} {
    font-size: 28px;
  }
  ${breakpoints.laptop} {
    font-size: 32px;
  }
  ${breakpoints.desktop} {
    font-size: 40px;
  }
  ${breakpoints.largeDesktop} {
    font-size: 48px;
  }
`

export const H4 = styled.h4`
  ${sharedHeading}
  font-weight: 600;
  font-size: 24px;

  ${breakpoints.tablet} {
    font-size: 24px;
  }
  ${breakpoints.laptop} {
    font-size: 28px;
  }
  ${breakpoints.desktop} {
    font-size: 32px;
  }
  ${breakpoints.largeDesktop} {
    font-size: 40px;
  }
`
export const H5 = styled.h4`
  ${sharedHeading}
  font-size: 20px;

  ${breakpoints.tablet} {
    font-size: 20px;
  }
  ${breakpoints.laptop} {
    font-size: 24px;
  }
  ${breakpoints.desktop} {
    font-size: 28px;
  }
  ${breakpoints.largeDesktop} {
    font-size: 32px;
  }
`
export const H6 = styled.h4`
  ${sharedHeading}
  font-weight: 600;
  font-size: 18px;

  ${breakpoints.tablet} {
    font-size: 18px;
  }
  ${breakpoints.laptop} {
    font-size: 20px;
  }
  ${breakpoints.desktop} {
    font-size: 24px;
  }
  ${breakpoints.largeDesktop} {
    font-size: 28px;
  }
`

export const SectionTitle = styled(H2)`
  margin-top: 120px;
  margin-bottom: 48px;
`
export const CenterSectionTitle = styled(SectionTitle)`
  text-align: center;
`

export const SubHeading = styled.p`
  color: ${theme.headingsColor};
  letter-spacing: -0.01em;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;

  ${breakpoints.tablet} {
    font-size: 16px;
  }
  ${breakpoints.laptop} {
    font-size: 18px;
  }
  ${breakpoints.desktop} {
    font-size: 20px;
  }
  ${breakpoints.largeDesktop} {
  }
`

// export const BodyIntro = styled.p`
//   font-weight: 500;
//   font-size: 24px;
//   line-height: 140%;
// `

// Rename to BodyLare
export const BodyText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 1.4;
  color: ${theme.bodyText};

  ${breakpoints.tablet} {
    font-size: 17px;
  }
  ${breakpoints.laptop} {
    font-size: 18px;
  }
  ${breakpoints.desktop} {
    font-size: 19px;
  }
  ${breakpoints.largeDesktop} {
    font-size: 20px;
  }
`
export const BodyMedium = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 1.5;
  color: ${theme.bodyText};

  ${breakpoints.tablet} {
    font-size: 15px;
  }
  ${breakpoints.laptop} {
    font-size: 16px;
  }
  ${breakpoints.desktop} {
    font-size: 17px;
  }
  ${breakpoints.largeDesktop} {
    font-size: 18px;
  }
`
