import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import EnLayout from "layouts/en"
import { HeroSimple, Main } from "./../components"
import T from "./../styles/new/typography"

const BlogPostLayout = ({ data: { mdx } }) => {
  console.log(mdx)
  return (
    <EnLayout>
      <MDXProvider
        components={{
          h1: T.H1,
          h2: T.H2,
          h3: T.H3,
          p: T.Body,
        }}
      >
        <HeroSimple data={mdx.frontmatter} />
        <Main>
          <ImageWrapper>
            <GatsbyImage
              image={getImage(mdx.frontmatter.heroImage.src)}
              alt={mdx.frontmatter.heroImage.alt}
            />
          </ImageWrapper>
          <Article>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </Article>
        </Main>
      </MDXProvider>
    </EnLayout>
  )
}

export default BlogPostLayout

const ImageWrapper = styled.div`
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  position: relative;
  top: -64px;
  img {
    border-radius: 10px;
  }
`
const Article = styled.article`
  max-width: 970px;
  margin: 0 auto;
  /* margin-top: 120px; */
  /* padding-bottom: 120px; */
  h2,
  h3 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 24px;
    line-height: 1.6;
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

export const query = graphql`
  query BlogPostQuery($postId: String) {
    mdx(id: { eq: $postId }) {
      id
      body
      frontmatter {
        title
        heroImage {
          alt
          src {
            childImageSharp {
              gatsbyImageData(
                height: 600
                jpgOptions: { progressive: true, quality: 90 }
                transformOptions: { cropFocus: CENTER, fit: COVER }
              )
            }
          }
        }
      }
    }
  }
`
