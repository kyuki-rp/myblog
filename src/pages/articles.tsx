import * as React from "react"
import { Link, graphql } from "gatsby"
import { Tab, Tabs } from "react-bootstrap";
import {useState, useEffect} from 'react';

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/postcard"


const Articles = ({ data, location }) => {
  const siteTitle = "記事一覧"
  const posts = data.allMarkdownRemark.nodes
  
  const [tabKey, setTabKey] = useState("すべての記事");

  function onChangeTab(k) {
    setTabKey(k);
  }

  let resultList = []
  {posts.map(post => {
    resultList.push(post.frontmatter.category)
  })}

  const categories = Array.from(new Set(resultList))

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />

      <h1 id="title">{siteTitle}</h1>
      <Tabs
        activeKey={tabKey}
        onSelect={(k) => onChangeTab(k)}
        style={{fontWeight:"bold", backgroundColor:"whitesmoke", opacity: "0.8", padding:"8px 0 0 0", marginBottom:"5px", borderRadius:"7px"}}>
        <Tab eventKey="すべての記事" title="すべての記事">
          {posts.map(post => {
            return (
              <div className="btn btn-light" style={{padding:"10px 0 10px 0", margin:"5px", width:"100%", textAlign:"left"}}>
                <PostCard post={post}/>
              </div>
            )
          })}
        </Tab>

        {categories.map(category => {
          return (
            <Tab eventKey={category} title={category} style={{margin:"0"}}>
              {posts.map(post => {
                if (post.frontmatter.category==category) {
                  return (
                    <div className="btn btn-light" style={{padding:"10px 0 10px 0", margin:"5px", width:"100%", textAlign:"left"}}>
                      <PostCard post={post}/>
                    </div>
                  )
                }
              })}
            </Tab>
          )
        })}
      </Tabs>
      
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
