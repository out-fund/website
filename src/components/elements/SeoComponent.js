import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

import { useLangProvider } from "./../../utils/LangProvider"

const SeoComponent = ({ title, description, image, article }) => {
  const langKey = useLangProvider()
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    // twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  let htmlLang = `en-` + langKey
  if (langKey === "es") {
    htmlLang = "es-es"
  }
  if (langKey === "en") {
    htmlLang = "en-gb"
  }

  let hreflangPathname
  if (langKey === "en") {
    hreflangPathname = pathname
  }
  if (langKey !== "en") {
    hreflangPathname = `/` + pathname.split("/").slice(2).join("/")
  }

  console.log(hreflangPathname)

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: `${htmlLang}` }}
    >
      <link
        rel="alternate"
        hreflang="en-gb"
        href={`${siteUrl}${hreflangPathname}`}
      />
      <link
        rel="alternate"
        hreflang="en-us"
        href={`${siteUrl}/us${hreflangPathname}`}
      />
      <link
        rel="alternate"
        hreflang="en-au"
        href={`${siteUrl}/au${hreflangPathname}`}
      />
      <link
        rel="alternate"
        hreflang="es-es"
        href={`${siteUrl}/es${hreflangPathname}`}
      />

      <link
        rel="alternate"
        hreflang="x-default"
        href={`${siteUrl}${hreflangPathname}`}
      />

      <meta name="description" content={seo.description} />

      {seo.image && langKey !== "es" && (
        <meta name="image" content={seo.image} />
      )}
      {seo.image && langKey === "es" && (
        <meta name="image" content="https://www.out.fund/Outfund-es.png" />
      )}

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && (
        <meta property="og:title" content={seo.title + " | Outfund"} />
      )}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && langKey !== "es" && (
        <meta property="og:image" content={seo.image} />
      )}
      {seo.image && langKey === "es" && (
        <meta
          property="og:image"
          content="https://www.out.fund/Outfund-es.png"
        />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      {/* {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )} */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && langKey !== "es" && (
        <meta name="twitter:image" content={seo.image} />
      )}
      {seo.image && langKey === "es" && (
        <meta
          name="twitter:image"
          content="https://www.out.fund/Outfund-es.png"
        />
      )}
    </Helmet>
  )
}
export default SeoComponent

SeoComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SeoComponent.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SeoComponent {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
      }
    }
  }
`
