import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import {
  Section,
  Offices,
  Button,
  SectionHeader,
  ThreeColumnIcons,
} from "./../../components"
// import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"
import { mapBgImage } from "./../../styles/utils"

const SectionInOfficeRemote = ({ data, officeData }) => {
  const { title, description, blocks } = data
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <HeadingWrapper>
              <SectionHeader title={title} description={description} />
            </HeadingWrapper>
            <GridWrapper>
              <ThreeColumnIcons blocks={blocks} />
            </GridWrapper>
          </TextWrapper>
          <Offices
            offices={officeData.offices}
            image={officeData.image}
            imageAlt={officeData.imageAlt}
          />
          {/* <BtnWrapper>
            <Button to={data.btn.url} variant="secondary">
              {data.btn.text}
            </Button>
          </BtnWrapper> */}
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionInOfficeRemote

// const BtnWrapper = styled.div`
//   text-align: center;
//   margin-top: 64px;
// `

const Wrapper = styled.div`
  background-color: var(--background);
  background-image: ${mapBgImage};
  background-blend-mode: multiply;
  background-position: 50% 0%;
  background-size: contain;
  background-repeat: no-repeat;

  padding-top: 10vh;
  ${theme.above.t.s} {
    padding-top: 20vh;
  }
  ${theme.above.l.m} {
    padding-top: 30vh;
  }
`
const ContentWrapper = styled.div``

const TextWrapper = styled.div`
  /* margin-bottom: 64px; */
`

const GridWrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 24px;
`

const HeadingWrapper = styled.div`
  text-align: center;
`
