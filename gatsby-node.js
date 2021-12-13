const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPosts = await graphql(`
    query AllPosts {
      allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
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
  const successStories = await graphql(`
    query AllStories {
      allMdx(filter: { fileAbsolutePath: { regex: "/success-stories/" } }) {
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

  if (blogPosts.errors || successStories.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const createBlogPosts = blogPosts.data.allMdx.edges
  const createSuccessStories = successStories.data.allMdx.edges

  createBlogPosts.forEach(({ node }, index) => {
    createPage({
      path: `/blog/${node.slug.split("-").slice(3).join("-")}`,
      component: path.resolve(`./src/layouts/blogPostLayout.js`),
      context: { postId: node.id },
    })
  })
  createSuccessStories.forEach(({ node }, index) => {
    createPage({
      path: `/success-stories/${node.slug}`,
      component: path.resolve(`./src/layouts/successStoryLayout.js`),
      context: { storyId: node.id },
    })
  })
}
