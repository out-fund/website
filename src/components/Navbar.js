import React from "react"
import LogoSvg from "images/svg/Outfund-logo.svg"
import MenueIconSvg from "images/svg/MenueIcon.svg"
import { Button, Link } from "."
import { breakpoints, theme } from "styles"
import styled from "styled-components"
// import { SecondaryButton } from "components/Button"
// import Link from "components/Link"

const Navbar = (props) => {
  return (
    <NavWrapper>
      <Wrapper>
        <Logo>
          <Link to="/">
            <LogoSvg />
          </Link>
        </Logo>
        <ContentWrapper>
          <LeftLinks>
            {leftLinks.map((link) => (
              <li key={link.btn}>
                {/* {link.btnUrl === "/company/" && (
                  <Button btnUrl={link.btnUrl} variant="navLink">
                    {link.btn}
                  </Button>
                )} */}
                {link.btnUrl === "/company/" ? (
                  <Button btnUrl={link.btnUrl} variant="navLink">
                    {link.btn}
                  </Button>
                ) : link.btnUrl === "/funding/" ? (
                  <Button btnUrl={link.btnUrl} variant="navLink">
                    {link.btn}
                  </Button>
                ) : (
                  <Button btnUrl={link.btnUrl} variant="navLink">
                    {link.btn}
                  </Button>
                )}
              </li>
            ))}
          </LeftLinks>

          <RightLinks>
            {rightLinks.map((link) => (
              <li key={link.btn}>
                <Button btnUrl={link.btnUrl} variant="navLink">
                  {link.btn}
                </Button>
              </li>
            ))}
          </RightLinks>
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
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 100;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(242, 246, 250, 0.9);
  backdrop-filter: blur(20px);
  /* margin: 0 16px; */
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
  margin-left: 16px;
  margin-right: 16px;
  /* padding: 0 16px; */
  max-width: ${theme.width.max};
  ${breakpoints.laptop} {
    grid-template-columns: 127px auto;
    justify-content: unset;
    column-gap: 40px;
  }
`
const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  /* background-color: #fff; */
  width: 100%;
  /*display: none;*/
  ${breakpoints.laptop} {
    position: static;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    column-gap: 16px;
  }
`
const LeftLinks = styled.ul`
  /* background-color: #faf; */
  ${breakpoints.laptop} {
    position: static;
    display: grid;
    grid-template-columns: repeat(6, auto);
    align-items: center;
    justify-content: space-between;
  }
`
const RightLinks = styled.ul`
  /* background-color: #ffa; */
  ${breakpoints.laptop} {
    position: static;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
  }
`

const Menue = styled.div`
  svg {
    height: 40px;
  }
  ${breakpoints.laptop} {
    display: none;
  }
`

/*const HamburgerWrapper = styled.div`*/
/* display: none;

  @media (max-width: 768px) {
    display: block;
  } */
// `

const leftLinks = [
  {
    btn: "About us",
    // btnUrl: "/company/",
    btnUrl: "/about-us/",
  },
  {
    btn: "Careers",
    btnUrl: "/careers/",
  },
  {
    btn: "FAQ",
    btnUrl: "/support/faq/",
  },
  // {
  //   btn: "Partners",
  //   btnUrl: "/partners/",
  // },
  {
    btn: "Success Stories",
    btnUrl: "/success-stories/",
  },
  {
    btn: "Blog",
    btnUrl: "/blog/",
  },
  {
    btn: "Contact us",
    btnUrl: "/contact-us/",
  },
]

const rightLinks = [
  {
    btn: "Login",
    btnUrl: "/login",
  },
  {
    btn: "🇬🇧",
    btnUrl: "/",
  },
]

// const StyledNavbar = styled.nav`
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
// `

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
