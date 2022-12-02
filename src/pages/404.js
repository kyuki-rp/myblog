import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import GoBack from "../components/goback"



const NotFoundPage = ({ data, location }) => {
  const siteTitle = "404: Not Found"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <StaticImage src="../images/404error.jpg" alt="404error" />
      <div style={{marginTop:"1rem", textAlign:"center"}}>
        <GoBack />
      </div>
      
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
