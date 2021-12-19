import styled, { css } from "styled-components"
import { theme } from "./../theme"

const sharedHeading = css`
  color: ${theme.color.text.headings};
  /* letter-spacing: -0.02em; */
  font-weight: 700;
  line-height: 1.1;
`
export const H1 = styled.h1`
  ${sharedHeading}
`

export const H2 = styled.h2`
  ${sharedHeading};

  font-size: 28px;
`

export const H3 = styled.h3`
  ${sharedHeading}
  font-size: 26px;
`

export const H4 = styled.h4`
  ${sharedHeading}
  font-weight: 600;
  font-size: 24px;
`
export const H5 = styled.h5`
  ${sharedHeading}
  font-size: 20px;
  font-weight: 600;
`
export const H6 = styled.h6`
  ${sharedHeading}
  font-weight: 600;
  font-size: 18px;
`
