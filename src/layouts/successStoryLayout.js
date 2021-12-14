import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { S } from "styles"

import EnLayout from "layouts/en"
import { HeroSimple } from "components"

const SuccessStoryLayout = ({ data: { mdx } }) => {
  return (
    <EnLayout>
      <MDXProvider
        components={{
          h1: S.H1,
          h2: S.H2,
          h3: S.H3,
        }}
      >
        <HeroSimple title={mdx.frontmatter.title} />
        <main>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </main>
      </MDXProvider>
    </EnLayout>
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
