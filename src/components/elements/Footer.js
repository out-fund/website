import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

import { Button, Link } from "./../../components"
import LogoSvg from "./../../images//svg/Outfund-logo-white.svg"
import { theme } from "./../../styles/new/theme"
import links from "./../../content/links"

import T from "./../../styles/new/typography"
import { useLangProvider } from "./../../utils/LangProvider"

import UkFlag from "./../../images/svg/flags/uk.svg"
import UsFlag from "./../../images/svg/flags/us.svg"
import EsFlag from "./../../images/svg/flags/es.svg"
import AuFlag from "./../../images/svg/flags/au.svg"

const Footer = ({ lang }) => {
  const langKey = useLangProvider()
  const [countryIsOpen, setCountryIsOpen] = useState(false)
  const countryButtonRef = useRef()
  const countryDropdownRef = useRef()

  const handleCountryClick = (event) => {
    event.preventDefault()
    setCountryIsOpen(!countryIsOpen)
  }

  const handleCountryClickkOutside = (event) => {
    // console.log("mobile doc is clicked")
    if (
      countryButtonRef.current &&
      !countryButtonRef.current.contains(event.target) &&
      countryDropdownRef.current &&
      !countryDropdownRef.current.contains(event.target)
    ) {
      setCountryIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCountryClickkOutside)
    return () => {
      document.removeEventListener("mousedown", handleCountryClickkOutside)
    }
  }, [])

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
          <CountryLinksWrapper>
            <LinksWrapper data-surface-type="Footer">
              <LinksColumn>
                {langKey === "es" && <ColumntTitle>Compañía</ColumntTitle>}
                {langKey !== "es" && <ColumntTitle>Company</ColumntTitle>}
                <Button
                  to={links.aboutUs.url}
                  variant="footerLink"
                  color="white"
                >
                  {links.aboutUs.text[lang]}
                </Button>
                <Button
                  to={links.careers.url}
                  variant="footerLink"
                  color="white"
                >
                  {links.careers.text[lang]}
                </Button>
                {langKey !== "es" && (
                  <Button
                    href="https://out.fund/blog/"
                    variant="footerLink"
                    color="white"
                  >
                    {links.blog.text[lang]}
                  </Button>
                )}
              </LinksColumn>
              <LinksColumn>
                {langKey === "es" && <ColumntTitle>Fondos</ColumntTitle>}
                {langKey !== "es" && <ColumntTitle>Funding</ColumntTitle>}
                <Button to={links.howItWorks.url} variant="footerLink">
                  {links.howItWorks.text[lang]}
                </Button>
                <Button
                  to={links.successStories.url}
                  variant="footerLink"
                  color="white"
                >
                  {links.successStories.text[lang]}
                </Button>
              </LinksColumn>

              <LinksColumn>
                {langKey === "es" && <ColumntTitle>Apoyo</ColumntTitle>}
                {langKey !== "es" && <ColumntTitle>Support</ColumntTitle>}
                <Button
                  href="https://help.out.fund/"
                  variant="footerLink"
                  color="white"
                  target="_blank"
                >
                  {links.faq.text[lang]}
                </Button>
                <Button
                  to={links.contactUs.url}
                  variant="footerLink"
                  color="white"
                >
                  {links.contactUs.text[lang]}
                </Button>
              </LinksColumn>
            </LinksWrapper>
            <CountryWrapper>
              {langKey === "es" && <ColumntTitle>País</ColumntTitle>}
              {langKey !== "es" && <ColumntTitle>Country</ColumntTitle>}
              <CuntryButtonWrapper ref={countryButtonRef}>
                <Button
                  variant="countrySelector"
                  color="white"
                  onClick={(event) => handleCountryClick(event)}
                >
                  {langKey === "en" && <UkFlag />}
                  {langKey === "es" && <EsFlag />}
                  {langKey === "au" && <AuFlag />}
                  {langKey === "us" && <UsFlag />}

                  {langKey === "es" && links.countries[langKey].text["es"]}
                  {langKey !== "es" && links.countries[langKey].text["en"]}
                </Button>
              </CuntryButtonWrapper>
              <CountryDropdownWrapper
                isOpen={countryIsOpen}
                ref={countryDropdownRef}
              >
                <CuntryButtonWrapper>
                  <Button variant="secondary" href={links.countries.au.url}>
                    <AuFlag />
                    {langKey === "es" && links.countries.au.text["es"]}
                    {langKey !== "es" && links.countries.au.text["en"]}
                  </Button>
                </CuntryButtonWrapper>
                <CuntryButtonWrapper>
                  <Button variant="secondary" href={links.countries.es.url}>
                    <EsFlag />
                    {langKey === "es" && links.countries.es.text["es"]}
                    {langKey !== "es" && links.countries.es.text["en"]}
                  </Button>
                </CuntryButtonWrapper>
                <CuntryButtonWrapper>
                  <Button variant="secondary" href={links.countries.en.url}>
                    <UkFlag />
                    {langKey === "es" && links.countries.en.text["es"]}
                    {langKey !== "es" && links.countries.en.text["en"]}
                  </Button>
                </CuntryButtonWrapper>
                <CuntryButtonWrapper>
                  <Button variant="secondary" href={links.countries.us.url}>
                    <UsFlag />
                    {langKey === "es" && links.countries.us.text["es"]}
                    {langKey !== "es" && links.countries.us.text["en"]}
                  </Button>
                </CuntryButtonWrapper>
              </CountryDropdownWrapper>
            </CountryWrapper>
          </CountryLinksWrapper>
        </Top>
        {langKey === "en" && (
          <Statement>
            <T.BodySmall>
              Outfund is the trading name of MTL Financial LTD, which is a
              Lender. MTL Financial LTD is also authorised and regulated by the
              Financial Conduct Authority (FCA) as an e-money institution.
            </T.BodySmall>
          </Statement>
        )}
        <Bottom>
          {langKey !== "es" && (
            <T.BodySmaller>
              Copyright © 2022 Outfund. All rights reserved.
            </T.BodySmaller>
          )}

          {langKey === "es" && (
            <T.BodySmaller>
              Copyright © 2022 Outfund. Todos los derechos reservados.
            </T.BodySmaller>
          )}
          <div>
            {" "}
            <T.BodySmaller as={Link} to="/legal/complaint-policy/">
              {langKey !== "es" && <>Complaint Policy</>}
              {langKey === "es" && <>Política de quejas</>}
            </T.BodySmaller>
            <T.BodySmaller as={Link} to="/legal/privacy-policy/">
              {langKey !== "es" && <>Privacy policy</>}
              {langKey === "es" && <>Política de privacidad</>}
            </T.BodySmaller>
            <T.BodySmaller as={Link} to="/legal/cookie-policy/">
              {langKey !== "es" && <>Cookie policy</>}
              {langKey === "es" && <>Política de cookies</>}
            </T.BodySmaller>
          </div>
        </Bottom>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer

