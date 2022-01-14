import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

import { Button, Link } from "./../../components"
import { theme } from "./../../styles/new/theme"
import links from "./../../content/links"

import LogoSvg from "./../../images/svg/Outfund-logo.svg"
import MenueIconSvg from "./../../images/svg/MenueIcon.svg"

export const SimpleNavbar = ({ lang }) => {
  return (
    <Nav>
      <SimpleWrapper>
        <LogoWrapper>
          <Link to={`/`}>
            {/* <Link to="#"> */}
            <LogoSvg />
          </Link>
        </LogoWrapper>
      </SimpleWrapper>
    </Nav>
  )
}

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
    // console.log("test")
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
    <MobileLinksWrapper>
      <ButtonWrapper>
        <Button
          to={links.getFunded.url}
          variant="primary"
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
        <Button to={links.careers.url} variant="navLink">
          {links.careers.text[lang]}
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
        {/* <Button variant="navLink">Flag</Button> */}
      </MobileDropdownWrapper>
    </MobileLinksWrapper>
  )
}

// const CompanyDropdown = ({ lang, isOpen }) => {
//   return (
//     <DesktopDropdownWrappepr isOpen={isOpen}>
//       <li>
//         <Button to={links.aboutUs.url} variant="navLink">
//           {links.aboutUs.text[lang]}
//         </Button>
//       </li>
//       <li>
//         <Button to={links.careers.url} variant="navLink">
//           {links.careers.text[lang]}
//         </Button>
//       </li>
//       <li>
//         <Button to={links.blog.url} variant="navLink">
//           {links.blog.text[lang]}
//         </Button>
//       </li>
//     </DesktopDropdownWrappepr>
//   )
// }
// const FundingDropdown = ({ lang, isOpen }) => {
//   return (
//     <DesktopDropdownWrappepr isOpen={isOpen}>
//       <li>
//         <Button to={links.howItWorks.url} variant="navLink">
//           {links.howItWorks.text[lang]}
//         </Button>
//       </li>
//       <li>
//         <Button to={links.successStories.url} variant="navLink">
//           {links.successStories.text[lang]}
//         </Button>
//       </li>
//       <li>
//         <Button to={links.b2b.url} variant="navLink">
//           {links.b2b.text[lang]}
//         </Button>
//       </li>
//     </DesktopDropdownWrappepr>
//   )
// }

function DesktopLinks({ lang }) {
  // const [companyIsOpen, setCompanyIsOpen] = useState(false)
  // const [fundingIsOpen, setFundingIsOpen] = useState(false)

  // const companyRef = useRef()
  // const fundingRef = useRef()

  // const handleCompanyMouseEnter = (event) => {
  //   // console.log("test", event)
  //   setCompanyIsOpen(true)
  // }
  // const handleCompanyMouseLeave = (event) => {
  //   // console.log("test", event)
  //   setCompanyIsOpen(false)
  // }

  // const handleCompanyClick = (event) => {
  //   event.preventDefault()
  //   setCompanyIsOpen(!companyIsOpen)
  //   setFundingIsOpen(false)
  //   // console.log("event", event)
  // }

  // const handleFundingClick = (event) => {
  //   event.preventDefault()
  //   setFundingIsOpen(!fundingIsOpen)
  //   setCompanyIsOpen(false)
  // }

  // const handleClickOutside = (event) => {
  //   if (
  //     companyRef.current &&
  //     !companyRef.current.contains(event.target) &&
  //     fundingRef.current &&
  //     !fundingRef.current.contains(event.target)
  //   ) {
  //     setFundingIsOpen(false)
  //     setCompanyIsOpen(false)
  //     // console.log("doc is clicked")
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [])

  return (
    <DesktopLinksWrapper>
      {/* <li ref={companyRef}>
        <Button
          variant="navDropDown"
          onClick={(event) => handleCompanyClick(event)}
          // onMouseEnter={(event) => handleCompanyMouseEnter(event)}
          // onMouseLeave={(event) => handleCompanyMouseLeave(event)}
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
      </li> */}

      <li>
        <Button to={links.howItWorks.url} variant="navLink">
          {links.howItWorks.text[lang]}
        </Button>
      </li>
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
        <Button to={links.faq.url} variant="navLink">
          {links.faq.text[lang]}
        </Button>
      </li>
      {/* <li>
        <Button to={links.partners.url} variant="navLink">
          {links.partners.text[lang]}
        </Button>
      </li>
      <li>
        <Button to={links.contactUs.url} variant="navLink">
          {links.contactUs.text[lang]}
        </Button>
      </li> */}
      <li className="getFunded">
        <Button to={links.getFunded.url} variant="primary">
          {links.getFunded.text[lang]}
        </Button>
      </li>
      <li>
        <Button to={links.login.url} variant="navLink">
          {links.login.text[lang]}
        </Button>
      </li>
      {/* <li>
        <Button variant="navDropDown">flag</Button>
        <FlagDropdown />
      </li> */}
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
  /* width: calc(100% - 48px); */
  /* top: 24px; */
  top: 0;
  right: 0;
  /* right: 24px; */
  left: 0;
  /* left: 24px; */
  z-index: 100;
  /* padding: 0 24px; */
  background: rgba(242, 246, 250, 0.9);
  backdrop-filter: blur(20px);
  /* border-radius: 10px; */
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

const SimpleWrapper = styled(Wrapper)`
  justify-content: center;
`
