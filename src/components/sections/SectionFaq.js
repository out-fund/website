import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { Section, SectionHeader, Button } from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"

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
          <AccordionItemPanel>
            <T.Body as="div">{parse(item.answer)}</T.Body>
          </AccordionItemPanel>
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
  margin-top: 24px;
  ${theme.above.t.s} {
    margin-top: 48px;
  }
  ${theme.above.l.m} {
    margin-top: 64px;
  }
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
    padding: 1.2em 1.2em;
    color: #051734;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    background-color: #fff;
    user-select: none;

    ${theme.above.t.s} {
      font-size: 18px;
    }

    ${theme.above.d.m} {
      font-size: 20px;
    }

    &[aria-expanded="true"] {
      background-color: ${theme.color.background.emphesized};
    }

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
    background-color: ${theme.color.background.emphesized};
  }
`
