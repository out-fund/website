import styled, { css } from "styled-components"
import { theme } from "./../theme"

const sharedHeading = css`
  color: ${theme.color.text.headings};
  letter-spacing: -0.02em;
  line-height: 1.1;
`
export const H1 = styled.h1`
  ${sharedHeading}
  font-weight: 800;
  font-size: 32px;

  ${theme.above.p.m} {
    font-size: 40px;
  }

  ${theme.above.t.s} {
    font-size: 48px;
  }
  ${theme.above.l.m} {
    font-size: 56px;
  }

  ${theme.above.d.m} {
    font-size: 64px;
  }
`

export const H2 = styled.h2`
  ${sharedHeading};
  font-weight: 800;
  font-size: 24px;

  ${theme.above.p.m} {
    font-size: 32px;
  }

  ${theme.above.t.s} {
    font-size: 40px;
  }

  ${theme.above.d.m} {
    font-size: 48px;
  }
`

export const H3 = styled.h3`
  ${sharedHeading}
  font-weight: 700;

  font-size: 20px;

  ${theme.above.p.m} {
    font-size: 24px;
  }

  ${theme.above.t.s} {
    font-size: 28px;
  }

  ${theme.above.d.m} {
    font-size: 32px;
  }
`

export const H4 = styled.h4`
  ${sharedHeading}
  font-weight: 700;
  font-size: 18px;

  ${theme.above.p.m} {
    /* font-size: 18px; */
  }

  ${theme.above.t.s} {
    font-size: 20px;
  }

  ${theme.above.d.m} {
    font-size: 24px;
  }
`
export const H5 = styled.h5`
  ${sharedHeading}
  font-weight: 600;
  font-size: 16px;

  ${theme.above.p.m} {
    /* font-size: 18px; */
  }

  ${theme.above.t.s} {
    font-size: 18px;
  }

  ${theme.above.d.m} {
    font-size: 20px;
  }
`
export const H6 = styled.h6`
  ${sharedHeading}
  font-weight: 600;
  font-size: 16px;

  ${theme.above.p.m} {
    /* font-size: 18px; */
  }

  ${theme.above.t.s} {
    /* font-size: 18px; */
  }

  ${theme.above.d.m} {
    font-size: 18px;
  }
`
