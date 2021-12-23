import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import EnLayout from "layouts/en"

import { HeroSimple, Main } from "./../../components"

const Blog = (props) => {
  console.log(props)
  return (
    <EnLayout>
      <Main>
        <HeroSimple
          data={{
            title: "Latest from our blog",
            description:
              "Outfund is a team of success-driven, highly motivated people who are passionate about growing businesses in the UK. Our fast-paced environment makes us a highly adaptive team who rely on one another to make this mission possible.",
          }}
        />
        <Wrapper>
          <ContentWrapper>
            <ul>
              {props.data.allMdx.edges.map(({ node: post }) => (
                <li key={post.id}>
                  <Link to={post.slug.split("-").slice(3).join("-")}>
                    <h2>{post.frontmatter.title}</h2>
                    <GatsbyImage
                      image={getImage(post.frontmatter.card.image.src)}
                      alt={post.frontmatter.card.image.alt}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </ContentWrapper>
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
                    gatsbyImageData
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
const Wrapper = styled.div``
// margin-top: 64px;

const ContentWrapper = styled.div``
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
