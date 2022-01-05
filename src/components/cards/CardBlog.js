import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import T from "./../../styles/new/typography"
import { Button } from "./../../components"
import { theme } from "./../../styles/new/theme"

const CardBlog = ({ data }) => {
  // const { image, title, btn } = data
  console.log("cardBlog", data)
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
          <Button
            to={data.slug.split("-").slice(3).join("-")}
            variant="secondary"
          >
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
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  justify-content: space-between;
  /* display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 32px 32px;

  ${theme.above.t.s} {
    padding: 24px 48px 32px;
  }

  ${theme.above.d.m} {
    padding: 32px 64px 56px;
  } */
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

  /* background-color: ${({ bgc }) =>
    bgc ? bgc : theme.color.background.emphesized};
  max-width: 570px;
  position: relative;
  height: 370px;
  border-radius: 10px;
  display: grid;
  align-content: center;
  justify-content: center;

  ${theme.above.t.s} {
    height: 470px;
  }

  ${theme.above.d.m} {
    height: 570px;
  } */
`
