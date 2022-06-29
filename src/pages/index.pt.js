import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../layouts/pt"

import {
  Main,
  SectionWeFunded,
  SectionWeAreInvesting,
  SectionSupercharging,
  SectionFaq,
  SectionAboutUs,
  SectionRegulated,
  HeroHomepage,
  SeoComponent,
} from "./../components"

const HomePage = (props) => {
  const {
    data: { homepageJson: data },
  } = props

  return (
    <LangLayout>
      <SeoComponent title={data.seo.title} description={data.seo.description} />
      <HeroHomepage data={data.hero} />
      <Main>
        <SectionWeFunded data={data.weFunded} />
        <SectionWeAreInvesting data={data.weInvesting} />
        <SectionSupercharging data={data.startSupercharging} />
        <SectionFaq data={props.data.homepageJson.faq} />
        <SectionAboutUs data={props.data.homepageJson.aboutUs} />
        <SectionRegulated data={props.data.trustJson} />
      </Main>
    </LangLayout>
  )
}
export default HomePage

export const query = graphql`
  query ptHomePage {
    homepageJson(language: { regex: "/pt-PT/" }) {
      seo {
        title
        description
      }
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
        primaryBtn {
          text
          url
        }
        secondaryBtn {
          text
          url
        }
        description
        title
      }
      language
      startSupercharging {
        card {
          logo
          quote {
            by
            title
          }
          company
          tag {
            text
            color
          }
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
            company
            btn {
              text
              url
            }
            logo
            tag {
              text
              color
            }
            quote {
              by
              title
            }
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
            tag {
              text
              color
            }
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
    trustJson(language: { regex: "/pt-PT/" }) {
      title
      description
      blocks {
        icon
        title
        text
      }
    }
  }
`
