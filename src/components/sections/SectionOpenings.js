import React from "react"
import styled from "styled-components"

import { Section, Button, SectionHeader } from "./../../components"
import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

import ExpandIcon from "images/svg/expand-right.svg"

const SectionOpenings = ({ data }) => {
  const { title, description, openings, openApplication, btn } = data
  return (
    <Section id="open-positions">
      <Wrapper>
        <ContentWrapper>
          <HeaderWrapper>
            <SectionHeader title={title} description={description} />
          </HeaderWrapper>

          <OpeningsWrapper>
            <Grid>
              {openings.map((opening, index) => (
                <Opening key={index}>
                  <WorkableLink href={opening.link} target="_blank">
                    <PositionTitle as="h3">{opening.title}</PositionTitle>
                    <Details as="span">
                      {opening.location} | {opening.time}
                    </Details>
                    <IconWrap>
                      <ExpandIcon />
                    </IconWrap>
                  </WorkableLink>
                </Opening>
              ))}
            </Grid>
            <BtnWrapper>
              <Button href={btn.url} variant="primary" target="_blank">
                {btn.text}
              </Button>
            </BtnWrapper>
          </OpeningsWrapper>

          <CantFindWrapper>
            <PositionTitle as="h5">{openApplication.title}</PositionTitle>
            <OpenApplication>
              {openApplication.description}{" "}
              <a
                href={`mailto:${openApplication.email}?subject='Outfund-Openapplication'`}
              >
                {openApplication.email}
              </a>
            </OpenApplication>
          </CantFindWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionOpenings

const PositionTitle = styled(T.H5)``
const OpenApplication = styled(T.Body)`
  margin-top: 16px;
`
const Details = styled(T.Body)`
  color: #405e80;
  ${theme.above.t.m} {
    margin-left: 24px;
  }
`

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 540px;
  margin: 0 auto;
`

const IconWrap = styled.span`
  display: none;

  ${theme.above.t.m} {
    display: flex;
    margin-left: auto;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

const CantFindWrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  padding: 40px;
  border-radius: 10px;
  margin-top: 40px;
`

const Wrapper = styled.div``
const ContentWrapper = styled.div`
  /* padding-bottom: 80px; */
  max-width: 970px;
  margin: 0 auto;
`

const OpeningsWrapper = styled.div`
  margin-top: 40px;
`

const Grid = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 970px;
`
const Opening = styled.li``
const WorkableLink = styled.a`
  display: flex;

  text-decoration: none;
  width: 100%;

  padding: 16px 24px;
  border-radius: 30px;

  flex-direction: column;

  ${theme.above.t.m} {
    flex-direction: row;
    align-items: center;
    align-items: baseline;
  }

  &:hover {
    background-color: ${theme.color.background.emphesized};
  }
`

const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`
