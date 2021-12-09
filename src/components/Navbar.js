import * as React from "react"
import Logo from "images/svg/Outfund-logo.svg"
import MenueIcon from "images/svg/MenueIcon.svg"
import styled from "styled-components"
import { SecondaryButton } from "components/Button"
import Link from "components/Link"

const StyledNavbar = styled.nav`
  background-color: #f2f6fa;
  height: 72px;
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
    /* .wrap {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1770px;
      margin: 0 auto;
    } */
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
  }
`
const leftLinks = [
  {
    cta: "Comapny",
    ctaUrl: "/",
  },
  {
    cta: "How it works",
    ctaUrl: "/",
  },
  {
    cta: "Partners",
    ctaUrl: "/",
  },
  {
    cta: "We are hiring!",
    ctaUrl: "/",
  },
]

const rightLinks = [
  {
    cta: "Contact",
    ctaUrl: "/",
  },
  {
    cta: "Support",
    ctaUrl: "/",
  },
  {
    cta: "Login",
    ctaUrl: "/",
  },
  {
    cta: "🇬🇧",
    ctaUrl: "/",
  },
]

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <div className="wrap">
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
      </div>
    </StyledNavbar>
  )
}

export default Navbar
