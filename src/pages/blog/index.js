import React from "react"
import { Link, graphql } from "gatsby"

const Blog = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <h1>Awesome MDX Blog</h1>
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
    </div>
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
