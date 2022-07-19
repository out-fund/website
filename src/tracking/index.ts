import segment from "./segment"
import * as trackEvents from "./track"

type PageOptions = {
  slug: string
  name: string
}

type TrackingOptions = {
  languages?: string[]
  pages?: PageOptions[]
}

export default function initSegment(segmentKey: string) {
  if (typeof window === "undefined") {
    return
  }
  segment(segmentKey)
}

// TODO: package library testing
// TODO: Documentation for library

// TODO: Dispatch Custom Event listeners
// TODO: CI/CD Testing

export const track = trackEvents
