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
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 970px;
  margin: 0 auto;
  padding-top: 80px;
  h3 {
    margin-bottom: 24px;
  }
  ${theme.above.l.m} {
    grid-template-columns: 200px 1fr;
    gap: 100px;
  }
`
const Container = styled.div``
const QuestionSectionWrapper = styled.div`
  margin-bottom: 80px;
`
const MenueWrapper = styled.section``

const FaqWrapper = styled.section`
  border-bottom: 1px solid #bbc7d6 !important;
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
    outline: none;
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

    &::before {
      margin-left: auto;
      color: #1a65ba;
      transform: rotate(45deg);
      transition: transform 0.5s ease;
    }
    &[aria-expanded="true"]::before {
      transform: rotate(-135deg);
    }
  }
  .accordion__panel {
    margin: 0;
    padding: 16px 40px 32px;
    background-color: ${theme.color.background.emphesized};
    transform: translate3d(0, 0, 0);
    ul,
    ol {
      margin-top: 8px;
      padding-left: 24px;
      list-style-type: disc;
      li {
        display: list-item;
      }
    }
    ol {
      list-style-type: decimal;
    }
  }
`

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
