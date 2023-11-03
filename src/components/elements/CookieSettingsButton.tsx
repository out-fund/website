import React from "react"
import styled from "styled-components"
import { OpenCookiePreferences } from "../CookieConsentManager"

export default function CookieSettingsButton() {
  return (
    <OpenCookiePreferences>
      <Button>Open cookie preferences</Button>
    </OpenCookiePreferences>
  )
}

const Button = styled.span`
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
