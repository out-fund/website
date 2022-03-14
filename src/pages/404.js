import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <Main>
      <title>Not found</title>
      <PageTitle>Page not found</PageTitle>
      <p>We couldn't find the page you were looking for.</p>
      <div>
        <Link to="/">Outfund homepage</Link>
      </div>
    </Main>
  )
}

export default NotFoundPage

const PageTitle = styled.h1`
  font-size: 24px;
  line-height: 1;
  margin-bottom: 16px;
  font-weight: 600;
`
const Main = styled.main`
  padding-top: 100px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  div {
    margin-top: 32px;
  }
  a {
    display: inline-block;
    padding: 8px 16px;
    color: #1a65ba;
    line-height: 1;
    text-decoration: none;
    border: 1px solid #1a65ba;
    border-radius: 100px;
  }
`
