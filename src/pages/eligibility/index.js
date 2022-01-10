import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

import EnLayout from "../../layouts/en"

import { Button } from "../../components"
import T from "../../styles/new/typography"
import { theme } from "../../styles/new/theme"

const Eligibility = ({ location }) => {
  let selected
  if (location.state) {
    selected = location.state.selected
  }

  const values = [
    "£13 000",
    "£26 000",
    "£65 000",
    "£91 000",
    "£130 000",
    "£260 000",
    "£650 000",
    "£910 000",
    "£1 300 000",
  ]

  return (
    <EnLayout simpleNavbar>
      <Wrapper>
        <ContentWrapper>
          {selected > 9 ? (
            <>
              <Title>Please contact us for tailored offer</Title>
              <Button
                href="https://app.out.fund/enquire?"
                variant="primary"
                size="large"
              >
                Contact Us
              </Button>
            </>
          ) : selected > 0 ? (
            <>
              <Title>You are elegible for funding</Title>
              <Description>
                You could get up to {values[selected - 1]}
              </Description>
              <Button
                href="https://app.out.fund/enquire?"
                variant="primary"
                size="large"
              >
                Proceed with application
              </Button>
            </>
          ) : (
            <>
              <Title>You are not eliegible</Title>
            </>
          )}
        </ContentWrapper>
      </Wrapper>
    </EnLayout>
  )
}

export default Eligibility

const Title = styled(T.H2)`
  margin-bottom: 8px;
`
const Description = styled(T.H3)`
  margin-bottom: 40px;
`

const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`

const Wrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  min-height: 90vh;
  padding-top: 10vh;
  padding-left: 24px;
  padding-right: 24px;
`
