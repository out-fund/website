// import React from "react"
// import { graphql } from "gatsby"

// import {
//   HeroSimple,
//   SectionFeaturedCards,
//   SectionOtherBrands,
//   SectionContainer,
// } from "components"
// import EnLayout from "layouts/en"

// const SuccessStories = ({ data }) => {
//   // const { edges: successStories } = data.allMdx
//   // console.log(data)
//   return (
//     <EnLayout>
//       <main>
//         <HeroSimple data={data.successStoriesJson.hero} />
//         <SectionFeaturedCards data={data.allMdx.edges} />
//         <SectionContainer title="We’ve funded 100s <br/> of brands like yours">
//           <SectionOtherBrands data={data.allMdx.edges} />
//         </SectionContainer>
//       </main>
//     </EnLayout>
//   )
// }

// export default SuccessStories

// export const query = graphql`
//   query successStories {
//     allMdx(
//       filter: {
//         fileAbsolutePath: { regex: "/success-stories/" }
//         frontmatter: { language: { regex: "/en-GB/" } }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             company
//             logo
//             featured
//             card {
//               alt
//               src {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
//           }
//           slug
//         }
//       }
//     }
//     successStoriesJson(language: { regex: "/en-GB/" }) {
//       hero {
//         description
//         title
//       }
//     }
//   }
// `
