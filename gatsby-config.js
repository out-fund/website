require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.out.fund",
    title: "Outfund website",
  },
  plugins: [
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: "90",
          // breakpoints: [380, 500, 720, 970, 1200, 1390, 1600, 1870],
          breakpoints: [970, 1870],
          backgroundColor: `transparent`,
          blurredOptions: { width: 100 },
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // displayName: false,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "posts",
    //     path: `${__dirname}/src/content/blog`,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "successStories",
    //     path: `${__dirname}/src/content/success-stories`,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "translations",
    //     path: `${__dirname}/src/content/page-translations`,
    //   },
    //   __key: "translations",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "faq",
    //     path: `${__dirname}/src/content/faq`,
    //   },
    //  __key: "faqs",
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
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
