import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import T from "./../../styles/new/typography"
import { Button } from "./../../components"
import { theme } from "./../../styles/new/theme"

const CardBlog = ({ data }) => {
  const blogLink = `/blog/${data.slug.split("-").slice(3).join("-")}/`
  return (
    <Wrapper>
      <ImageWrapper>
        <GatsbyImage
          image={getImage(data.frontmatter.card.image.src)}
          alt={data.frontmatter.card.image.alt}
        />
      </ImageWrapper>
      <TextWrapper>
        <Title as="h2">{data.frontmatter.title}</Title>
        <BtnWrapper>
          <Button to={blogLink} variant="secondary">
            Read More
          </Button>
        </BtnWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default CardBlog

const Title = styled(T.H3)``

const ImageWrapper = styled.div``

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  justify-content: space-between;

  padding: 24px 24px;

  ${theme.above.t.s} {
    padding: 32px 48px;
  }

  ${theme.above.d.m} {
    padding: 40px 48px;
  }
`
const BtnWrapper = styled.div``

const Wrapper = styled.div`
  max-width: 570px;
  background-color: ${theme.color.background.emphesized};
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`
