import styled from "styled-components"
// import { breakpoints } from "./breakpoints"
import { theme, breakpoints } from "./"

export const Main = styled.main`
  ${breakpoints.belowDesktop} {
    padding: 0px 16px;
  }
`

export const Wrapper = styled.section`
  /* background-color: #faf; */
  width: 100%;
  margin: 0 auto;
  max-width: ${theme.width.max};

  ${breakpoints.tablet} {
  }
`

export const ContentWrapper = styled.div`
  /* background-color: #ffa; */
  /*max-width: ${theme.width.max};*/
  margin: 0 auto;
  ${breakpoints.tablet} {
  }
`

export const TextWrapper = styled.div`
  /* background-color: #aff; */
  /*margin: 0 auto;*/

  ${breakpoints.tablet} {
  }
`
export const ImageWrapper = styled.div`
  /* background-color: #faa; */
  /*margin: 0 auto;*/
  ${breakpoints.tablet} {
  }
`

// export const H1 = styled.h1`
//   font-weight: bold;
//   font-size: 60px;

//   @media (max-width: 450px) {
//     font-size: 34px;
//   }
// `

// const Wrapper = styled.div`
//   overflow: hidden;
// `

// const ContentWrapper = styled.div`
//   max-width: 1234px;
//   margin: 0 auto;
//   padding: 200px 30px;
//   display: grid;
//   grid-template-columns: 360px auto;

//   @media (max-width: 450px) {
//     grid-template-columns: auto;
//     gap: 60px;
//     padding: 150px 20px 250px;
//   }
// `

// const TextWrapper = styled.div`
//   max-width: 360px;
//   display: grid;
//   gap: 30px;

//   > * {
//     opacity: 0;
//     animation: ${animation} 1s forwards;

//     :nth-child(1) {
//       animation-delay: 0s;
//     }
//     :nth-child(2) {
//       animation-delay: 0.2s;
//     }
//     :nth-child(3) {
//       animation-delay: 0.4s;
//     }
//   }
// `
