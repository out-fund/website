import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

import LangLayout from "../../layouts/es"

import { Button } from "../../components"
import T from "../../styles/new/typography"
import { theme } from "../../styles/new/theme"

const Eligibility = ({ location }) => {
  let selected
  if (location.state) {
    selected = location.state.selected
  }

  const values = [
    "13 000€",
    "26 000€",
    "65 000€",
    "91 000€",
    "130 000€",
    "260 000€",
    "650 000€",
    "910 000€",
    "1 300 000€",
    "2M €",
  ]

  return (
    <LangLayout simpleNavbar>
      <Wrapper>
        <ContentWrapper>
          {/* {selected > 9 ? (
            <>
              <Title>Please contact us for tailored offer</Title>
              <ButtonWrapper>
                <Button
                  href="https://app.out.fund/enquire?"
                  variant="primary"
                  size="large"
                >
                  Contact Us
                </Button>
              </ButtonWrapper>
            </>
          ) :} */}
          {selected > 0 ? (
            <>
              <Title>Great!</Title>
              <Description>
                It looks like you could be eligible for up to{" "}
                <b>{values[selected - 1]}</b> of funding.
              </Description>
              <ButtonWrapper>
                <Button
                  href="https://app.out.fund/enquire"
                  variant="primary"
                  size="large"
                >
                  Apply now
                </Button>
              </ButtonWrapper>
            </>
          ) : (
            <>
              <Title>
                It looks like you're not currently eligible for funding
              </Title>
              <Description>
                Please keep in touch and check back with us in a few months,
                once your monthly revenue has increased.
              </Description>
              <ButtonWrapper>
                <Button to="/" variant="primary" size="large">
                  Go back
                </Button>
              </ButtonWrapper>
            </>
          )}
        </ContentWrapper>
      </Wrapper>
    </LangLayout>
  )
}

export default Eligibility

const Title = styled(T.H2)`
  margin-bottom: 8px;
`
const Description = styled(T.BodyLarge)`
  font-weight: 400;
`

const ButtonWrapper = styled.div`
  margin-top: 40px;
`
const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`

const Wrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  min-height: 100vh;
  padding-top: 10vh;
  padding-left: 24px;
  padding-right: 24px;
`
