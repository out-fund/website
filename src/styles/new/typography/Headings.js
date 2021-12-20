import styled, { css } from "styled-components"
import { theme } from "./../theme"

const sharedHeading = css`
  color: ${theme.color.text.headings};
  letter-spacing: -0.02em;
  line-height: 1.1;
`
export const H1 = styled.h1`
  ${sharedHeading}
  font-size: 64px;
  font-weight: 800;
`

export const H2 = styled.h2`
  ${sharedHeading};
  font-size: 48px;
  font-weight: 800;
`

export const H3 = styled.h3`
  ${sharedHeading}
  font-size: 32px;
  font-weight: 700;
`

export const H4 = styled.h4`
  ${sharedHeading}
  font-size: 24px;
  font-weight: 700;
`
export const H5 = styled.h5`
  ${sharedHeading}
  font-size: 20px;
  font-weight: 600;
`
export const H6 = styled.h6`
  ${sharedHeading}
  font-size: 18px;
  font-weight: 600;
`
