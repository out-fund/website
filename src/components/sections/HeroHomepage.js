import React from "react"
import styled from "styled-components"
import { W, S } from "styles"
import { Button } from "components"

export default function HeroHomepage(props) {
  const {
    title,
    description,
    primaryBtn,
    secondaryBtn,
    secondaryBtnUrl,
    primaryBtnUrl,
    image,
    imageAlt,
  } = props

  return (
    <HeroWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CtaWrapper>
              <Button btnUrl={primaryBtnUrl} variant="primary">
                {primaryBtn}
              </Button>
              <Button btnUrl={secondaryBtnUrl} variant="secondary">
                {secondaryBtn}
              </Button>
            </CtaWrapper>
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
const CtaWrapper = styled.div``

const Title = styled(S.H1)``
const Description = styled(S.SubHeading)``
