import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ConsentManagerBuilder } from "@segment/consent-manager"
import { Switch } from "./index"
import Cookies from "js-cookie"
import { cookiesSettings as defaultCookiesSetting } from "../config/cookies"
import CookieModal from "./CookieModal"
import GatsbyLink from "gatsby-link"

export default function CookieManager(props: {
  force?: boolean
  cookiesSettings?: Record<string, any>
  heading?: string
  body?: string
}) {
  const [openPreferences, setOpenPreferences] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [forceClose, setForceClose] = useState(false)
  const cookiesSettings = props.cookiesSettings || defaultCookiesSetting
  const segmentID = "SbUYctfcULJBDClnkbSPOkPmfEPwexBU"
  const categoryMapping: Record<string, string> = {
    advertising: "Advertising",
    marketingAndAnalytics: "Analytics",
    functional: "Tag Managers",
  }
  const categories = Object.keys(categoryMapping)

  useEffect(() => {
    const hasCookie = Cookies.get("tracking-preferences") ? false : true
    setShowModal(hasCookie)

    if (window.location && window.location.pathname.indexOf("/legal/cookie-policy/") > -1) {
      setForceClose(true)
    }

  }, [])

  useEffect(() => {
    if (props.force) {
      setOpenPreferences(true)
    }
  }, [props.force])

  console.log(openPreferences)
  return (
    <ConsentManagerBuilder
      onError={(e) => console.error("Error Handling", e)}
      defaultDestinationBehavior="imply"
      writeKey={segmentID}
    >
      {({ destinations, preferences, setPreferences, saveConsent }) => {
        // set initial preferences
        if (!Cookies.get("tracking-preferences") && Object.keys(preferences).length === 0) {
          destinations.forEach((d: any) => {
            setPreferences({ [d.id]: true })
          })
          categories.forEach((c: any) => {
            setPreferences({ [c]: true })
          })
        }

        function checkCookiesDeclined() {
          if (typeof window === "undefined" || !("marketingAndAnalytics" in preferences)) return
          if (typeof window.analytics || !("load" in window.analytics)) return
          const { marketingAndAnalytics, functional, advertising } = preferences
          if (!marketingAndAnalytics) {
            window.analytics?.load(segmentID)
            return window.analytics?.track("Cookies Declined", {
              marketingAndAnalytics,
              functional,
              advertising,
            })
          } else {
            return window.analytics?.track("Cookie Settings Changed", {
              marketingAndAnalytics,
              functional,
              advertising,
            })
          }
        }

        function savePreferences(e: React.FormEvent) {
          e.preventDefault()
          checkCookiesDeclined()
          saveConsent()
          setTimeout(() => window.location.reload(), 800)
        }

        function acceptAll() {
          categories.forEach((c: any) => {
            setPreferences({ [c]: true })
          })
          destinations.forEach((d: any) => {
            setPreferences({ [d.id]: true })
          })
          saveConsent()
          setTimeout(() => window.location.reload(), 700)
        }

        const toggleCategory = (category: string) => {
          const value = !preferences[category]
          setPreferences({ [category]: value })
          for (const dest of destinations) {
            dest.category === categoryMapping[category] &&
              setPreferences({ [dest.id]: value })
          }
        }

        if (!showModal && !props.force || (forceClose && !props.force)) {
          return <></>
        }

        return (
          <>
            {!openPreferences && showModal && (
              <CookieModal>
                <Button onClick={() => acceptAll()} data-segment="click">
                  Accept
                </Button>
                <ButtonSecondary onClick={() => setOpenPreferences(true)}>
                  Manage settings
                </ButtonSecondary>
              </CookieModal>
            )}

            {openPreferences && (
              <ModalOverlay>
                <SettingsModal>

                  {props.heading || defaultCookiesSetting.modal.heading && (<h2>{props.heading || defaultCookiesSetting.modal.heading}</h2>)}
                  {props.body || defaultCookiesSetting.modal.body && (<p>{props.body && defaultCookiesSetting.modal.body}</p>)}
                  <form className="cookie-table" onSubmit={savePreferences}>
                    {
                      <div className="cookie-table-row">
                        <div className="cookie-table-toggle">
                          <Switch value={true} alwaysOn={true} />
                          <span className="small">Always on</span>
                        </div>
                        <div className="cookie-table-cell">
                          <h5>{cookiesSettings.outfund.name}</h5>
                          <p>{cookiesSettings.outfund.body}</p>
                        </div>
                      </div>
                    }
                    {categories.map((cat) => {
                      if (!cookiesSettings[cat])
                        return (
                          <span key={cat} style={{ display: "none" }}></span>
                        )
                      let cookie = cookiesSettings[cat]
                      return (
                        <div className="cookie-table-row">
                          <div className="cookie-table-toggle">
                            <Switch
                              value={!!preferences[cat]}
                              onChange={() => toggleCategory(cat)}
                            />
                          </div>
                          <div className="cookie-table-cell">
                            <h5>{cookie.name}</h5>
                            <p>{cookie.body}</p>
                          </div>
                        </div>
                      )
                    })}
                    <div className="button-wrapper">

                      <FormButton
                        type="button"
                        onClick={() => {
                          setOpenPreferences(false)
                          if (props.force) {
                            window.location.reload();
                          }
                        }}
                        data-segment="click"
                      >
                        Cancel
                      </FormButton>

                      <FormButton type="submit" data-segment="click">
                        Accept
                      </FormButton>
                      <div style={{ paddingTop: 16, fontSize: 15 }}>
                        <GatsbyLink to="/legal/cookie-policy/">More about the cookies we use</GatsbyLink>
                      </div>
                    </div>

                  </form>
                </SettingsModal>
              </ModalOverlay>
            )}
          </>
        )
      }
      }
    </ConsentManagerBuilder>
  )
}

