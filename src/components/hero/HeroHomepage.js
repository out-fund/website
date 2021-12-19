import React from "react"
import styled from "styled-components"
import { T } from "./../../styles/new/"
// import { Headings } from "./../../styles/new/typography/"
import { H } from "./../../styles/new/typography"
import { Button } from "components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroHomepage = ({ data }) => {
  console.log(data)
  // const {
  //   title,
  //   description,
  //   primaryBtn,
  //   secondaryBtn,
  //   secondaryBtnUrl,
  //   primaryBtnUrl,
  //   image,
  //   imageAlt,
  // } = data

  return (
    <HeroWrapper>
      <Title>{data.title}</Title>
      {/* 
      <Description>{data.description}</Description>
      <Button btnUrl={data.primaryBtnUrl} variant="primary">
        {data.primaryBtn}
      </Button>
      <Button btnUrl={data.secondaryBtnUrl} variant="secondary">
        {data.secondaryBtn}
      </Button> */}
    </HeroWrapper>
  )
}

export default HeroHomepage

const Title = styled(H.H1)``
// const Description = styled(T.BodyLarge)``

const HeroWrapper = styled.header``

// const Wrapper = styled(W.Wrapper)``

// const ContentWrapper = styled(W.ContentWrapper)``
// const TextWrapper = styled(W.TextWrapper)``

// const ImageWrapper = styled.div``

// const CtaWrapper = styled.div``

{
  /* <Wrapper>
        <ContentWrapper>
          <TextWrapper>

            <CtaWrapper>
              <Button btnUrl={data.primaryBtnUrl} variant="primary">
                {primaryBtn}
              </Button>
              <Button btnUrl={data.secondaryBtnUrl} variant="secondary">
                {secondaryBtn}
              </Button>
            </CtaWrapper>
          </TextWrapper>
          <ImageWrapper>
            <GatsbyImage image={getImage(data.image)} alt={data.imageAlt} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper> */
}
