import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "layouts/en"
import Hero from "components/Hero"
import Stats from "components/Stats"
import SectionContainer from "components/SectionContainer"
import Card from "components/Card"

const AboutUs = (props) => {
  console.log(props.data)
  const hero = props.data.aboutUsJson.hero
  const weInvesting = props.data.aboutUsJson.weInvesting
  const weInvestingImage = getImage(props.data.aboutUsJson.weInvesting.image)
  const companies = props.data.aboutUsJson.companies
  const latestNews = props.data.aboutUsJson.latestNews
  const regulated = props.data.aboutUsJson.regulated
  const joinUs = props.data.aboutUsJson.joinUs
  const joinUsImage = getImage(props.data.aboutUsJson.joinUs.image)
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
              key={item.company.toLowerCase().replace(/\s/g, "")}
              variant="simpleCompany"
              className={item.company}
              company={item.company}
              logo={item.logo.publicURL}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))}
          <div className="logos">
            {companies.logos.map((item) => (
              <img src={item.publicURL} alt="Company logo" /> // TODO Add key
            ))}
          </div>
          <a href={companies.ctaUrl}>{companies.cta}</a>
        </SectionContainer>
        <SectionContainer
          className="latestUpadates"
          title={latestNews.latestNews}
        >
          {latestNews.cards.map((item) => (
            <Card
              key={item.company.toLowerCase().replace(/\s/g, "")}
              variant="news"
              className={item.tag.toLowerCase().replace(/\s/g, "")}
              company={item.company}
              title={item.title}
              logo={item.logo.publicURL}
              tag={item.tag}
            />
          ))}
        </SectionContainer>
        <section className="joinUs">
          <h3>{joinUs.title}</h3>
          <p>{joinUs.description}</p>
          <a href={joinUs.ctaUrl}>{joinUs.cta}</a>
          <GatsbyImage image={joinUsImage} alt={joinUs.imageAlt} />
        </section>
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
      </main>
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
        cta
        ctaUrl
        cards {
          company
          imageAlt
          logo {
            publicURL
          }
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        logos {
          publicURL
        }
      }
      joinUs {
        imageAlt
        description
        title
        cta
        ctaUrl
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
        cards {
          logo {
            publicURL
          }
          company
          tag
          title
        }
      }
    }
  }
`
