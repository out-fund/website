import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

import { Button, Link } from "./../../components"
import { theme } from "./../../styles/new/theme"
import links from "./../../content/links"

import LogoSvg from "./../../images//svg/Outfund-logo.svg"
import MenueIconSvg from "./../../images/svg/MenueIcon.svg"

// const MenueGroup = ({ title, children }) => {
//   return (
//     <MenueGroupWrapper>
//       <GroupTitle>{title}</GroupTitle>
//       <LinkGroup>{children}</LinkGroup>
//     </MenueGroupWrapper>
//   )
// }

const MobileLinks = ({ lang }) => {
  const [mobileMenueIsOpen, setMobileMenueIsOpen] = useState(false)
  const mobileButtonRef = useRef()
  const mobileDropdownRef = useRef()

  const handleMobileMenueClick = (event) => {
    event.preventDefault()
    setMobileMenueIsOpen(!mobileMenueIsOpen)
  }

  const handleMobileClickOutside = (event) => {
    console.log("mobile doc is clicked")
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
    <MobileLinksWrapper>
      <ButtonWrapper>
        <Button
          to={links.getFunded.url}
          variant="primary"
          size="medium"
          className="getFunded"
        >
          {links.getFunded.text[lang]}
        </Button>

        <div ref={mobileButtonRef}>
          <Menue
            onClick={(event) => handleMobileMenueClick(event)}
            isOpen={mobileMenueIsOpen}
          >
            <MenueIconSvg />
          </Menue>
        </div>
      </ButtonWrapper>
      <MobileDropdownWrapper isOpen={mobileMenueIsOpen} ref={mobileDropdownRef}>
        <Button to={links.aboutUs.url} variant="navLink">
          {links.aboutUs.text[lang]}
        </Button>
        <Button to={links.successStories.url} variant="navLink">
          {links.successStories.text[lang]}
        </Button>
        <Button to={links.blog.url} variant="navLink">
          {links.blog.text[lang]}
        </Button>
        <Button to={links.faq.url} variant="navLink">
          {links.faq.text[lang]}
        </Button>
        <Button to={links.partners.url} variant="navLink">
          {links.partners.text[lang]}
        </Button>
        <Button to={links.contactUs.url} variant="navLink">
          {links.contactUs.text[lang]}
        </Button>
        <Button variant="navLink">Flag</Button>
      </MobileDropdownWrapper>
    </MobileLinksWrapper>
  )
}

const CompanyDropdown = ({ lang, isOpen }) => {
  return (
    <DesktopDropdownWrappepr isOpen={isOpen}>
      <li>
        <Button to={links.aboutUs.url} variant="navLink">
          {links.aboutUs.text[lang]}
        </Button>
      </li>
      <li>
        <Button to={links.successStories.url} variant="navLink">
          {links.successStories.text[lang]}
        </Button>
      </li>
      <li>
        <Button to={links.blog.url} variant="navLink">
          {links.blog.text[lang]}
        </Button>
      </li>
      <li>
        <Button to={links.faq.url} variant="navLink">
          {links.faq.text[lang]}
        </Button>
      </li>
    </DesktopDropdownWrappepr>
  )
}
const FundingDropdown = ({ lang, isOpen }) => {
  return (
    <DesktopDropdownWrappepr isOpen={isOpen}>
      <li>
        <Button to={links.aboutUs.url} variant="navLink">
          {links.aboutUs.text[lang]}
        </Button>
      </li>
    </DesktopDropdownWrappepr>
  )
}

