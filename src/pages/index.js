import React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import EnLayout from "layouts/en"
// import {
//   HeroHomepage,
//   SectionRegulated,
//   Button,
//   SectionFindOut,
// } from "components"

import HeroHomepage from "./../components/hero/HeroHomepage"
import {
  Main,
  SectionWeFunded,
  SectionWeAreInvesting,
  SectionSupercharging,
  SectionFindOut,
  SectionFaq,
  SectionAboutUs,
} from "./../components"

// import SectionContainer from "components/SectionContainer"
// import Card from "components/Card"
// import Stats from "components/Stats"

// import ArtImage from "components/ArtImage"

const IndexPage = (props) => {
  // console.log("indexpage:", props)
  const {
    data: { homepageJson: data },
  } = props
  // console.log("hj", data.aboutUs)
  // console.log(props.data.homepageJson.weFunded)
  // console.log(props.location)
  // const hero = props.data.homepageJson.hero

  // const weFunded = props.data.homepageJson.weFunded
  // const feel = props.data.homepageJson.weFunded.cards.feel
  // const lemonadeDolls = props.data.homepageJson.weFunded.cards.lemonadeDolls
  // const weInvesting = props.data.homepageJson.weInvesting
  // const weInvestingImage = getImage(props.data.homepageJson.weInvesting.image)
  // const aboutUs = props.data.homepageJson.aboutUs
  // const startSupercharging = props.data.homepageJson.startSupercharging
  // const onto = props.data.homepageJson.startSupercharging.card
  // const findOut = props.data.homepageJson.findOut

  // const blog = props.data.homepageJson.blog

  return (
    <EnLayout>
      <HeroHomepage data={data.hero} />
      <Main>
        <SectionWeFunded data={data.weFunded} />
        <SectionWeAreInvesting data={data.weInvesting} />
        <SectionSupercharging data={data.startSupercharging} />
        <SectionFindOut data={props.data.homepageJson.findOut} />
        <SectionFaq data={props.data.homepageJson.faq} />
        <SectionAboutUs data={props.data.homepageJson.aboutUs} />
      </Main>
    </EnLayout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    homepageJson(language: { regex: "/en-GB/" }) {
      aboutUs {
        buttons {
          primary {
            text
            url
          }
          secondary {
            text
            url
          }
        }
        stats {
          stat
          text
        }
        description
        title
        teamImages {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
        }
      }
      blog {
        btn
        btnUrl
        title
      }
      findOut {
        calculator {
          btn {
            text
            url
          }
          max
          min
          select {
            dropdown
            title
          }
          title
        }
        list
        description
        title
      }
      faq {
        btn {
          text
          url
        }
        questions {
          answer
          question
        }
        title
      }
      hero {
        image {
          alt
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
        }

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
          by
          company
          title
          tag
          image {
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
        btn {
          text
          url
        }
        title
      }
      weFunded {
        description
        title
        cards {
          feel {
            by
            company
            btn {
              text
              url
            }
            logo
            tag
            title
            image {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
          lemonadeDolls {
            company
            btn {
              text
              url
            }
            logo
            tag
            image {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
        }
      }
      weInvesting {
        btn {
          text
          url
        }
        image {
          src {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
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
// <main>
//   <SectionContainer
//     className="weFunded"
//     title={weFunded.title}
//     description={weFunded.description}
//     fullWidth
//   >
//     <Card
//       className={lemonadeDolls.company.split(" ").join("")}
//       tagColor="#F6C34E"
//       variant="squereLogoOnly"
//       tag={lemonadeDolls.tag}
//       company={lemonadeDolls.company}
//       logo={lemonadeDolls.logo}
//       title={lemonadeDolls.title}
//       image={lemonadeDolls.image}
//       imageAlt={lemonadeDolls.imageAlt}
//       btn={lemonadeDolls.btn}
//       btnUrl={lemonadeDolls.btnUrl}
//     />
//     <Card
//       className={feel.company}
//       variant="wide"
//       tag={feel.tag}
//       tagColor="#F9F1EA"
//       company={feel.company}
//       logo={feel.logo}
//       title={feel.title}
//       by={feel.by}
//       image={feel.image}
//       imageAlt={feel.imageAlt}
//       btn={feel.btn}
//       btnUrl={feel.btnUrl}
//       bgColor={feel.bgColor}
//       titleColor="#A7825E"
//     />
//   </SectionContainer>
//   <SectionContainer
//     className="weInvesting"
//     title={weInvesting.title}
//     description={weInvesting.description}
//     align="left"
//     btn={weInvesting.btn}
//     btnUrl={weInvesting.btnUrl}
//     simple
//   >
//     <div className="image">
//       <GatsbyImage image={weInvestingImage} alt={weInvesting.imageAlt} />
//     </div>
//   </SectionContainer>
//   <SectionContainer
//     className="aboutUs"
//     title={aboutUs.title}
//     description={aboutUs.description}
//   >
// <div className="aboutUsImage">
//   <ArtImage
//     largeImage={aboutUs.image}
//     smallImage={aboutUs.smallImage}
//     alt={aboutUs.imageAlt}
//   />
// </div>

// <Stats data={aboutUs.stats} />

// <div className="actions">
//   <Button btnUrl={aboutUs.primaryBtnUrl} variant="secondary">
//     {aboutUs.primaryBtn}
//   </Button>
//   <Button btnUrl={aboutUs.secondaryBtn} variant="secondary">
//     {aboutUs.secondaryBtn}
//   </Button>
// </div>
//   </SectionContainer>
//   <SectionContainer
//     className="startSupercharging "
//     title={startSupercharging.title}
//     btn={startSupercharging.btn}
//     btnUrl={startSupercharging.btnUrl}
//     // titleRight
//     reinforcement
//     fullWidth
//   >
//     <Card
//       variant="onto"
//       className={onto.company}
//       tag={onto.tag}
//       tagColor="#A3C7FF"
//       company={onto.company}
//       logo={onto.logo}
//       title={onto.title}
//       image={onto.image}
//       imageAlt={onto.imageAlt}
//       by={onto.by}
//       bgColor={onto.bgColor}
//       titleColor="#deeeff"
//     />
//   </SectionContainer>

//   <SectionFindOut data={props.data.homepageJson.findOut} />

//   <SectionRegulated data={props.data.trustJson} />

// </main>
// <section className="latestFromBlog">
//     <h3>{blog.title}</h3>
//     <a href={blog.btnUrl}>{startSupercharging.btn}</a>
//     <div className="blogArticles">articles</div>
//   </section>
