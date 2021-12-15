import React from "react"
import styled from "styled-components"

import { theme } from "styles/theme"

const SectionWrapper = ({ children }) => {
  return <StyledSectionWrapper>{children}</StyledSectionWrapper>
}

const StyledSectionWrapper = styled.section`
  margin-bottom: 48px;

  ${theme.above.tablet} {
    margin-bottom: 56px;
  }
  ${theme.above.laptop} {
    margin-bottom: 64px;
  }
  ${theme.above.mediumLaptop} {
    margin-bottom: 80px;
  }
  ${theme.above.desktop} {
    margin-bottom: 96px;
  }
  ${theme.above.largeDesktop} {
    margin-bottom: 120px;
  }
`

export default SectionWrapper
