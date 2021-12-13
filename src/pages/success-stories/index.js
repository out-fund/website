import React from "react"
import { Link, graphql } from "gatsby"

const SuccessStories = ({ data }) => {
  const { edges: successStories } = data.allMdx
  return (
    <div>
      <h1>Success Stories</h1>
      <ul>
        {successStories.map(({ node: story }) => (
          <li key={story.id}>
            <Link to={story.slug}>
              <h2>{story.frontmatter.title}</h2>
            </Link>
            <p>{story.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuccessStories

export const query = graphql`
  query successStories {
    allMdx(filter: { fileAbsolutePath: { regex: "/success-stories/" } }) {
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
