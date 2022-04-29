import React from "react"
import styled from "styled-components"

const NewsBar = ({ text, url, urlText }) => {
  return (
    <NewsBarWrapper>
      {text}
      <a href={url} target="_blank" rel="noreferrer">
        {urlText}
      </a>
    </NewsBarWrapper>
  )
}
export default NewsBar

const NewsBarWrapper = styled.div`
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
