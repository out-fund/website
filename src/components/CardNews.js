import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { VisuallyHidden } from "./../styles/utils"
import T from "./../styles/new/typography"

const CardNews = ({ company, logo, quote, tag, url }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Tag tag={tag}>{tag}</Tag>
        <Figure>
          <blockquote>
            <T.H5 as="h3" dangerouslySetInnerHTML={{ __html: `“${quote}` }} />
          </blockquote>
          <figcaption>
            <a href={url}>
              <VisuallyHidden>{company}</VisuallyHidden>
              <LogoWrapper>{parse(logo)}</LogoWrapper>
            </a>
          </figcaption>
        </Figure>
      </TextWrapper>
    </Wrapper>
  )
}

export default CardNews

const Wrapper = styled.div`
  /* background-color: #fff;
  border-radius: 20px;
  box-shadow: theme.shadows.boxShadow};
  padding: 40px;
  theme.above.desktop} {
    padding: 40px 56px;
  } */
`
const Tag = styled.div`
  /* padding: 8px 16px;
  background-color: #edca80;
  display: inline-block;
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ tag }) => (tag === "Partnership" ? "#0A5959" : "#876419;")};
  background-color: ${({ tag }) =>
    tag === "Partnership" ? "#80EDED" : "#edca80"};
  margin-bottom: 24px;
  align-self: flex-start; */
`
const TextWrapper = styled.div`
  /* height: 100%;
  display: flex;
  flex-direction: column;
  b {
    display: inline;
  } */
`
const Figure = styled.figure`
  /* display: flex;
  flex-direction: column;
  height: 100%;
  blockquote h3 {
    margin-bottom: 48px;
    font-weight: 400;
    line-height: 1.5;
  }
  figcaption {
    svg {
      max-width: 100%;
    }
    margin-top: auto;
  } */
`
const LogoWrapper = styled.div``
