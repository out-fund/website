import React from "react"
import styled from "styled-components"
import { W, S, theme } from "styles"

const HeroSimple = ({ title }) => {
  return (
    <HeroWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.header``
const Wrapper = styled(W.Wrapper)``
const ContentWrapper = styled(W.ContentWrapper)`
  max-width: ${theme.width.text};
  margin: 0 auto;
  padding-top: 12vh;
  padding-bottom: 80px;
`
const TextWrapper = styled(W.TextWrapper)`
  max-width: 970px;
`

const Title = styled(S.H1)``

export default HeroSimple
