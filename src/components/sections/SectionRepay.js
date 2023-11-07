import React from "react"
import styled from "styled-components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import { Button, Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"
import { StaticImage } from "gatsby-plugin-image"

const SectionRepay = ({ data }) => {
  const { title, description, btn } = data
  return (
    <StyledSection>
      <Wrapper data-surface-type="section" data-surface-title="repay">
        <TextWrapper>
          {/* <MobileImageWrapper>
            <GatsbyImage image={getImage(image.src)} alt={image.alt} />
          </MobileImageWrapper> */}

          <SectionHeader title={title} />
          <Description>{parse(description)}</Description>

          {btn && (
            <BtnWrapper>
              {btn.url && (
                <Button
                  href="https://client.out.fund/signup"
                  variant="primary"
                  size="large"
                  id="cta-section-repay"
                  data-element-category="Signup CTA"
                >
                  Check eligibility
                </Button>
              )}
            </BtnWrapper>
          )}
        </TextWrapper>
        <ImageWrapper>
          {/* <GatsbyImage image={getImage(image.src)} alt={image.alt} /> */}
          <StaticImage
            src="./../../images/UIxCard.png"
            alt="Outfhund UI"
            // width={80}
            // height={80}
            layout="constrained"
          />
        </ImageWrapper>
      </Wrapper>
    </StyledSection>
  )
}
export default SectionRepay

const Description = styled(T.Body)`
  /* max-width: 970px;
  margin: 0 auto; */
  margin-top: 16px;
`
// const List = styled.ul``
// const Element = styled(T.Body)`
//   margin: 16px 0;
//   padding-left: 20px;
//   position: relative;
//   &:before {
//     position: absolute;
//     top: 10px;
//     left: 0;
//     display: block;
//     width: 8px;
//     height: 8px;
//     background-color: #79dcf2;
//     border-radius: 16px;
//     content: "";
//   }
// `

const StyledSection = styled(Section)`
  background-color: #f2f6fa;
  position: relative;
  border-radius: 10px;
  margin-bottom: 200px;

  background-image: url("/gradient.svg");
  background-repeat: no-repeat;
  background-size: cover;
  /* overflow: hidden; */
  background-position: center center;
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
    grid-template-columns: 470fr 700fr;
    gap: 80px;
    padding: 120px 40px 120px;
  }

  ${theme.above.d.m} {
    gap: 80px;
    padding: 160px 80px 160px;
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

    transform: translateY(-20%);
    img {
      border-radius: 10px;
    }
    ${theme.above.t.m} {
      transform: translateY(-28%);
    }
    ${theme.above.d.m} {
      transform: translateY(-30%);
    }
  }
  ${theme.above.t.m} {
    display: block;
  }
`
