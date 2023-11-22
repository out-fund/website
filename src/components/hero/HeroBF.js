import { Button } from "./../../components"
import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import T from "./../../styles/new/typography"
import parse from "html-react-parser"
import styled from "styled-components"
import { theme } from "./../../styles/new/theme"

const HeroBF = () => {
  return (
    <HeroWrapper data-surface-type="Hero" data-surface-title={"Black Friday"}>
      <Title>Black Friday with Outfund</Title>
      <Subtitle>Apply for funding and get a £300 Amazon voucher!*</Subtitle>

      <Description>
        Drive your business forward in Q4 - unlock the capital you need <br />{" "}
        for your business to thrive
      </Description>

      <BtnWrapper>
        <Button
          href="https://client.out.fund/signup"
          variant="primary"
          size="large"
          id="cta-hero-simple-ff-click"
          data-element-category="Signup CTA"
        >
          Apply now
        </Button>
      </BtnWrapper>
      <Note>
        *Offer is valid for applicants who apply between 22 Nov and 30 November
        2023 and take funding before 31 December 2023.
      </Note>
    </HeroWrapper>
  )
}

export default HeroBF

// const ImageWrapper = styled.div``

// const Title = styled(T.H1)`
//   max-width: 1270px;
//   text-align: center;
//   margin: 0 24px;
// `
// const Subtitle = styled(T.H2)`
//   max-width: 970px;
//   text-align: center;
//   margin: 0 24px;
//   font-weight: 600;
// `
// const Description = styled(T.BodyLarge)`
//   max-width: 770px;
//   text-align: center;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #1c3654;
//   margin: 16px 24px 0;
// `

const Title = styled(T.H1)`
  max-width: 1270px;
  text-align: center;
  margin: 0 24px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Subtitle = styled(T.H2)`
  max-width: 970px;
  text-align: center;
  margin: 0 24px;
  font-weight: 600;
  font-size: 32px;
  color: #ffbb13;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Description = styled(T.BodyLarge)`
  max-width: 770px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 16px 24px 0;
  color: #ffffff;
  opacity: 0.8;
`
const Note = styled(T.BodySmaller)`
  margin-top: 16px;
  max-width: 500px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #ffffff;
  opacity: 0.8;
`

const HeroWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.background.emphesized};
  padding: 48px 0 24px;

  background-image: url("/gradientDark.svg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: visible;
  padding: 48px 24px 48px;
  background-position: center top;

  position: relative;

  .note {
    background-color: #fff;
  }

  ${theme.above.p.m} {
    /* margin: 0 16px; */
    padding: 64px 0 48px;
  }

  ${theme.above.t.s} {
    /* margin: 0 20px; */
    padding: 96px 0 56px;
  }
  ${theme.above.l.m} {
    /* margin: 0 24px; */
    padding: 120px 0 96px;
  }

  ${theme.above.d.m} {
    padding: 160px 0 120px;
  }
`

const BtnWrapper = styled.div`
  margin-top: 24px;
  /* 
  ${theme.above.p.m} {
  } */
  ${theme.above.t.s} {
    margin-top: 32px;
  }
  /* ${theme.above.l.m} {
  } */
  ${theme.above.d.m} {
    margin-top: 40px;
  }
`

// import React from "react"
// import styled from "styled-components"
// import { StaticImage } from "gatsby-plugin-image"

// import { Button } from ".."
// import T from "../../styles/new/typography"
// import { theme } from "../../styles/new/theme"

// const HeroBF = () => {
//   // const { title, description, primaryBtn, secondaryBtn } = data
//   return (
//     <HeroWrapper>
//       <Wrapper>
//         <TextWrapper
//           data-surface-type="Hero"
//           data-surface-title={"Black Friday"}
//         >
//           <Title>Black Friday with Outfund</Title>
//           <Subtitle>Apply for funding and get a £300 Amazon voucher!*</Subtitle>
//           <Description>
//             Drive your business forward in Q4 - unlock the capital you need for
//             your business to thrive
//           </Description>
//           <ButtonWrapper>
//             <Button
//               href="https://client.out.fund/signup"
//               variant="primary"
//               size="large"
//               id="cta-get-funded-hero-click"
//               data-element-category="Signup CTA"
//             >
//               Apply now
//             </Button>
//           </ButtonWrapper>
//         </TextWrapper>
//         <ImageWrapper>
//           <LeftImage>
//             <StaticImage
//               src="./../../images/hero-homepage/bf-left.jpg"
//               alt="Person smiling"
//             />
//           </LeftImage>
//           <RightImage>
//             <StaticImage
//               src="./../../images/hero-homepage/bf-right.jpg"
//               alt="Person smiling"
//             />
//           </RightImage>
//         </ImageWrapper>
//       </Wrapper>
//     </HeroWrapper>
//   )
// }

