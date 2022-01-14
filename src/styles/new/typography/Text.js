import styled from "styled-components"
import { theme } from "./../../new/theme"

export const BodyLarge = styled.p`
  font-size: 18px;
  line-height: 1.4;
  color: ${theme.color.text.body};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${theme.above.t.s} {
    font-size: 19px;
  }

  ${theme.above.d.m} {
    font-size: 20px;
  }
`
export const Body = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  color: ${theme.color.text.body};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${theme.above.t.s} {
    font-size: 17px;
  }

  ${theme.above.d.m} {
    font-size: 18px;
  }
`
export const BodySmall = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 1.5;
  color: ${theme.color.text.body};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${theme.above.t.s} {
    font-size: 15px;
  }

  ${theme.above.d.m} {
    font-size: 16px;
  }
`
export const BodySmaller = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 1.5;
  color: ${theme.color.text.body};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${theme.above.t.s} {
    font-size: 13px;
  }

  ${theme.above.d.m} {
    font-size: 14px;
  }
`
export const Blockquote = styled.blockquote`
  p {
    padding-left: 24px;
    color: ${theme.color.text.body};
    font-weight: 500;
    font-size: 18px;
    line-height: 1.4;
    border-left: 2px solid #051734;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${theme.above.t.s} {
      font-size: 19px;
    }

    ${theme.above.d.m} {
      font-size: 20px;
    }
  }
`

// color: ${theme.headingsColor};
// letter-spacing: -0.01em;
// font-size: 14px;
// line-height: 1.6;
// font-weight: 500;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
// opacity: 0.9;

// ${breakpoints.tablet} {
//   font-size: 16px;
// }
// ${breakpoints.laptop} {
//   font-size: 18px;
// }
// ${breakpoints.desktop} {
//   font-size: 20px;
// }
// ${breakpoints.largeDesktop} {
// }
