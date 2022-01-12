// import React from "react"

// const CookiePolicy = () => {
//   return (
//     <main>
//       <title>CookiePolicy</title>
//       <h1>CookiePolicy</h1>
//     </main>
//   )
// }

// export default CookiePolicy

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import parse from "html-react-parser"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

// import { theme } from "./../../../styles/new/theme"
import T from "./../../../styles/new/typography"
import EnLayout from "./../../../layouts/en"
import { Main, Section } from "./../../../components"

const CookiePolicy = (props) => {
  const data = props.data.allMdx.edges[0].node
  console.log(data)
  return (
    <EnLayout>
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
        <Main>
          <Article as="">
            <Heading as="h1">{parse(data.frontmatter.title)}</Heading>
            <MDXRenderer frontmatter={data.frontmatter}>
              {data.body}
            </MDXRenderer>
          </Article>
        </Main>
      </MDXProvider>
    </EnLayout>
  )
}

export default CookiePolicy

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
    margin-left: 16px;
  }
  ul {
    margin-top: -16px;
    margin-bottom: 16px;
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

export const query = graphql`
  query cookiePolicy {
    allMdx(filter: { slug: { regex: "/cookie-policy/" } }) {
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
const Wrapper = styled.div``
const ContentWrapper = styled.div``
