import React from "react"
import GlobalStyle from "./src/styles/new/utils/GlobalStyle"

import initSegment, { track } from "./src/tracking"

const segmentKey = 'SbUYctfcULJBDClnkbSPOkPmfEPwexBU'
const regions = ['uk', 'au', 'us', 'es', 'fr', 'dk', 'ro', 'cz', 'nl', 'hu', 'it', 'pt', 'de', 'pl', 'se', 'fr-be', 'nl-be']

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
