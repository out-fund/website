import { Button, Section, SectionHeader } from "./../../components"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import T from "./../../styles/new/typography"
import parse from "html-react-parser"
import styled from "styled-components"
import { theme } from "./../../styles/new/theme"

const SectionRepayFf = ({ data }) => {
  const { title, description, btn } = data
  return (
    <StyledSection>
      <Wrapper>
        <TextWrapper>
          <Title title={title} />
          <Description>{parse(description)}</Description>

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
        <ImageWrapper>
          <StaticImage
            src="./../../images/UIxCard.png"
            alt="Outfhund UI"
            layout="constrained"
          />
        </ImageWrapper>
      </Wrapper>
    </StyledSection>
  )
}
export default SectionRepayFf

const Title = styled(SectionHeader)``

// const Title = styled(T.H3)`
//   background-color: #faf;
// `

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
  position: relative;
  margin: 0;
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
    grid-template-columns: 570fr 600fr;
    gap: 80px;
    padding: 120px 40px 0px;
  }

  ${theme.above.d.m} {
    gap: 80px;
    padding: 160px 80px 0px;
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
  /* display: none;
  position: relative; */

  .gatsby-image-wrapper {
    /* position: absolute; */
    /* top: 0;
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
    } */
  }
  /* ${theme.above.t.m} {
    display: block;
  } */
`
