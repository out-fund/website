import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { Section } from ".."
import { W, S } from "styles"

const SectionContainer = ({ title, description, children }) => {
  return (
    <Section>
      {title && (
        <Wrapper>
          <ContentWrapper>
            <TextWrapper>
              <Title>{parse(title)}</Title>
              {description && <Description>{description}</Description>}
            </TextWrapper>
          </ContentWrapper>
        </Wrapper>
      )}

      {children}
    </Section>
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

const Description = styled(S.SubHeading)`
  max-width: 770px;
  margin: 0 auto;
  text-align: center;
  margin-top: 16px;
`

export default SectionContainer
