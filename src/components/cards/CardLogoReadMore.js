import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Button } from "components"
import { U, theme } from "styles"

const CardLogoReadMore = (props) => {
  console.log(props)
  const { data } = props
  //
  return (
    <Wrapper>
      <TextWrapper>
        {props.tag && (
          <Tag>
            <span>{props.tag}</span>
            <U.VisuallyHidden>{data.frontmatter.company}</U.VisuallyHidden>
          </Tag>
        )}

        <LogoWrapper>{parse(data.frontmatter.logo)}</LogoWrapper>
        {data.frontmatter.featured && (
          <BtnWrapper>
            <Button btnUrl={data.slug} variant="secondary" color="white">
              Read more
            </Button>
          </BtnWrapper>
        )}
      </TextWrapper>
      <ImageWrapper>
        <GatsbyImage
          image={getImage(data.frontmatter.card.src)}
          alt={data.frontmatter.card.alt}
        />
      </ImageWrapper>
    </Wrapper>
  )
}

export default CardLogoReadMore

const Wrapper = styled.div`
  max-width: 570px;
  position: relative;
  height: 370px;

  ${theme.above.tablet} {
    height: 470px;
  }
  ${theme.above.laptop} {
    height: 570px;
  }
`
const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  /*overflow: hidden;*/
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
  .gatsby-image-wrapper {
    height: 100%;
  }
`
const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 32px;

  ${theme.above.tablet} {
    padding: 24px 48px 32px;
  }
  ${theme.above.laptop} {
    padding: 32px 64px 56px;
  }
`
const LogoWrapper = styled.div`
  margin-top: auto;

  svg {
    max-width: 100%;
    height: 32px;
  }
`
const Tag = styled.div`
  padding: 4px 16px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.8;
  align-self: flex-start;
`
const BtnWrapper = styled.div`
  margin-top: 40px;
`
