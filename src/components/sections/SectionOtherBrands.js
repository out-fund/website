import React, { Fragment } from "react"
import styled from "styled-components"

import {
  Section,
  CardLogoReadMore,
  CardCta,
  SectionHeader,
} from "./../../components"

const SectionOtherBrands = (props) => {
  // console.log("otherBrands", props.data)
  // const classN = story.frontmatter.card.company.toLowrCase().replace(/\s/g, "")

  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <SectionHeader title={props.content.title} />
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
  /* margin-top: 64px; */
`
const ContentWrapper = styled.div``
const CardsWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 30px;
  row-gap: 30px;

 theme.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
 theme.above.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  > div:last-child {
    svg {
      width: 100px;
      height: 95px;
    }
  } */
`
