import React from "react"
import { theme } from "./../styles/new/theme"
import styled from "styled-components"

// const GlobalLayout = ({ children, location }) => {
const GlobalLayout = ({ children, pt }) => {
  return (
    <>
      <GlobalWrapper pt={pt}>
        <NewsBar>
          🎉 Outfund scores £115 million to loan over £500 million to e-commerce
          firms this year
          <a
            href="https://tech.eu/2022/04/27/going-all-out-to-change-the-way-online-businesses-raise-funds-lands-ps115-million-in-outfunds-kitty/"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </NewsBar>
        {children}
      </GlobalWrapper>
    </>
  )
}

export default GlobalLayout

const GlobalWrapper = styled.div`
  overflow-x: hidden;
  ${(props) =>
    props.pt
      ? `padding-top: 0px;`
      : `padding-top: ${theme.size.navbarHeight}px;`}; ;
`
const NewsBar = styled.div`
  background-color: #0a213b;
  color: #fff;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  a {
    margin-left: 24px;
    color: inherit;
    font-weight: 400;
    text-decoration: underline;
  }
`
