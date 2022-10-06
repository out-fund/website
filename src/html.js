import React from "react"
import PropTypes from "prop-types"

const WebStightsHeader = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function () {
          var zi = document.createElement('script');
          zi.type = 'text/javascript';
          zi.async = true;
          zi.referrerPolicy = 'unsafe-url';
          zi.src = 'https://ws.zoominfo.com/pixel/633d64ff0eb882d67dd1dbbd';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(zi, s);
        })();`,
        }}
      />
    </>
  )
}

const WebStightsFooter = () => {
  return (
    <>
      <noscript>
        <img
          src="https://ws.zoominfo.com/pixel/633d64ff0eb882d67dd1dbbd"
          width="1"
          height="1"
          style="display: none;"
          alt="websights"
        />
      </noscript>
    </>
  )
}

const GoogleTagManager = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MB8JNFW');`,
        }}
      />
    </>
  )
}

const GoogleTagManagerNoScript = () => {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MB8JNFW"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  )
}

const GoogleAdsLatest = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Ads */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-378374946"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-378374946');`,
        }}
      />
    </>
  )
}

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <GoogleAdsLatest />
        <GoogleTagManager />
        {props.headComponents}
        {/* Google AdSense from Ian */}
        <script
          data-ad-client="ca-pub-2841085140770528"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <WebStightsHeader />
      </head>
      <body {...props.bodyAttributes}>
        <GoogleTagManagerNoScript />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <WebStightsFooter />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
