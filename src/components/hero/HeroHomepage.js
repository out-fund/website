import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Button } from "./../../components/"
import T from "./../../styles/new/typography"

const HeroHomepage = ({ data }) => {
  const { title, description, primaryBtn, secondaryBtn } = data
  return (
    <HeroWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button to={primaryBtn.url} variant="primary">
        {primaryBtn.text}
      </Button>
      <Button to={secondaryBtn.url} variant="secondary">
        {secondaryBtn.text}
      </Button>
      <ImageWrapper>
        <GatsbyImage image={getImage(data.image.src)} alt={data.image.alt} />
      </ImageWrapper>
    </HeroWrapper>
  )
}

export default HeroHomepage

const Title = styled(T.H1)``
const Description = styled(T.BodyLarge)``

const HeroWrapper = styled.header`
  background-color: #f2f6fa;
`
const ImageWrapper = styled.div`
  max-width: 400px;
`

// const Wrapper = styled(W.Wrapper)``

// const ContentWrapper = styled(W.ContentWrapper)``
// const TextWrapper = styled(W.TextWrapper)``

// const CtaWrapper = styled.div``
