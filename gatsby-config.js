module.exports = {
  siteMetadata: {
    siteUrl: "https://www.out.fund",
    title: "Outfund website",
  },
  plugins: [
    "gatsby-plugin-root-import",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: "90",
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          outputPixelDensities: [0.125, 0.25, 0.5, 1],
          blurredOptions: { width: 100 },
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "translations",
        path: "./src/translations/",
      },
      __key: "translations",
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: true,
        prefixDefault: false,
        langKeyForNull: "en",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
  ],
}
