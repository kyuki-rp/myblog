import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import News from "../components/news"

import { StaticImage } from "gatsby-plugin-image"


const Home = ({ data, location }) => {
  const siteTitle = "Abouts"
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <h1 id="title">{siteTitle}</h1>
      <StaticImage src="../images/home-pic.jpg" alt="history" />
      
      <h2 style={{paddingTop:"3em"}}>最新記事</h2>
      <News />
      <div style={{textAlign:"right"}}>
        <Link to="/articles/" >{"記事一覧 >"}</Link>
      </div>

      <h2 style={{paddingTop:"3em"}}>プロフィール</h2>
      <Bio />
      <div style={{textAlign:"right"}}>
        <Link to="/profile/" >{"プロフィール詳細 >"}</Link>
      </div>

      <h2 style={{paddingTop:"3em"}}>サイト変遷</h2>
      <p>
        2021/10  middeniiサイトの設立(AWS Lightsail + WordPress)<br />
        2021/12  middeniiサイトの移設(GitHub Pages + GatsbyJS)<br />
        2022/12  middeniiサイトの更新、移設(Vercel + GatsbyJS)<br />
      </p>
      
    </Layout>
    
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { date: { ne: null } }}
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          title
          description
          category
          tags
        }
      }
    }
  }
`
