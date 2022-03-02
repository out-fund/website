import React from "react"
import { graphql } from "gatsby"

import LangLayout from "./../layouts/au"

import {
  Main,
  SectionWeFunded,
  SectionWeAreInvesting,
  SectionSupercharging,
  SectionFindOut,
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
        <SectionFindOut data={props.data.homepageJson.findOut} />
        <SectionFaq data={props.data.homepageJson.faq} />
        <SectionAboutUs data={props.data.homepageJson.aboutUs} />
        <SectionRegulated data={props.data.trustJson} />
      </Main>
    </LangLayout>
  )
}
export default HomePage

export const query = graphql`
  query auHomePage {
    homepageJson(language: { regex: "/en-AU/" }) {
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
      findOut {
        calculator {
          btn {
            text
            url
          }
          range
          select {
            default
            dropdown
            title
          }
          title
        }

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
    trustJson(language: { regex: "/en-AU/" }) {
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
