// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: "Growth Capital for your Online Businesses",
    titleTemplate: "%s | Outfund",
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
          quality: "90",
          breakpoints: [380, 500, 720, 970, 1200, 1390, 1600, 1870],
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
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: "dDBm5JEJmHQMqab1sFnGKarzXjcnw3Ra",

        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        devKey: "vbgfxlp9m23Z1yGNmuO9w5FyM0mcSont",

        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: true,

        // number (defaults to 50); time to wait after a route update before it should
        // track the page change, to implement this, make sure your `trackPage` property is set to `true`
        trackPageDelay: 50,

        // If you need to proxy events through a custom endpoint,
        // add a `host` property (defaults to https://cdn.segment.io)
        // Segment docs:
        //   - https://segment.com/docs/connections/sources/custom-domains
        //   - https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#proxy
        // host: "https://override-segment-endpoint",

        // boolean (defaults to false); whether to delay load Segment
        // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
        // This feature will force Segment to load _after_ either a page routing change
        // or user scroll, whichever comes first. This delay time is controlled by
        // `delayLoadTime` setting. This feature is used to help improve your website's
        // TTI (for SEO, UX, etc).  See links below for more info.
        // NOTE: But if you are using server-side routing and enable this feature,
        // Segment will never load (because although client-side routing does not do
        // a full page refresh, server-side routing does, thereby preventing Segment
        // from ever loading).
        // See here for more context:
        // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
        // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        // Problem/solution: https://marketingexamples.com/seo/performance
        delayLoad: true,

        // number (default to 1000); time to wait after scroll or route change
        // To be used when `delayLoad` is set to `true`
        delayLoadTime: 1000,

        // Whether to completely skip calling `analytics.load({writeKey})`.
        // ADVANCED FEATURE: only use if you are calling `analytics.load({writeKey})` manually
        // elsewhere in your code or are using a library
        // like: https://github.com/segmentio/consent-manager that will call it for you.
        // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
        manualLoad: false,

        // This package will use a default version of Segment's code snippet, but
        // if you'd like to include your own you can do so here. This is useful if
        // the version this package uses is different than the one you'd like to
        // use...or you need to do something custom.
        // While you should NOT use a back-ticked template string here, the string
        // will be evaluated as template literal with the following variables
        // available to it:
        //    - `writeKey`: The appropriate value from the `prodKey` and `devKey`
        //      options, based on the `NODE_ENV`
        //    - any of the other options passed here
        //
        // NOTES:
        // - If you provide a custom snippet, an immediate call to
        //   `analytics.load()` and/or `analytics.page()` will not be added by
        //   this plugin. You can - of course - add them yourself to your snippet.
        // - If your custom snippet does not include a call to `analytics.load()`
        //   then you must either:
        //   1. Manually load it and set the `manualLoad` option here to `true`
        //   2. Use the `delayLoad` option here
        // customSnippet:
        // '!function(){var analytics=window.analytics||[];...;analytics.load("${writeKey}");analytics.page();}}();',
        // customSnippet:
        //   '!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="dDBm5JEJmHQMqab1sFnGKarzXjcnw3Ra";;analytics.SNIPPET_VERSION="4.15.3";analytics.load("${writeKey}");analytics.page();}}();',
      },
    },
  ],
}
