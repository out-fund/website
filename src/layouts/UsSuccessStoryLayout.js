import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import LangLayout from "./../layouts/us"
import { CardFounderName, Main, Button, SeoComponent } from "./../components"
import { theme } from "./../styles/new/theme"
import T from "./../styles/new/typography"

const Quote = ({ text, by, role }) => {
  return (
    <QuoteWrapper>
      <figure>
        <q>
          <T.H3>“{text}”</T.H3>
        </q>
        <figcaption>
          <T.Body>
            <b>{by}</b>, {role}
          </T.Body>
        </figcaption>
      </figure>
    </QuoteWrapper>
  )
}

// const PhotoStrip = ({ children }) => {
//   return <div className="photoStrip">{children}</div>
// }
const ChalangeSolution = ({ chalange, solution }) => {
  return (
    <ChalangeSolutionWrapper>
      <section>
        <T.H3 as="h2">{chalange.title}</T.H3>
        <T.Body>{chalange.text}</T.Body>
      </section>
      <section>
        <T.H3 as="h2">{solution.title}</T.H3>
        <T.Body>{solution.text}</T.Body>
      </section>
    </ChalangeSolutionWrapper>
  )
}
const CtaBlock = () => {
  return (
    <CtaBlockWrapper>
      <InnerWrapper>
        <CtaBlockTextWrapper>
          <T.H2>
            Start Supercharging <br />
            Your Growth!
          </T.H2>
          <Button
            // to="/get-funded/"
            href="https://client.out.fund/signup"
            variant="primary"
            size="large"
            id="cta-get-funded-ss-click"
          >
            Get funded
          </Button>
        </CtaBlockTextWrapper>
        <ImageWrapper>
          <StaticImage
            src="./../images/components/ss-cta-block.png"
            alt="Group profile photos"
          />
        </ImageWrapper>
      </InnerWrapper>
    </CtaBlockWrapper>
  )
}

const SuccessStoryLayout = ({ data }) => {
  const { mdx } = data

  // console.log("ss", mdx)
  return (
    <LangLayout>
      <SeoComponent
        title={mdx.frontmatter.seo.title}
        description={mdx.frontmatter.seo.description}
      />
      <MDXProvider
        components={{
          h1: T.H1,
          h2: (props) => <T.H3 as="h2" {...props} />,
          h3: T.H3,
          p: T.Body,
          Quote,

          PhotoStrip,
          ChalangeSolution,
          Text,
          StaticImage,
        }}
      >
        <Main>
          <Article>
            <Heading>{parse(mdx.frontmatter.title)}</Heading>
            <CardFounderName data={mdx.frontmatter.founderCard} />
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </Article>
          <CtaBlock />
        </Main>
      </MDXProvider>
    </LangLayout>
  )
}

export default SuccessStoryLayout

const Heading = styled(T.H1)`
  margin-bottom: 16px;
`

const CtaBlockWrapper = styled.aside`
  margin-top: 80px;
  background-color: ${theme.color.background.emphesized};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
  ${theme.above.l.m} {
    padding: 64px 40px;
  }
`
const InnerWrapper = styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 970px;
  gap: 64px;
  align-items: center;
  ${theme.above.t.m} {
    grid-template-columns: 1fr 230px;
  }
  /* ${theme.above.t.s} {
    grid-template-columns: 1fr 2fr;
  } */
  ${theme.above.l.m} {
    grid-template-columns: 460fr 440fr;
  }
`
const CtaBlockTextWrapper = styled.div`
  text-align: center;
  ${theme.above.t.m} {
    text-align: left;
  }
  h2 {
    margin-bottom: 40px;
  }
`

const ImageWrapper = styled.div``

const Article = styled.article`
  max-width: 970px;
  margin: 0 auto;
  margin-top: 24px;

  h2,
  h3 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 24px;
    line-height: 1.6;
  }
  ${theme.above.t.s} {
    margin-top: 80px;
  }
  ${theme.above.l.m} {
    margin-top: 100px;
  }
  ${theme.above.d.m} {
    margin-top: 120px;
  }
`

const ChalangeSolutionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${theme.above.t.s} {
    grid-template-columns: 1fr 1fr;
  }
  /* h2 {
    margin-bottom: 16px;
  } */
`

const Text = styled.div`
  /* background-color: #faa; */
  max-width: 540px;
  h1 {
    margin-bottom: 16px;
  }
`

const QuoteWrapper = styled.div`
  background-color: ${theme.color.background.emphesized};
  padding: 24px 40px;
  border-radius: 10px;
  margin-top: 64px;
  margin-bottom: 64px;
  q:before,
  q:after {
    content: "";
  }
  p {
    margin: 0;
  }
  q h3 {
    font-weight: 400;
    line-height: 1.4;
  }
  ${theme.above.t.s} {
    padding: 64px 100px;
  }
`

const PhotoStrip = styled.div`
  display: grid;
  grid-template-columns: 324fr 622fr;
  gap: 24px;
  max-width: 970px;
  clear: both;
  margin: 64px 0;
  img {
    border-radius: 10px;
  }
`

export const query = graphql`
  query usSuccessStoryQuery($storyId: String) {
    mdx(id: { eq: $storyId }) {
      id
      body
      frontmatter {
        title
        seo {
          title
          description
        }
        founderCard {
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          text {
            name
            role
          }
        }
      }
    }
  }
`
