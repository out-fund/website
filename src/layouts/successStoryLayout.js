import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { S } from "styles"

const SuccessStoryLayout = ({ data: { mdx } }) => {
  return (
    <MDXProvider
      components={{
        h1: S.H1,
        h2: S.H2,
        h3: S.H3,
      }}
    >
      <h1>title</h1>
      <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
    </MDXProvider>
  )
}

export default SuccessStoryLayout

export const query = graphql`
  query SuccessStoryQuery($storyId: String) {
    mdx(id: { eq: $storyId }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