const Statement = styled.div`
  /* margin-bottom: 24px;
  margin-top: 40px; */
  background-color: #183454;
  padding: 12px 16px;
  border-radius: 10px;
  ${theme.above.t.l} {
    /* margin-top: 80px;
    margin-bottom: 48px; */
  }
  ${T.BodySmall} {
    color: #aad2ff;
    /* opacity: 0.7; */
  }
`

const LinksWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;

  ${theme.above.t.s} {
    flex-direction: row;
    justify-content: space-between;
  }
`
const ColumntTitle = styled(T.BodySmall)`
  margin-bottom: 8px;
  color: #aad2ff;
  opacity: 0.7;
  font-weight: 400;
`
const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  /* width: 100%; */
  ${theme.above.t.l} {
    min-width: 120px;
  }
`

const CountryLinksWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  ${theme.above.t.l} {
    flex-direction: row;
    padding-top: 8px;
  }
`
const CuntryButtonWrapper = styled.div`
  svg {
    width: 24px;
    height: 18px;
    margin-right: 12px;
    border-radius: 2px;
  }
  /* a {
    display: none;
  } */
`

const CountryWrapper = styled.div`
  /* background-color: #afa; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 64px;

  ${theme.above.t.l} {
    /* align-items: flex-end; */
    margin-left: 64px;
  }
  ${ColumntTitle} {
    margin-bottom: 16px;
  }
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
  ${theme.above.t.l} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;
  }
`
const Bottom = styled.div`
  display: flex;
  margin-top: 24px;
  border-top: 1px solid #28425f;
  padding-top: 16px;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;

  /* ${T.BodySmaller} {
  } */
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
  /* height: 100%; */
  /* min-width: 216px; */
  div {
    /* height: 100%; */
  }
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

const CountryDropdownWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 32px;

  background-color: #0a213b;
  background-color: #fff;
  z-index: 99;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr;
  max-width: 260px;

  row-gap: 8px;
  padding: 24px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transform: skewY(-5deg) rotate(7deg) translateY(-30px);
  box-shadow: 0px 100px 80px rgba(1, 14, 25, 0.07),
    0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198),
    0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275),
    0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035),
    0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725),
    0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802);
  ${(props) =>
    props.isOpen
      ? css`
          visibility: visible;
          opacity: 1;
          transform: skewY(0deg) rotate(0deg) translateY(0px);
        `
      : css`
          visibility: hidden;
        `}
`

const Wrapper = styled.div`
  background-color: #0a213b;
  padding: 0 40px;
`
