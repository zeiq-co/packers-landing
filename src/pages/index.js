import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CallToAction from "../components/cta"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Packers App"
      description="Welcome to Packrs"
    />
    <Hero />
    <CallToAction />
  </Layout>
)

export default IndexPage
