import React from "react"
import styled from "styled-components"

import LangLayout from "../../layouts/en"
import LogoDark from "./../../images/svg/Outfund-logo.svg"
import { Link } from "./../../components"

import T from "../../styles/new/typography"
import { theme } from "../../styles/new/theme"

const CCLeadThankYou = () => {
  return (
    <LangLayout noNavbar pt noFooter>
      <Wrapper>
        <ContentWrapper>
          <LogoWhiteWrapper>
            <Link to={`/`}>
              <LogoDark />
            </Link>
          </LogoWhiteWrapper>
          <Title>Thank You</Title>
          <Description>Your lead has been submitted.</Description>
        </ContentWrapper>
      </Wrapper>
    </LangLayout>
  )
}

export default CCLeadThankYou

const Title = styled(T.H2)`
  margin-bottom: 8px;
  margin-top: 40px;
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

const LogoWhiteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  padding: 24px 0px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  box-shadow: rgb(5 24 64 / 7%) 0px 17px 33px,
    rgb(5 24 64 / 5%) 0px 3.8002px 13.45px,
    rgb(5 24 64 / 4%) 0px 1.07885px 7.14579px;

  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg {
    height: 24px;
  }
`
