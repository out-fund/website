import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

const NewsBar = ({ text, url, urlText }) => {
  return (
    <NewsBarWrapper>
      {parse(text)}
      <a href={url} target="_blank" rel="noreferrer">
        {urlText}
      </a>
    </NewsBarWrapper>
  )
}
export default NewsBar

const NewsBarWrapper = styled.div`
  /* background-color: #0a213b; */
  color: #0c2542;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  border: 1px solid #003edb;
  max-width: 1170px;
  padding: 11px 16px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 24px;
  background-color: transparent;
  width: calc(100% - 40px);
  /* margin-left: 20px;
  margin-right: 20px; */
  /* margin-bottom: -100%; */
  a {
    margin-left: 24px;
    color: #003edb;
    font-weight: 400;
    white-space: nowrap;
    /* text-decoration: underline; */
  }
`
