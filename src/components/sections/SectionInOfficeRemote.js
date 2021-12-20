import React from "react"
import styled from "styled-components"
import { W, S, U, theme } from "styles"
import { Section, Offices, Button } from "components"
import parse from "html-react-parser"

const SectionInOfficeRemote = ({ data, officeData }) => {
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <TopWrapper>
              <Title>{data.title}</Title>
              <Description>{data.description}</Description>
            </TopWrapper>
            <GridWrapper>
              <Grid>
                {data.blocks.map((block, index) => (
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
            <Button btnUrl={data.btnUrl} variant="secondary">
              {data.btn}
            </Button>
          </BtnWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionInOfficeRemote

const Title = styled(S.H2)`
  text-align: center;
`
const Description = styled(S.BodyText)`
  text-align: center;
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 24px;

  ${theme.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
  }
  ${theme.above.laptop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }
`
const Block = styled.li`
  text-align: center;
`
const IconWrapper = styled.div`
  svg {
    width: 48px;
    height: 48px;
  }
`
const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 64px;
`

const BlockTitle = styled(S.H6)``
const BlockDescription = styled(S.BodyMedium)``

const Wrapper = styled(W.ContainerFull)`
  background-color: var(--background);
  background-image: ${U.mapBgImage};
  background-blend-mode: multiply;
  background-position: 50% 0%;
  background-size: contain;
  background-repeat: no-repeat;

  padding-top: 10vh;
  ${theme.above.tablet} {
    padding-top: 20vh;
  }
  ${theme.above.laptop} {
    padding-top: 30vh;
  }
`
const ContentWrapper = styled(W.ContainerL)``

const TextWrapper = styled.div`
  margin-bottom: 64px;
`

const GridWrapper = styled.div``
const TopWrapper = styled(W.ContainerS)`
  margin-bottom: 40px;
`
