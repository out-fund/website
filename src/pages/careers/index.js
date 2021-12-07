import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "layouts/en"
import Hero from "components/Hero"
import Stats from "components/Stats"
import SectionContainer from "components/SectionContainer"
// import Card from "components/Card"

const Careers = (props) => {
  console.log(props.data)
  const hero = props.data.careersJson.hero
  const weGrow = props.data.careersJson.weGrow
  const weGrowImage = getImage(props.data.careersJson.weGrow.image)
  const coolPeople = props.data.careersJson.coolPeople
  return (
    <LangLayout location={props.location}>
      <header>
        <Hero
          variant="careers"
          title={hero.title}
          description={hero.description}
          image={hero.image}
          imageAlt={hero.imageAlt}
          cta={hero.cta}
          ctaUrl={hero.ctaUrl}
        />
        <Stats stats={hero.stats} />
      </header>
      <main>
        <section className="weGrow">
          <h2>{weGrow.title}</h2>
          <p>{weGrow.description}</p>
          <GatsbyImage image={weGrowImage} alt={weGrow.imageAlt} />
        </section>
        <SectionContainer className="coolPeople" title={coolPeople.title}>
          <div className="peopleGrid">
            {coolPeople.people.map((person) => (
              <div className="person" key={person.name}>
                <GatsbyImage
                  image={getImage(person.image)}
                  alt={person.imageAlt}
                />
                <h3>{person.name}</h3>
                <div>{person.role}</div>
                <p>{person.description}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </main>
    </LangLayout>
  )
}

export default Careers

export const query = graphql`
  query {
    careersJson(language: { regex: "/en-GB/" }) {
      hero {
        ctaUrl
        cta
        description
        imageAlt
        title
        stats {
          text
          stat
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      coolPeople {
        cta
        ctaUrl
        title
        people {
          description
          imageAlt
          name
          role
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      currentOpenings {
        cta
        ctaUrl
        description
        title
        openings {
          location
          time
          title
        }
        openApplication {
          description
          email
          title
        }
      }
      inOffice {
        cta
        ctaUrl
        description
        imageAlt
        title
        blocks {
          icon
          text
        }
        offices {
          main {
            country
            firstLine
            secondLine
            title
          }
          world {
            title
            list {
              country
              firstLine
              secondLine
            }
          }
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      language
      seoKeywords
      seoTitle
      weGrow {
        description
        imageAlt
        title
        teamWorked {
          logos
          title
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      weValue {
        title
        blocks {
          text
          title
        }
      }
    }
  }
`
