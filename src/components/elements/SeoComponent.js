import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

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
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `https://out.fund${pathname}`,
  }

  let htmlLang = `en-` + langKey.toUpperCase()
  if (langKey === "es") {
    htmlLang = "es-ES"
  }
  if (langKey === "en") {
    htmlLang = "en-GB"
  }

  let hreflangPathname
  if (langKey === "en") {
    hreflangPathname = pathname
  }
  if (langKey !== "en") {
    hreflangPathname = `/` + pathname.split("/").slice(2).join("/")
  }

  const gb = `
    <meta property="og:locale" content="en_GB" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta property="og:locale:alternate" content="en_AU" />
    <meta property="og:locale:alternate" content="es_ES" />
  `
  const us = `
    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="en_GB" />
    <meta property="og:locale:alternate" content="en_AU" />
    <meta property="og:locale:alternate" content="es_ES" />
  `
  const au = `
    <meta property="og:locale" content="en_AU" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta property="og:locale:alternate" content="en_GB" />
    <meta property="og:locale:alternate" content="es_ES" />
  `
  const es = `
    <meta property="og:locale" content="es_ES" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta property="og:locale:alternate" content="en_AU" />
    <meta property="og:locale:alternate" content="en_GB" />
  `

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: `${htmlLang}` }}
    >
      <link rel="canonical" href={seo.url} />

      <link
        rel="alternate"
        hreflang="en-GB"
        href={`${siteUrl}${hreflangPathname}`}
      />
      <link
        rel="alternate"
        hreflang="en-US"
        href={`${siteUrl}/us${hreflangPathname}`}
      />
      <link
        rel="alternate"
        hreflang="en-AU"
        href={`${siteUrl}/au${hreflangPathname}`}
      />
      <link
        rel="alternate"
        hreflang="es-ES"
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
      {langKey === "en" && parse(gb)}
      {langKey === "au" && parse(au)}
      {langKey === "us" && parse(us)}
      {langKey === "es" && parse(es)}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && (
        <meta property="og:title" content={seo.title + " | Outfund"} />
      )}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      <meta property="og:site_name" content="Outfund" />

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
