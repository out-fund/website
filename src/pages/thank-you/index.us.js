import React from "react"
import styled from "styled-components"

import LangLayout from "../../layouts/us"

import { Button } from "../../components"
import T from "../../styles/new/typography"
import { theme } from "../../styles/new/theme"

const ThankYou = () => {
  return (
    <LangLayout simpleNavbar>
      <Wrapper>
        <ContentWrapper>
          <Title>Almost there</Title>
          <Description>
            We need to know more about you and your company.
          </Description>
          <Button
            href="https://app.out.fund/enquire"
            variant="primary"
            size="large"
          >
            Proceed with application
          </Button>
        </ContentWrapper>
      </Wrapper>
    </LangLayout>
  )
}

export default ThankYou

const Title = styled(T.H2)`
  margin-bottom: 8px;
`
const Description = styled(T.Body)`
  margin-bottom: 40px;
`

const ContentWrapper = styled.div`
  max-width: 370px;
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
