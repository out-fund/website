import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { Section, SectionHeader, Button } from "./../../components"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const Accordions = (props) => {
  return (
    <Accordion allowZeroExpanded>
      {props.data.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.question}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{parse(item.answer)}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const SectionFaq = ({ data }) => {
  // console.log(data)
  return (
    <Section>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={data.title} />
        </HeaderWrapper>

        <ContentWrapper>
          <AccordionWrapper>
            <Accordions data={data.questions} />
          </AccordionWrapper>
          <BtnWrapper>
            <Button to={data.btn.url} variant="secondary">
              {data.btn.text}
            </Button>
          </BtnWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionFaq

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 64px;
`
const Wrapper = styled.div``
const ContentWrapper = styled.div`
  max-width: 970px;
  margin: 0 auto;
`

const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 64px;
`

const AccordionWrapper = styled.div`
  .accordion {
    border: none;
    border-radius: 0;
  }
  .accordion__item {
    border-top: 1px solid #bbc7d6 !important;
    &:last-child {
      border-bottom: 1px solid #bbc7d6 !important;
    }
  }
  .accordion__button {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    padding: 24px 24px;
    color: #051734;
    font-size: 20px;
    letter-spacing: -0.02em;
    background-color: #fff;
    /* border-radius: 4px; */
    user-select: none;

    :hover {
      background-color: #deeeff;
    }
    &:before {
      margin-left: auto;
      color: #1a65ba;
    }
  }
  .accordion__panel {
    padding: 16px 40px 32px;
    color: #1c3654;
    line-height: 1.5;
    background-color: #fff;
    border-bottom: 1px solid #bbc7d6 !important;
  }
`

// <FaqWrapper>
//   <FaqTitle>{data.faq.title}</FaqTitle>
//   {/* <dl>
//     {data.faq.questions.map((item) => (
//       <React.Fragment key={item.question}>
//         <dt>
//           <span>{item.question}</span>
//           <svg
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path
//               d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z"
//               fill="#00A3D7"
//             />
//           </svg>
//         </dt>
//         <dd>{item.answer}</dd>
//         >
//       </React.Fragment>
//     ))}
//   </dl> */}
//   <AccordionWrapper>
//     <Accordions data={data.faq.questions} />
//   </AccordionWrapper>

// </FaqWrapper>
