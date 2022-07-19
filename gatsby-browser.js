import React from "react"
import GlobalStyle from "./src/styles/new/utils/GlobalStyle"

import initSegment, { track } from "./src/tracking"

const segmentKey = 'ul7L1o41aACzA6S0N8tVwOv6QU5AjDu3'
const regions = ['uk', 'au', 'en', 'au', 'us']

export const onClientEntry = () => {
  initSegment(segmentKey)
}

export const onRouteUpdate = () => {
  track.page(regions, 'website');
  track.clicks('[data-segment="click"]', regions, 'website');
  track.textEntered('[data-segment="textInput"]', regions, 'website')
  track.optionSelected('[data-segment="option"]', regions, 'website')
}

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
