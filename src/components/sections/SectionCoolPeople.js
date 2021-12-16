import React from "react"
import styled from "styled-components"
import { W, S, theme } from "styles"
import { SectionContainer, Button } from "components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SectionCoolPeople = ({ data }) => {
  return (
    <SectionContainer title={data.title}>
      <Wrapper>
        <ContentWrapper>
          <PeopleGrid>
            {data.people.map((person) => (
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
            <Button btnUrl={data.btnUrl} variant="secondary">
              {data.btn}
            </Button>
          </BtnWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionContainer>
  )
}
export default SectionCoolPeople

const Name = styled(S.H6)`
  padding-top: 16px;
  ${theme.above.desktop} {
    padding-top: 32px;
  }
`
const Role = styled(S.SubHeading)`
  margin-bottom: 8px;
  ${theme.above.desktop} {
    margin-bottom: 16px;
  }
`
const Description = styled(S.BodyMedium)``

const Wrapper = styled(W.ContainerFull)``
const ContentWrapper = styled(W.ContainerL)``

const TextWrapper = styled.div``
const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 64px;
`
const ImageWrapper = styled.div`
  max-width: 80px;
  ${theme.above.tablet} {
    max-width: unset;
  }
  .gatsby-image-wrapper {
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: 20px;
  }
`

const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 24px;

  ${theme.above.tablet} {
    row-gap: 32px;
  }
  ${theme.above.laptop} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
    row-gap: 80px;
  }
`
const Person = styled.div`
  display: grid;
  grid-template-rows: auto;
  /* row-gap: 16px; */

  ${theme.above.tablet} {
    grid-template-columns: 100px auto;
    column-gap: 24px;
  }
  ${theme.above.laptop} {
    grid-template-columns: 160px auto;
    column-gap: 40px;
  }
`
