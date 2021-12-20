import React from "react"
import styled from "styled-components"

import T from "./../../styles/new/typography"
import { Button } from "./../../components/"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroHomepage = ({ data }) => {
  return (
    <HeroWrapper>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <Button to={data.primaryBtnUrl} variant="primary">
        {data.primaryBtn}
      </Button>
      <Button to={data.secondaryBtnUrl} variant="secondary">
        {data.secondaryBtn}
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

const HeroWrapper = styled.header``
const ImageWrapper = styled.div`
  max-width: 400px;
`

// const Wrapper = styled(W.Wrapper)``

// const ContentWrapper = styled(W.ContentWrapper)``
// const TextWrapper = styled(W.TextWrapper)``

// const CtaWrapper = styled.div``
