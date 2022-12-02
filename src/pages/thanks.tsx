import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GoBack from "../components/goback"

import { StaticImage } from "gatsby-plugin-image"

const Thanks = ({ data, location }) => {
  const siteTitle = "Thanks"

    return (
      <Layout location={location} title={siteTitle}>
        <Seo title={siteTitle} />

        <div style={{paddingTop:"40px", paddingBottom:"40px", textAlign:"center"}}>
          送信が完了しました。
          <div style={{width:"35%", marginLeft:"auto"}}>
            <StaticImage src="../images/thanks-pic.png" alt="thanks" />
          </div>
          <GoBack />
        </div>
      </Layout>

    )
}

export default Thanks