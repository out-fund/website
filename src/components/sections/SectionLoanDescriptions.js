import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, SectionHeader } from "./../../components"
import parse from "html-react-parser"

import T from "./../../styles/new/typography"
import { theme } from "./../../styles/new/theme"

const SectionLoanDescriptions = ({ data }) => {
  return (
    <StyledSection>
      <Wrapper>
        <HeaderWrapper>
          <SectionHeader title={data.title} description={data.description} />
        </HeaderWrapper>
        <ContentWrapper>
          <LoanBox>
            <StaticImage
              src="./../../images/rbf.png"
              alt="Revenue-based financing icon"
              width={80}
              height={80}
              layout={"constrained"}
            />
            <Title>{parse(data.rbs.title)}</Title>
            <Description>{parse(data.rbs.description)}</Description>
          </LoanBox>
          <LoanBox>
            <StaticImage
              src="./../../images/fixed.png"
              alt="Fixed-term loans icon"
              width={80}
              height={80}
              layout={"constrained"}
            />
            <Title>{parse(data.fixed.title)}</Title>
            <Description>{parse(data.fixed.description)}</Description>
          </LoanBox>
        </ContentWrapper>

        <HeaderWrapper2>
          <SectionHeader
            title="How to use your funds"
            description="Capital is credited to your Outfund account, and you decide how to spend."
          />
        </HeaderWrapper2>
        <UseFundingWrapper>
          <LoanBox>
            <StaticImage
              src="./../../images/funds-card.png"
              alt="Revenue-based financing icon"
              width={80}
              height={80}
              layout={"constrained"}
            />
            <Title>Virtual card</Title>
            <Description>
              Set up your digital marketing card and invest in your ads.
            </Description>
          </LoanBox>
          <LoanBox>
            <StaticImage
              src="./../../images/funds-invoice.png"
              alt="Fixed-term loans icon"
              width={80}
              height={80}
              layout={"constrained"}
            />
            <Title>Invoices</Title>
            <Description>
              Upload your invoices to our platform and we’ll fund your business
              expenses like inventory, logistics, and agency fees.
            </Description>
          </LoanBox>
          <LoanBox>
            <StaticImage
              src="./../../images/funds-cash.png"
              alt="Fixed-term loans icon"
              width={80}
              height={80}
              layout={"constrained"}
            />
            <Title>Cash</Title>
            <Description>
              Receive funds in your bank account, and have the flexibility to
              spend on what you need *
            </Description>
            <Small>
              *Availability is based on your circumstances, and it is subject to
              review
            </Small>
          </LoanBox>
        </UseFundingWrapper>
      </Wrapper>
    </StyledSection>
  )
}
export default SectionLoanDescriptions

const StyledSection = styled(Section)`
  background-color: ${theme.color.background.emphesized};
  border-radius: 10px;
  padding: 64px 0;

  ${theme.above.t.m} {
    padding: 100px 0;
  }
  ${theme.above.d.m} {
    padding: 120px 0;
  }
`

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 40px;
`
const HeaderWrapper2 = styled.div`
  text-align: center;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 80px;
`
const Wrapper = styled.div`
  max-width: 1570px;
  margin: 0 auto;
`
const Title = styled(T.H3)`
  margin: 16px 0;
  font-size: 20px;

  ${theme.above.p.m} {
    font-size: 24px;
  }

  ${theme.above.t.s} {
    font-size: 32px;
  }

  ${theme.above.d.m} {
    font-size: 40px;
  }

  span {
    display: block;
    font-weight: 400;
  }
`

const Description = styled(T.Body)``
const Small = styled(T.Body)`
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.5;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* margin: 0;
  padding: 0;
  column-gap: 24px;
  list-style: none;
  row-gap: 24px; */
  gap: 30px;
  max-width: 1218px;
  margin: 0 auto;
  padding: 0 16px;

  ${theme.above.t.l} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 48px;
  }
  /* ${theme.above.l.m} {
    grid-template-columns: repeat(4, 1fr);
  } */
`
const UseFundingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  max-width: 1218px;
  margin: 0 auto;
  padding: 0 16px;

  ${theme.above.t.l} {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 48px;
  }
`

const LoanBox = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 10px;
  ${theme.above.t.l} {
    padding: 48px;
  }
`
