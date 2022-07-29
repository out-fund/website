const cookiesSettings = {
  outfund: {
    name: "Required",
    body: "These cookies are required for basic site functionality and are therefore always enabled.",
    software: [],
  },
  advertising: {
    name: "Social Media & Advertising",
    body: "Social media cookies offer the possibility for you to connect to your social networks and share content from our website through social media. Advertising cookies (from third parties) collect information to help better tailor advertising to your interests.",
    software: [],
  },
  marketingAndAnalytics: {
    name: "Analytics & Performance",
    body: "We use cookies to ensure you get the best experience on our website. By continuing to use our website, you agree to our use of cookies.",
    software: ["Google Analytics", "Google Tag Manager", "Mixpanel", "Segment"],
  },
  functional: {
    name: "Functional",
    body: "We use functional tracking to analyse how our website is being used. This data helps us to discover errors and develop new designs. It also allows us to test the effectiveness of our website. ",
    software: [],
  },
  modal: {
    heading: "Cookie Settings",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores amet delectus fugit corporis accusamus molestias ipsum aperiam exercitationem laboriosam dignissimos veniam hic debitis eius blanditiis dolor libero autem, iure vel.",
    alwaysOn: "Always on",
  },
}

export { cookiesSettings }
