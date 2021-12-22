import React from "react"
import styled from "styled-components"

import { Section, Button, SectionHeader } from "./../../components"
import T from "./../../styles/new/typography"

// import ExpandIcon from "images/svg/expand-right.svg"

const SectionOpenings = ({ data }) => {
  const { title, description, openings, openApplication, btn } = data
  return (
    <Section>
      <Wrapper id="open-positions">
        <ContentWrapper>
          <SectionHeader title={title} description={description} />
          <OpeningsWrapper>
            <Grid>
              {openings.map((opening, index) => (
                <Opening key={index}>
                  <WorkableLink href={opening.link} target="_blank">
                    <PositionTitle as="h3">{opening.title}</PositionTitle>
                    <Details>
                      {opening.location} | {opening.time}
                    </Details>
                  </WorkableLink>
                  {/* <IconWrap>
                    <ExpandIcon />
                  </IconWrap> */}
                </Opening>
              ))}
              <Opening>
                <PositionTitle as="h5">{openApplication.title}</PositionTitle>
                <OpenApplication>
                  {openApplication.description}{" "}
                  <a
                    href={`mailto:${openApplication.email}?subject='Outfund-Openapplication'`}
                  >
                    {openApplication.email}
                  </a>
                </OpenApplication>
              </Opening>
            </Grid>
            <BtnWrapper>
              <Button href={btn.url} variant="secondary" target="_blank">
                {btn.text}
              </Button>
            </BtnWrapper>
          </OpeningsWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionOpenings

const PositionTitle = styled(T.H6)``
const OpenApplication = styled(T.Body)`
  /* margin-top: 8px; */
`
const Details = styled.span`
  /* margin-left: 16px;
  color: #405e80; */
`
// const IconWrap = styled.div`
//   /* svg {
//     width: 24px;
//     height: 24px;
//   } */
// `

const Wrapper = styled.div`
  /* background-color: #fff;
  border-radius: 10px; */
`
const ContentWrapper = styled.div`
  /* padding-bottom: 80px; */
`

const OpeningsWrapper = styled.div``
const Grid = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(1, auto);
  border-top: 1px solid #bbc7d6; */
`
const Opening = styled.li`
  /* &:not(:last-child) {
    display: grid;
    grid-template-columns: auto 24px;
    align-items: center;
    padding-right: 24px;
    border-bottom: 1px solid #bbc7d6;
    :hover {
      background-color: #f2f6fa;
    }
  }
  &:last-child {
    max-width: 670px;
    padding: 24px;
  } */
`
const WorkableLink = styled.a`
  /* text-decoration: none;
  display: flex;
  align-items: baseline;
  padding: 24px;
  color: inherit; */
`

const BtnWrapper = styled.div`
  /* text-align: center;
  margin-top: 48px; */
`
