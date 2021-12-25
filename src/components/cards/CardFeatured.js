import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import T from "./../../styles/new/typography"
import { Button } from "./../../components"

import { VisuallyHidden } from "./../../styles/utils"
import { theme } from "./../../styles/new/theme"

const CardFeatured = (props) => {
  const { tag, company, logo, btn, image, title, by } = props
  return (
    <Wrapper>
      {tag && (
        <Tag tagColor={tag.color}>
          <span>{tag.text}</span>
          <VisuallyHidden>{company}</VisuallyHidden>
        </Tag>
      )}
      <LogoWrapper>{parse(logo)}</LogoWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <By>{by}</By>
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

const Title = styled(T.H3)``
const By = styled.div``

const Wrapper = styled.div``
const ImageWrapper = styled.div``
const TextWrapper = styled.div``
const LogoWrapper = styled.div``
const Tag = styled.div``
const BtnWrapper = styled.div``
