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
    "15 000 €",
    "30 000 €",
    "75 000 €",
    "105 000 €",
    "150 000 €",
    "300 000 €",
    "750 000 €",
    "1 050 000 €",
    "1 500 000 €",
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
              <Title>¡Estupenda!</Title>
              <Description>
                Parece que podría ser elegible para recibir hasta{" "}
                <b>{values[selected - 1]}</b> de financiación.
              </Description>
              <ButtonWrapper>
                <Button to="/get-funded/" variant="primary" size="large">
                  Aplica ya
                </Button>
              </ButtonWrapper>
            </>
          ) : (
            <>
              <Title>
                Parece que actualmente no cumple los requisitos para recibir
                financiación
              </Title>
              <Description>
                Manténgase en contacto y vuelva a consultarnos en unos meses,
                una vez que sus ingresos mensuales hayan aumentado.
              </Description>
              <ButtonWrapper>
                <Button to="/" variant="primary" size="large">
                  Regresa
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
