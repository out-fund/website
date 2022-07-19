// Config set ups

const config = {
  languages: ["en", "de", "es", "fr", "it", "ja", "ko", "pt", "ru", "zh"],
  pages: [
    {
      slug: "/",
      name: "Homepage",
    },
    {
      slug: "/about",
      name: "About us",
    },
  ],
  track: {
    elementClicked: {
      classes: ["js-track-element-clicked", "js-track-element-clicked-once"],
      dataAttributes: ["element-button", "track-element-clicked-once"],
    },
  },
}
//TODO: add options for tracking
const dataAttributes = {
  elementButton: "data-el-button",
  elementHyperlink: "data-el-hyperlink",
  elementImage: "data-el-image",
  elementVideo: "data-el-video", // data-element-state="false | true" video => played | paused
  elementAudio: "data-el-audio", // data-element-statedata-element-state
  elementForm: "data-el-form",
  elementTextInput: "data-el-textinput",
  elementTextarea: "data-el-textinput",
  elementCheckbox: "data-el-select",
  elementRadio: "data-el-select",
  elementSelect: "data-el-select",
  elementToggle: "data-el-toggle", // data-element-state="false | true"
}

const dispathCustomEvent = {}
const customEvent = {}

export default config
