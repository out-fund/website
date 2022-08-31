import React from "react"
import styled from "styled-components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import parse from "html-react-parser"

import { Button, Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"

import { StaticImage } from "gatsby-plugin-image"

const SectionWhoCanApply = () => {
  // const { title, description, btn, image } = data
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

          <BtnWrapper>
            <Button
              to="https://client.out.fund/signup"
              variant="primary"
              size="large"
            >
              Apply now
            </Button>
          </BtnWrapper>
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
  position: relative;
  &:before {
    position: absolute;
    top: 10px;
    left: 0;
    display: block;
    width: 8px;
    height: 8px;
    background-color: #79dcf2;
    border-radius: 16px;
    content: "";
  }
`
const StyledSection = styled(Section)`
  background-color: #f2f6fa;
  position: relative;
  border-radius: 10px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1570px;
  gap: 40px;
  margin: 0 auto;
  align-items: center;
  position: relative;
  padding: 32px;

  ${theme.above.t.m} {
    grid-template-columns: 690fr 880fr;
    gap: 80px;
    padding: 40px;
  }

  ${theme.above.d.m} {
    grid-template-columns: 690fr 880fr;
    gap: 80px;
    padding: 80px;
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
  position: relative;

  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    z-index: 10;
    border-radius: 10px;
    transform: translateY(-50%);
    img {
      border-radius: 10px;
    }
  }
  ${theme.above.t.m} {
    display: block;
  }
`
