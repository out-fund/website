import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { S } from "styles"

const BlogPostLayout = ({ data: { mdx } }) => {
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

export default BlogPostLayout

export const query = graphql`
  query BlogPostQuery($postId: String) {
    mdx(id: { eq: $postId }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

// import { Link } from "gatsby"

// const shortcodes = { Link } // Provide common components here

// import { Chart, Pullquote } from "./ui"
// import { Message } from "theme-ui"

// const shortcodes = { Chart, Pullquote, Message }

// export default function Layout({ children }) {
//   return <MDXProvider components={shortcodes}>{children}</MDXProvider>
// }
