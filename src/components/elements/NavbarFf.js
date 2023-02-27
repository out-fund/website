import { Button, Link } from "./../../components"
import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

import LogoSvg from "./../../images/svg/Outfund-logo.svg"
import MenueIconSvg from "./../../images/svg/MenueIcon.svg"
import links from "./../../content/links"
import { theme } from "./../../styles/new/theme"

const MobileLinks = ({ lang }) => {
  const [mobileMenueIsOpen, setMobileMenueIsOpen] = useState(false)
  const mobileButtonRef = useRef()
  const mobileDropdownRef = useRef()

  const handleMobileMenueClick = (event) => {
    event.preventDefault()
    setMobileMenueIsOpen(!mobileMenueIsOpen)
  }

  const handleMobileClickOutside = (event) => {
    // console.log("mobile doc is clicked")
    if (
      mobileButtonRef.current &&
      !mobileButtonRef.current.contains(event.target) &&
      mobileDropdownRef.current &&
      !mobileDropdownRef.current.contains(event.target)
    ) {
      setMobileMenueIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleMobileClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleMobileClickOutside)
    }
  }, [])

  return (
    <MobileLinksWrapper data-surface-type="Header">
      <ButtonWrapper>
        <Button
          href="https://client.out.fund/signup"
          variant="primary"
          className="getFunded getFunded-mobile"
          id="cta-get-funded-mobile-navbar-click"
          data-element-category="Signup CTA"
        >
          {links.getFunded.text[lang]}
        </Button>

        {(lang === "en" || lang === "es") && (
          <div ref={mobileButtonRef} style={{ alignSelf: "center" }}>
            <Menue
              onClick={(event) => handleMobileMenueClick(event)}
              isOpen={mobileMenueIsOpen}
            >
              <MenueIconSvg />
            </Menue>
          </div>
        )}
      </ButtonWrapper>
      <MobileDropdownWrapper isOpen={mobileMenueIsOpen} ref={mobileDropdownRef}>
        {links.successStories.text[lang] && (
          <Button to={links.successStories.url} variant="navLink">
            {links.successStories.text[lang]}
          </Button>
        )}
        {links.faq.text[lang] && (
          <Button to={links.faq.url} variant="navLink">
            {links.faq.text[lang]}
          </Button>
        )}
        {links.login.text[lang] && (
          <Button href={links.login.url} variant="navLink">
            {links.login.text[lang]}
          </Button>
        )}
      </MobileDropdownWrapper>
    </MobileLinksWrapper>
  )
}

function DesktopLinks({ lang }) {
  return (
    <DesktopLinksWrapper data-surface-type="Header">
      {links.successStories.text[lang] && (
        <li>
          <Button to={links.successStories.url} variant="navLink">
            {links.successStories.text[lang]}
          </Button>
        </li>
      )}
      {links.faq.text[lang] && (
        <li>
          <Button to={links.faq.url} variant="navLink">
            {links.faq.text[lang]}
          </Button>
        </li>
      )}
      {links.getFunded.text[lang] && (
        <li className="getFunded">
          <Button
            href="https://client.out.fund/signup"
            variant="primary"
            id="cta-get-funded-navbar-click"
            data-element-category="Signup CTA"
          >
            {links.getFunded.text[lang]}
          </Button>
        </li>
      )}
      {links.login.text[lang] && (
        <li>
          <Button href={links.login.url} variant="navLink">
            {links.login.text[lang]}
          </Button>
        </li>
      )}
    </DesktopLinksWrapper>
  )
}

const NavbarFf = ({ lang }) => {
  return (
    <Nav>
      <Wrapper>
        <LogoWrapper>
          <Link to="/">
            <LogoSvg />
          </Link>
        </LogoWrapper>
        <DesktopLinks lang={lang} />
        <MobileLinks lang={lang} />
      </Wrapper>
    </Nav>
  )
}

export default NavbarFf

const Nav = styled.nav`
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
`
const LogoWrapper = styled.div`
  height: 100%;
  span {
    height: 100%;
  }
  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg {
    height: 24px;
    @media (max-width: 360px) {
      height: 20px;
    }
  }
`
const Wrapper = styled.div`
  position: relative;
  display: flex;

  margin-left: 24px;
  margin-right: 24px;
  align-items: center;
  height: ${theme.size.navbarHeight}px;
  justify-content: space-between;
  ${theme.above.t.l} {
    justify-content: flex-start;
  }
  max-width: 1218px;
  margin: 0 auto;

  padding: 0 8px;

  ${theme.above.p.m} {
    padding: 0 16px;
  }
  ${theme.above.t.s} {
    padding: 0 20px;
  }
  ${theme.above.l.m} {
    padding: 0 24px;
  }
`

const MobileLinksWrapper = styled.div`
  position: relative;
  ${theme.above.t.l} {
    display: none;
  }
  .getFunded-mobile a {
    white-space: nowrap;
    @media (max-width: 330px) {
      padding: 8px 8px;
      font-size: 14px;
    }
  }
`
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 8px;
`
const MobileDropdownWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 99;
  top: ${theme.size.navbarHeight + 8}px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 260px;
  border-radius: 10px;
  padding: 24px;
  row-gap: 8px;
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

  a {
    white-space: nowrap;
  }
`

const Menue = styled.button`
  padding: 11px 8px;
  border: 1px solid ${theme.color.button.primary.backgroundColor};
  border-radius: 10px;
  display: flex;
  background-color: transparent;
  svg {
    width: 24px;
    height: 16px;
  }
`

// --------------------- Desktop

const DesktopLinksWrapper = styled.ul`
  display: none;
  margin-left: 40px;
  ${theme.above.t.l} {
    display: flex;
    gap: 8px;
    width: 100%;
    .getFunded {
      margin-left: auto;
    }
  }
  li {
    position: relative;
    display: block;
  }
`

// const SimpleWrapper = styled(Wrapper)`
//   justify-content: center;
// `
