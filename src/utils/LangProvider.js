import React, { useContext } from "react"

const LangContext = React.createContext()

export function useLangProvider() {
  return useContext(LangContext)
}

export function LangProvider({ children, langKey }) {
  return <LangContext.Provider value={langKey}>{children}</LangContext.Provider>
}
