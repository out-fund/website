import React from "react"
import PropTypes from "prop-types"

// const Hotjar = () => {
//   return (
//     <>
//       <script
//         dangerouslySetInnerHTML={{
//           __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2676815,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
//         }}
//       />
//     </>
//   )
// }
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

const ZenDesk = () => {}

const LiveChat = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__lc = window.__lc || {}; window.__lc.license = 13340739;;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))`,
        }}
      />
      <noscript>
        <a
          href="https://www.livechatinc.com/chat-with/13340739/"
          rel="nofollow"
        >
          Chat with us
        </a>
        , powered by{" "}
        <a
          href="https://www.livechatinc.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
        >
          LiveChat
        </a>
      </noscript>
    </>
  )
}
// const DecorateUrls = () => {
//   return (
//     <>
//       <script
//         dangerouslySetInnerHTML={{
//           __html: `
//             (function() {
//               var domainsToDecorate = [
//                       'out.fund'
//                   ],
//                   queryParams = [
//                       'utm_medium',
//                       'utm_source',
//                       'utm_campaign',
//                       'utm_content',
//                       'utm_term',
//                       'referring_URL'
//                   ]
//               var links = document.querySelectorAll('a');
//               for (var linkIndex = 0; linkIndex < links.length; linkIndex++) {
//                   for (var domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) {
//                       if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf('#') === -1) {
//                           links[linkIndex].href = decorateUrl(links[linkIndex].href);
//                       }
//                   }
//               }
//               function decorateUrl(urlToDecorate) {
//                   urlToDecorate = (urlToDecorate.indexOf('?') === -1) ? urlToDecorate + '?' : urlToDecorate + '&';
//                   var collectedQueryParams = [];
//                   for (var queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
//                       if (getQueryParam(queryParams[queryIndex])) {
//                           collectedQueryParams.push(queryParams[queryIndex] + '=' + getQueryParam(queryParams[queryIndex]))
//                       }
//                   }
//                   return urlToDecorate + collectedQueryParams.join('&');
//               }
//               function getQueryParam(name) {
//                   if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search))
//                       return decodeURIComponent(name[1]);
//               }
//             })();
//           `,
//         }}
//       />
//     </>
//   )
// }

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
        {/* <Hotjar /> */}
        <GoogleTagManager />
        {props.headComponents}
        {/* Google AdSense from Ian */}
        <script
          data-ad-client="ca-pub-2841085140770528"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
        {/* <DecorateUrls /> */}
        {/* <LiveChat /> */}

        {/* ZenDesk test */}
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=aa39c95d-dc3f-41f3-8526-1a05c2bdffca"
        />
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
