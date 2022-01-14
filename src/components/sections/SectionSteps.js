import React from "react"
import styled from "styled-components"

import { Section, SectionHeader } from "./../../components"
import { theme } from "./../../styles/new/theme"
import T from "./../../styles/new/typography"

import Step1 from "./../../images/svg/how-it-works/step-1.svg"
import Step2 from "./../../images/svg/how-it-works/step-2.svg"
import Step3 from "./../../images/svg/how-it-works/step-3.svg"
import Step4 from "./../../images/svg/how-it-works/step-4.svg"
import Step5 from "./../../images/svg/how-it-works/step-5.svg"

const SectionSteps = () => {
  return (
    <Section>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader
            title="The process-start growing now"
            description="No paperwork, just funding at your fingertips"
          />
        </HeaderWrapper>
        <ContentWrapper>
          <Step>
            <ImageWrapper>
              <Step1 />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>1. Apply for funding</StepTitle>
              <StepDescription>
                Securely connect your accounts: we sync with your existing
                banking and payments systems to analyse your revenue data in
                realtime. Receive a tailored offer from £10K to £2M within 48
                hours.
              </StepDescription>
            </TextWrapper>
          </Step>
          <Step>
            <ImageWrapper>
              <Step2 />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>2. Select an offer</StepTitle>
              <StepDescription>
                Start spending your funds: 100% of the capital is available to
                use after selecting our offer. Ramp your investment in marketing
                and inventory to fuel your growth.
              </StepDescription>
            </TextWrapper>
          </Step>
          <Step>
            <ImageWrapper>
              <Step3 />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>3. Repay on your terms</StepTitle>
              <StepDescription>
                Pay back your balance with a small share of your new sales.
                Payments flex up and down in line with your incoming revenue.
                Quiet month? Lower repayments.
              </StepDescription>
            </TextWrapper>
          </Step>
          <Step>
            <ImageWrapper>
              <Step4 />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>4. Scale faster</StepTitle>
              <StepDescription>
                Meet our network: we connect you with growth partners,
                specialist agencies and VCs so you can hit your long-term
                milestones.
              </StepDescription>
            </TextWrapper>
          </Step>
          <Step>
            <ImageWrapper>
              <Step5 />
            </ImageWrapper>
            <TextWrapper>
              <StepTitle>5. Top up</StepTitle>
              <StepDescription>
                Access follow-on capital: your dedicated Growth Manager supports
                your ongoing capital needs so you can keep scaling without
                limits.
              </StepDescription>
            </TextWrapper>
          </Step>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
export default SectionSteps

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 40px;
`
const Wrapper = styled.div`
  padding: 0 40px;
`
const ContentWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
`
const TextWrapper = styled.div``

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  svg {
    max-height: 240px;
  }
  ${theme.above.t.l} {
    svg {
      max-height: unset;
    }
  }
`

const Step = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  /* grid-template-rows: 240px 1fr; */
  text-align: center;

  ${theme.above.t.l} {
    grid-template-columns: 470px 1fr;
    gap: 64px;
    align-items: center;
    text-align: left;
  }
`
const StepTitle = styled(T.H3)`
  margin-bottom: 8px;
  ${theme.above.t.l} {
    margin-bottom: 16px;
  }
`

const StepDescription = styled(T.Body)``
