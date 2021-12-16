import React from "react"
import styled from "styled-components"

import { SectionWrapper, Button } from "components"
import { W, S, theme } from "styles"
import ExpandIcon from "images/svg/expand-right.svg"

const SectionOpenings = ({ data }) => {
  return (
    <SectionWrapper>
      <Wrapper id="open-positions">
        <ContentWrapper>
          <TopWrapper>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
          </TopWrapper>
          <OpeningsWrapper>
            <Grid>
              {data.openings.map((opening, index) => (
                <Opening key={index}>
                  <Link href={opening.link} target="_blank">
                    <PositionTitle as="h3">{opening.title}</PositionTitle>
                    <Details>
                      {opening.location} | {opening.time}
                    </Details>
                  </Link>
                  <IconWrap>
                    <ExpandIcon />
                  </IconWrap>
                </Opening>
              ))}
              <Opening>
                <PositionTitle as="h5">
                  {data.openApplication.title}
                </PositionTitle>
                <OpenApplication>
                  {data.openApplication.description}{" "}
                  <a
                    href={`mailto:${data.openApplication.email}?subject='Outfund-Openapplication'`}
                  >
                    {data.openApplication.email}
                  </a>
                </OpenApplication>
              </Opening>
            </Grid>
            <BtnWrapper>
              <Button btnUrl={data.btnUrl} variant="secondary">
                {data.btn}
              </Button>
            </BtnWrapper>
          </OpeningsWrapper>
        </ContentWrapper>
      </Wrapper>
    </SectionWrapper>
  )
}
export default SectionOpenings

const PositionTitle = styled(S.H6)``
const OpenApplication = styled(S.BodyMedium)`
  margin-top: 8px;
`
const Details = styled.span`
  margin-left: 16px;
  color: #405e80;
`
const IconWrap = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
`

const Wrapper = styled(W.ContainerMax)`
  background-color: #fff;
  border-radius: 10px;
`
const ContentWrapper = styled(W.ContainerXl)`
  padding-bottom: 80px;
`

const TopWrapper = styled(W.ContainerS)`
  text-align: center;
  padding: 80px 0 64px;
`
const Title = styled(S.H2)``
const Description = styled(S.SubHeading)`
  max-width: 540px;
  margin: 0 auto;
`
const OpeningsWrapper = styled(W.ContainerM)``
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat (1, auto);
  border-top: 1px solid #bbc7d6;
  /* display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  margin-bottom: 40px;

  ${theme.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }
  ${theme.above.laptop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 48px;
  } */
`
const Opening = styled.li`
  &:not(:last-child) {
    display: grid;
    grid-template-columns: auto 24px;
    align-items: center;
    padding-right: 24px;
    column-gap: auto;
    border-bottom: 1px solid #bbc7d6;
    :hover {
      background-color: #f2f6fa;
    }
  }
  &:last-child {
    max-width: 670px;
    padding: 24px;
  }
`
const Link = styled.a`
  text-decoration: none;
  display: flex;
  font-display: row;
  align-items: baseline;
  padding: 24px;
  color: inherit;
`

const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 48px;
`
