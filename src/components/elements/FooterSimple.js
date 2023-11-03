import React from "react"
import styled from "styled-components"

import { Link } from "./../../components"
import LogoSvg from "./../../images//svg/Outfund-logo-white.svg"
import { theme } from "./../../styles/new/theme"

import T from "./../../styles/new/typography"
import { useLangProvider } from "./../../utils/LangProvider"

const Footer = ({ lang }) => {
  const langKey = useLangProvider()

  return (
    <Wrapper>
      <ContentWrapper>
        <Top>
          <LogoWrapper>
            <Link to={`/`}>
              <LogoSvg />
            </Link>

            {langKey !== "es" && (
              <T.BodySmall>Growth funding on your terms</T.BodySmall>
            )}
            {langKey === "es" && (
              <T.BodySmall>
                Financiación del crecimiento en sus términos
              </T.BodySmall>
            )}
          </LogoWrapper>
        </Top>
        <Bottom>
          {langKey !== "es" && (
            <T.BodySmaller>
              Copyright © 2022 Outfund. All rights reserved.
            </T.BodySmaller>
          )}
        </Bottom>
        <Statement>
          <T.BodySmall>
            MTL Financial Ltd (Firm Reference Number: 902840) is a registered EMD agent of Modulr FS Limited, a company registered in England and Wales with company number 09897919, which is authorised and regulated by the Financial Conduct Authority as an Electronic Money Institution (Firm Reference Number: 900573) for the issuance of electronic money and payment services. Your account and related payment services are provided by Modulr FS Limited. Whilst Electronic Money products are not covered by the Financial Services Compensation Scheme (FSCS) your funds will be held in one or more segregated accounts and safeguarded in line with the Electronic Money Regulations 2011 - for more information please see <a href="https://out.fund/Modulr(MFSL)-UK_Safeguarding_Explanation-Jun_2021.pdf">here</a> 
          </T.BodySmall>
        </Statement>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer

const Top = styled.div`
  display: flex;
  flex-direction: column;
  ${theme.above.t.l} {
    flex-direction: row;
    justify-content: space-between;
  }
`
const Bottom = styled.div`
  display: flex;
  padding-top: 8px;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;

  p {
    color: #aad2ff;
    opacity: 0.7;
  }
  a {
    margin: 0 8px;
    color: #aad2ff;
    text-decoration: none;
    opacity: 0.9;
    &:hover {
      text-decoration: underline;
    }
  }
  ${theme.above.t.m} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ContentWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
`
const LogoWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg {
    height: 24px;
  }
  p {
    margin-top: 8px;
    color: #aad2ff;
    opacity: 0.7;
  }
`

const Wrapper = styled.div`
  background-color: #0a213b;
  padding: 0 40px;
`

const Statement = styled.div`
  background-color: #183454;
  padding: 12px 16px;
  border-radius: 10px;
  margin-top: 16px;

  ${theme.above.t.l} {
    /* margin-top: 80px;
    margin-bottom: 48px; */
  }
  ${T.BodySmall} {
    color: #aad2ff;
  }
`
