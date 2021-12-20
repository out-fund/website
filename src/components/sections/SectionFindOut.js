import React from "react"
import styled from "styled-components"
import { W, S } from "styles"
import { Section, Button } from "components"
import Calculator from "components/Calculator"
import parse from "html-react-parser"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"

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

const SectionFindOut = ({ data }) => {
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TopWrapper>
            <TextWrapper>
              <Title>{data.title}</Title>
              <Description>{data.description}</Description>
              {/* <ul className="list">
            {data.list.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul> */}
            </TextWrapper>
            <CalculatorWrapper>
              <Calculator data={data.calculator} />
            </CalculatorWrapper>
          </TopWrapper>
          <FaqWrapper>
            <FaqTitle>{data.faq.title}</FaqTitle>
            {/* <dl>
              {data.faq.questions.map((item) => (
                <React.Fragment key={item.question}>
                  <dt>
                    <span>{item.question}</span>
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z"
                        fill="#00A3D7"
                      />
                    </svg>
                  </dt>
                  <dd>{item.answer}</dd>
                  >
                </React.Fragment>
              ))}
            </dl> */}
            <AccordionWrapper>
              <Accordions data={data.faq.questions} />
            </AccordionWrapper>

            <BtnWrapper>
              <Button btnUrl={data.faq.btnUrl} variant="secondary">
                {data.faq.btn}
              </Button>
            </BtnWrapper>
          </FaqWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionFindOut

const Title = styled(S.H2)``
const FaqTitle = styled(S.H5)`
  margin-bottom: 24px;
  margin-top: 64px;
`
const Description = styled(S.SubHeading)``

const Wrapper = styled(W.ContainerFull)`
  margin-top: 120px;
`
const ContentWrapper = styled(W.ContainerL)``

const TextWrapper = styled.div``
const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  align-items: center;
`
const CalculatorWrapper = styled.div``
const BtnWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`
const FaqWrapper = styled(W.ContainerL)``

const AccordionWrapper = styled.section`
  .accordion {
    border: none;
    border-bottom: 1px solid #bbc7d6 !important;
    border-radius: 0;
  }
  .accordion__item {
    border-top: 1px solid #bbc7d6 !important;
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
    background-color: transparent;
    border-radius: 4px;
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
    background-color: transparent;
    border-bottom: 1px solid #bbc7d6 !important;
  }
`
