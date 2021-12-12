import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "layouts/en"
import Hero from "components/Hero"
import Stats from "components/Stats"
import SectionContainer from "components/SectionContainer"
import Trust from "components/Trust"
// import Card from "components/Card"

const Careers = (props) => {
  console.log(props.data)
  const hero = props.data.careersJson.hero
  const weGrow = props.data.careersJson.weGrow
  const weGrowImage = getImage(props.data.careersJson.weGrow.image)
  const coolPeople = props.data.careersJson.coolPeople
  const inOffice = props.data.careersJson.inOffice
  const offices = props.data.officesJson
  const weValue = props.data.careersJson.weValue
  const currentOpenings = props.data.careersJson.currentOpenings
  const trust = props.data.trustJson
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
        <SectionContainer
          className="inOffice"
          title={inOffice.title}
          description={inOffice.description}
        >
          <ul className="gird">
            {inOffice.blocks.map((block) => (
              <li key={block.text}>
                <div
                  className="icon"
                  role="img"
                  dangerouslySetInnerHTML={{ __html: `${block.icon}` }}
                />
                <p>{block.text}</p>
              </li>
            ))}
          </ul>
          <GatsbyImage
            image={getImage(inOffice.image)}
            alt={inOffice.imageAlt}
          />
          <div className="offices">
            <div className="main">
              <h4>{offices.offices.main.title}</h4>
              <div className="address">
                <h5>{offices.offices.main.country}</h5>
                <div>
                  {offices.offices.main.firstLine} <br />
                  {offices.offices.main.secondLine}
                </div>
              </div>
            </div>
            <div className="world">
              <h4>{offices.offices.world.title}</h4>
              <ul className="gird">
                {offices.offices.world.list.map((block) => (
                  <li key={block.country}>
                    <div className="address">
                      <h5>{block.country}</h5>
                      <div>
                        {block.firstLine} <br />
                        {block.secondLine}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a href={inOffice.ctaUrl}>{inOffice.cta}</a>
          </div>
        </SectionContainer>
        <SectionContainer className="weValue" title={weValue.title}>
          <ul className="gird">
            {weValue.blocks.map((block) => (
              <li key={block.country} className="block">
                <h5>{block.title}</h5>
                <p>{block.text}</p>
              </li>
            ))}
          </ul>
        </SectionContainer>
        <SectionContainer
          className="currentOpenings"
          title={currentOpenings.title}
          description={currentOpenings.description}
        >
          <div className="openings">
            <ul className="gird">
              {currentOpenings.openings.map((block) => (
                <li key={block.country} className="block">
                  <h5>{block.title}</h5>
                  <span>
                    {block.location} | {block.time}
                  </span>
                </li>
              ))}
              <li>
                <h5>{currentOpenings.openApplication.title}</h5>
                <p>
                  {currentOpenings.openApplication.description}{" "}
                  <a
                    href={`mailto:${currentOpenings.openApplication.email}?subject=Outfund - Open application`}
                  >
                    {currentOpenings.openApplication.email}
                  </a>
                </p>
              </li>
            </ul>
            <a href={currentOpenings.ctaUrl}>{currentOpenings.cta}</a>
          </div>
        </SectionContainer>
        <Trust data={trust} />
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

        title
        blocks {
          icon
          text
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
    trustJson(language: { regex: "/en-GB/" }) {
      title
      statement
      description
      blocks {
        icon
        text
      }
    }
    officesJson(language: { regex: "/en-GB/" }) {
      offices {
        main {
          country
          firstLine
          secondLine
          title
        }
        world {
          list {
            country
            firstLine
            secondLine
          }
          title
        }
      }
      imageAlt
      image
    }
  }
`
