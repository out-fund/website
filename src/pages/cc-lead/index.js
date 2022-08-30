import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "./../../layouts/en"

import LogoDark from "./../../images/svg/Outfund-logo.svg"

import { CCLeadForm, Link, SeoComponent } from "./../../components"
import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const GetFunded = (props) => {
  const data = props.data.getFundedJson.content

  const incorporationCountry = [
    "Australia",
    "Spain",
    "New Zealand",
    "United Kingdom",
    "United States",
    "Other",
  ]
  const businessType = ["eCommerce", "Mobile App", "SaaS", "Other"]

  return (
    <LangLayout noNavbar pt noFooter>
      <SeoComponent
        title="Get funded"
        description="We've funded 1000s of brands like yours"
      />
      <Wrapper>
        <ContentWrapper>
          <LogoWhiteWrapper>
            <Link to={`/`}>
              <LogoDark />
            </Link>
          </LogoWhiteWrapper>
          <RightWrapper>
            <RightContentWrapper>
              <TextWrapper>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
              </TextWrapper>
              <CCLeadForm
                data={data}
                incorporationCountry={incorporationCountry}
                businessType={businessType}
                language=""
              />
            </RightContentWrapper>
          </RightWrapper>
        </ContentWrapper>
      </Wrapper>
    </LangLayout>
  )
}

export default GetFunded

const LogoWhiteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  padding: 24px 0px;
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 40px;
  box-shadow: rgb(5 24 64 / 7%) 0px 17px 33px,
    rgb(5 24 64 / 5%) 0px 3.8002px 13.45px,
    rgb(5 24 64 / 4%) 0px 1.07885px 7.14579px;

  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg {
    height: 24px;
  }
`

// const PageTitle = styled(T.H1)`
//   color: #deeeff;
//   max-width: 540px;
// `

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
  min-height: 100vh;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
export const query = graphql`
  query CCLeadPage {
    getFundedJson(language: { regex: "/en-GB/" }) {
      content {
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
