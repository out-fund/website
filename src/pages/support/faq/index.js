import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"

import EnLayout from "layouts/en"
import { HeroSimple, Main } from "./../../../components"
import T from "./../../../styles/new/typography"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"

const Accordions = ({ qa }) => {
  return (
    <Accordion allowZeroExpanded>
      {qa.map((item, index) => (
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

const QuestionSection = (props) => {
  return (
    <QuestionSectionWrapper>
      <Title id={props.title.replace(/\s/g, "").toLowerCase()}>
        {props.title}
      </Title>
      <Container>{props.children}</Container>
    </QuestionSectionWrapper>
  )
}

const Menue = ({ data }) => {
  // console.log("menu", data)
  return (
    <MenueWrapper>
      <Title>Faq</Title>
      <LinksWrapper>
        {data.map((item, index) => (
          <li key={index}>
            <a href={`#${item.title.replace(/\s/g, "").toLowerCase()}`}>
              {item.title}
            </a>
          </li>
        ))}
      </LinksWrapper>
    </MenueWrapper>
  )
}

const FAQ = (props) => {
  // console.log("faq", props.data.faqJson)
  return (
    <EnLayout>
      <HeroSimple data={props.data.faqJson.hero} />
      <Main>
        <ContentWrapper>
          <Menue data={props.data.faqJson.faq} />
          <FaqWrapper>
            {props.data.faqJson.faq.map((item, index) => (
              <QuestionSection title={item.title} key={index}>
                <Accordions qa={item.qa} />
              </QuestionSection>
            ))}
          </FaqWrapper>
        </ContentWrapper>
      </Main>
    </EnLayout>
  )
}

export default FAQ

export const query = graphql`
  query faqPage {
    faqJson {
      hero {
        description
        title
      }
      faq {
        title
        qa {
          answer
          question
        }
      }
    }
  }
`

const Title = styled(T.H3)``
const LinksWrapper = styled.ul``

const ContentWrapper = styled.div``
const Container = styled.div``
const QuestionSectionWrapper = styled.div``
const MenueWrapper = styled.section``

const FaqWrapper = styled.section``
//   .accordion {
//     border: none;
//     border-radius: 0;
//   }
//   .accordion__item {
//     border-top: 2px solid #f2f6fa !important;
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
//     background-color: #fff;
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
//     background-color: #fff;
//     border-bottom: 4px solid #f2f6fa !important;
//   }
// `
