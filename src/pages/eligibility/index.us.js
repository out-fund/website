import React from "react"
import styled from "styled-components"
import LangLayout from "../../layouts/us"

import { Button } from "../../components"
import T from "../../styles/new/typography"
import { theme } from "../../styles/new/theme"

const Eligibility = ({ location }) => {
  let selected
  if (location.state) {
    selected = location.state.selected
  }

  const values = [
    "$15 000",
    "$30 000",
    "$75 000",
    "$105 000",
    "$150 000",
    "$300 000",
    "$750 000",
    "$1 050 000",
    "$1 500 000",
    "$2M",
  ]

  return (
    <LangLayout simpleNavbar>
      <Wrapper>
        <ContentWrapper>
          {selected > 0 ? (
            <>
              <Title>Great!</Title>
              <Description>
                It looks like you could be eligible for up to{" "}
                <b>{values[selected - 1]}</b> of funding.
              </Description>
              <ButtonWrapper>
                <Button
                  href="https://client.out.fund/signup"
                  variant="primary"
                  size="large"
                  id="cta-get-funded-eligibility-click"
                  data-element-category="Signup CTA"
                >
                  Check eligibility
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
