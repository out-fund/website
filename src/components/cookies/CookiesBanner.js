import React from "react"
import CookieConsent from "react-cookie-consent"

const CookiesBanner = () => {
  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#2B373B",
    fontSize: "14px",
  }

  return (
    <CookieConsent enableDeclineButton flipButtons
      debug={false} // turn this to true to keep it fixed on page whilst debugging
      location="bottom"
      style={{ background: "#2B373B", textAlign: "center" }}
      buttonStyle={buttonStyle}
      buttonText="Accept"
      expires={365} // cookie expiry in days
      declineButtonStyle={buttonStyle}
      declineButtonText="Reject"
    >
      This website uses <a href="/legal/cookie-policy" target={"_blank"} style={{ color: "#fff" }}>cookies</a> 🍪 to ensure you get the best experience on our website.

    </CookieConsent>
  )
};

export default CookiesBanner;
