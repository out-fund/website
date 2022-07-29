import React from "react"
import styled, { css } from "styled-components"

interface ToggleProps {
  value: boolean
  onChange?: (value: boolean) => void
  alwaysOn?: boolean
}

const Switch = (props: ToggleProps): JSX.Element => {
  const { value, onChange, alwaysOn } = props
  return (
    <Toggler>
      <label className={`switch ${alwaysOn && "required"}`}>
        <input
          type="checkbox"
          checked={value}
          onChange={() => onChange && onChange(!value)}
        />
        <span className="slider round"></span>
      </label>
    </Toggler>
  )
}

const Toggler = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    min-width: 60px;
    height: 30px;
    text-align: right;
    border-radius: 30px;
    input {
      cursor: pointer;
      opacity: 0;
    }
    &.required {
      pointer-events: none !important;
      input {
        pointer-events: none;
      }
    }
  }

  .toggle-text {
    z-index: 1;
    display: block;
    color: $black;
    font-size: 11px;
    white-space: nowrap;
  }

  .slider {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: gray;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.4s;
  }

  input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .slider:before {
    position: absolute;
    bottom: 3px;
    left: 2px;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 100px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    content: "";
  }
  input:checked + .slider {
    background-color: var(--actiton-primary);
    &:before {
      transform: translateX(30px);
    }
  }
`

export default Switch
