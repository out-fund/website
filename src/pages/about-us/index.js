import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "layouts/en"
import {
  HeroAbout,
  SectionWeAreInvesting,
  Stats,
  SectionContainer,
  Button,
  CardNews,
  SectionFoundersCompanies,
  SectionLatestNews,
  SectionJoinUs,
} from "components"
import { W, theme } from "styles"

// import Stats from "components/Stats"
// import SectionContainer from "components/SectionContainer"
import Card from "components/Card"
import styled from "styled-components"

const AboutUs = (props) => {
  console.log(props.data)
  const hero = props.data.aboutUsJson.hero

  // const weInvesting = props.data.aboutUsJson.weInvesting
  // const weInvestingImage = getImage(props.data.aboutUsJson.weInvesting.image)
  // const companies = props.data.aboutUsJson.companies
  // const latestNews = props.data.aboutUsJson.latestNews

  const regulated = props.data.aboutUsJson.regulated

  // const joinUsImage = getImage(props.data.aboutUsJson.joinUs.image)
  return (
    <LangLayout>
      <HeroAbout
        title={hero.title}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <W.Main>
        <Stats stats={hero.stats} />
        <SectionWeAreInvesting data={props.data.aboutUsJson.weInvesting} />
        <SectionFoundersCompanies data={props.data.aboutUsJson.companies} />
        <SectionLatestNews data={props.data.aboutUsJson.latestNews} />
        <SectionJoinUs data={props.data.aboutUsJson.joinUs} />

        <section className="regulated">
          <h3>{regulated.title}</h3>
          <p>{regulated.description}</p>
          <ul className="gird">
            {regulated.blocks.map((item) => (
              <li key={item.text}>
                <div className="icon">{item.icon}</div>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </W.Main>
    </LangLayout>
  )
}

export default AboutUs

export const query = graphql`
  query {
    aboutUsJson(language: { regex: "/en-GB/" }) {
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
        btn
        btnUrl
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
        btn
        btnUrl
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
        logos
      }
      joinUs {
        imageAlt
        description
        title
        btn
        btnUrl
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      regulated {
        blocks {
          icon
          text
        }
        statement
        description
        title
      }
      latestNews {
        title
        cards {
          logo
          company
          tag
          title
          url
        }
      }
    }
  }
`

// <LangLayout>
//   <header>
//     <Hero
//       variant="about"
//       title={hero.title}
//       description={hero.description}
//       image={hero.image}
//       imageAlt={hero.imageAlt}
//     />
//     <Stats stats={hero.stats} />
//   </header>

// </LangLayout>
