import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import { Section, Offices, Button, SectionHeader } from "./../../components"
import T from "./../../styles/new/typography"

const SectionInOfficeRemote = ({ data, officeData }) => {
  const { title, description, blocks } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <SectionHeader title={title} description={description} />
            <GridWrapper>
              <Grid>
                {blocks.map((block, index) => (
                  <Block key={index}>
                    <IconWrapper>{parse(block.icon)}</IconWrapper>
                    <BlockTitle as="h3">{block.title}</BlockTitle>
                    <BlockDescription>{block.text}</BlockDescription>
                  </Block>
                ))}
              </Grid>
            </GridWrapper>
          </TextWrapper>
          <Offices
            offices={officeData.offices}
            image={officeData.image}
            imageAlt={officeData.imageAlt}
          />
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
export default SectionInOfficeRemote

const Grid = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 24px;

    eme.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
  }
    eme.above.laptop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  } */
`
const Block = styled.li`
  text-align: center;
`
const IconWrapper = styled.div`
  /* svg {
    width: 48px;
    height: 48px;
  } */
`
const BtnWrapper = styled.div`
  /* text-align: center;
  margin-top: 64px; */
`

const BlockTitle = styled(T.H6)``
const BlockDescription = styled(T.BodyLarge)``

const Wrapper = styled.div`
  /* background-color: var(--background);
  background-image: U.mapBgImage};
  background-blend-mode: multiply;
  background-position: 50% 0%;
  background-size: contain;
  background-repeat: no-repeat;

  padding-top: 10vh;
    eme.above.tablet} {
    padding-top: 20vh;
  }
    eme.above.laptop} {
    padding-top: 30vh;
  } */
`
const ContentWrapper = styled.div``

const TextWrapper = styled.div`
  /* margin-bottom: 64px; */
`

const GridWrapper = styled.div``
const TopWrapper = styled.div`
  /* margin-bottom: 40px; */
`
