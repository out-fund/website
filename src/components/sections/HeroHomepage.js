import React from "react"
import styled from "styled-components"
import {
  BasicWrapper,
  BasicContentWrapper,
  BasicTextWrapper,
} from "styles/wrappers"
import { H1, SubHeading } from "styles/textStyles"

import { theme } from "../../styles/theme"

export default function HeroHomepage(props) {
  const { title, description, primaryCta, secondaryCta, image, imageAlt } =
    props

  console.log("theme", theme)
  return (
    <HeroWrapper>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CtaWrapper>Link</CtaWrapper>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.header``
const Wrapper = styled(BasicWrapper)``
const ContentWrapper = styled(BasicContentWrapper)``
const TextWrapper = styled(BasicTextWrapper)``
const CtaWrapper = styled.div``

const Title = styled(H1)``
const Description = styled(SubHeading)``
