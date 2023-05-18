import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import LangLayout from "./../layouts/en"

import { HeroSimple, Main, Link, Button } from "./../components"
import T from "./../styles/new/typography"
import { theme } from "./../styles/new/theme"

const BlogPostLayout = ({ data: { mdx } }) => {
  const calcSlug = `/blog/${mdx.slug.split("-").slice(3).join("-")}/`
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
          a: (props) => <Link target="_blank" {...props} />,
          Button,
          StaticImage,
        }}
      >
        <Helmet
          title={mdx.frontmatter.title}
          titleTemplate="%s | Outfund"
          htmlAttributes={{ lang: `en-GB` }}
        >
          <meta name="description" content={mdx.excerpt} />
          <link rel="canonical" href={`https://out.fund${calcSlug}`} />
          <meta property="og:url" content={`https://www.out.fund${calcSlug}`} />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={mdx.frontmatter.title + " | Outfund"}
          />
          <meta property="og:description" content={mdx.excerpt} />
          <meta property="og:site_name" content="Outfund" />
          <meta
            property="og:image"
            content="https://www.out.fund/Outfund.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={mdx.frontmatter.title + " | Outfund"}
          />
          <meta name="twitter:description" content={mdx.excerpt} />
        </Helmet>
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

  ${theme.above.t.m} {
    position: relative;
    top: -64px;
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    border-radius: 10px;
    box-shadow: 0px 17px 33px rgba(5, 24, 64, 0.07),
      0px 3.8002px 13.45px rgba(5, 24, 64, 0.0522616),
      0px 1.07885px 7.14579px rgba(5, 24, 64, 0.0377807);
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

  p a {
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
  table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 5px;
      margin-bottom: 24px;
      text-align: left;
  }
  th, td{
    padding: 8px 4px;
    border: 1px solid;
  }
`

export const query = graphql`
  query BlogPostQuery($postId: String) {
    mdx(id: { eq: $postId }) {
      id
      body
      slug
      excerpt(pruneLength: 155)
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
