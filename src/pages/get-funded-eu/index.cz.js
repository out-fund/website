import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "./../../layouts/cz"

import LogoWhite from "./../../images/svg/Outfund-logo-white.svg"
import LogoDark from "./../../images/svg/Outfund-logo.svg"
import LogoStrip from "./../../images/svg/get-funded-logo-strip.svg"

import { GetFundedFormEU, Link, SeoComponent } from "./../../components"
import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"
import { Triangle } from "./../../styles/utils"

const GetFunded = (props) => {
  const data = props.data.getFundedJson.content

  return (
    <LangLayout noNavbar pt noFooter>
      <SeoComponent title={data.title} description={data.description} />
      <Wrapper>
        <ContentWrapper>
          <LeftWrapper>
            <LeftContentWrapper>
              <LogoWhiteWrapper>
                <Link to={`/`}>
                  <LogoWhite />
                </Link>
              </LogoWhiteWrapper>
              <LeftTextWrapper>
                <PageTitle>{data.sideTitle}</PageTitle>
              </LeftTextWrapper>
              <LogoSection>
                <LogoSectionTitle>
                  {/* We've funded 1000's of brands like yours */}
                </LogoSectionTitle>
                <LogoStripWrapper>
                  <LogoStrip />
                </LogoStripWrapper>
              </LogoSection>
            </LeftContentWrapper>
          </LeftWrapper>
          <RightWrapper>
            <RightContentWrapper>
              <LogoDarkWrapper>
                <Link to={`/`}>
                  <LogoDark />
                </Link>
              </LogoDarkWrapper>
              <TextWrapper>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
              </TextWrapper>
              <GetFundedFormEU data={data} language="cs" currency="CZK" />
            </RightContentWrapper>
          </RightWrapper>
        </ContentWrapper>
      </Wrapper>
    </LangLayout>
  )
}

export default GetFunded

const LogoStripWrapper = styled.div`
  height: 60px;
`

const LogoSection = styled.div`
  margin-top: auto;
`

const LogoSectionTitle = styled(T.Body)`
  color: #deeeff;
  opacity: 0.5;
  margin-bottom: 16px;
`

const LeftWrapper = styled.div`
  background-color: #0d2c4f;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  padding-top: 120px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 800px) {
    display: none;
  }
`

const LeftContentWrapper = styled.div`
  max-width: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  /* margin: 0; */
`

const LeftTextWrapper = styled.div`
  /* background-color: #afa; */
  margin-top: 48px;
  position: relative;
  ${Triangle}
  &:after {
    /* bottom: 0px; */
    bottom: 50%;
    left: 100%;
    z-index: 3;
    transform: rotate(-90deg);
  }
`
const LogoDarkWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  display: none;
  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg {
    height: 24px;
  }
  @media (max-width: 800px) {
    display: block;
  }
`
const LogoWhiteWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg {
    height: 24px;
  }
`

const PageTitle = styled(T.H1)`
  color: #deeeff;
  max-width: 540px;
`

const Title = styled(T.H2)``
const Description = styled(T.Body)``

const TextWrapper = styled.div`
  text-align: center;
`
const Wrapper = styled.div`
  background-color: ${theme.color.background.emphesized};

  /* padding-top: 10vh;
  padding-left: 24px;
  padding-right: 24px; */
`

const RightContentWrapper = styled.div`
  max-width: 400px;
  display: flex;
  width: 100%;
  flex-direction: column;
`

const RightWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  /* padding-top: 40px; */
  padding-bottom: 40px;
  @media (max-width: 800px) {
    align-items: flex-start;
    padding-top: 24px;
    padding-right: 16px;
    padding-left: 16px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  min-height: 100vh;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const query = graphql`
  query csGetFundedPage {
    getFundedJson(language: { regex: "/cs-CZ/" }) {
      content {
        sideTitle
        title
        description
        form {
          name
          email
          phone
          website
          select {
            title
            default
            options
            values
          }
          btn
        }
      }
    }
  }
`
