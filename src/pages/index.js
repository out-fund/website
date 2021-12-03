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
  const aboutUsImage = getImage(props.data.homepageYaml.aboutUs.image)
  const startSupercharging = props.data.homepageYaml.startSupercharging
  const onto = props.data.homepageYaml.startSupercharging.card
  const findOut = props.data.homepageYaml.findOut
  const regulated = props.data.homepageYaml.regulated
  const blog = props.data.homepageYaml.blog

  return (
    <LangLayout location={props.location}>
      <Hero
        title={hero.title}
        subTitle={hero.subTitle}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <main>
        <SectionContainer
          className="weFunded"
          title={weFunded.title}
          subTitle={weFunded.subTitle}
        >
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
          subTitle={weInvesting.subTitle}
        >
          <GatsbyImage image={weInvestingImage} alt={weInvesting.imageAlt} />
        </SectionContainer>
        <SectionContainer
          className="aboutUs"
          title={aboutUs.title}
          subTitle={aboutUs.subTitle}
        >
          <GatsbyImage image={aboutUsImage} alt={aboutUs.imageAlt} />
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
          className="startSupercharging "
          title={startSupercharging.title}
          cta={startSupercharging.cta}
          ctaUrl={startSupercharging.ctaUrl}
          titleRight
        >
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
        <section className="findOut">
          <h4>{findOut.title}</h4>
          <div>{findOut.subTitle}</div>
          <ul className="list">
            {findOut.list.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="calculator">
            <div>{findOut.calculator.title}</div>
            <div>{findOut.calculator.min}</div>
            <div>{findOut.calculator.max}</div>
            <div className="select">
              <label htmlFor="reasons">{findOut.calculator.select.title}</label>

              <select name="reasons" id="reasons">
                {findOut.calculator.select.dropdown.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="faq">
            {findOut.faq.title}
            <dl>
              {findOut.faq.questions.map((item) => (
                <React.Fragment key={item.question}>
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
          <a href={findOut.faq.ctaUrl}>{findOut.faq.cta}</a>
        </section>
        <section className="regulated">
          <h3>{regulated.title}</h3>
          <p>{regulated.subTitle}</p>
          <ul className="gird">
            {regulated.blocks.map((item) => (
              <li key={item.text}>
                <div className="icon">{item.icon}</div>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
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
    homepageYaml(language: { regex: "/en-GB/" }) {
      id
      aboutUs {
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
        stats {
          stat
          text
        }
        subTitle
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
            tile
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
        subTitle
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
        subTitle
        title
      }
      language
      regulated {
        blocks {
          icon
          text
        }
        statement
        subTitle
        title
      }
      seoTitle
      startSupercharging {
        card {
          bgColor
          cite
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
        subTitle
        title
        cards {
          feel {
            bgColor
            cite
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
        subTitle
        title
      }
    }
  }
`
