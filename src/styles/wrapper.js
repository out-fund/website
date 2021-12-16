import styled from "styled-components"
import { theme, breakpoints } from "./"

export const ContainerFull = styled.div`
  width: ${theme.width2.full};
  max-width: ${theme.maxWidth.full};
`
// -----------------------------------------
export const ContainerMax = styled.div`
  width: ${theme.width2.max};
  max-width: ${theme.maxWidth.max};
  margin: 0 auto;
`
// -----------------------------------------
export const ContainerXxl = styled.div`
  width: ${theme.width2.xxl};
  max-width: ${theme.maxWidth.xxl};
  margin: 0 auto;
`
// -----------------------------------------
export const ContainerXl = styled.div`
  width: ${theme.width2.xl};
  max-width: ${theme.maxWidth.xl};
  margin: 0 auto;
`
// -----------------------------------------
export const ContainerL = styled.div`
  /* width: ${theme.width2.l};
  max-width: ${theme.maxWidth.l};
  margin: 0 auto; */
  padding: 0 16px;
  margin: 0 auto;
  width: ${theme.width2.full};
  max-width: ${theme.maxWidth.full};

  /* ${theme.above.tablet} {
    width: ${theme.width2.max};
    max-width: ${theme.maxWidth.m};
    padding: 0;
  } */
  /* ${theme.above.laptop} {
    width: ${theme.width2.max};
    max-width: ${theme.maxWidth.max};
  } */
  ${theme.above.mediumLaptop} {
    width: ${theme.width2.max};
    max-width: ${theme.maxWidth.max};
  }
  ${theme.above.desktop} {
    width: ${theme.width2.xxl};
    max-width: ${theme.maxWidth.xxl};
  }
  ${theme.above.mediumDesktop} {
    width: ${theme.width2.xl};
    max-width: ${theme.maxWidth.xl};
  }
  ${theme.above.largeDesktop} {
    width: ${theme.width2.l};
    max-width: ${theme.maxWidth.l};
  }
`
// -----------------------------------------
export const ContainerM = styled.div`
  padding: 0 16px;
  margin: 0 auto;
  width: ${theme.width2.full};
  max-width: ${theme.maxWidth.full};

  /* ${theme.above.tablet} {
    width: ${theme.width2.max};
    max-width: ${theme.maxWidth.m};
    padding: 0;
  } */
  ${theme.above.laptop} {
    width: ${theme.width2.max};
    max-width: ${theme.maxWidth.max};
  }
  ${theme.above.mediumLaptop} {
    width: ${theme.width2.xxl};
    max-width: ${theme.maxWidth.xxl};
  }
  ${theme.above.desktop} {
    width: ${theme.width2.xl};
    max-width: ${theme.maxWidth.xl};
  }
  ${theme.above.mediumDesktop} {
    width: ${theme.width2.l};
    max-width: ${theme.maxWidth.l};
  }
  ${theme.above.largeDesktop} {
    width: ${theme.width2.m};
    max-width: ${theme.maxWidth.m};
  }
`
// -----------------------------------------
export const ContainerS = styled.div`
  padding: 0 16px;
  margin: 0 auto;
  width: ${theme.width2.full};
  max-width: ${theme.maxWidth.full};

  ${theme.above.tablet} {
    width: ${theme.width2.max};
    max-width: ${theme.maxWidth.max};
    padding: 0;
  }
  ${theme.above.laptop} {
    width: ${theme.width2.xxl};
    max-width: ${theme.maxWidth.xxl};
  }
  ${theme.above.mediumLaptop} {
    width: ${theme.width2.xl};
    max-width: ${theme.maxWidth.xl};
  }
  ${theme.above.desktop} {
    width: ${theme.width2.l};
    max-width: ${theme.maxWidth.l};
  }
  ${theme.above.mediumDesktop} {
    width: ${theme.width2.m};
    max-width: ${theme.maxWidth.m};
  }
  ${theme.above.largeDesktop} {
    width: ${theme.width2.s};
    max-width: ${theme.maxWidth.s};
  }
`
// -----------------------------------------
export const ContainerXs = styled.div`
  margin: 0 auto;
  width: ${theme.width2.max};
  max-width: ${theme.maxWidth.max};

  ${theme.above.tablet} {
    width: ${theme.width2.xxl};
    max-width: ${theme.maxWidth.xxl};
  }
  ${theme.above.laptop} {
    width: ${theme.width2.xl};
    max-width: ${theme.maxWidth.xl};
  }
  ${theme.above.mediumLaptop} {
    width: ${theme.width2.l};
    max-width: ${theme.maxWidth.l};
  }
  ${theme.above.desktop} {
    width: ${theme.width2.m};
    max-width: ${theme.maxWidth.m};
  }
  ${theme.above.mediumDesktop} {
    width: ${theme.width2.s};
    max-width: ${theme.maxWidth.s};
  }
  ${theme.above.largeDesktop} {
    width: ${theme.width2.xs};
    max-width: ${theme.maxWidth.xs};
  }
`
// ---------------------------------------------

export const Main = styled.main`
  ${breakpoints.belowDesktop} {
    padding: 0px 16px;
  }
`

export const Wrapper = styled.div`
  /* background-color: #faf; */
  width: 100%;
  margin: 0 auto;
  max-width: ${theme.width.max};

  ${breakpoints.tablet} {
  }
`

export const ContentWrapper = styled.div`
  /* background-color: #ffa; */
  /* max-width: ${theme.width.content2.laptop}; */
  margin: 0 auto;

  ${theme.above.tablet} {
    max-width: ${theme.tablet};
  }
  /* ${theme.above.laptop} {
    max-width: ${theme.laptop};
  }
  ${theme.above.mediumLaptop} {
    max-width: ${theme.mediumLaptop};
  }
  ${theme.above.desktop} {
    max-width: ${theme.desktop};
  }
  ${theme.above.mediumDesktop} {
    max-width: ${theme.mediumDesktop};
  }
  ${theme.above.largeDesktop} {
    max-width: ${theme.largeDesktop};
  } */
`

export const MediumWrapper = styled.div`
  margin: 0 auto;

  ${theme.above.tablet} {
    width: 72vw;
    max-width: 1370px;
  }
`

export const FullWidth = styled.div`
  margin: 0 auto;

  ${theme.above.tablet} {
    max-width: 100%;
  }
`

export const Small = styled.div`
  margin: 0 auto;

  ${theme.above.tablet} {
    width: 61vw;
    max-width: 1170px;
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
