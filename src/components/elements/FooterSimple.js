import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

import { Button, Link } from "./../../components"
import LogoSvg from "./../../images//svg/Outfund-logo-white.svg"
import { theme } from "./../../styles/new/theme"
import links from "./../../content/links"

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
