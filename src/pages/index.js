import React from "react"
import { graphql } from "gatsby"

import LangLayout from "../layouts/en"
import Hero from "../components/Hero"
import SectionContainer from "../components/SectionContainer"
import SectionReinforcement from "../components/SectionReinforcement"
import Card from "../components/Card"
// import Button from "../components/shared/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = (props) => {
  console.log(props.data)
  const hero = props.data.homepageYaml.hero
  const weFunded = props.data.homepageYaml.weFunded
  const feel = props.data.homepageYaml.weFunded.cards.feel
  const lemonadeDolls = props.data.homepageYaml.weFunded.cards.lemonadeDolls
  const weInvesting = props.data.homepageYaml.weInvesting
  const weInvestingImage = getImage(props.data.homepageYaml.weInvesting.image)
  const aboutUs = props.data.homepageYaml.aboutUs
  const startSupercharging = props.data.homepageYaml.startSupercharging
  const onto = props.data.homepageYaml.startSupercharging.card

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
            className={feel.company}
            variant="wide"
            tag={feel.tag}
            company={feel.company}
            logo={feel.logo}
            title={feel.title}
            cite={feel.cite}
            image={feel.image}
            imageAlt={feel.imageAlt}
            cta={feel.cta}
            ctaUrl={feel.ctaUrl}
            bgColor={feel.bgColor}
          />
          <Card
            className={lemonadeDolls.company.split(" ").join("")}
            variant="squereLogoOnly"
            tag={lemonadeDolls.tag}
            company={lemonadeDolls.company}
            logo={lemonadeDolls.logo}
            title={lemonadeDolls.title}
            image={lemonadeDolls.image}
            imageAlt={lemonadeDolls.imageAlt}
            cta={lemonadeDolls.cta}
            ctaUrl={lemonadeDolls.ctaUrl}
          />
        </SectionContainer>
        <SectionContainer
          className="weInvesting"
          title={weInvesting.title}
          subtitle={weInvesting.subtitle}>
          {/* <Button>Test</Button> */}
          <GatsbyImage image={weInvestingImage} alt={weInvesting.imageAlt} />
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
          title={startSupercharging.title}
          cta={startSupercharging.cta}
          ctaUrl={startSupercharging.ctaUrl}
          titleRight>
          <Card
            variant="squereNoCta"
            className={onto.company}
            tag={onto.tag}
            company={onto.company}
            logo={onto.logo}
            title={onto.title}
            image={onto.image}
            imageAlt={onto.imageAlt}
            cite={onto.cite}
            bgColor={onto.bgColor}
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
        imageAlt
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
            ctaUrl
            cta
            cite
            bgColor
          }
          lemonadeDolls {
            company
            cta
            ctaUrl
            imageAlt
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
            logo
            tag
            title
          }
        }
      }
      weInvesting {
        title
        subtitle
        ctaUrl
        cta
        imageAlt
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
      }
      aboutUs {
        title
        subtitle
        imageAlt
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

        stats {
          stat
          text
        }
      }
      startSupercharging {
        title
        cta
        ctaUrl
        card {
          title
          company
          tag
          cite
          bgColor
        }
      }
    }
  }
`
