import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

import LangLayout from "./../../layouts/es"

import {
  HeroSimple,
  Main,
  SeoComponent,
  GenericForm,
  Section,
  SectionHeader,
  // SectionRegulated,
} from "./../../components"

// fields: [
//   { name: "FirstName", type: "text" },
//   { name: "Last Name", type: "text" },
// ],

const ReferralProgram = (props) => {
  return (
    <LangLayout>
      <SeoComponent
        title="Formulario para que dejen el contacto"
        description="Formulario para que dejen el contacto"
      />
      <HeroSimple data={{ title: "Formulario para que dejen el contacto" }} />
      <Main>
        <Section>
          <Wrapper>
            <ContentWrapper>
              <TextWrapper>
                <SectionHeader
                  title={"Hey!"}
                  description={
                    "Estamos seguros que estás buscando todas las fórmulas para cerrar el grifo de tu caja y extender tu runway al máximo en esta época de incertidumbre. El mundo del capital riesgo se ha deconstruido y aunque todos aconsejan asegurar la caja hasta el 2024, esto nos queda un poco lejos. <br/><br/> En Outfund acaba de lanzar un nuevo producto de 'Runway extension'destinado a ayudaros a superar la recesión inminente. Nuestra inversión se basa en el performance de la empresa, no diluye el captable y no exige garantías personales.  <br/><br/> Si tener más capital para invertir en márketing o en stock, sea cuál sea tu negocio, te ayudará a superar esta época con mayor tranquilidad, déjanos tu contacto en este formulario y buscaremos cómo ayudarte."
                  }
                />
              </TextWrapper>

              <FormWrapper>
                <T.H4>Apply here</T.H4>
                <GenericForm
                  form={{
                    name: "QuickQuote",
                    firstName: "First Name",
                    lastName: "Last name",
                    businessName: "Business name",
                    businessEmail: "Business email",
                    amr: "Monthly Revenue in EUR",
                    btn: { text: "Submit" },
                  }}
                  language={"es"}
                />
              </FormWrapper>
            </ContentWrapper>
          </Wrapper>
        </Section>
      </Main>
    </LangLayout>
  )
}

export default ReferralProgram

const FormWrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  padding: 32px 40px;
  border-radius: 10px;
  h4 {
    margin-bottom: 24px;
  }
`
const Wrapper = styled.div`
  margin-top: 120px;
`
const TextWrapper = styled.div`
  align-self: start;
  h2 {
    margin-bottom: 16px;
  }
`
const ContentWrapper = styled.div`
  /* background-color: #afa; */
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1170px;
  margin: 0 auto;
  gap: 64px;
  ${theme.above.t.m} {
    grid-template-columns: 570fr 520fr;
  }
`
