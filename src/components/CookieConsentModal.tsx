import React from 'react'
import { ConsentManagerBuilder } from '@segment/consent-manager'
import inEU from '@segment/in-eu'
import { Link } from 'gatsby'
import styled from "styled-components"

export default function () {
  const bannerContent = (
    <span>
      We use cookies (and other similar technologies) to collect data to improve your experience on
      our site. By using our website, you’re agreeing to the collection of data as described in our{' '}
      <Link to='/legal/cookie-policy/'>Cookie Policy</Link>
      .
    </span>
  )

  return (
    <Modal data-surface-type="Cookie Consent Banner">
      <ModalHeading>Cookie Policy</ModalHeading>


    </Modal>
  )
}

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* max-width: calc(100% - 5rem); */
  /* background-color: #fff; */
  background-color: var(--gray100);
  padding: 2rem;
  z-index: 99999;
  -webkit-box-shadow: -1px -1px 4px 4px rgba(0,0,0,0.18); 
  box-shadow: -1px -1px 4px 4px rgba(0,0,0,0.10);
`

export const ModalHeading = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: inherit;


`