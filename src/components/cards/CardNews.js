import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { VisuallyHidden } from "../../styles/utils"
import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const CardNews = ({ company, logo, quote, tag, url }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Tag tag={tag}>{tag}</Tag>
        <Figure>
          <blockquote cite={url}>
            <T.H3 as="h3" dangerouslySetInnerHTML={{ __html: `“${quote}”` }} />
          </blockquote>
          <figcaption>
            <a href={url} target="_blank" rel="noopener noreferrer">
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

const Tag = styled.div`
  padding: 8px 16px;
  background-color: #edca80;
  display: inline-block;
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ tag }) => (tag === "Partnership" ? "#0A5959" : "#876419;")};
  background-color: ${({ tag }) =>
    tag === "Partnership" ? "#80EDED" : "#edca80"};
  margin-bottom: 24px;
  align-self: flex-start;
`
const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 32px;

  ${theme.above.t.s} {
    padding: 24px 48px 32px;
  }

  ${theme.above.d.m} {
    padding: 32px 64px 56px;
  }
  /* b {
    display: inline;
  } */
`
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  height: 100%;
  blockquote h3 {
    font-weight: 400;
    line-height: 1.5;
  }
  figcaption {
    svg {
      max-width: 100%;
    }
    margin-top: auto;
  }
`
const LogoWrapper = styled.div``

const Wrapper = styled.div`
  /* background-color: #fff;
  border-radius: 20px;
  box-shadow: theme.shadows.boxShadow};
  padding: 40px;
  theme.above.desktop} {
    padding: 40px 56px;
  } */
  background-color: ${theme.color.background.emphesized};

  max-width: 570px;
  position: relative;
  height: 370px;
  border-radius: 10px;
  /* display: grid;
  align-content: center;
  justify-content: center; */

  ${theme.above.t.s} {
    height: 470px;
  }

  ${theme.above.d.m} {
    height: 570px;
  }
`
