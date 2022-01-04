import React, { Fragment } from "react"
import styled from "styled-components"

import { Section, CardLogoReadMore } from "./../../components"
import { theme } from "./../../styles/new/theme"

const SectionFeaturedCards = (props) => {
  // console.log("SectionFeaturedCards", props.data)
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <CardsWrapper>
            {props.data.map(({ node: story }, index) => (
              <Fragment key={index}>
                {story.frontmatter.featured && (
                  // <CardLogoReadMore data={story} tag={"We funded"} />
                  // <p>test{console.log(story.frontmatter.card)}</p>
                  <CardLogoReadMore
                    tag={story.frontmatter.card.tag}
                    company={story.frontmatter.card.company}
                    logo={story.frontmatter.card.logo}
                    image={story.frontmatter.card.image}
                    btn={story.frontmatter.card.btn}
                  />
                )}
              </Fragment>
            ))}
          </CardsWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionFeaturedCards

const Wrapper = styled.div`
  margin-top: 64px;
`
const ContentWrapper = styled.div``
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 30px;

  ${theme.above.p.m} {
  }

  ${theme.above.t.s} {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    column-gap: 30px;
  }
  ${theme.above.l.m} {
    grid-template-columns: repeat(2, 570px);
  }

  /* ${theme.above.d.m} {
    grid-template-columns: repeat(2, 570px);
    justify-content: center;
    column-gap: 30px;
  } */
`
