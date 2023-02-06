// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: "Growth Capital for your Online Businesses",
    description: "Growth Capital for your Online Businesses",
    siteUrl: "https://www.out.fund",
    image: "/Outfund.png",
  },
  plugins: [
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: "75",
          breakpoints: [310, 380, 500, 720, 970, 1200, 1390, 1600, 1870],
          backgroundColor: `transparent`,
          blurredOptions: { width: 10 },
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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [
          "**/eligibility/",
          "**/b2b/",
          "**/thank-you/",
          "**/legal/**",
        ],
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              backgroundColor: "none",
              quality: 90,
            },
          },
        ],
      },
    },
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
    // {
    //   resolve: "gatsby-plugin-zendesk-chat",
    //   options: {
    //     zendeskKey: "e13fcb82-d8da-49cd-8eed-c944751d36ee",
    //     enableDuringDevelop: false, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
    //   },
    // },
  ],
}
