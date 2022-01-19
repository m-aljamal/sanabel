import React, { useState, useContext, createContext } from "react"
const LangContext = createContext(null)

export const LangProvider = props => {
  const [lang, setLang] = useState("ar")
  const value = [lang, setLang]
  return <LangContext.Provider value={value} {...props} />
}

export const useLang = () => {
  const context = useContext(LangContext)
  if (context === undefined) {
    throw new Error(`useLang must be used within a LangProvider`)
  }
  return context
}
