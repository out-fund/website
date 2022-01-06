import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { SectionHeader, Section } from "./../../components"
import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const SectionCoolPeople = ({ data }) => {
  const { title, people } = data //btn removed
  return (
    <Section>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={title} />
        </HeaderWrapper>

        <ContentWrapper>
          <PeopleGrid>
            {people.map((person) => (
              <Person key={person.name}>
                <ImageWrapper>
                  <GatsbyImage
                    image={getImage(person.image.src)}
                    alt={person.image.alt}
                  />
                </ImageWrapper>

                <TextWrapper>
                  <Name as="h3">{person.name}</Name>
                  <Role>{person.role}</Role>
                  <Description>{person.description}</Description>
                </TextWrapper>
              </Person>
            ))}
          </PeopleGrid>
          {/* <BtnWrapper>
            <Button to={btn.url} variant="secondary">
              {btn.text}
            </Button>
          </BtnWrapper> */}
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionCoolPeople

const Name = styled(T.H4)`
  padding-top: 16px;
  ${theme.above.l.m} {
    padding-top: 32px;
  }
`
const Role = styled(T.BodyLarge)`
  margin-bottom: 8px;
  ${theme.above.l.m} {
    margin-bottom: 16px;
  }
`
const Description = styled(T.Body)``

const Wrapper = styled.div``
const ContentWrapper = styled.div`
  max-width: 1370px;
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 64px;
`
const TextWrapper = styled.div``
// const BtnWrapper = styled.div`
//   text-align: center;
//   margin-top: 64px;
// `
const ImageWrapper = styled.div`
  max-width: 80px;
  ${theme.above.t.m} {
    max-width: unset;
  }
  .gatsby-image-wrapper {
    position: relative;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0px 100px 80px rgba(1, 14, 25, 0.07),
      0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198),
      0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275),
      0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035),
      0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725),
      0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802);
  }
`

const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 24px;
  row-gap: 24px;

  ${theme.above.t.l} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${theme.above.l.m} {
    /* grid-template-columns: repeat(2, 1fr); */
    /* column-gap: 80px; */
    /* row-gap: 80px; */
  }
`
const Person = styled.div`
  display: grid;
  grid-template-rows: auto;
  background-color: ${theme.color.background.emphesized};
  padding: 24px;
  border-radius: 10px;

  ${theme.above.t.s} {
    grid-template-columns: 100px auto;
    column-gap: 24px;
  }
  ${theme.above.l.m} {
    grid-template-columns: 160px auto;
    column-gap: 40px;
  }
`
