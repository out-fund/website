import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"

// import Step1 from "./../../images/svg/how-it-works/step-1.svg"
// import Step2 from "./../../images/svg/how-it-works/step-2.svg"
// import Step3 from "./../../images/svg/how-it-works/step-3.svg"
// import Step4 from "./../../images/svg/how-it-works/step-4.svg"
// import Step5 from "./../../images/svg/how-it-works/step-5.svg"

const SectionSteps = ({ data }) => {
  // console.log("hfw", data)
  // const { title, description, steps } = data
  return (
    <Section>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={data.title} description={data.description} />
        </HeaderWrapper>
        <ContentWrapper>
          <Step>
            <ImageWrapper>
              {/* <Step1 /> */}
              <StaticImage
                src="./../../images/how-funding-works/Step1.png"
                alt="Step one to get funding"
              />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>{data.steps[0].title}</StepTitle>
              <StepDescription>{data.steps[0].description}</StepDescription>
            </TextWrapper>
          </Step>
          <Step>
            <ImageWrapper>
              {/* <Step2 /> */}
              <StaticImage
                src="./../../images/how-funding-works/Step2.png"
                alt="Step one to get funding"
              />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>{data.steps[1].title}</StepTitle>
              <StepDescription>{data.steps[1].description}</StepDescription>
            </TextWrapper>
          </Step>
          <Step>
            <ImageWrapper>
              {/* <Step3 /> */}
              <StaticImage
                src="./../../images/how-funding-works/Step3.png"
                alt="Step one to get funding"
              />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>{data.steps[2].title}</StepTitle>
              <StepDescription>{data.steps[2].description}</StepDescription>
            </TextWrapper>
          </Step>
          <Step>
            <ImageWrapper>
              {/* <Step4 /> */}
              <StaticImage
                src="./../../images/how-funding-works/Step4.png"
                alt="Step one to get funding"
              />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>{data.steps[3].title}</StepTitle>
              <StepDescription>{data.steps[3].description}</StepDescription>
            </TextWrapper>
          </Step>
          <Step>
            <ImageWrapper>
              {/* <Step5 /> */}
              <StaticImage
                src="./../../images/how-funding-works/Step5.png"
                alt="Step one to get funding"
              />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>{data.steps[4].title}</StepTitle>
              <StepDescription>{data.steps[4].description}</StepDescription>
            </TextWrapper>
          </Step>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionSteps

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 40px;
`
const Wrapper = styled.div`
  padding: 0 40px;
`
const ContentWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
`
const TextWrapper = styled.div``

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* svg {
    width: 100%;
    height: 100%;
    max-height: 240px;
  }
  ${theme.above.t.l} {
    svg {
      width: 470px;
      height: 240px;
      max-height: unset;
    }
  } */
`

const Step = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  text-align: center;

  ${theme.above.t.l} {
    grid-template-columns: 470px 1fr;
    gap: 64px;
    align-items: center;
    text-align: left;
  }
`
const StepTitle = styled(T.H3)`
  margin-bottom: 8px;
  ${theme.above.t.l} {
    margin-bottom: 16px;
  }
`

const StepDescription = styled(T.Body)``
