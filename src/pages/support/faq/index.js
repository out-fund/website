import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"

import EnLayout from "layouts/en"
import { HeroSimple, Main } from "./../../../components"
import T from "./../../../styles/new/typography"
import { theme } from "./../../../styles/new/theme"

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
          <AccordionItemPanel>
            <T.Body as="div">{parse(item.answer)}</T.Body>
          </AccordionItemPanel>
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

const LinksWrapper = styled.ul`
  background-color: ${theme.color.background.emphesized};
  display: block;
  padding: 32px;
  border-radius: 10px;
  li {
    display: block;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  a {
    color: ${theme.color.button.primary.backgroundColor};
    text-decoration: none;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 100px;
  max-width: 970px;
  margin: 0 auto;
  padding-top: 80px;
  h3 {
    margin-bottom: 24px;
  }
`
const Container = styled.div``
const QuestionSectionWrapper = styled.div`
  margin-bottom: 80px;
`
const MenueWrapper = styled.section``

const FaqWrapper = styled.section`
  .accordion {
    border: none;
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
    background-color: #fff;
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
    background-color: #fff;
    border-bottom: 1px solid #bbc7d6 !important;
  }
`
