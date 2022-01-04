import React, { Fragment } from "react"
import styled from "styled-components"

import {
  Section,
  CardLogoReadMore,
  CardCta,
  SectionHeader,
} from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionOtherBrands = (props) => {
  // console.log("otherBrands", props.data)
  // const classN = story.frontmatter.card.company.toLowrCase().replace(/\s/g, "")

  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <SectionHeader title={props.content.title} />
          </TextWrapper>

          <CardsWrapper>
            {props.data.map(({ node: story }, index) => (
              <Fragment key={index}>
                {!story.frontmatter.featured && (
                  <CardLogoReadMore
                    tag={story.frontmatter.card.tag}
                    company={story.frontmatter.card.company}
                    logo={story.frontmatter.card.logo}
                    image={story.frontmatter.card.image}
                    className={story.frontmatter.card.company
                      .toLowerCase()
                      .split(" ")
                      .join("")}
                  />
                )}
              </Fragment>
            ))}
            <CardCta
              title={props.content.card.title}
              btn={props.content.card.btn}
            />
          </CardsWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionOtherBrands

const Wrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 80px;
`
const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 48px;
`
const ContentWrapper = styled.div``
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 30px;
  justify-content: center;
  /* justify-items: center; */

  ${theme.above.p.m} {
  }

  ${theme.above.t.s} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }
  ${theme.above.l.m} {
    grid-template-columns: repeat(2, 570px);
  }

  ${theme.above.d.m} {
    grid-template-columns: repeat(3, 570px);
  }
`
