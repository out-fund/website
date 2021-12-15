import React from "react"
import styled from "styled-components"

import { SectionWrapper } from ".."
import { W, S, theme, breakpoints } from "styles"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SectionContainer = ({ title, description, children }) => {
  return (
    <SectionWrapper>
      {title && (
        <Wrapper>
          <ContentWrapper>
            <TextWrapper>
              <Title>{title}</Title>
              {description && <Description>{description}</Description>}
            </TextWrapper>
          </ContentWrapper>
        </Wrapper>
      )}

      {children}
    </SectionWrapper>
  )
}

const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.ContentWrapper)``
const TextWrapper = styled(W.TextWrapper)`
  margin-bottom: 48px;
`

const Title = styled(S.H2)`
  text-align: center;
`

const Description = styled(S.SubHeading)``

export default SectionContainer
