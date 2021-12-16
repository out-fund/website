import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import EnLayout from "layouts/en"
import { HeroHomepage, SectionRegulated } from "components"

import SectionContainer from "components/SectionContainer"
import Card from "components/Card"
import Stats from "components/Stats"
import Link from "components/Link"
import ArtImage from "components/ArtImage"
import Calculator from "components/Calculator"

const IndexPage = (props) => {
  // console.log("indexpage:", props)
  // console.log(props.data)
  // console.log(props.location)
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

  const blog = props.data.homepageJson.blog

  return (
    <EnLayout>
      <HeroHomepage
        title={hero.title}
        description={hero.description}
        primaryBtn={hero.primaryBtn}
        primaryBtnUrl={hero.primaryBtnUrl}
        secondaryBtn={hero.secondaryBtn}
        secondaryBtnUrl={hero.secondaryBtnUrl}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
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
            btn={lemonadeDolls.btn}
            btnUrl={lemonadeDolls.btnUrl}
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
            btn={feel.btn}
            btnUrl={feel.btnUrl}
            bgColor={feel.bgColor}
            titleColor="#A7825E"
          />
        </SectionContainer>
        <SectionContainer
          className="weInvesting"
          title={weInvesting.title}
          description={weInvesting.description}
          align="left"
          btn={weInvesting.btn}
          btnUrl={weInvesting.btnUrl}
          simple
        >
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

          <Stats data={aboutUs.stats} />

          <div className="actions">
            <Link to={aboutUs.primaryBtnUrl} variant="secondary">
              {aboutUs.primaryBtn}
            </Link>
            <Link to={aboutUs.secondaryBtn} variant="secondary">
              {aboutUs.secondaryBtn}
            </Link>
          </div>
        </SectionContainer>
        <SectionContainer
          className="startSupercharging "
          title={startSupercharging.title}
          btn={startSupercharging.btn}
          btnUrl={startSupercharging.btnUrl}
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
                  <dd>{item.answer}</dd>
                </React.Fragment>
              ))}
            </dl>
            <div className="action">
              <Link to={findOut.faq.btnUrl} variant="secondary">
                {findOut.faq.btn}
              </Link>
            </div>
          </div>
        </SectionContainer>
        <SectionRegulated data={props.data.trustJson} />
        <section className="latestFromBlog">
          <h3>{blog.title}</h3>
          <a href={blog.btnUrl}>{startSupercharging.btn}</a>
          <div className="blogArticles">articles</div>
        </section>
      </main>
    </EnLayout>
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
        primaryBtn
        primaryBtnUrl
        secondaryBtn
        secondaryBtnUrl
        stats {
          stat
          text
        }
        description
        title
      }
      blog {
        btn
        btnUrl
        title
      }
      findOut {
        calculator {
          btn
          btnUrl
          max
          min
          select {
            dropdown
            title
          }
          title
        }
        faq {
          btn
          btnUrl
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
        primaryBtn
        primaryBtnUrl
        secondaryBtn
        secondaryBtnUrl
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
        btn
        btnUrl
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
            btn
            btnUrl
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
            btn
            btnUrl
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
