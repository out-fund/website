import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import T from "./../../styles/new/typography"
import { Button } from "./../../components"

import { VisuallyHidden } from "./../../styles/utils"
import { theme } from "./../../styles/new/theme"

const CardFeatured = (props) => {
  const { tag, company, logo, btn, image, bgc, quote } = props
  console.log(quote)
  return (
    <Wrapper bgc={bgc} className={company.toLowerCase()}>
      <TextWrapper>
        {tag && (
          <Tag tagColor={tag.color}>
            <span>{tag.text}</span>
            <VisuallyHidden>{company}</VisuallyHidden>
          </Tag>
        )}
        <LogoWrapper>{parse(logo)}</LogoWrapper>
        <Quote as="q">{quote.title}</Quote>
        <By>{quote.by}</By>
        {btn && (
          <BtnWrapper>
            <Button to={btn.url} variant="secondary" color="white">
              {btn.text}
            </Button>
          </BtnWrapper>
        )}
      </TextWrapper>
      <ImageWrapper>
        <GatsbyImage image={getImage(image.src)} alt={image.alt} />
      </ImageWrapper>
    </Wrapper>
  )
}

export default CardFeatured

const Quote = styled(T.H3)`
  font-weight: 400;
`
const By = styled.div``

const ImageWrapper = styled.div`
  max-width: 500px;
  /* padding: 0 16px; */
`

const Wrapper = styled.div`
  background-color: ${({ bgc }) => bgc};
  max-width: 986px;
  border-radius: 10px;
  &.feel {
    padding-right: 16px;
  }
  &.onto {
    q,
    div {
      color: #deeeff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`

const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 0px;

  ${theme.above.t.s} {
    padding: 24px 48px 0px;
  }

  ${theme.above.d.m} {
    padding: 32px 64px 0px;
  }
`

const LogoWrapper = styled.div`
  svg {
    max-width: 100%;
    height: 32px;
  }
`
// const Tag = styled.div``
const Tag = styled.h3`
  padding: 4px 16px;
  background-color: ${(props) => props.tagColor};
  /* backdrop-filter: blur(20px); */
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000000;
  align-self: flex-start;
`
const BtnWrapper = styled.div``
