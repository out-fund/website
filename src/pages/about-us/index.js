import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import LangLayout from "layouts/en"
import {
  HeroAbout,
  SectionWeAreInvesting,
  CardFounder,
  Stats,
  SectionContainer,
  Button,
} from "components"
import { W, theme } from "styles"

// import Stats from "components/Stats"
// import SectionContainer from "components/SectionContainer"
import Card from "components/Card"
import styled from "styled-components"

const AboutUs = (props) => {
  console.log(props.data)
  const hero = props.data.aboutUsJson.hero

  const weInvesting = props.data.aboutUsJson.weInvesting
  // const weInvestingImage = getImage(props.data.aboutUsJson.weInvesting.image)
  const companies = props.data.aboutUsJson.companies
  const latestNews = props.data.aboutUsJson.latestNews
  const regulated = props.data.aboutUsJson.regulated
  const joinUs = props.data.aboutUsJson.joinUs
  const joinUsImage = getImage(props.data.aboutUsJson.joinUs.image)
  return (
    <LangLayout>
      <HeroAbout
        title={hero.title}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
      <W.Main>
        <Stats stats={hero.stats} />
        <SectionWeAreInvesting
          title={weInvesting.title}
          description={weInvesting.description}
          btn={weInvesting.btn}
          btnUrl={weInvesting.btnUrl}
          image={weInvesting.image}
          imageAlt={weInvesting.imageAlt}
        />
        <SectionContainer title={companies.title}>
          <GridFounders>
            {companies.cards.map((item, index) => (
              <CardFounder
                key={index}
                company={item.company}
                logo={item.logo}
                image={item.image}
                imageAlt={item.imageAlt}
              />
            ))}
          </GridFounders>
          <GridLogos count={companies.logos.length}>
            {companies.logos.map((item, index) => (
              <LogoWrapper key={index}>{parse(item)} </LogoWrapper>
            ))}
          </GridLogos>
          <BtnWrapper>
            <Button btnUrl={companies.btnUrl} variant="secondary">
              {companies.btn}
            </Button>
          </BtnWrapper>
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
              logo={item.logo}
              tag={item.tag}
            />
          ))}
        </SectionContainer>
        <section className="joinUs">
          <h3>{joinUs.title}</h3>
          <p>{joinUs.description}</p>
          <a href={joinUs.btnUrl}>{joinUs.btn}</a>
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
      </W.Main>
    </LangLayout>
  )
}

export default AboutUs

const GridFounders = styled(W.ContentWrapper)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  margin-bottom: 64px;
`
const GridLogos = styled(W.ContentWrapper)`
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  align-items: center;
  /* justify-content: center; */
  column-gap: 40px;
  margin-bottom: 64px;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-width: 200px;
    height: 24px;
    opacity: 0.5;
    path {
      fill: #405e80;
    }
  }
`
const BtnWrapper = styled.div`
  text-align: center;
`

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
      companies {
        title
        btn
        btnUrl
        cards {
          company
          imageAlt
          logo
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        logos
      }
      joinUs {
        imageAlt
        description
        title
        btn
        btnUrl
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
          logo
          company
          tag
          title
        }
      }
    }
  }
`

// <LangLayout>
//   <header>
//     <Hero
//       variant="about"
//       title={hero.title}
//       description={hero.description}
//       image={hero.image}
//       imageAlt={hero.imageAlt}
//     />
//     <Stats stats={hero.stats} />
//   </header>

// </LangLayout>
