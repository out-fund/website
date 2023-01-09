import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

import T from "../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

import LangLayout from "./../../layouts/en"

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
      <SeoComponent title="Quick quote" description="Quick quote" />
      <HeroSimple data={{ title: "Quick quote" }} />
      <Main>
        <Section>
          <Wrapper>
            <ContentWrapper>
              <TextWrapper>
                <SectionHeader
                  title={"Hey!"}
                  description={
                    "The fundraising World has gone a bit mad recently, I am sure you have been advised to batten down the hatches and extend your runway into 2025! Thats far. <br/> Due to this Outfund has just released a new “Runway Extension” product, aimed at helping see you through the impending recession.  <br/><br/> Our Revenue Based Investment is non-dilutive and if you have a slow period coming up we don’t penalise you, as we only get repaid when you generate revenue! totally aligned with your journey. <br/><br/> It would be great to have a chat to talk you through our runway options."
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
                    amr: "Monthly Revenue in GBP",
                    btn: { text: "Submit" },
                  }}
                  language={""}
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
