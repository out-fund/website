import React from "react"
import { HeroSimple } from "components"
import EnLayout from "layouts/en"
import { graphql } from "gatsby"
import styled from "styled-components"
import { W } from "styles"
import { Link } from "gatsby"

const Blog = (props) => {
  console.log(props)
  return (
    <EnLayout>
      {/* <HeroSimple data={"Awesome Blog"} /> */}

      <main>
        <HeroSimple data={{ title: "Awesome Blog" }} />
        {/* <SectionOtherBrands data={data.allMdx.edges} /> */}
        {/* <SectionFeaturedCards data={data.allMdx.edges} /> */}
        {/* <SectionContainer title="We’ve funded 100s <br/> of brands like yours">
          
        </SectionContainer> */}
        <Wrapper>
          <ContentWrapper>
            {/* <CardsWrapper>
              {props.data.allMdx.edges.map(({ node: story }, index) => (
                <Fragment key={index}>
                  {!story.frontmatter.featured && (
                    <CardLogoReadMore data={story} />
                  )}
                </Fragment>
              ))}
 
            </CardsWrapper> */}
            <ul>
              {props.data.allMdx.edges.map(({ node: post }) => (
                <li key={post.id}>
                  {/* <Button
                    // ctaUrl={post.slug.split("-").slice(3).join("-")}
                    ctaUrl={`/${post.slug}/`}
                    variant="secondary"
                  >
                    <h2>{post.frontmatter.title}</h2>
                  </Button> */}
                  <Link to={post.slug.split("-").slice(3).join("-")}>
                    <h2>{post.frontmatter.title}</h2>
                  </Link>
                  {/* <p>{post.excerpt}</p> */}
                </li>
              ))}
            </ul>
          </ContentWrapper>
        </Wrapper>
      </main>
    </EnLayout>
  )
}

export default Blog

// export const query = graphql`
//   query blog {
//     allMdx(
//       filter: {
//         fileAbsolutePath: { regex: "/success-stories/" }
//         frontmatter: { language: { regex: "/en-GB/" } }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             company
//             logo
//             featured
//             card {
//               alt
//               src {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
//           }
//           slug
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query blogIndex {
    allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`
const Wrapper = styled(W.ContainerFull)`
  margin-top: 64px;
`
const ContentWrapper = styled(W.ContainerMax)``
// const CardsWrapper = styled.div`
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
