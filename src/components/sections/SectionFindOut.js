import React from "react"
import styled from "styled-components"
// import { W, S } from "styles"
import { Section, Button, SectionHeader, Calculator } from "./../../components"
// import parse from "html-react-parser"

const SectionFindOut = ({ data }) => {
  // console.log(data.calculator)
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <SectionHeader title={data.title} description={data.description} />
          </TextWrapper>
          <CalculatorWrapper>
            <Calculator data={data.calculator} />
          </CalculatorWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionFindOut

const Wrapper = styled.div``
const ContentWrapper = styled.div``
const TextWrapper = styled.div``
const CalculatorWrapper = styled.div``

// const AccordionWrapper = styled.section`
//   .accordion {
//     border: none;
//     border-bottom: 1px solid #bbc7d6 !important;
//     border-radius: 0;
//   }
//   .accordion__item {
//     border-top: 1px solid #bbc7d6 !important;
//   }
//   .accordion__button {
//     display: flex;
//     flex-direction: row-reverse;
//     align-items: center;
//     justify-content: flex-end;
//     padding: 24px 24px;
//     color: #051734;
//     font-size: 20px;
//     letter-spacing: -0.02em;
//     background-color: transparent;
//     border-radius: 4px;
//     user-select: none;

//     :hover {
//       background-color: #deeeff;
//     }
//     &:before {
//       margin-left: auto;
//       color: #1a65ba;
//     }
//   }
//   .accordion__panel {
//     padding: 16px 40px 32px;
//     color: #1c3654;
//     line-height: 1.5;
//     background-color: transparent;
//     border-bottom: 1px solid #bbc7d6 !important;
//   }
// `
