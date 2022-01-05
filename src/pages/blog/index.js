import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import EnLayout from "layouts/en"

import { HeroSimple, Main, CardBlog } from "./../../components"
import { theme } from "./../../styles/new/theme"

const Blog = (props) => {
  console.log(props)
  return (
    <EnLayout>
      <Main>
        <HeroSimple data={props.data.blogJson.hero} />
        <Wrapper>
          <List>
            {props.data.allMdx.edges.map(({ node: post }) => (
              <Item key={post.id}>
                <CardBlog data={post} key={post.id} />
              </Item>
            ))}
          </List>
        </Wrapper>
      </Main>
    </EnLayout>
  )
}

export default Blog

export const query = graphql`
  query blogPage {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: slug, order: DESC }
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            card {
              image {
                alt
                src {
                  childImageSharp {
                    gatsbyImageData(
                      aspectRatio: 1.777
                      height: 570
                      jpgOptions: { progressive: true, quality: 90 }
                      transformOptions: { cropFocus: CENTER, fit: COVER }
                    )
                  }
                }
              }
            }
            title
          }
        }
      }
    }
    blogJson(language: { regex: "/en-GB/" }) {
      hero {
        description
        title
      }
    }
  }
`
const Wrapper = styled.div`
  max-width: 1770px;
  margin: 0 auto;
  margin-top: 64px;
`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  /* max-width: 100%; */
  justify-items: center;

  ${theme.above.t.m} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${theme.above.l.m} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const Item = styled.li``
// const CardPost = styled.div``
// margin-top: 64px;

// const ContentWrapper = styled.div``
// const CardsWrapper = styled.div``
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   column-gap: 30px;
//   row-gap: 30px;

//   ${theme.above.tablet} {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   ${theme.above.laptop} {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   > div:last-child {
//     svg {
//       width: 100px;
//       height: 95px;
//     }
//   }
// `
