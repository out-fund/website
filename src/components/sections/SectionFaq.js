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
        <SectionHeader title={data.title} />
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

const Wrapper = styled.div``
const ContentWrapper = styled.div``
const AccordionWrapper = styled.div``
const BtnWrapper = styled.div``

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
