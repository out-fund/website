import * as React from "react"
import { graphql } from "gatsby"

import LangLayout from "layouts/en"
import Hero from "components/Hero"
import Stats from "components/Stats"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SectionContainer from "components/SectionContainer"
import Card from "components/Card"

const AboutUs = (props) => {
  console.log(props.data)
  const hero = props.data.aboutYaml.hero
  const weInvesting = props.data.aboutYaml.weInvesting
  const weInvestingImage = getImage(props.data.aboutYaml.weInvesting.image)
  const companies = props.data.aboutYaml.companies
  return (
    <LangLayout location={props.location}>
      <header>
        <Hero
          variant="about"
          title={hero.title}
          description={hero.description}
          image={hero.image}
          imageAlt={hero.imageAlt}
        />
        <Stats stats={hero.stats} />
      </header>

      <main>
        <SectionContainer
          className="weInvesting"
          title={weInvesting.title}
          description={weInvesting.description}
        >
          <GatsbyImage image={weInvestingImage} alt={weInvesting.imageAlt} />
        </SectionContainer>
        <SectionContainer className="companies" title={companies.title}>
          {companies.cards.map((item) => (
            <Card
              key={item.company}
              variant="simpleCompany"
              className={item.company}
              company={item.company}
              logo={item.logo}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))}
        </SectionContainer>
      </main>
    </LangLayout>
  )
}

export default AboutUs

export const query = graphql`
  query {
    aboutYaml(language: { regex: "/en-GB/" }) {
      hero {
        title
        description
        imageAlt
        stats {
          stat
          text
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      weInvesting {
        cta
        ctaUrl
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
        description
        title
      }
      companies {
        title
        cards {
          company
          imageAlt
          logo
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
