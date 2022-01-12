import React from "react"
import styled from "styled-components"

import { Button, Link } from "./../../components"
import LogoSvg from "./../../images//svg/Outfund-logo-white.svg"
import { theme } from "./../../styles/new/theme"
import links from "./../../content/links"

import T from "./../../styles/new/typography"

const lang = "en"

const Footer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Top>
          <LogoWrapper>
            <Link to={`/`}>
              <LogoSvg />
            </Link>
            <T.BodySmall>Growth funding on your terms</T.BodySmall>
          </LogoWrapper>
          <CountryLinksWrapper>
            <LinksWrapper>
              <LinksColumn>
                <ColumntTitle>Company</ColumntTitle>
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
                <Button to={links.blog.url} variant="footerLink" color="white">
                  {links.blog.text[lang]}
                </Button>
              </LinksColumn>
              <LinksColumn>
                <ColumntTitle>Funding</ColumntTitle>
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
                <Button
                  to={links.partners.url}
                  variant="footerLink"
                  color="white"
                >
                  {links.partners.text[lang]}
                </Button>
              </LinksColumn>

              <LinksColumn>
                <ColumntTitle>Support</ColumntTitle>
                <Button to={links.faq.url} variant="footerLink" color="white">
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
              <ColumntTitle>Country</ColumntTitle>
              <CuntryButtonWrapper>
                <Button variant="countrySelector" color="white">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 18"
                  >
                    <path d="M0 0h24v18H0V0Z" fill="#012169" />
                    <path
                      d="m2.813 0 9.15 6.787L21.075 0H24v2.325l-9 6.712 9 6.675V18h-3l-9-6.713L3.037 18H0v-2.25l8.963-6.675L0 2.4V0h2.813Z"
                      fill="#fff"
                    />
                    <path
                      d="M15.9 10.537 24 16.5V18l-10.162-7.463H15.9Zm-6.9.75.225 1.313-7.2 5.4H0l9-6.713ZM24 0v.113l-9.338 7.05.075-1.65L22.126 0H24ZM0 0l8.963 6.6h-2.25L0 1.575V0Z"
                      fill="#C8102E"
                    />
                    <path d="M9.037 0v18h6V0h-6ZM0 6v6h24V6H0Z" fill="#fff" />
                    <path
                      d="M0 7.237v3.6h24v-3.6H0ZM10.238 0v18h3.6V0h-3.6Z"
                      fill="#C8102E"
                    />
                  </svg>
                  United Kingdom
                </Button>
              </CuntryButtonWrapper>
            </CountryWrapper>
          </CountryLinksWrapper>
        </Top>
        <Bottom>
          <T.BodySmaller>
            Copyright © 2022 Outfund. All rights reserved.
          </T.BodySmaller>
          <div>
            <T.BodySmaller as={Link} to="/legal/privacy-policy/">
              Privacy policy
            </T.BodySmaller>
            <T.BodySmaller as={Link} to="/legal/cookie-policy/">
              Cookie policy
            </T.BodySmaller>
          </div>
        </Bottom>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer

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
`

const CountryWrapper = styled.div`
  /* background-color: #afa; */
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
  ${theme.above.t.l} {
    flex-direction: row;
    justify-content: space-between;
  }
`
const Bottom = styled.div`
  display: flex;

  border-top: 1px solid #28425f;
  padding-top: 16px;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;

  ${T.BodySmaller} {
  }
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
  gap: 40px;
  ${theme.above.t.l} {
    gap: 80px;
  }
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

const Wrapper = styled.div`
  background-color: #0a213b;
  padding: 0 40px;
`
