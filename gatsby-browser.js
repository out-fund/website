import React from "react"
import GlobalStyle from "./src/styles/new/utils/GlobalStyle"
import Cookies from "js-cookie"

import { initSegment, track } from "@shiggydoodah/segment-events"

const regions = [
  "uk",
  "au",
  "us",
  "es",
  "fr",
  "dk",
  "ro",
  "cz",
  "nl",
  "hu",
  "it",
  "pt",
  "de",
  "pl",
  "se",
  "fr-be",
  "nl-be",
  "ie",
]
const pageNames = [
  {
    path: "/",
    name: "Homepage",
  },
  {
    path: "/how-funding-works/",
    name: "How funding works",
  },
  {
    path: "/how-funding-works/",
    name: "How funding works",
  },
  {
    path: "/about-us/",
    name: "About us",
  },
  {
    path: "/success-stories/",
    name: "Success stories",
  },
  {
    path: "/support/faq/",
    name: "FAQ",
  },

  {
    path: "/partners/",
    name: "Partners",
  },
  {
    path: "/careers/",
    name: "Careers",
  },
  {
    path: "/legal/cookie-policy/",
    name: "Cookie policy",
  },
  {
    path: "/legal/privacy-policy/",
    name: "Privacy policy",
  },
  {
    path: "/cc-lead/",
    name: "ClearCo Leads",
  },
]

export const onClientEntry = () => {
  let disabled = false
  const params = new URLSearchParams(window.location.search)
  disabled = Cookies.get("disableAnalytics") ? true : false
  if (params.has("disableAnalytics")) {
    Cookies.set("disableAnalytics", true)
    disabled = true
  }
  if (!disabled) {
    initSegment("SbUYctfcULJBDClnkbSPOkPmfEPwexBU", {
      methods: ["addSourceMiddleware"],
      cookieBanner: true, // WARNING: We're using a cookie banner, so we need this enable it. disabling it will cause the site to break!!!
    })
  }
}

export const onRouteUpdate = () => {
  track.page({
    regions,
    platform: "website",
    pageNames,
    properties: {
      branch: `${process.env.NODE_ENV}`,
    },
  })
  track.clicks('[data-segment="click"]', regions, "website")
  track.textEntered('[data-segment="textInput"]', regions, "website")
  track.optionSelected('[data-segment="option"]', regions, "website")
}

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
