const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPosts = await graphql(`
    query AllPosts {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        edges {
          node {
            id
            slug
            fileAbsolutePath
          }
        }
      }
    }
  `)

  const enSuccessStories = await graphql(`
    query enAllStories {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/success-stories/" }
          frontmatter: {
            published: { eq: true }
            language: { regex: "/en-GB/" }
          }
        }
      ) {
        edges {
          node {
            id
            slug
            fileAbsolutePath
          }
        }
      }
    }
  `)

  const esSuccessStories = await graphql(`
    query esAllStories {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/success-stories/" }
          frontmatter: {
            published: { eq: true }
            language: { regex: "/es-ES/" }
          }
        }
      ) {
        edges {
          node {
            id
            slug
            fileAbsolutePath
          }
        }
      }
    }
  `)

  if (blogPosts.errors || enSuccessStories.errors || esSuccessStories.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const createBlogPosts = blogPosts.data.allMdx.edges

  const enCreateSuccessStories = enSuccessStories.data.allMdx.edges
  const esCreateSuccessStories = esSuccessStories.data.allMdx.edges

  createBlogPosts.forEach(({ node }, index) => {
    createPage({
      path: `/blog/${node.slug.split("-").slice(3).join("-")}`,
      component: path.resolve(`./src/layouts/blogPostLayout.js`),
      context: { postId: node.id },
    })
  })

  // GB
  enCreateSuccessStories.forEach(({ node }, index) => {
    createPage({
      path: `/success-stories/${node.slug.split("/").slice(2).join("-")}`,
      component: path.resolve(`./src/layouts/GbSuccessStoryLayout.js`),
      context: { storyId: node.id },
    })
  })

  // US
  enCreateSuccessStories.forEach(({ node }, index) => {
    createPage({
      path: `/us/success-stories/${node.slug.split("/").slice(2).join("-")}`,
      component: path.resolve(`./src/layouts/UsSuccessStoryLayout.js`),
      context: { storyId: node.id },
    })
  })

  // AU
  enCreateSuccessStories.forEach(({ node }, index) => {
    createPage({
      path: `/au/success-stories/${node.slug.split("/").slice(2).join("-")}`,
      component: path.resolve(`./src/layouts/AuSuccessStoryLayout.js`),
      context: { storyId: node.id },
    })
  })

  // ES
  esCreateSuccessStories.forEach(({ node }, index) => {
    createPage({
      path: `/es/success-stories/${node.slug.split("/").slice(2).join("-")}`,
      component: path.resolve(`./src/layouts/EsSuccessStoryLayout.js`),
      context: { storyId: node.id },
    })
  })
}
