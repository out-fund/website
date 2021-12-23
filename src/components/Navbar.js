import React from "react"
import LogoSvg from "images/svg/Outfund-logo.svg"
import MenueIconSvg from "images/svg/MenueIcon.svg"

import { Button, Link } from "."
import styled from "styled-components"
import { theme } from "./../styles/new/theme"

import links from "./../content/links"

const MenueGroup = ({ title, children }) => {
  return (
    <MenueGroupWrapper>
      <GroupTitle>{title}</GroupTitle>
      <LinkGroup>{children}</LinkGroup>
    </MenueGroupWrapper>
  )
}

const MobileLinks = ({ lang }) => {
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
        <Menue>
          <MenueIconSvg />
        </Menue>
      </ButtonWrapper>
      <MobileDropdownWrapper>
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

const CompanyDropdown = () => {
  return <CompanyWrapper>Company</CompanyWrapper>
}
const FundingDropdown = () => {
  return <FundingWrapper>Funding</FundingWrapper>
}

const DesktopLinks = ({ lang }) => {
  return (
    <DesktopLinksWrapper>
      <Button variant="navDropDown">{links.company.text[lang]}</Button>
      {/* <CompanyDropdown /> */}
      <Button variant="navDropDown">{links.funding.text[lang]}</Button>
      {/* <FundingDropdown /> */}
      <Button to={links.faq.url} variant="navLink">
        {links.faq.text[lang]}
      </Button>
      <Button to={links.partners.url} variant="navLink">
        {links.partners.text[lang]}
      </Button>
      <Button to={links.contactUs.url} variant="navLink">
        {links.contactUs.text[lang]}
      </Button>
      <Button
        to={links.getFunded.url}
        variant="primary"
        size="medium"
        className="getFunded"
      >
        {links.getFunded.text[lang]}
      </Button>
      <Button to={links.login.url} variant="navLink">
        {links.login.text[lang]}
      </Button>
      <Button variant="navDropDown">flag</Button>
      {/* <FlagDropdown /> */}
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
  top: ${theme.size.navbarHeight + 8}px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 260px;
  border-radius: 10px;
  padding: 24px;
  row-gap: 8px;
`

const Menue = styled.div`
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

const DesktopLinksWrapper = styled.div`
  display: none;
  ${theme.above.t.l} {
    display: flex;
    width: 100%;
    .getFunded {
      margin-left: auto;
    }
  }
`

const CompanyWrapper = styled.div``
const FundingWrapper = styled.div``

const MenueGroupWrapper = styled.div``

const GroupTitle = styled.div``
const LinkGroup = styled.div``

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
