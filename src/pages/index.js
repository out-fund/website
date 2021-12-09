import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LangLayout from "layouts/en"
import Hero from "components/Hero"
import SectionContainer from "components/SectionContainer"
// import SectionReinforcement from "components/SectionReinforcement"
import Card from "components/Card"
import Stats from "components/Stats"
import Trust from "components/Trust"
import Link from "components/Link"
import ArtImage from "components/ArtImage"
import Calculator from "components/Calculator"

const IndexPage = (props) => {
  console.log(props.data)
  const hero = props.data.homepageJson.hero
  const weFunded = props.data.homepageJson.weFunded
  const feel = props.data.homepageJson.weFunded.cards.feel
  const lemonadeDolls = props.data.homepageJson.weFunded.cards.lemonadeDolls
  const weInvesting = props.data.homepageJson.weInvesting
  const weInvestingImage = getImage(props.data.homepageJson.weInvesting.image)
  const aboutUs = props.data.homepageJson.aboutUs
  const startSupercharging = props.data.homepageJson.startSupercharging
  const onto = props.data.homepageJson.startSupercharging.card
  const findOut = props.data.homepageJson.findOut
  const trust = props.data.trustJson
  const blog = props.data.homepageJson.blog

  return (
    <LangLayout location={props.location}>
      <header>
        <Hero
          variant="homepage"
          title={hero.title}
          description={hero.description}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
          image={hero.image}
          imageAlt={hero.imageAlt}
        />
      </header>

      <main>
        <SectionContainer
          className="weFunded"
          title={weFunded.title}
          description={weFunded.description}
          fullWidth
        >
          <Card
            className={lemonadeDolls.company.split(" ").join("")}
            tagColor="#F6C34E"
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
          <Card
            className={feel.company}
            variant="wide"
            tag={feel.tag}
            tagColor="#F9F1EA"
            company={feel.company}
            logo={feel.logo}
            title={feel.title}
            by={feel.by}
            image={feel.image}
            imageAlt={feel.imageAlt}
            cta={feel.cta}
            ctaUrl={feel.ctaUrl}
            bgColor={feel.bgColor}
            titleColor="#A7825E"
          />
        </SectionContainer>
        <SectionContainer
          className="weInvesting"
          title={weInvesting.title}
          description={weInvesting.description}
          align="left"
          cta={weInvesting.cta}
          ctaUrl={weInvesting.ctaUrl}
          simple
        >
          {/* <Link to={weInvesting.ctaUrl} variant="secondary">
            {weInvesting.cta}
          </Link> */}
          <div className="image">
            <GatsbyImage image={weInvestingImage} alt={weInvesting.imageAlt} />
          </div>
        </SectionContainer>
        <SectionContainer
          className="aboutUs"
          title={aboutUs.title}
          description={aboutUs.description}
        >
          <div className="aboutUsImage">
            <ArtImage
              largeImage={aboutUs.image}
              smallImage={aboutUs.smallImage}
              alt={aboutUs.imageAlt}
            />
          </div>

          <Stats stats={aboutUs.stats} className="" />

          <div className="actions">
            <Link to={aboutUs.primaryCtaUrl} variant="secondary">
              {aboutUs.primaryCta}
            </Link>
            <Link to={aboutUs.secondaryCta} variant="secondary">
              {aboutUs.secondaryCta}
            </Link>
          </div>
        </SectionContainer>
        <SectionContainer
          className="startSupercharging "
          title={startSupercharging.title}
          cta={startSupercharging.cta}
          ctaUrl={startSupercharging.ctaUrl}
          // titleRight
          reinforcement
          fullWidth
        >
          <Card
            variant="onto"
            className={onto.company}
            tag={onto.tag}
            tagColor="#A3C7FF"
            company={onto.company}
            logo={onto.logo}
            title={onto.title}
            image={onto.image}
            imageAlt={onto.imageAlt}
            by={onto.by}
            bgColor={onto.bgColor}
            titleColor="#deeeff"
          />
        </SectionContainer>

        <SectionContainer
          title={findOut.title}
          description={findOut.description}
          className="findOut"
          align="left"
        >
          <ul className="list">
            {findOut.list.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <Calculator data={findOut.calculator} />

          <div className="faq">
            <h3>{findOut.faq.title}</h3>
            <dl>
              {findOut.faq.questions.map((item) => (
                <React.Fragment key={item.question}>
                  <dt>
                    <span>{item.question}</span>
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z"
                        fill="#00A3D7"
                      />
                    </svg>
                  </dt>
                  {/* <dd>{item.answer}</dd> */}
                </React.Fragment>
              ))}
            </dl>
            <div className="action">
              <Link to={findOut.faq.ctaUrl} variant="secondary">
                {findOut.faq.cta}
              </Link>
            </div>
          </div>
        </SectionContainer>
        <Trust data={trust} />
        <section className="latestFromBlog">
          <h3>{blog.title}</h3>
          <a href={blog.ctaUrl}>{startSupercharging.cta}</a>
          <div className="blogArticles">articles</div>
        </section>
      </main>
    </LangLayout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    homepageJson(language: { regex: "/en-GB/" }) {
      aboutUs {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        smallImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
        primaryCta
        primaryCtaUrl
        secondaryCta
        secondaryCtaUrl
        stats {
          stat
          text
        }
        description
        title
      }
      blog {
        cta
        ctaUrl
        title
      }
      findOut {
        calculator {
          cta
          ctaUrl
          max
          min
          select {
            dropdown
            title
          }
          title
        }
        faq {
          cta
          ctaUrl
          questions {
            answer
            question
          }
          title
        }
        list
        description
        title
      }
      hero {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
        primaryCta
        primaryCtaUrl
        secondaryCta
        secondaryCtaUrl
        description
        title
      }
      language
      seoTitle
      startSupercharging {
        card {
          logo
          bgColor
          by
          company
          title
          tag
          imageAlt
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        cta
        ctaUrl
        title
      }
      weFunded {
        description
        title
        cards {
          feel {
            bgColor
            by
            company
            cta
            ctaUrl
            imageAlt
            logo
            tag
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          lemonadeDolls {
            company
            cta
            ctaUrl
            imageAlt
            logo
            tag
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
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
  }
`
