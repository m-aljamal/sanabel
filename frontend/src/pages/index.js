import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../components/homePage"
const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <HomePage />
    </Layout>
  )
}

export default IndexPage