export const OpenCookiePreferences = (props: { children: any }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <span
        className="cookie-modal-"
        aria-modal
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.children}
      </span>
      <CookieManager force={isOpen} />
    </>
  )
}

const FormButton = styled.button`
  display: inline-block;
  transition: background-color 0.1s ease-in-out;
  font-weight: 600;
  font-size: 16px;
  padding: 0.7em 1.6em;
  border-radius: 26px;
  text-align: center;
  color: ${(props) => (props.type === "submit" ? "white" : "black")};
  background-color: ${(props) =>
    props.type === "submit" ? "var(--actiton-primary)" : "var(--gray100)"};
  max-width: 220px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
  outline: none;
  border: none;
  margin: 0px 8px 15px;
`

const Button = styled.a`
  display: block;
  transition: background-color 0.1s ease-in-out;
  font-weight: 600;
  font-size: 16px;
  padding: 0.9em 1.9em;
  border-radius: 26px;
  text-align: center;
  color: #fff;
  background-color: var(--actiton-primary);
  max-width: 360px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
`

const ButtonSecondary = styled.a`
  display: block;
  transition: background-color 0.1s ease-in-out;
  font-weight: 600;
  font-size: 16px;
  padding: 0.9em 1.9em;
  border-radius: 26px;
  text-align: center;
  color: var(--gray500);
  background-color: transparent;
  max-width: 360px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  pointer-events: none;
  z-index: 999;
`

const SettingsModal = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0%);
  min-height: 400px;
  padding: 20px 20px 40px;
  background: white;
  width: 640px;
  max-width: 100%;
  z-index: 9999;
  border-radius: 5px;
  max-height: calc(100vh - 20px);
  overflow-y: scroll;
  overflow-x: hidden;
  pointer-events: all;
  .button-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  h2 {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 25px;
  }
  p {
    font-size: 15px;
    line-height: 1.4;
  }
  .cookie-table {
    margin-top: 20px;
  }

  .small {
    font-size: 11px;
  }

  .cookie-table-row {
    display: flex;
    margin-bottom: 30px;
    padding: 20px 0px 10px;
    border-top: 1px solid;
    border-top: 1px solid var(--gray100);
    .cookie-table-toggle {
      min-width: 120px;
    }
    .cookie-table-cell {
      width: 80%;
      color: var(--gray500);
      h5 {
        margin: 0 0 5px; 
        font-weight: bold;
        font-size: 18px;
      }
      p {
        font-size: 15px;
        line-height: 1.3;
      }
    }
  }
`
