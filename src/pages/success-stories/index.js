import React from "react"
import { Link, graphql } from "gatsby"

import { HeroSimple, Button } from "components"
import EnLayout from "layouts/en"

const SuccessStories = ({ data }) => {
  const { edges: successStories } = data.allMdx
  return (
    <EnLayout>
      <main>
        <HeroSimple
          title={"Founders and how Outfund helped them succeed"}
          description="Outfund is a team of success-driven, highly motivated people who are passionate about growing businesses in the UK. Our fast-paced environment makes us a highly adaptive team who rely on one another to make this mission possible."
        ></HeroSimple>
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
      </main>
    </EnLayout>
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
