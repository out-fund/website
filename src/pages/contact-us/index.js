import React from "react"
import { graphql } from "gatsby"

import HeroSimple from "components"
import EnLayout from "layouts/en"

const Contact = (props) => {
  const hero = props.data.contactUsJson.hero
  console.log(props)
  return (
    <EnLayout location={props.location}>
      <header>
        <HeroSimple title={hero.title} />
      </header>
      <main></main>
    </EnLayout>
  )
}

export default Contact

export const query = graphql`
  query {
    contactUsJson {
      language
      seoTitle
      liveChat {
        btn
        btnUrl
        description
        title
      }
      hero {
        title
      }
      globalCoverage {
        title
      }
      feedback {
        btn
        btnUrl
        description
        title
      }
      emailForm {
        title
        form {
          btn
          email
          message
          name
        }
      }
      demoCall {
        btn
        btnUrl
        description
        title
      }
    }
  }
`

// offices {
//   main {
//     country
//     firstLine
//     secondLine
//     title
//   }
//   world {
//     title
//     list {
//       country
//       firstLine
//       secondLine
//     }
//   }
// }
// image {
//   childImageSharp {
//     gatsbyImageData
//   }
// }