// export default HeroBF

// const Title = styled(T.H1)`
//   /* max-width: 500px; */
//   color: #fff;
// `

// const Subtitle = styled(T.H2)`
//   /* max-width: 970px; */
//   /* text-align: center; */
//   /* margin: 0 24px; */
//   font-weight: 600;
//   font-size: 32px;
//   color: #ffbb13;
// `

// const Description = styled(T.BodyLarge)`
//   color: #ffffff;
//   opacity: 0.8;
// `

// const LeftImage = styled.div`
//   position: relative;
//   width: 56.875%;
//   border-radius: 10px;
//   /* overflow: hidden; */
//   box-shadow: 0px 100px 80px rgba(1, 14, 25, 0.07),
//     0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198),
//     0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275),
//     0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035),
//     0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725),
//     0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802);

//   .gatsby-image-wrapper {
//     position: relative;
//     z-index: 1;
//     overflow: hidden;
//     border-radius: 10px;
//   }
//   ${theme.above.t.s} {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 56.875%;
//   }
// `
// const RightImage = styled.div`
//   border-radius: 10px;
//   overflow: hidden;
//   width: 56.875%;
//   position: relative;
//   position: absolute;
//   top: 0;
//   top: 20px;
//   left: 43%;

//   box-shadow: 0px 100px 80px rgba(1, 14, 25, 0.07),
//     0px 41.7776px 33.1139px rgba(1, 14, 25, 0.0503198),
//     0px 22.3363px 16.2366px rgba(1, 14, 25, 0.0417275),
//     0px 12.5216px 7.80488px rgba(1, 14, 25, 0.035),
//     0px 6.6501px 3.28033px rgba(1, 14, 25, 0.0282725),
//     0px 2.76726px 0.952807px rgba(1, 14, 25, 0.0196802);
//   .gatsby-image-wrapper {
//     position: relative;
//     z-index: 1;
//     overflow: hidden;
//     border-radius: 10px;
//   }
//   ${theme.above.t.s} {
//     position: absolute;
//     top: 112px;
//     top: 20%;
//     left: 276px;
//     left: 43%;
//     width: 56.875%;
//   }
// `
// const ImageWrapper = styled.div`
//   height: 100%;
//   position: relative;
//   top: 0;
//   ${theme.above.t.s} {
//     top: -16px;
//   }
// `

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 40px;
//   align-items: center;
//   max-width: 1170px;
//   margin: 0 auto;
//   /* overflow: hidden; */

//   ${theme.above.t.s} {
//     grid-template-columns: 345px 400px;
//     gap: 32px;
//   }

//   @media (min-width: 880px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   ${theme.above.t.l} {
//     grid-template-columns: 470fr 640fr;
//     gap: 60px;
//   }
// `

// const HeroWrapper = styled.header`
//   background-color: #f2f6fa;
//   background-image: url("/gradientDark.svg");
//   background-repeat: no-repeat;
//   background-size: cover;
//   overflow: visible;
//   padding: 48px 24px 48px;
//   background-position: center top;
//   position: relative;

//   ${theme.above.t.s} {
//     padding: 64px 40px 64px;
//     overflow: hidden;
//   }

//   ${theme.above.t.l} {
//     padding: 80px 40px 96px;
//     overflow: visible;
//   }
//   ${theme.above.l.m} {
//     padding: 80px 40px 96px;
//   }
//   ${theme.above.d.l} {
//     padding: 140px 40px 96px;
//   }
// `

// const TextWrapper = styled.div`
//   ${Description} {
//     margin-top: 16px;
//   }
// `

// const ButtonWrapper = styled.div`
//   margin-top: 40px;
//   display: flex;
//   gap: 16px;
//   flex-direction: column;
//   ${theme.above.t.l} {
//     flex-direction: row;
//     flex-wrap: wrap;
//   }
// `
