import React from "react"
import styled from "styled-components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import parse from "html-react-parser"

import { Button, Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"
// import { Triangle } from "./../../styles/utils"
import { StaticImage } from "gatsby-plugin-image"

const SectionWhoCanApply = ({ data }) => {
  const { title, description, btn, image } = data
  return (
    <StyledSection>
      <Wrapper>
        <ImageWrapper>
          {/* <GatsbyImage image={getImage(image.src)} alt={image.alt} /> */}
          <StaticImage
            src="./../../images/WhoCanApply.png"
            alt="Who can apply"
            // width={80}
            // height={80}
            layout={"constrained"}
          />
        </ImageWrapper>
        <TextWrapper>
          {/* <MobileImageWrapper>
            <GatsbyImage image={getImage(image.src)} alt={image.alt} />
          </MobileImageWrapper> */}

          <SectionHeader title="Who can apply" />
          {/* <Description>{parse(description)}</Description> */}
          <List>
            <Element as="li">
              An online model such as SaaS, Subscription, Ecommerce, Mobile App,
              B2B
            </Element>
            <Element as="li">6+ months in business</Element>
            <Element as="li">£10k+ Monthly revenue</Element>
          </List>

          {btn && (
            <BtnWrapper>
              {btn.url && (
                <Button to={btn.url} variant="primary" size="large">
                  Apply now
                </Button>
              )}
            </BtnWrapper>
          )}
        </TextWrapper>
      </Wrapper>
    </StyledSection>
  )
}
export default SectionWhoCanApply

const List = styled.ul``
const Element = styled(T.Body)`
  margin: 16px 0;
  padding-left: 20px;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #faf;
    border-radius: 16px;
    content: "";
  }
`
const StyledSection = styled(Section)`
  /* background-color: #f2f6fa; */
  position: relative;

  &:before {
    position: absolute;
    top: 15%;
    right: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 70%;
    background-color: #f2f6fa;
    border-radius: 10px;
    content: "";
  }

  /* &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    display: block;

    width: 100%;
    height: 80px;
    background-color: #fff;
    content: "";
  } */
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1570px;
  gap: 40px;
  margin: 0 auto;
  align-items: center;
  position: relative;

  ${theme.above.t.m} {
    grid-template-columns: 600fr 970fr;
    gap: 80px;
  }
`

const TextWrapper = styled.div``
const BtnWrapper = styled.div`
  margin-top: 24px;
`
// const MobileImageWrapper = styled.div`
//   margin-top: 16px;
//   .gatsby-image-wrapper {
//     img {
//       border-radius: 10px;
//     }
//   }
//   ${theme.above.t.m} {
//     display: none;
//   }
// `

const ImageWrapper = styled.div`
  display: none;
  .gatsby-image-wrapper {
    z-index: 10;
    border-radius: 10px;
    img {
      border-radius: 10px;
    }
  }
  ${theme.above.t.m} {
    display: block;
  }
`
