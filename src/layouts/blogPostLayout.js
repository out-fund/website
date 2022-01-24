import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import LangLayout from "./../layouts/en"

import { HeroSimple, Main, Link, Button } from "./../components"
import T from "./../styles/new/typography"
import { theme } from "./../styles/new/theme"

const BlogPostLayout = ({ data: { mdx } }) => {
  // console.log(mdx)
  return (
    <LangLayout>
      <MDXProvider
        components={{
          h1: T.H1,
          h2: T.H2,
          h3: T.H3,
          h4: T.H4,
          h5: T.H5,
          h6: T.H6,
          p: T.Body,
          figcaption: (props) => <T.BodySmall as="figcaption" {...props} />,
          li: (props) => <ListElement as="li" {...props} />,
          blockquote: T.Blockquote,
          a: Link,
          Button,
          StaticImage,
        }}
      >
        <HeroSimple data={mdx.frontmatter} />
        <Main>
          {mdx.frontmatter.heroImage && (
            <ImageWrapper>
              <GatsbyImage
                image={getImage(mdx.frontmatter.heroImage.src)}
                alt={mdx.frontmatter.heroImage.alt}
              />
            </ImageWrapper>
          )}
          <Article mt={mdx.frontmatter.heroImage}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </Article>
        </Main>
      </MDXProvider>
    </LangLayout>
  )
}

export default BlogPostLayout

const ListElement = styled(T.Body)`
  list-style-type: disc;
  margin-left: 16px;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  img {
    border-radius: 10px;
  }
  ${theme.above.t.m} {
    position: relative;
    top: -64px;
    margin-bottom: 0;
  }
`
const Article = styled.article`
  max-width: 970px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => (props.mt ? "0px" : "80px")};
  margin-bottom: 80px;
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 24px;
    line-height: 1.6;
  }
  ul {
    margin-top: -16px;
    margin-bottom: 16px;
    margin-left: 16px;
  }

  a {
    :hover {
      text-decoration: underline;
    }
  }

  li ul {
    margin-top: 0px;
  }
  figure {
    margin-bottom: 16px;
    p {
      margin: 0;
    }
    figcaption {
      text-align: center;
    }
  }
`

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
