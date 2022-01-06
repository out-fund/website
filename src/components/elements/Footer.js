import React from "react"
import styled from "styled-components"

import { Button, Link } from "./../../components"
import { theme } from "./../../styles/new/theme"
import links from "./../../content/links"

const lang = "en"

const Footer = () => {
  return (
    <Wrapper>
      WIP
      <Links>
        <Button to={links.aboutUs.url} variant="secondary" color="white">
          {links.aboutUs.text[lang]}
        </Button>
        <Button to={links.careers.url} variant="secondary" color="white">
          {links.careers.text[lang]}
        </Button>
        <Button to={links.successStories.url} variant="secondary" color="white">
          {links.successStories.text[lang]}
        </Button>
        <Button to={links.blog.url} variant="secondary" color="white">
          {links.blog.text[lang]}
        </Button>
        <Button to={links.faq.url} variant="secondary" color="white">
          {links.faq.text[lang]}
        </Button>
        <Button to={links.partners.url} variant="secondary" color="white">
          {links.partners.text[lang]}
        </Button>
        <Button to={links.contactUs.url} variant="secondary" color="white">
          {links.contactUs.text[lang]}
        </Button>
      </Links>
    </Wrapper>
  )
}

export default Footer

const Links = styled.div`
  padding-top: 24px;
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`
const Wrapper = styled.div`
  background-color: #0d2c4f;
  height: 300px;
  text-align: center;
  color: white;
  padding-top: 40px;
`
