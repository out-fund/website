import React from "react"
import styled from "styled-components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import parse from "html-react-parser"

import { Button, Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"

import { StaticImage } from "gatsby-plugin-image"

const SectionWhoCanApply = (props) => {
  // const { title, description, btn, image } = data
  return (
    <StyledSection>
      <Wrapper data-surface-type="section" data-surface-title="WhoCanApply">
        <ImageWrapper>
          {/* <GatsbyImage image={getImage(image.src)} alt={image.alt} /> */}
          <StaticImage
            src="./../../images/WhoCanApply.png"
            alt="You're eligible to apply if you have:"
            // width={80}
            // height={80}
            layout={"constrained"}
          />
        </ImageWrapper>
        <TextWrapper>
          {/* <MobileImageWrapper>
            <GatsbyImage image={getImage(image.src)} alt={image.alt} />
          </MobileImageWrapper> */}

          <SectionHeader title={props.data.title} />
          {/* <Description>{parse(description)}</Description> */}

          <List>
            {props.data.list.map((value, index) => (
              <Element as="li" key={index}>
                {value}
              </Element>
            ))}
          </List>

          <BtnWrapper>
            <Button
              href="https://client.out.fund/signup"
              variant="primary"
              size="large"
              id="cta-who-can-apply-click"
              data-element-category="Signup CTA"
            >
              {props.data.btn}
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
  margin: 160px auto;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1570px;
  gap: 40px;
  margin: 0 auto;
  align-items: center;
  position: relative;

  padding: 40px;

  ${theme.above.t.m} {
    grid-template-columns: 590fr 880fr;
    gap: 80px;
    padding: 100px;
  }

  ${theme.above.d.m} {
    grid-template-columns: 690fr 880fr;
    gap: 80px;
    padding: 120px;
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
    width: 110%;
    border-radius: 10px;
    transform: translateY(-50%) translateX(-5%);
    img {
      border-radius: 10px;
    }
  }
  ${theme.above.t.m} {
    display: block;
  }
`
