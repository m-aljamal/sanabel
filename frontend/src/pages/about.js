import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutPage from "../components/aboutPage"
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" lang="ar" />
    <AboutPage lang="ar" />
  </Layout>
)

export default IndexPage
