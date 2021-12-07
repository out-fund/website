exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type homepageJson implements Node {
      logo: Node
    }
    type aboutUsJson implements Node {
      logo: Node
    }
  `
  createTypes(typeDefs)
}
