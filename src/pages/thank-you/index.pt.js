import React from "react"
import styled from "styled-components"

import LangLayout from "../../layouts/pt"

import { SeoComponent } from "../../components"
import T from "../../styles/new/typography"
import { theme } from "../../styles/new/theme"

const ThankYou = () => {
  return (
    <LangLayout simpleNavbar>
      <SeoComponent
        title="Obrigado pela sua submissão."
        description="Nós voltaremos para você em breve."
      />
      <Wrapper>
        <ContentWrapper>
          <Title>Obrigado pela sua submissão.</Title>
          <Description>Nós voltaremos para você em breve.</Description>
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
