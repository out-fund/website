// import React from "react"

// const PrivacyPolicy = () => {
//   return (
//     <main>
//       <title>PrivacyPolicy</title>
//       <h1>PrivacyPolicy</h1>
//     </main>
//   )
// }

// export default PrivacyPolicy

import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

import EnLayout from "layouts/en"

import { HeroSimple, Main } from "./../../../components"

const PrivacyPolicy = (props) => {
  // console.log(props)
  return (
    <EnLayout>
      <Main>
        {/* <HeroSimple data={props.data.howFundingWorksJson.hero} /> */}
        <Wrapper>
          <ContentWrapper>WIP</ContentWrapper>
        </Wrapper>
      </Main>
    </EnLayout>
  )
}

export default PrivacyPolicy

// export const query = graphql`
//   query howFundingWorksPage {
//     howFundingWorksJson(language: { regex: "/en-GB/" }) {
//       hero {
//         description
//         title
//       }
//     }
//   }
// `
const Wrapper = styled.div``
// const List = styled.ul``
// const Item = styled.li``
// const CardPost = styled.div``
const ContentWrapper = styled.div``
