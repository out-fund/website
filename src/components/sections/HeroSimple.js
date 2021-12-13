import React from "react"
import styled from "styled-components"
import { W, S } from "styles"

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
const ContentWrapper = styled(W.ContentWrapper)``
const TextWrapper = styled(W.TextWrapper)``

const Title = styled(S.H1)``

export default HeroSimple
