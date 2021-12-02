import React from "react"
import { graphql } from "gatsby"

import LangLayout from "../layouts/en"
import Hero from "../components/Hero"
import SectionContainer from "../components/SectionContainer"
import SectionReinforcement from "../components/SectionReinforcement"
import Card from "../components/Card"

const IndexPage = (props) => {
  console.log(props.data)
  const hero = props.data.homepageYaml.hero
  const weFunded = props.data.homepageYaml.weFunded
  const feel = props.data.homepageYaml.weFunded.cards.feel
  const lemonadeDolls = props.data.homepageYaml.weFunded.cards.lemonadeDolls
  const aboutUs = props.data.homepageYaml.aboutUs

  return (
    <LangLayout location={props.location}>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <main>
        <SectionContainer
          className="weFunded"
          title={weFunded.title}
          subtitle={weFunded.subtitle}>
          <Card
            className="feel"
            variant="wide"
            tag={feel.tag}
            company={feel.company}
            logo={feel.logo}
            title={feel.title}
            cite={feel.cite}
            image={feel.image}
            imageAlt={feel.imageAlt}
            btn={feel.cta}
            bgColor={feel.bgColor}
          />
          <Card
            className="lemonadeDolls"
            variant="squereLogoOnly"
            tag={lemonadeDolls.tag}
            company={lemonadeDolls.company}
            logo={lemonadeDolls.logo}
            title={lemonadeDolls.title}
            image={lemonadeDolls.image}
            imageAlt={lemonadeDolls.imageAlt}
            btn={lemonadeDolls.cta}
            bgColor={lemonadeDolls.bgColor}
          />
        </SectionContainer>
        <SectionContainer
          className="aboutUs"
          title={aboutUs.title}
          subtitle={aboutUs.subtitle}>
          <ul className="statStrip">
            {aboutUs.stats.map((item) => (
              <li key={item.stat}>
                <h4>{item.stat}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </SectionContainer>
        <SectionReinforcement
          title="Title"
          cta="cta"
          ctaUrl="ctaUrl"
          titleRight>
          <Card
            className="lemonadeDolls"
            variant="squereLogoOnly"
            tag={lemonadeDolls.tag}
            company={lemonadeDolls.company}
            logo={lemonadeDolls.logo}
            title={lemonadeDolls.title}
            image={lemonadeDolls.image}
            imageAlt={lemonadeDolls.imageAlt}
            btn={lemonadeDolls.cta}
            bgColor={lemonadeDolls.bgColor}
          />
        </SectionReinforcement>
      </main>
    </LangLayout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    homepageYaml(language: { eq: "en-GB" }) {
      language
      seoTitle
      hero {
        title
        subtitle
        primaryCta
        primaryCtaUrl
        secondaryCta
        secondaryCtaUrl
        image {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              layout: CONSTRAINED
              placeholder: BLURRED
              backgroundColor: "#fff"
              quality: 90
              outputPixelDensities: [0.25, 0.5, 1, 2]
            )
          }
        }
        imageAlt
      }
      weFunded {
        title
        subtitle
        cards {
          feel {
            tag
            company
            logo
            title
            imageAlt
            image
            ctaUrl
            cta
            cite
            bgColor
          }
          lemonadeDolls {
            company
            cta
            ctaUrl
            image
            imageAlt
            logo
            tag
            title
          }
        }
      }
      aboutUs {
        title
        subtitle
        image
        imageAlt
        stats {
          stat
          text
        }
      }
    }
  }
`
