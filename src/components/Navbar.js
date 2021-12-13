import React from "react"
import LogoSvg from "images/svg/Outfund-logo.svg"
import MenueIconSvg from "images/svg/MenueIcon.svg"
import { Button } from "."
import { W, S } from "styles"
import styled from "styled-components"
// import { SecondaryButton } from "components/Button"
// import Link from "components/Link"

const Navbar = (props) => {
  return (
    <NavWrapper>
      <Wrapper>
        <Logo>
          <LogoSvg />
        </Logo>
        <ContentWrapper>
          <LeftLinks>
            <ul>
              {leftLinks.map((link) => (
                <li key={link.btn}>
                  <Button btnUrl={link.btnUrl} variant="secondary">
                    {link.btn}
                  </Button>
                </li>
              ))}
            </ul>
            <ul className="rightLinks">
              {rightLinks.map((link) => (
                <li key={link.btn}>
                  <Button btnUrl={link.btnUrl} variant="secondary">
                    {link.btn}
                  </Button>
                </li>
              ))}
            </ul>
          </LeftLinks>
        </ContentWrapper>
        <Menue>
          <MenueIconSvg />
        </Menue>
      </Wrapper>
    </NavWrapper>
    // <StyledNavbar>
    /* <div className="wrap">
        <Logo className="logo" />
        <div className="links">
          <ul className="leftLinks">
            {leftLinks.map((link) => (
              <li key={link.cta}>
                <Link to={link.ctaUrl} variant="navLink">
                  {link.cta}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="rightLinks">
            {rightLinks.map((link) => (
              <li key={link.cta}>
                <Link to={link.ctaUrl} variant="navLink">
                  {link.cta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SecondaryButton className="chat">Start live chat</SecondaryButton>
        <MenueIcon className="menueIcon" />
      </div> */
    // </StyledNavbar>
  )
}

export default Navbar

const NavWrapper = styled.nav`
  /*background-color: #aaf;*/
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 100;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(227, 235, 245, 0.5);
  backdrop-filter: blur(20px);
`
const Logo = styled.div`
  svg {
    height: 24px;
  }
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 40px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0 16px;
`
const Menue = styled.div`
  svg {
    height: 40px;
  }
`
const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  background-color: #fff;
  width: 100%;
  display: none;
`
const LeftLinks = styled.div``

const HamburgerWrapper = styled.div`
  /* display: none;

  @media (max-width: 768px) {
    display: block;
  } */
`

const StyledNavbar = styled.nav`
  /* background-color: #f2f6fa; */
  /* height: 72px;
  display: flex;
  align-items: center;
  padding: 0 16px 0 32px;
  .wrap {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1770px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    margin-top: 32px;
  }
  .logo {
    flex-shrink: 0;
    height: 24px;
    margin-right: auto;
    @media (min-width: 1200px) {
      margin-right: 24px;
    }
  }

  .chat {
    @media (min-width: 1200px) {
      display: none;
    }
  }
  .menueIcon {
    flex-shrink: 0;
    height: 40px;
    margin-left: 1rem;
    @media (min-width: 1200px) {
      display: none;
    }
  }
  .links {
    display: none;
    @media (min-width: 1200px) {
      display: flex;
      width: 100%;

      .leftLinks,
      .rightLinks {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .leftLinks {
        margin-right: auto;
      }
    }
  } */
`

// const mobileLeftLinks = [
//   {
//     btn: "Comapny >",
//     btnUrl: "/",
//   },
//   {
//     btn: "How it works",
//     btnUrl: "/",
//   },
//   {
//     btn: "FAQ",
//     btnUrl: "/",
//   },
//   {
//     btn: "Partners",
//     btnUrl: "/",
//   },
//   {
//     btn: "Contact us",
//     btnUrl: "/",
//   },
//   {
//     btn: "We are hiring!",
//     btnUrl: "/",
//   },
// ]
const leftLinks = [
  {
    btn: "Comapny >",
    btnUrl: "/",
  },
  {
    btn: "How it works",
    btnUrl: "/",
  },
  {
    btn: "FAQ",
    btnUrl: "/",
  },
  {
    btn: "Partners",
    btnUrl: "/",
  },
  {
    btn: "Contact us",
    btnUrl: "/",
  },
  {
    btn: "We are hiring!",
    btnUrl: "/",
  },
]

const rightLinks = [
  {
    btn: "Login",
    btnUrl: "/",
  },
  {
    btn: "🇬🇧",
    btnUrl: "/",
  },
]
