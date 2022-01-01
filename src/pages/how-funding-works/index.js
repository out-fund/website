import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import EnLayout from "layouts/en"

import { HeroSimple, Main } from "./../../components"

const HowFundingWorks = (props) => {
  console.log(props)
  return (
    <EnLayout>
      <Main>
        <HeroSimple data={props.data.howFundingWorksJson.hero} />
        <Wrapper>
          <ContentWrapper>WIP</ContentWrapper>
        </Wrapper>
      </Main>
    </EnLayout>
  )
}

export default HowFundingWorks

export const query = graphql`
  query howFundingWorksPage {
    howFundingWorksJson(language: { regex: "/en-GB/" }) {
      hero {
        description
        title
      }
    }
  }
`
const Wrapper = styled.div``
// const List = styled.ul``
// const Item = styled.li``
// const CardPost = styled.div``
const ContentWrapper = styled.div``
