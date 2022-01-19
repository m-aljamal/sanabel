import React from "react"
import Header from "./header"
import Typography from "../styles/Typography"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Footer from "./Footer"
import { LangProvider, useLang } from "../context/lang-context"
const Layout = ({ children, location }) => {
  return (
    <>
      <Typography />
      <LangProvider>
        <LangStyleChildren>
          <Header location={location} />
          {children}
          <Footer />
        </LangStyleChildren>
      </LangProvider>
    </>
  )
}

export default Layout

const LangStyleChildren = ({ children }) => {
  const [lang] = useLang()

  return (
    <main style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>{children}</main>
  )
}
