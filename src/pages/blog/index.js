import React from "react"
import { Link, graphql } from "gatsby"

import EnLayout from "layouts/en"
import { HeroSimple } from "components"

const Blog = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <EnLayout>
      <HeroSimple data={"Awesome Blog"} />
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.slug.split("-").slice(3).join("-")}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </EnLayout>
  )
}

export default Blog

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