function DesktopLinks({ lang }) {
  const [companyIsOpen, setCompanyIsOpen] = useState(false)
  const [fundingIsOpen, setFundingIsOpen] = useState(false)
  const companyRef = useRef()
  const fundingRef = useRef()

  const handleCompanyClick = (event) => {
    event.preventDefault()
    setCompanyIsOpen(!companyIsOpen)
    setFundingIsOpen(false)
    // console.log("event", event)
  }

  const handleFundingClick = (event) => {
    event.preventDefault()
    setFundingIsOpen(!fundingIsOpen)
    setCompanyIsOpen(false)
  }

  const handleClickOutside = (event) => {
    if (
      companyRef.current &&
      !companyRef.current.contains(event.target) &&
      fundingRef.current &&
      !fundingRef.current.contains(event.target)
    ) {
      setFundingIsOpen(false)
      setCompanyIsOpen(false)
      // console.log("doc is clicked")
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <DesktopLinksWrapper>
      <li ref={companyRef}>
        <Button
          variant="navDropDown"
          onClick={(event) => handleCompanyClick(event)}
          isOpen={companyIsOpen}
        >
          {links.company.text[lang]}
        </Button>
        <CompanyDropdown lang={lang} isOpen={companyIsOpen} />
      </li>
      <li ref={fundingRef}>
        <Button
          variant="navDropDown"
          onClick={(event) => handleFundingClick(event)}
          isOpen={fundingIsOpen}
        >
          {links.funding.text[lang]}
        </Button>
        <FundingDropdown lang={lang} isOpen={fundingIsOpen} />
      </li>
      <li>
        <Button to={links.faq.url} variant="navLink">
          {links.faq.text[lang]}
        </Button>
      </li>
      <li>
        <Button to={links.partners.url} variant="navLink">
          {links.partners.text[lang]}
        </Button>
      </li>
      <li>
        <Button to={links.contactUs.url} variant="navLink">
          {links.contactUs.text[lang]}
        </Button>
      </li>
      <li className="getFunded">
        <Button to={links.getFunded.url} variant="primary" size="medium">
          {links.getFunded.text[lang]}
        </Button>
      </li>
      <li>
        <Button to={links.login.url} variant="navLink">
          {links.login.text[lang]}
        </Button>
      </li>
      <li>
        <Button variant="navDropDown">flag</Button>
        {/* <FlagDropdown /> */}
      </li>
    </DesktopLinksWrapper>
  )
}

// const tx = "text"

const Navbar = ({ lang }) => {
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

export default Navbar

const Nav = styled.nav`
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 100;

  background: rgba(242, 246, 250, 0.9);
  backdrop-filter: blur(20px);
`
const LogoWrapper = styled.div`
  svg {
    height: 24px;
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
`
// const LinksWrapper = styled.div`
//   position: absolute;
//   background-color: #fff;
//   display: flex;
//   flex-direction: column;
//   top: ${theme.size.navbarHeight + 10}px;
//   width: 100%;
//   max-width: 100%;

// `

const MobileLinksWrapper = styled.div`
  ${theme.above.t.l} {
    display: none;
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
  width: 100%;
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
`

const Menue = styled.button`
  padding: 11px 16px;
  border: 1px solid ${theme.color.button.primary.backgroundColor};
  border-radius: 28px;
  display: flex;
  svg {
    width: 24px;
    height: 16px;
  }

  /* display: none; */
`

// --------------------- Desktop

const DesktopLinksWrapper = styled.ul`
  display: none;
  ${theme.above.t.l} {
    display: flex;
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

const DesktopDropdownWrappepr = styled.ul`
  position: absolute;
  /* right: 0; */
  left: 0;
  top: ${theme.size.navbarHeight}px;
  z-index: 99;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  /* width: 100%; */
  max-width: 260px;
  padding: 24px;
  border-radius: 10px;
  row-gap: 8px;
  /* opacity: ${(props) => (props.isOpen ? 1 : 0.5)}; */
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transform: skewY(-5deg) rotate(7deg) translateY(-30px);
  box-shadow: 0px 100px 80px rgba(1, 14, 25, 0.07),
    0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198),
    0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275),
    0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035),
    0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725),
    0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802);

  li {
    position: relative;
  }
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
// const FundingWrapper = styled.div``

// const MenueGroupWrapper = styled.div``

// const GroupTitle = styled.div``
// const LinkGroup = styled.div``

// {
//   /* <LeftLinks>
//   {leftLinks.map((link) => (
//     <li key={link.btn}>
//       {link.btnUrl === "/company/" ? (
//         <Button to={link.btnUrl} variant="navLink">
//           {link.btn}
//         </Button>
//       ) : link.btnUrl === "/funding/" ? (
//         <Button to={link.btnUrl} variant="navLink">
//           {link.btn}
//         </Button>
//       ) : (
//         <Button to={link.btnUrl} variant="navLink">
//           {link.btn}
//         </Button>
//       )}
//     </li>
//   ))}
// </LeftLinks>

// <RightLinks>
//   <li>
//     <Button btnUrl="/" variant="primary">
//       Get Funded
//     </Button>
//   </li>
//   {rightLinks.map((link) => (
//     <li key={link.btn}>
//       <Button btnUrl={link.btnUrl} variant="navLink">
//         {link.btn}
//       </Button>
//     </li>
//   ))}
// </RightLinks> */
// }
