import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/postcard"


const Articles = ({ data, location }) => {
  const siteTitle = "記事一覧"
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <h1 id="title">{siteTitle}</h1>
      
      {posts.map(post => {
        return (
          <div className="btn btn-light" style={{padding:"10px 0 10px 0", margin:"5px", width:"100%", textAlign:"left"}}>
            <PostCard post={post}/>
          </div>
        )
      })}

    </Layout>
    
  )
}

export default Articles


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
