import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { Helmet } from "react-helmet"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import LangLayout from "./../../../layouts/us"

import T from "./../../../styles/new/typography"
import { Main, Section } from "./../../../components"

export const query = graphql`
  query usPrivacyPolicy {
    allMdx(
      filter: {
        slug: { regex: "/privacy-policy/" }
        frontmatter: { language: { regex: "/en-US/" } }
      }
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
          }
          body
        }
      }
    }
  }
`

const PrivacyPolicy = (props) => {
  const data = props.data.allMdx.edges[0].node
  return (
    <LangLayout>
      <MDXProvider
        components={{
          h1: T.H1,
          h2: (props) => <T.H3 as="h2" {...props} />,
          h3: (props) => <T.H4 as="h3" {...props} />,
          p: T.Body,
          li: (props) => <ListElement as="li" {...props} />,
          th: (props) => <T.BodySmall as="th" {...props} />,
          td: (props) => <T.BodySmall as="td" {...props} />,
          // Quote,

          // PhotoStrip,
          // ChalangeSolution,
          // Text,
          // StaticImage,
        }}
      >
        <Helmet
          title={parse(data.frontmatter.title)}
          titleTemplate="%s | Outfund | USA"
          htmlAttributes={{ lang: `en-US` }}
        />
        <Main>
          <Article as="">
            <Heading as="h1">{parse(data.frontmatter.title)}</Heading>
            <MDXRenderer frontmatter={data.frontmatter}>
              {data.body}
            </MDXRenderer>
          </Article>
        </Main>
      </MDXProvider>
    </LangLayout>
  )
}

export default PrivacyPolicy

const ListElement = styled(T.Body)`
  list-style-type: disc;
  margin-left: 16px;
`

const Heading = styled(T.H2)`
  margin-bottom: 16px;
`
const Article = styled(Section)`
  max-width: 970px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
  h2,
  h3,
  h4 {
    margin-top: 32px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 24px;
  }
  ul {
    margin-top: -16px;
    margin-left: 16px;
  }

  /* ol,
  ul {
    list-style: initial;
  } */

  li ul {
    margin-top: 0px;
  }
  table {
    text-align: left;
    border: 1px solid #ddd;
    border-collapse: collapse;
    border-spacing: 0;
    th,
    td {
      padding: 12px 16px;
      border: 1px solid #ddd;
    }
    th {
      font-weight: 600;
    }
  }
`
