import Cookies from "universal-cookie"

type AnalyticsParams = Record<string, string | null>

type PageNames = {
  name: string
  path: string
}

function setCookie(name: string, value: AnalyticsParams) {
  const cookie = new Cookies()
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  cookie.set(name, JSON.stringify(value), { path: "/", expires: expires })
}

function getUTM() {
  const defaultUtms: AnalyticsParams = {
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_content: null,
    utm_term: null,
    gclid: null,
  }
  return defaultUtms
}

function getParams() {
  const params = new URLSearchParams(window.location.search)
  const paramsArray: Record<string, any> = {}
  for (let pair of params.entries()) {
    paramsArray[pair[0]] = pair[1]
  }
  return paramsArray
}

function getParameterByName(name: string, url?: string) {
  if (!url) {
    url = window.location.href
  }
  name = name.replace(/[\[\]]/g, "\\$&")
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ""
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}

function utmSourceTracking(url?: string, utmParams?: AnalyticsParams) {
  const cookie = new Cookies()
  let defaultUtms = getUTM()
  let utms = utmParams ? utmParams : defaultUtms
  if (cookie.get("outfund_analytics")) {
    utms = cookie.get("outfund_analytics")
  }
  for (let key in utms) {
    const value = getParameterByName(key, url)
    if (value) {
      utms[key! as keyof AnalyticsParams] = value
      setCookie("outfund_analytics", utms)
    }
  }
  return utms
}

function utmCookie() {
  const cookie = new Cookies()
  let defaultUtms = getUTM()
  if (cookie.get("outfund_analytics")) return cookie.get("outfund_analytics")
  return defaultUtms
}

function getRegionFromPath(regions: string[], path: string) {
  let region = "uk" // TODO: config default region
  if (regions.length > 0) {
    for (let i = 0; i < regions.length; i++) {
      if (path.indexOf(`/${regions[i]}`) > -1) {
        region = regions[i]
        break
      }
    }
  }
  return region
}

function getPageName(title: string, pageNames?: PageNames) {
  if (typeof window === "undefined") return
  const strArray = title.split("|")
  if (strArray.length > 1) {
    return strArray[0].trim()
  } else {
    return title
  }
}

function getPageInfo() {
  const path = document.location.pathname
  const url = document.location.href
  const utms = utmSourceTracking(url)
  const pageName = getPageName(document.title)
  const params = getParams()
  return {
    path,
    url,
    utms,
    pageName,
    params,
  }
}

enum CustomAttributes {
  elementType = "element-type",
  elementName = "element-name",
  elementState = "element-state",
  surfaceTitle = "data-surface-title",
  surfaceType = "data-surface-type",
}

function getSurfaceData(element: HTMLElement, surface: "type" | "title") {
  let surfaceData = element.getAttribute(`data-surface-${surface}`) || false
  if (surfaceData) return surfaceData
  const parent = element?.parentNode || false
  const parent2 = (parent && parent?.parentNode) || false
  const parent3 = (parent2 && parent2?.parentNode) || false
  const tree = [parent, parent2, parent3]

  for (let i = 0; i < tree.length; i++) {
    if (tree[i]) {
      const el = tree[i] as HTMLElement
      const hasSurfaceData = el.getAttribute("data-surface-type")
      if (hasSurfaceData) surfaceData = hasSurfaceData
      if (surfaceData) break
    }
  }
  return surfaceData ? surfaceData : ""
}

function getDataAttribute(attribute: string, element: HTMLElement) {
  const value = element.getAttribute(attribute)
  return value ? value : ""
}

function getAttributes(element: HTMLElement) {
  const attributes: Record<string, string> = {}
  for (let i = 0; i < element.attributes.length; i++) {
    const attr = element.attributes[i]
    attributes[attr.name] = attr.value
  }
  return {
    type: attributes.hasOwnProperty(CustomAttributes.elementType)
      ? attributes[CustomAttributes.elementType]
      : "undefined",
    name: attributes.hasOwnProperty(CustomAttributes.elementName)
      ? attributes[CustomAttributes.elementName]
      : "",
    surfaceTitle: attributes.hasOwnProperty(CustomAttributes.surfaceTitle)
      ? attributes[CustomAttributes.surfaceTitle]
      : getSurfaceData(element, "title"),
    surfaceType: attributes.hasOwnProperty(CustomAttributes.surfaceType)
      ? attributes[CustomAttributes.surfaceType]
      : getSurfaceData(element, "type"),
  }
}

function getElementProperties(element: HTMLElement) {
  const href = element.getAttribute("href") || ""
  const title = element.getAttribute("title") || ""
  const text = element.textContent || element.innerText || ""
  // const classList = element.classList.toString() || []
  let innerText = ""
  if (text.length > 0 && text.length > 40) {
    innerText = text.substring(0, 20)
  }
  if (!text && title) {
    innerText = title
  }
  return {
    href,
    title,
    text: innerText,
  }
}

function getInputProperties(element: HTMLElement) {
  const type = element.getAttribute("type") || undefined
  const value =
    type === "password" ? "[REDACTED]" : element.getAttribute("value") || ""
  const attr = getAttributes(element)
  return {
    type,
    name: attr.name || element.getAttribute("name") || "",
    value,
    field_name: element.getAttribute("name") || "",
    trait: getDataAttribute("data-trait", element) || false,
    surface_title: attr.surfaceTitle,
    surface_type: attr.surfaceType,
  }
}

function getInputLableValue(element: HTMLInputElement): string | false {
  const label = element.parentElement?.querySelector("label")
  if (label) {
    return label.textContent || label.innerText
  }
  return false
}

export {
  setCookie,
  getParameterByName,
  utmSourceTracking,
  utmCookie,
  getRegionFromPath,
  getPageName,
  getPageInfo,
  getParams,
  getDataAttribute,
  getAttributes,
  getSurfaceData,
  getElementProperties,
  getInputProperties,
  getInputLableValue,
}
