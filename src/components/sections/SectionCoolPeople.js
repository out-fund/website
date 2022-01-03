import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Button, SectionHeader } from "./../../components"
import T from "./../../styles/new/typography"

const SectionCoolPeople = ({ data }) => {
  const { title, people, btn } = data
  return (
    <Wrapper>
      <SectionHeader title={title} />
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
        <BtnWrapper>
          <Button to={btn.url} variant="secondary">
            {btn.text}
          </Button>
        </BtnWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
export default SectionCoolPeople

const Name = styled(T.H6)`
  /* padding-top: 16px;
  theme.above.desktop {
    padding-top: 32px;
  } */
`
const Role = styled(T.BodyLarge)`
  /* margin-bottom: 8px;
  theme.above.desktop {
    margin-bottom: 16px;
  } */
`
const Description = styled(T.Body)``

const Wrapper = styled.div``
const ContentWrapper = styled.div``

const TextWrapper = styled.div``
const BtnWrapper = styled.div`
  /* text-align: center;
  margin-top: 64px; */
`
const ImageWrapper = styled.div`
  /* max-width: 80px;
  theme.above.tablet {
    max-width: unset;
  }
  .gatsby-image-wrapper {
    position: relative;
    z-index: 1;
    border-radius: 20px;
  } */
`

const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  row-gap: 24px;

  /* theme.above.tablet} {
    row-gap: 32px;
  }
  theme.above.laptop} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
    row-gap: 80px;
  } */
`
const Person = styled.div`
  /* display: grid;
  grid-template-rows: auto;

  theme.above.tablet} {
    grid-template-columns: 100px auto;
    column-gap: 24px;
  }
  theme.above.laptop} {
    grid-template-columns: 160px auto;
    column-gap: 40px;
  } */
`
