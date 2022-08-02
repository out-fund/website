import React from "react"
import styled from "styled-components"

interface CookieModalProps {
  heading?: string
  body?: string
  children: React.ReactNode | React.ReactNode[]
}

export default function (props: CookieModalProps) {
  const defaultProps = {
    heading: "🍪 Cookie Policy",
    body: "We use cookies to ensure that we give you the best experience on our website. By continuing to use this site you are agreeing to our use of cookies.",
  }
  return (
    <>
      <Modal data-surface-type="Cookie Consent Banner">
        <ModalContainer>
          <ModalContent>
            <ModalHeading>{props.heading || defaultProps.heading}</ModalHeading>
            <ModalText>{props.body || defaultProps.body}</ModalText>
          </ModalContent>
          <ModalButtons>{props.children}</ModalButtons>
        </ModalContainer>
      </Modal>
    </>
  )
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #bbc7d654;
  z-index: 99999;
  -webkit-box-shadow: -1px -1px 4px 4px rgba(0, 0, 0, 0.18);
  box-shadow: -1px -1px 4px 4px rgba(0, 0, 0, 0.1);
`

const ModalContainer = styled.div`
  display: block;
  width: 790px;
  max-width: calc(100% - 20px);
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--gray100);
  padding: 2.4rem 2rem 1.4rem 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
`

const ModalContent = styled.div`
  width: 100%;
  max-width: 600px;
  color: var(--gray500);
`

const ModalButtons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }

`



const ModalHeading = styled.h3`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: inherit;
`

const ModalText = styled.p`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 2rem;
  color: inherit;
  line-height: 1.5;
`
